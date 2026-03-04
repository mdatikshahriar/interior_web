import type { Metadata } from "next";
import PricingSection from "@/components/home/PricingSection";
import Button from "@/components/ui/Button";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for Afrad Corporation's interior design services. Choose from Essential, Signature, or Bespoke packages.",
};

const faqs = [
  {
    q: "What's included in the initial consultation?",
    a: "A 2-hour session where we understand your vision, assess the space, discuss budget, and outline the design direction.",
  },
  {
    q: "How long does a typical project take?",
    a: "Residential projects typically take 8–16 weeks. Commercial projects range from 12–24 weeks depending on scope.",
  },
  {
    q: "Do you handle procurement and vendors?",
    a: "Yes — Signature and Bespoke packages include full procurement support. We work with trusted local and international suppliers.",
  },
  {
    q: "Can I customize a package?",
    a: "Absolutely. Contact us and we'll build a tailored proposal that fits your exact requirements and budget.",
  },
  {
    q: "Is there a payment plan?",
    a: "Yes. We offer milestone-based payment structures: 30% upfront, 40% at mid-project, 30% upon completion.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80"
          alt="Afrad Corporation Pricing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soil via-soil/60 to-transparent" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 pb-14 w-full">
          <p className="font-montserrat text-harvest text-xs uppercase tracking-[0.3em] mb-3">
            Investment
          </p>
          <h1 className="font-playfair font-black text-cream text-4xl md:text-6xl">
            Our Pricing
          </h1>
        </div>
      </section>

      {/* Pricing tables */}
      <PricingSection />

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-linen dark:bg-[#3d2a1a]">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <p className="font-montserrat text-harvest text-xs uppercase tracking-[0.3em] mb-3">
              Questions
            </p>
            <h2 className="font-playfair font-bold text-soil dark:text-cream text-4xl md:text-5xl">
              FAQ
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
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
            <p className="font-raleway text-stone mb-5">Still have questions?</p>
            <Button href="/contact">Talk to Our Team</Button>
          </div>
        </div>
      </section>
    </>
  );
}
