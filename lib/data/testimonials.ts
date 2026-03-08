import { images } from "@/lib/content/images";

/** Structural (non-text) data for testimonials. Text lives in lib/i18n/en.ts and bn.ts */
export interface TestimonialMeta {
  id: string;
  avatar: string;
  rating: number;
}

export const testimonialsMeta: TestimonialMeta[] = [
  { id: "1", avatar: images.testimonials.rafiqulIslam, rating: 5 },
  { id: "2", avatar: images.testimonials.nasrinAkhter, rating: 5 },
  { id: "3", avatar: images.testimonials.kamalHossain, rating: 5 },
  { id: "4", avatar: images.testimonials.fatemaBegum,  rating: 5 },
  { id: "5", avatar: images.testimonials.tanvirAhmed,  rating: 5 },
];

/** Client logos (proper names, same in all languages) */
export const clientLogos = [
  "Horizon Group",
  "TechPark BD",
  "Emerald Hotels",
  "Green Living Co",
  "Urban Spaces",
  "BD Architects",
  "Dhaka Realty",
  "Style House",
];
