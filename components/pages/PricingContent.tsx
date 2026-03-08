"use client";

import Image from "next/image";
import PricingSection from "@/components/home/PricingSection";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { images } from "@/lib/content/images";

export default function PricingContent() {
  const { t } = useLanguage();
  const p = t.pages.pricing;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] flex items-end overflow-hidden">
        <Image
          src={images.pricing.pageHero}
          alt="Afrad Corporation Pricing"
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

      {/* Pricing tables */}
      <PricingSection />

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-linen dark:bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <p className="font-montserrat text-harvest text-xs uppercase tracking-[0.3em] mb-3">
              {p.faqPretitle}
            </p>
            <h2 className="font-playfair font-bold text-soil dark:text-cream text-4xl md:text-5xl">
              {p.faqHeading}
            </h2>
          </div>
          <div className="space-y-6">
            {p.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border border-harvest/20 bg-cream dark:bg-soil"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-playfair font-bold text-soil dark:text-cream text-lg list-none">
                  {faq.q}
                  <span className="ml-4 text-harvest text-xl transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 font-raleway text-stone text-base leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="font-raleway text-stone mb-5">{p.stillHave}</p>
            <Button href="/contact">{p.talkCta}</Button>
          </div>
        </div>
      </section>
    </>
  );
}
