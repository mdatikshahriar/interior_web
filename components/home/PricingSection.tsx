"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type PricingType = "residential" | "commercial";

export default function PricingSection() {
  const [type, setType] = useState<PricingType>("residential");
  const { t } = useLanguage();
  const plans = t.pricing.plans;

  return (
    <section className="py-20 md:py-28 bg-cream dark:bg-soil">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-montserrat text-harvest text-xs uppercase tracking-[0.3em] mb-3">
            {t.pricing.pretitle}
          </p>
          <h2 className="font-playfair font-bold text-soil dark:text-cream text-4xl md:text-5xl mb-6">
            {t.pricing.heading}
          </h2>

          {/* Toggle */}
          <div className="inline-flex border border-harvest/30 overflow-hidden">
            {([
              { key: "residential" as PricingType, label: t.pricing.residential },
              { key: "commercial"  as PricingType, label: t.pricing.commercial  },
            ]).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setType(key)}
                className={cn(
                  "font-montserrat text-xs uppercase tracking-widest px-6 py-2.5 transition-all duration-200",
                  type === key
                    ? "bg-harvest text-soil"
                    : "text-stone hover:text-harvest"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans[type].map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative border flex flex-col",
                plan.highlighted
                  ? "border-harvest bg-harvest/5 dark:bg-harvest/10 shadow-xl"
                  : "border-harvest/20 bg-white dark:bg-[#1a1a1a]"
              )}
            >
              {/* Ribbon */}
              {plan.highlighted && (
                <div className="ribbon font-montserrat">{t.pricing.mostPopular}</div>
              )}

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-playfair font-bold text-2xl text-soil dark:text-cream mb-1">
                  {plan.name}
                </h3>
                <p className="font-raleway text-stone text-sm mb-4">{plan.tagline}</p>

                <div className="mb-6">
                  <span className="font-playfair font-black text-4xl text-harvest">
                    {plan.price}
                  </span>
                  {plan.unit && (
                    <span className="font-raleway text-stone text-sm ml-1">{plan.unit}</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 font-raleway text-sm text-stone dark:text-stone"
                    >
                      <Check size={14} className="text-harvest mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  variant={plan.highlighted ? "primary" : "outline"}
                  className="w-full"
                >
                  {t.pricing.getStarted}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
