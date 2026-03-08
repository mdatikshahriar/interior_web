import { images } from "@/lib/content/images";

/** Structural (non-text) data for services. Text lives in lib/i18n/en.ts and bn.ts */
export interface ServiceMeta {
  id: string;
  image: string;
  icon: string;
}

export const services: ServiceMeta[] = [
  { id: "residential",  image: images.services.residential,  icon: "🏠" },
  { id: "commercial",   image: images.services.commercial,   icon: "🏢" },
  { id: "hospitality",  image: images.services.hospitality,  icon: "🏨" },
  { id: "farm-nature",  image: images.services.farmNature,   icon: "🌿" },
  { id: "renovation",   image: images.services.renovation,   icon: "🔨" },
  { id: "consultation", image: images.services.consultation, icon: "💬" },
];
