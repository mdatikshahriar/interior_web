"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactCTA() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Trim all fields before sending
    const payload = {
      name:        form.name.trim(),
      phone:       form.phone.trim(),
      email:       form.email.trim(),
      projectType: form.projectType,
      message:     form.message.trim(),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", projectType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-soil border border-cream/10 text-cream placeholder-cream/30 font-raleway text-sm px-4 py-3 focus:outline-none focus:border-harvest transition-colors";

  return (
    <section className="py-20 md:py-28 bg-soil">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: info */}
          <div>
            <p className="font-montserrat text-harvest text-xs uppercase tracking-[0.3em] mb-3">
              Get In Touch
            </p>
            <h2 className="font-playfair font-bold text-cream text-4xl md:text-5xl mb-6">
              Let&apos;s Create Something Extraordinary
            </h2>
            <p className="font-raleway text-cream/60 text-base leading-relaxed mb-10">
              Ready to transform your space? Tell us about your project and
              we&apos;ll be in touch within 24 hours.
            </p>

            <div className="space-y-5">
              {[
                { icon: MapPin, label: "Address", value: "House 12, Road 4, Gulshan-1, Dhaka" },
                { icon: Phone, label: "Phone", value: "+880 1XXX-XXXXXX" },
                { icon: Mail, label: "Email", value: "hello@afradcorporation.com" },
                { icon: Clock, label: "Hours", value: "Sat–Thu, 9am – 7pm" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <item.icon size={20} className="text-harvest mt-0.5 shrink-0" />
                  <div>
                    <p className="font-montserrat text-[11px] uppercase tracking-widest text-harvest mb-0.5">
                      {item.label}
                    </p>
                    <p className="font-raleway text-cream/70 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div>
            {status === "success" ? (
              <div className="h-full flex items-center justify-center border border-harvest/20 p-10 text-center">
                <div>
                  <CheckCircle size={56} className="text-harvest mx-auto mb-4" />
                  <h3 className="font-playfair text-2xl text-harvest mb-2">
                    Message Received!
                  </h3>
                  <p className="font-raleway text-cream/60 text-sm">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 font-montserrat text-xs uppercase tracking-widest text-harvest hover:text-cream transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
                <select
                  value={form.projectType}
                  onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                  className={inputClass + " appearance-none cursor-pointer"}
                >
                  <option value="">Select Project Type</option>
                  <option value="residential">Residential Design</option>
                  <option value="commercial">Commercial Spaces</option>
                  <option value="hospitality">Hospitality Interiors</option>
                  <option value="farm-nature">Farm & Nature</option>
                  <option value="renovation">Renovation</option>
                  <option value="consultation">Consultation</option>
                </select>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={inputClass + " resize-none"}
                />
                {status === "error" && (
                  <p className="font-raleway text-sm text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}
                <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
                  {status === "loading" ? "Sending…" : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
