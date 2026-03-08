"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Tag, MapPin, Calendar, Ruler, User } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data/projects";
import { formatCategory } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface Props {
  slug: string;
}

export default function ProjectDetailContent({ slug }: Props) {
  const { t } = useLanguage();
  const pd = t.pages.portfolioDetail;

  const projectMeta = projects.find((p) => p.slug === slug);
  if (!projectMeta) notFound();

  const projectText = t.portfolio.projects.find((p) => p.id === projectMeta.id);
  if (!projectText) notFound();

  const project = { ...projectMeta, ...projectText };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soil via-soil/60 to-transparent" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 pb-14 w-full">
          <Link
            href="/portfolio"
            className="font-montserrat text-xs uppercase tracking-widest text-cream/50 hover:text-harvest transition-colors inline-flex items-center gap-1.5 mb-4"
          >
            <ChevronLeft size={14} /> {pd.backLink}
          </Link>
          <p className="font-montserrat text-harvest text-xs uppercase tracking-[0.3em] mb-2">
            {formatCategory(project.category)}
          </p>
          <h1 className="font-playfair font-black text-cream text-4xl md:text-6xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 md:py-24 bg-cream dark:bg-soil">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <p className="font-raleway text-stone text-base leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Image gallery */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className={`relative overflow-hidden ${
                      i === 0 ? "sm:col-span-2 h-80" : "h-56"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${project.title} — view ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-linen dark:bg-[#1a1a1a] p-6">
                <h3 className="font-montserrat text-xs uppercase tracking-widest text-harvest mb-5">
                  {pd.sidebarHeading}
                </h3>
                {[
                  { label: pd.category, value: formatCategory(project.category), icon: Tag },
                  { label: pd.location, value: project.location,                 icon: MapPin },
                  { label: pd.year,     value: String(project.year),             icon: Calendar },
                  { label: pd.area,     value: project.area,                     icon: Ruler },
                  { label: pd.client,   value: project.client,                   icon: User },
                ].map((item) => (
                  <div key={item.label} className="mb-4 pb-4 border-b border-harvest/10 last:border-0 last:mb-0 last:pb-0">
                    <p className="font-montserrat text-[10px] uppercase tracking-wider text-stone mb-1 flex items-center gap-1.5">
                      <item.icon size={11} className="text-harvest" />{item.label}
                    </p>
                    <p className="font-raleway text-soil dark:text-cream text-sm">{item.value}</p>
                  </div>
                ))}
              </div>

              <Button href="/contact" className="w-full">
                {pd.cta}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
