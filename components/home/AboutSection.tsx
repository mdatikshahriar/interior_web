"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FolderOpen, Users, Clock, Award, type LucideIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { images } from "@/lib/content/images";

const statIcons: LucideIcon[] = [FolderOpen, Users, Clock, Award];

function CountUp({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream dark:bg-soil">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div
            className={`relative transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative h-[400px] md:h-[520px] overflow-hidden">
              <Image
                src={images.about.sectionMain}
                alt="Afrad Corporation Design Studio"
                fill
                className="object-cover"
              />
            </div>
            {/* Established badge */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-harvest flex flex-col items-center justify-center text-soil">
              <span className="font-montserrat text-[10px] uppercase tracking-wider">Est.</span>
              <span className="font-playfair font-black text-2xl">2010</span>
            </div>
          </div>

          {/* Text side */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <p className="font-montserrat text-harvest text-xs uppercase tracking-[0.3em] mb-3">
              {t.about.pretitle}
            </p>
            <h2 className="font-playfair font-bold text-soil dark:text-cream text-4xl md:text-5xl leading-tight mb-6">
              {t.about.heading.replace(t.about.heading2, "")} <br />
              <span className="text-harvest">{t.about.heading2}</span>
            </h2>
            <p className="font-raleway text-stone dark:text-stone text-base leading-relaxed mb-4">
              {t.about.para1}
            </p>
            <p className="font-raleway text-stone dark:text-stone text-base leading-relaxed mb-8">
              {t.about.para2}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {t.about.stats.map((stat, i) => {
                const Icon = statIcons[i];
                return (
                  <div key={stat.label}>
                    <Icon size={22} className="text-harvest mb-2" />
                    <p className="font-playfair font-black text-3xl text-harvest mb-1">
                      <CountUp target={stat.value} suffix={stat.suffix} active={visible} />
                    </p>
                    <p className="font-montserrat text-[11px] uppercase tracking-wider text-stone">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <Button href="/about">{t.about.cta}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
