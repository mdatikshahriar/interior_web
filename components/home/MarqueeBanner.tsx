"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function MarqueeBanner() {
  const { t } = useLanguage();
  const doubled = [...t.marquee.items, ...t.marquee.items];

  return (
    <section className="bg-soil py-4 overflow-hidden">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 mx-6 font-montserrat text-xs uppercase tracking-[0.2em] whitespace-nowrap"
          >
            <span className="text-harvest">{item}</span>
            <span className="text-harvest/40">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
