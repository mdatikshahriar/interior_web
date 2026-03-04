"use client";

import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data/services";

export default function ServicesShowcase() {
  return (
    <section className="py-20 md:py-28 bg-cream dark:bg-soil">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-montserrat text-harvest text-xs uppercase tracking-[0.3em] mb-3">
              What We Do
            </p>
            <h2 className="font-playfair font-bold text-soil dark:text-cream text-4xl md:text-5xl">
              Our Services
            </h2>
          </div>
          <Link
            href="/services"
            className="font-montserrat text-xs uppercase tracking-widest text-harvest hover:text-[#aa0000] transition-colors border-b border-harvest pb-0.5 self-start md:self-auto"
          >
            View All Services →
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="group relative overflow-hidden block"
              style={{ height: "clamp(260px, 40vw, 480px)" }}
            >
              {/* Background image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay — always visible at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-soil via-soil/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Icon */}
                <span className="text-3xl mb-3 block">{service.icon}</span>

                {/* Title */}
                <h3 className="font-playfair font-bold text-cream text-xl md:text-2xl mb-2">
                  {service.title}
                </h3>

                {/* Description — revealed on hover/tap */}
                <p className="font-raleway text-cream/80 text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500">
                  {service.description}
                </p>

                {/* CTA arrow */}
                <span className="font-montserrat text-harvest text-xs uppercase tracking-widest mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
