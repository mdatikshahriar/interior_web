"use client";

import Image from "next/image";
import ContactCTA from "@/components/home/ContactCTA";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { images } from "@/lib/content/images";
import { links } from "@/lib/content/links";

export default function ContactContent() {
  const { t } = useLanguage();
  const p = t.pages.contact;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] flex items-end overflow-hidden">
        <Image
          src={images.contact.pageHero}
          alt="Contact Afrad Corporation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soil via-soil/60 to-transparent" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 pb-14 w-full">
          <p className="font-montserrat text-harvest text-xs uppercase tracking-[0.3em] mb-3">
            {p.heroPretitle}
          </p>
          <h1 className="font-playfair font-black text-cream text-4xl md:text-6xl">
            {p.heroHeading}
          </h1>
        </div>
      </section>

      {/* Contact form */}
      <ContactCTA />

      {/* Map embed */}
      <section className="h-80 md:h-[450px] bg-linen dark:bg-[#1a1a1a] relative overflow-hidden">
        <iframe
          src={links.map.embedUrl}
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
