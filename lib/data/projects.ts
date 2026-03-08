import { images } from "@/lib/content/images";

export interface Project {
  id: string;
  slug: string;
  category: "residential" | "commercial" | "farm-nature";
  location: string;
  year: number;
  coverImage: string;
  images: string[];
  area: string;
  client: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id:         "1",
    slug:       "gulshan-luxury-villa",
    category:   "residential",
    location:   "Gulshan, Dhaka",
    year:       2024,
    coverImage: images.projects.gulshanLuxuryVilla.cover,
    images:     images.projects.gulshanLuxuryVilla.gallery,
    area:       "4,200 sq ft",
    client:     "Private Client",
    featured:   true,
  },
  {
    id:         "2",
    slug:       "banani-corporate-headquarters",
    category:   "commercial",
    location:   "Banani, Dhaka",
    year:       2024,
    coverImage: images.projects.bananiCorporateHQ.cover,
    images:     images.projects.bananiCorporateHQ.gallery,
    area:       "12,000 sq ft",
    client:     "TechCorp Bangladesh",
    featured:   true,
  },
  {
    id:         "3",
    slug:       "dhanmondi-farm-house",
    category:   "farm-nature",
    location:   "Dhanmondi, Dhaka",
    year:       2023,
    coverImage: images.projects.dhanmondiFarmHouse.cover,
    images:     images.projects.dhanmondiFarmHouse.gallery,
    area:       "3,500 sq ft",
    client:     "Private Client",
    featured:   true,
  },
  {
    id:         "4",
    slug:       "baridhara-penthouse",
    category:   "residential",
    location:   "Baridhara, Dhaka",
    year:       2023,
    coverImage: images.projects.baridharaPenthouse.cover,
    images:     images.projects.baridharaPenthouse.gallery,
    area:       "6,800 sq ft",
    client:     "Private Client",
    featured:   false,
  },
  {
    id:         "5",
    slug:       "uttara-boutique-hotel",
    category:   "commercial",
    location:   "Uttara, Dhaka",
    year:       2023,
    coverImage: images.projects.uttaraBoutiqueHotel.cover,
    images:     images.projects.uttaraBoutiqueHotel.gallery,
    area:       "18,000 sq ft",
    client:     "Horizon Hotels",
    featured:   false,
  },
  {
    id:         "6",
    slug:       "mirpur-green-retreat",
    category:   "farm-nature",
    location:   "Mirpur, Dhaka",
    year:       2022,
    coverImage: images.projects.mirpurGreenRetreat.cover,
    images:     images.projects.mirpurGreenRetreat.gallery,
    area:       "2,800 sq ft",
    client:     "Private Client",
    featured:   false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
