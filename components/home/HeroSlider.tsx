"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { images } from "@/lib/content/images";

const slideImages = [
  images.hero.slide1,
  images.hero.slide2,
  images.hero.slide3,
  images.hero.slide4,
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const { t } = useLanguage();
  const slides = t.hero.slides;

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(index);
      setTimeout(() => setAnimating(false), 600);
    },
    [animating]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo, slides.length]);
  const prev = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length),
    [current, goTo, slides.length]
  );

  // Auto-advance every 6s
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background images */}
      {slideImages.map((img, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            i === current ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={img}
            alt={slides[i]?.tagline ?? ""}
            fill
            priority={i === 0}
            className={cn(
              "object-cover",
              i === current ? "hero-scale" : ""
            )}
            key={`${i}-${i === current}`}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-soil/80 via-soil/50 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full">
          <div key={current} className="max-w-2xl">
            {/* Pre-title */}
            <p className="font-montserrat text-harvest text-xs uppercase tracking-[0.3em] mb-4 fade-in">
              {t.hero.pretitle}
            </p>

            {/* Main title */}
            <h1 className="font-playfair font-black text-cream leading-[1.05] mb-4">
              <span
                className="block fade-up"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 6rem)",
                  animationDelay: "0.1s",
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                {slide.tagline}
              </span>
              <span
                className="block text-harvest fade-up"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 6rem)",
                  animationDelay: "0.25s",
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                {slide.tagline2}
              </span>
            </h1>

            {/* Sub */}
            <p
              className="font-raleway text-cream/80 text-base md:text-lg leading-relaxed mb-8 fade-up"
              style={{
                animationDelay: "0.4s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              {slide.sub}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 fade-up"
              style={{
                animationDelay: "0.55s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              <Button href="/portfolio" size="lg">
                {t.hero.cta1}
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                {t.hero.cta2}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-0.5 transition-all duration-500 rounded-full",
              i === current ? "w-8 bg-harvest" : "w-4 bg-cream/40 hover:bg-cream/60"
            )}
          />
        ))}
      </div>

      {/* Arrow navigation */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-cream/30 flex items-center justify-center text-cream hover:border-harvest hover:text-harvest transition-all duration-200"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-cream/30 flex items-center justify-center text-cream hover:border-harvest hover:text-harvest transition-all duration-200"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-8 z-10 font-montserrat text-cream/40 text-xs tracking-widest">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}
