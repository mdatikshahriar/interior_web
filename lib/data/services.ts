export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "residential",
    title: "Residential Design",
    description:
      "Transform your home into a personal sanctuary. We craft living spaces that reflect your lifestyle, blending comfort with timeless elegance.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    icon: "🏠",
    features: ["Full home design", "Kitchen & bath", "Custom furniture", "Lighting design"],
  },
  {
    id: "commercial",
    title: "Commercial Spaces",
    description:
      "Workplaces that inspire productivity and leave lasting impressions. From offices to retail, we design spaces that work as hard as you do.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    icon: "🏢",
    features: ["Office design", "Retail spaces", "Corporate branding", "Space planning"],
  },
  {
    id: "hospitality",
    title: "Hospitality Interiors",
    description:
      "Hotels, restaurants, and lounges that create unforgettable guest experiences. Every detail curated to delight.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    icon: "🏨",
    features: ["Hotel rooms & suites", "Restaurant design", "Lobby & common areas", "F&B spaces"],
  },
  {
    id: "farm-nature",
    title: "Farm & Nature Spaces",
    description:
      "Our signature offering. Indoor farms, biophilic retreats, and nature-integrated interiors that bring the outdoors in.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    icon: "🌿",
    features: ["Indoor gardens", "Vertical farms", "Biophilic design", "Sustainable materials"],
  },
  {
    id: "renovation",
    title: "Renovation & Styling",
    description:
      "Give your existing space a complete transformation. We handle everything from planning to the finishing touches.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
    icon: "🔨",
    features: ["Full renovation", "Partial remodel", "Space refresh", "Material upgrade"],
  },
  {
    id: "consultation",
    title: "Design Consultation",
    description:
      "Expert guidance for your design journey. One-time sessions or ongoing support — we help you make confident decisions.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    icon: "💬",
    features: ["Space analysis", "Mood boards", "Material selection", "Budget planning"],
  },
];

export const coreValues = [
  {
    icon: "🌱",
    title: "Sustainability First",
    description: "Every material, every choice — made with the planet in mind.",
  },
  {
    icon: "✨",
    title: "Uncompromised Quality",
    description: "We settle for nothing less than exceptional craftsmanship.",
  },
  {
    icon: "🎨",
    title: "Creative Excellence",
    description: "Bold, original designs that stand the test of time.",
  },
  {
    icon: "🤝",
    title: "Client Partnership",
    description: "Your vision drives every decision we make.",
  },
  {
    icon: "🔒",
    title: "Transparent Process",
    description: "Clear timelines, honest pricing, no surprises.",
  },
  {
    icon: "🏆",
    title: "Award-Winning Team",
    description: "Decades of experience, nationally recognized.",
  },
];
