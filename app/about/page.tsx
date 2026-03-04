import type { Metadata } from "next";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Afrad Corporation — our story, values, and the team behind Bangladesh's most innovative interior designs.",
};

const team = [
  {
    name: "Afrad Rahman",
    role: "Founder & Chief Designer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    bio: "15+ years shaping interiors across Bangladesh. Pioneer of the farm-nature design movement.",
  },
  {
    name: "Sara Hossain",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "Award-winning designer with expertise in luxury residential and hospitality projects.",
  },
  {
    name: "Karim Ullah",
    role: "Head of Commercial Design",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Specialist in corporate environments and biophilic commercial spaces.",
  },
  {
    name: "Nadia Islam",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
    bio: "Ensures every project is delivered on time, on budget, and beyond expectation.",
  },
];

const timeline = [
  { year: "2010", event: "Founded by Afrad Rahman in Dhaka" },
  { year: "2013", event: "First commercial project — Banani Corporate Hub" },
  { year: "2016", event: "Launched Farm & Nature interior concept" },
  { year: "2019", event: "Won National Interior Design Award" },
  { year: "2022", event: "Expanded to 25-member team" },
  { year: "2024", event: "350+ completed projects" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[320px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80"
          alt="About Afrad Corporation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soil via-soil/60 to-transparent" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 pb-14 w-full">
          <p className="font-montserrat text-harvest text-xs uppercase tracking-[0.3em] mb-3">
            About Us
          </p>
          <h1 className="font-playfair font-black text-cream text-4xl md:text-6xl">
            Our Story
          </h1>
        </div>
      </section>

      {/* Brand story */}
      <section className="py-20 md:py-28 bg-cream dark:bg-soil">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair font-bold text-soil dark:text-cream text-3xl md:text-4xl mb-6">
                Design That Grows From Nature
              </h2>
              <p className="font-raleway text-stone text-base leading-relaxed mb-4">
                Founded in 2010, Afrad Corporation has spent over a decade redefining
                what interior design means in Bangladesh. We believe the most beautiful
                spaces are those that draw their inspiration from the natural world.
              </p>
              <p className="font-raleway text-stone text-base leading-relaxed mb-4">
                Our signature &quot;Farm & Nature&quot; design philosophy integrates living
                walls, natural materials, organic forms, and biophilic principles into
                every project — from intimate apartments to expansive corporate campuses.
              </p>
              <p className="font-raleway text-stone text-base leading-relaxed mb-8">
                Today, our 25-member team serves clients across Dhaka and beyond,
                delivering spaces that are as functional as they are beautiful.
              </p>
              <Button href="/contact">Start Your Project</Button>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
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
              Our Journey
            </p>
            <h2 className="font-playfair font-bold text-soil dark:text-cream text-4xl md:text-5xl">
              Milestones
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-harvest/20 hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
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
                  {/* Dot */}
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
              The People
            </p>
            <h2 className="font-playfair font-bold text-soil dark:text-cream text-4xl md:text-5xl">
              Our Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative h-72 overflow-hidden mb-5">
                  <Image
                    src={member.image}
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
