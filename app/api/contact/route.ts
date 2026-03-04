import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ── Rate limiting (in-memory, per serverless instance) ────────────────────────
// For multi-instance production, replace with Upstash Redis.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;          // max requests
const RATE_WINDOW_MS = 60_000; // per 60 seconds

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;

  entry.count++;
  return false;
}

// ── Allowed project types whitelist ───────────────────────────────────────────
const ALLOWED_PROJECT_TYPES = new Set([
  "residential",
  "commercial",
  "hospitality",
  "farm-nature",
  "renovation",
  "consultation",
  "",
]);

// ── Input field limits ────────────────────────────────────────────────────────
const LIMITS = {
  name: 100,
  email: 254,
  phone: 20,
  message: 2000,
};

// ── Email regex (RFC 5321 compliant enough for production) ────────────────────
const EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;

// ── Sanitize: strip HTML tags ─────────────────────────────────────────────────
function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

export async function POST(request: NextRequest) {
  // ── Rate limit check ───────────────────────────────────────────────────────
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute and try again." },
      { status: 429 }
    );
  }

  // ── Parse body ─────────────────────────────────────────────────────────────
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name        = sanitize(String(body.name        ?? ""));
  const email       = sanitize(String(body.email       ?? ""));
  const phone       = sanitize(String(body.phone       ?? ""));
  const projectType = sanitize(String(body.projectType ?? ""));
  const message     = sanitize(String(body.message     ?? ""));

  // ── Validate required fields ───────────────────────────────────────────────
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  // ── Length limits ──────────────────────────────────────────────────────────
  if (name.length    > LIMITS.name)    return NextResponse.json({ error: `Name must be under ${LIMITS.name} characters.`    }, { status: 400 });
  if (email.length   > LIMITS.email)   return NextResponse.json({ error: `Email must be under ${LIMITS.email} characters.`  }, { status: 400 });
  if (phone.length   > LIMITS.phone)   return NextResponse.json({ error: `Phone must be under ${LIMITS.phone} characters.`  }, { status: 400 });
  if (message.length > LIMITS.message) return NextResponse.json({ error: `Message must be under ${LIMITS.message} characters.` }, { status: 400 });

  // ── Email format ───────────────────────────────────────────────────────────
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  // ── Project type whitelist ─────────────────────────────────────────────────
  if (!ALLOWED_PROJECT_TYPES.has(projectType)) {
    return NextResponse.json({ error: "Invalid project type." }, { status: 400 });
  }

  // ── Send email via Resend ──────────────────────────────────────────────────
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_RECEIVER_EMAIL ?? "hello@afradcorporation.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "noreply@afradcorporation.com";

  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: `Afrad Corporation <${fromEmail}>`,
        to: [toEmail],
        replyTo: email,
        subject: `New enquiry from ${name}${projectType ? ` — ${projectType}` : ""}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone || "N/A"}`,
          `Project Type: ${projectType || "N/A"}`,
          ``,
          `Message:`,
          message,
        ].join("\n"),
      });
    } catch (err) {
      console.error("[contact] Resend error:", err);
      // Don't expose the error detail to the client
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }
  } else {
    // Dev fallback — log to console when RESEND_API_KEY is not set
    console.log("[contact] New submission (no email key set):", {
      name, email, phone: phone || "N/A", projectType: projectType || "N/A", message,
    });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
