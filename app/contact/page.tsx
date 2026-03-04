import type { Metadata } from "next";
import Image from "next/image";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Afrad Corporation. Start your interior design project today. Located in Gulshan, Dhaka, Bangladesh.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80"
          alt="Contact Afrad Corporation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soil via-soil/60 to-transparent" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 pb-14 w-full">
          <p className="font-montserrat text-harvest text-xs uppercase tracking-[0.3em] mb-3">
            Reach Out
          </p>
          <h1 className="font-playfair font-black text-cream text-4xl md:text-6xl">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact form */}
      <ContactCTA />

      {/* Map embed */}
      <section className="h-80 md:h-[450px] bg-linen dark:bg-[#1a1a1a] relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5757506584074!2d90.41440931536267!3d23.793521093478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7715a40c603%3A0xec01cd72e9a8e5e3!2sGulshan%201%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1683000000000!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Afrad Corporation Location"
          className="grayscale opacity-80"
        />
      </section>
    </>
  );
}
