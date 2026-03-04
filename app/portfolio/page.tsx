"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data/projects";
import { formatCategory } from "@/lib/utils";
import { cn } from "@/lib/utils";

type Filter = "all" | "residential" | "commercial" | "farm-nature";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "farm-nature", label: "Farm & Nature" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState<Filter>("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Afrad Corporation Portfolio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soil via-soil/60 to-transparent" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 pb-14 w-full">
          <p className="font-montserrat text-harvest text-xs uppercase tracking-[0.3em] mb-3">
            Our Work
          </p>
          <h1 className="font-playfair font-black text-cream text-4xl md:text-6xl">
            Portfolio
          </h1>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="py-20 md:py-28 bg-cream dark:bg-soil">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={cn(
                  "font-montserrat text-[11px] uppercase tracking-widest px-5 py-2.5 border transition-all duration-200",
                  active === f.value
                    ? "bg-harvest text-soil border-harvest"
                    : "border-harvest/30 text-stone hover:border-harvest hover:text-harvest"
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
                <div className="absolute inset-0 bg-gradient-to-t from-soil/90 via-soil/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="font-montserrat text-[10px] uppercase tracking-widest text-harvest mb-2">
                    {formatCategory(project.category)} · {project.year}
                  </span>
                  <h3 className="font-playfair font-bold text-cream text-xl leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-raleway text-cream/60 text-xs mt-1">{project.location}</p>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-raleway text-stone">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
