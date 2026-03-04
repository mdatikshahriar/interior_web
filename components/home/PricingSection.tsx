"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type PricingType = "residential" | "commercial";

const plans = {
  residential: [
    {
      name: "Essential",
      price: "৳ 45,000",
      unit: "/ room",
      tagline: "Perfect for single rooms or small apartments",
      features: [
        "Initial consultation (2hrs)",
        "Mood board & concept",
        "2D floor plan",
        "Material recommendations",
        "1 revision round",
      ],
      highlighted: false,
    },
    {
      name: "Signature",
      price: "৳ 95,000",
      unit: "/ room",
      tagline: "Our most popular residential package",
      features: [
        "Everything in Essential",
        "3D visualization renders",
        "Custom furniture design",
        "Procurement support",
        "3 revision rounds",
        "Site supervision (4 visits)",
      ],
      highlighted: true,
    },
    {
      name: "Bespoke",
      price: "Custom",
      unit: "",
      tagline: "Full-home transformation with dedicated team",
      features: [
        "Everything in Signature",
        "Dedicated project manager",
        "Unlimited revisions",
        "Full procurement",
        "Weekly site supervision",
        "1-year after-service support",
      ],
      highlighted: false,
    },
  ],
  commercial: [
    {
      name: "Essential",
      price: "৳ 120,000",
      unit: "/ project",
      tagline: "Ideal for small offices up to 1,000 sq ft",
      features: [
        "Space planning",
        "Concept presentation",
        "2D layout drawings",
        "Material board",
        "2 revision rounds",
      ],
      highlighted: false,
    },
    {
      name: "Signature",
      price: "৳ 280,000",
      unit: "/ project",
      tagline: "Comprehensive package for mid-size spaces",
      features: [
        "Everything in Essential",
        "3D walkthrough renders",
        "MEP coordination",
        "Vendor management",
        "4 revision rounds",
        "Bi-weekly site visits",
      ],
      highlighted: true,
    },
    {
      name: "Bespoke",
      price: "Custom",
      unit: "",
      tagline: "Enterprise-level design for large projects",
      features: [
        "Everything in Signature",
        "Dedicated design team",
        "Brand identity integration",
        "Full project management",
        "Unlimited revisions",
        "Turnkey delivery",
      ],
      highlighted: false,
    },
  ],
};

export default function PricingSection() {
  const [type, setType] = useState<PricingType>("residential");

  return (
    <section className="py-20 md:py-28 bg-cream dark:bg-soil">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-montserrat text-harvest text-xs uppercase tracking-[0.3em] mb-3">
            Transparent Pricing
          </p>
          <h2 className="font-playfair font-bold text-soil dark:text-cream text-4xl md:text-5xl mb-6">
            Our Packages
          </h2>

          {/* Toggle */}
          <div className="inline-flex border border-harvest/30 overflow-hidden">
            {(["residential", "commercial"] as PricingType[]).map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={cn(
                  "font-montserrat text-xs uppercase tracking-widest px-6 py-2.5 transition-all duration-200",
                  type === t
                    ? "bg-harvest text-soil"
                    : "text-stone hover:text-harvest"
                )}
              >
                {t}
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
                <div className="ribbon font-montserrat">Most Popular</div>
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
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
