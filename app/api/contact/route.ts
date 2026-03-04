import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  phone?: string;
  email: string;
  projectType?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json();

    // Basic validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // TODO: Integrate email service (Nodemailer, Resend, SendGrid) or save to DB
    // For now, log the submission
    console.log("Contact form submission:", {
      name: body.name,
      email: body.email,
      phone: body.phone ?? "N/A",
      projectType: body.projectType ?? "N/A",
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
