import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data/projects";
import { formatCategory } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      images: [{ url: project.coverImage }],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

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
            className="font-montserrat text-xs uppercase tracking-widest text-cream/50 hover:text-harvest transition-colors inline-flex items-center gap-2 mb-4"
          >
            ← Back to Portfolio
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
                  Project Details
                </h3>
                {[
                  { label: "Category", value: formatCategory(project.category) },
                  { label: "Location", value: project.location },
                  { label: "Year", value: String(project.year) },
                  { label: "Area", value: project.area },
                  { label: "Client", value: project.client },
                ].map((item) => (
                  <div key={item.label} className="mb-4 pb-4 border-b border-harvest/10 last:border-0 last:mb-0 last:pb-0">
                    <p className="font-montserrat text-[10px] uppercase tracking-wider text-stone mb-1">
                      {item.label}
                    </p>
                    <p className="font-raleway text-soil dark:text-cream text-sm">{item.value}</p>
                  </div>
                ))}
              </div>

              <Button href="/contact" className="w-full">
                Start a Similar Project
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
