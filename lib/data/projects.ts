export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "residential" | "commercial" | "farm-nature";
  location: string;
  year: number;
  description: string;
  coverImage: string;
  images: string[];
  area: string;
  client: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "gulshan-luxury-villa",
    title: "Gulshan Luxury Villa",
    category: "residential",
    location: "Gulshan, Dhaka",
    year: 2024,
    description:
      "A contemporary luxury residence blending natural textures with modern finishes. Floor-to-ceiling windows bring the outdoors in, while bespoke furniture pieces anchor each space.",
    coverImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1200&q=80",
    ],
    area: "4,200 sq ft",
    client: "Private Client",
    featured: true,
  },
  {
    id: "2",
    slug: "banani-corporate-headquarters",
    title: "Banani Corporate HQ",
    category: "commercial",
    location: "Banani, Dhaka",
    year: 2024,
    description:
      "A 12,000 sq ft office space designed to foster creativity and collaboration. Biophilic elements throughout — living walls, natural light channels, and organic material palettes.",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80",
    ],
    area: "12,000 sq ft",
    client: "TechCorp Bangladesh",
    featured: true,
  },
  {
    id: "3",
    slug: "dhanmondi-farm-house",
    title: "Dhanmondi Farm House",
    category: "farm-nature",
    location: "Dhanmondi, Dhaka",
    year: 2023,
    description:
      "An urban farm home concept where interior green spaces, herb gardens, and natural ventilation create a sanctuary within the city.",
    coverImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&q=80",
      "https://images.unsplash.com/photo-1518335935020-cfd6580c1ab4?w=1200&q=80",
    ],
    area: "3,500 sq ft",
    client: "Private Client",
    featured: true,
  },
  {
    id: "4",
    slug: "baridhara-penthouse",
    title: "Baridhara Penthouse",
    category: "residential",
    location: "Baridhara, Dhaka",
    year: 2023,
    description:
      "Sky-high luxury with panoramic city views. Minimalist interiors in cream and charcoal, accented with hand-crafted brass fixtures.",
    coverImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80",
    ],
    area: "6,800 sq ft",
    client: "Private Client",
    featured: false,
  },
  {
    id: "5",
    slug: "uttara-boutique-hotel",
    title: "Uttara Boutique Hotel",
    category: "commercial",
    location: "Uttara, Dhaka",
    year: 2023,
    description:
      "24 rooms of curated luxury. Each suite features locally-sourced materials, handwoven textiles, and original artwork by Bangladeshi artists.",
    coverImage: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
    ],
    area: "18,000 sq ft",
    client: "Horizon Hotels",
    featured: false,
  },
  {
    id: "6",
    slug: "mirpur-green-retreat",
    title: "Mirpur Green Retreat",
    category: "farm-nature",
    location: "Mirpur, Dhaka",
    year: 2022,
    description:
      "A therapeutic green space designed to reconnect urban dwellers with nature. Indoor water features, vertical gardens, and natural stone surfaces.",
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=80",
    ],
    area: "2,800 sq ft",
    client: "Private Client",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
