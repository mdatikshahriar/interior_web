"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LayoutGrid, Home, Building2, TreePine, ArrowRight, type LucideIcon } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { formatCategory } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type Filter = "all" | "residential" | "commercial" | "farm-nature";
const filterIcons: LucideIcon[] = [LayoutGrid, Home, Building2, TreePine];

export default function PortfolioPreview() {
  const [active, setActive] = useState<Filter>("all");
  const { t } = useLanguage();

  const filters: { value: Filter; label: string; icon: LucideIcon }[] = [
    { value: "all",         label: t.portfolio.filters.all,         icon: filterIcons[0] },
    { value: "residential", label: t.portfolio.filters.residential, icon: filterIcons[1] },
    { value: "commercial",  label: t.portfolio.filters.commercial,  icon: filterIcons[2] },
    { value: "farm-nature", label: t.portfolio.filters.farmNature,  icon: filterIcons[3] },
  ];

  // Merge project metadata with translated titles/descriptions
  const projectsWithText = projects.map((p) => ({
    ...p,
    ...t.portfolio.projects.find((tp) => tp.id === p.id)!,
  }));

  const filtered =
    active === "all"
      ? projectsWithText.slice(0, 6)
      : projectsWithText.filter((p) => p.category === active);

  return (
    <section className="py-20 md:py-28 bg-linen dark:bg-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="font-montserrat text-harvest text-xs uppercase tracking-[0.3em] mb-3">
              {t.portfolio.pretitle}
            </p>
            <h2 className="font-playfair font-bold text-soil dark:text-cream text-4xl md:text-5xl">
              {t.portfolio.heading}
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 font-montserrat text-xs uppercase tracking-widest text-harvest hover:text-[#9B2D21] transition-colors border-b border-harvest pb-0.5 self-start md:self-auto"
          >
            {t.portfolio.viewAll} <ArrowRight size={13} />
          </Link>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={cn(
                "inline-flex items-center gap-1.5 font-montserrat text-[11px] uppercase tracking-widest px-4 py-2 border transition-all duration-200",
                active === f.value
                  ? "bg-harvest text-soil border-harvest"
                  : "border-harvest/30 text-stone dark:text-stone hover:border-harvest hover:text-harvest"
              )}
            >
              <f.icon size={13} />
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className="group relative overflow-hidden block h-72 md:h-80"
            >
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-soil/90 via-soil/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Info */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="font-montserrat text-[10px] uppercase tracking-widest text-harvest mb-2">
                  {formatCategory(project.category)} · {project.location}
                </span>
                <h3 className="font-playfair font-bold text-cream text-xl leading-tight mb-0 group-hover:mb-2 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="font-raleway text-cream/70 text-sm max-h-0 overflow-hidden group-hover:max-h-16 transition-all duration-500 leading-relaxed">
                  {project.description.substring(0, 100)}…
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
