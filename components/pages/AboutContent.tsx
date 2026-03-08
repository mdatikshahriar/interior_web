"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { images } from "@/lib/content/images";

export default function AboutContent() {
  const { t } = useLanguage();
  const p = t.pages.about;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[320px] flex items-end overflow-hidden">
        <Image
          src={images.about.pageHero}
          alt="About Afrad Corporation"
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

      {/* Brand story */}
      <section className="py-20 md:py-28 bg-cream dark:bg-soil">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair font-bold text-soil dark:text-cream text-3xl md:text-4xl mb-6">
                {p.storyHeading}
              </h2>
              {p.story.map((para, i) => (
                <p key={i} className="font-raleway text-stone text-base leading-relaxed mb-4">
                  {para}
                </p>
              ))}
              <div className="mt-4">
                <Button href="/contact">{p.storyCta}</Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src={images.about.pageStory}
                alt="Afrad Corporation Studio"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-linen dark:bg-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="text-center mb-14">
            <p className="font-montserrat text-harvest text-xs uppercase tracking-[0.3em] mb-3">
              {p.timelinePretitle}
            </p>
            <h2 className="font-playfair font-bold text-soil dark:text-cream text-4xl md:text-5xl">
              {p.timelineHeading}
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-harvest/20 hidden md:block" />
            <div className="space-y-8">
              {p.timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="inline-block bg-harvest text-soil font-montserrat font-bold text-sm px-4 py-1 mb-2">
                      {item.year}
                    </div>
                    <p className="font-raleway text-soil dark:text-cream text-base">
                      {item.event}
                    </p>
                  </div>
                  <div className="hidden md:flex w-0 justify-center relative">
                    <div className="w-5 h-5 rounded-full bg-harvest absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                      <ChevronRight size={12} className="text-soil" />
                    </div>
                  </div>
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-cream dark:bg-soil">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="text-center mb-14">
            <p className="font-montserrat text-harvest text-xs uppercase tracking-[0.3em] mb-3">
              {p.teamPretitle}
            </p>
            <h2 className="font-playfair font-bold text-soil dark:text-cream text-4xl md:text-5xl">
              {p.teamHeading}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {p.team.map((member, i) => {
              const teamImages = [
                images.team.afradRahman,
                images.team.saraHossain,
                images.team.karimUllah,
                images.team.nadiaIslam,
              ];
              return (
                <div key={member.name} className="group text-center">
                  <div className="relative h-72 overflow-hidden mb-5">
                    <Image
                      src={teamImages[i]}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-playfair font-bold text-soil dark:text-cream text-xl mb-1">
                    {member.name}
                  </h3>
                  <p className="font-montserrat text-harvest text-xs uppercase tracking-wider mb-3">
                    {member.role}
                  </p>
                  <p className="font-raleway text-stone text-sm leading-relaxed">{member.bio}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
