"use client";

import { useEffect, useRef, useState } from "react";
import { Leaf, Sparkles, Palette, Handshake, ShieldCheck, Trophy, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const valueIcons: LucideIcon[] = [Leaf, Sparkles, Palette, Handshake, ShieldCheck, Trophy];

export default function CoreValues() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-28 bg-linen dark:bg-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-montserrat text-harvest text-xs uppercase tracking-[0.3em] mb-3">
            {t.coreValues.pretitle}
          </p>
          <h2 className="font-playfair font-bold text-soil dark:text-cream text-4xl md:text-5xl">
            {t.coreValues.heading}
          </h2>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.coreValues.items.map((value, i) => {
            const Icon = valueIcons[i];
            return (
            <div
              key={value.title}
              className={`group bg-cream dark:bg-soil p-8 border border-harvest/10 hover:border-harvest transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-5 text-harvest"><Icon size={32} /></div>
              <h3 className="font-playfair font-bold text-xl text-soil dark:text-cream mb-3 group-hover:text-harvest transition-colors">
                {value.title}
              </h3>
              <p className="font-raleway text-sm text-stone leading-relaxed">
                {value.description}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
