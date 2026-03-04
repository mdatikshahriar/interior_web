import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Afrad Corporation's full range of interior design services: residential, commercial, hospitality, farm & nature spaces, renovation, and consultation.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80"
          alt="Afrad Corporation Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soil via-soil/60 to-transparent" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 pb-14 w-full">
          <p className="font-montserrat text-harvest text-xs uppercase tracking-[0.3em] mb-3">
            What We Do
          </p>
          <h1 className="font-playfair font-black text-cream text-4xl md:text-6xl">
            Our Services
          </h1>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 md:py-28 bg-cream dark:bg-soil">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 space-y-24">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 !== 0 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative h-[360px] md:h-[460px] overflow-hidden ${i % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className={i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <span className="text-5xl block mb-5">{service.icon}</span>
                <p className="font-montserrat text-harvest text-xs uppercase tracking-[0.3em] mb-3">
                  Service
                </p>
                <h2 className="font-playfair font-bold text-soil dark:text-cream text-3xl md:text-4xl mb-4">
                  {service.title}
                </h2>
                <p className="font-raleway text-stone text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 font-raleway text-sm text-soil dark:text-cream">
                      <span className="w-1.5 h-1.5 rounded-full bg-harvest flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button href="/contact">Get a Quote</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
