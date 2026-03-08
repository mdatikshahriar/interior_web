import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data/projects";
import { en } from "@/lib/i18n/en";
import ProjectDetailContent from "@/components/pages/ProjectDetailContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const projectMeta = projects.find((p) => p.slug === slug);
  if (!projectMeta) return {};
  const projectText = en.portfolio.projects.find((p) => p.id === projectMeta.id);
  return {
    title: projectText?.title ?? slug,
    description: projectText?.description,
    openGraph: {
      images: [{ url: projectMeta.coverImage }],
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
  return <ProjectDetailContent slug={slug} />;
}
