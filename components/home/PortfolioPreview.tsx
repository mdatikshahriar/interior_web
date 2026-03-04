"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data/projects";
import { formatCategory } from "@/lib/utils";
import { cn } from "@/lib/utils";

type Filter = "all" | "residential" | "commercial" | "farm-nature";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "farm-nature", label: "Farm & Nature" },
];

export default function PortfolioPreview() {
  const [active, setActive] = useState<Filter>("all");

  const filtered =
    active === "all" ? projects.slice(0, 6) : projects.filter((p) => p.category === active);

  return (
    <section className="py-20 md:py-28 bg-linen dark:bg-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="font-montserrat text-harvest text-xs uppercase tracking-[0.3em] mb-3">
              Our Work
            </p>
            <h2 className="font-playfair font-bold text-soil dark:text-cream text-4xl md:text-5xl">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="font-montserrat text-xs uppercase tracking-widest text-harvest hover:text-[#aa0000] transition-colors border-b border-harvest pb-0.5 self-start md:self-auto"
          >
            View All Projects →
          </Link>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={cn(
                "font-montserrat text-[11px] uppercase tracking-widest px-4 py-2 border transition-all duration-200",
                active === f.value
                  ? "bg-harvest text-soil border-harvest"
                  : "border-harvest/30 text-stone dark:text-stone hover:border-harvest hover:text-harvest"
              )}
            >
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
