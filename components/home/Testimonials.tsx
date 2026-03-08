"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { testimonialsMeta } from "@/lib/data/testimonials";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  // Merge avatar/rating (structural) with translated text
  const testimonials = testimonialsMeta.map((m) => ({
    ...m,
    ...t.testimonials.items.find((i) => i.id === m.id)!,
  }));

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused, testimonials.length]);

  return (
    <section
      className="py-20 md:py-28 bg-soil"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-montserrat text-harvest text-xs uppercase tracking-[0.3em] mb-3">
            {t.testimonials.pretitle}
          </p>
          <h2 className="font-playfair font-bold text-cream text-4xl md:text-5xl">
            {t.testimonials.heading}
          </h2>
        </div>

        {/* Slider */}
        <div ref={ref} className="max-w-3xl mx-auto text-center">
          <div className="relative min-h-[260px]">
            {testimonials.map((item, i) => (
              <div
                key={item.id}
                className={cn(
                  "absolute inset-0 transition-all duration-500 flex flex-col items-center justify-center",
                  i === current
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-4 pointer-events-none"
                )}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-harvest fill-harvest" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-playfair text-lg md:text-xl text-cream/90 leading-relaxed italic mb-8">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                {/* Avatar + info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-harvest">
                    <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="text-left">
                    <p className="font-montserrat text-sm font-semibold text-harvest">
                      {item.name}
                    </p>
                    <p className="font-raleway text-xs text-cream/50">
                      {item.designation}, {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  i === current ? "bg-harvest w-6" : "bg-cream/20 hover:bg-cream/40"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
