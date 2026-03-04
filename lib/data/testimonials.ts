export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rafiqul Islam",
    designation: "CEO",
    company: "Horizon Group",
    quote:
      "Afrad Corporation transformed our headquarters into a space we are proud to show every client. Their attention to detail and understanding of our brand identity is unmatched.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    id: "2",
    name: "Nasrin Akhter",
    designation: "Homeowner",
    company: "Gulshan Residence",
    quote:
      "From the first consultation to the final reveal, every step was seamless. Our home feels like a dream — beautiful, functional, and uniquely ours.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&q=80",
  },
  {
    id: "3",
    name: "Kamal Hossain",
    designation: "Managing Director",
    company: "Emerald Hotels",
    quote:
      "The farm & nature concept they brought to our lobby has become our most photographed feature. Guests love it — and so do we.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
  },
  {
    id: "4",
    name: "Fatema Begum",
    designation: "Architect",
    company: "Design Studio BD",
    quote:
      "As a fellow professional, I hold Afrad Corporation to a high standard. They exceed it every time. Their farm-nature integration work is truly pioneering.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&q=80",
  },
  {
    id: "5",
    name: "Tanvir Ahmed",
    designation: "COO",
    company: "TechPark BD",
    quote:
      "Our office went from a generic space to an award-winning workplace. Employee satisfaction scores improved 40% in the first quarter after the redesign.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
  },
];

export const clientLogos = [
  { name: "Horizon Group", logo: "Horizon Group" },
  { name: "TechPark BD", logo: "TechPark BD" },
  { name: "Emerald Hotels", logo: "Emerald Hotels" },
  { name: "Green Living Co", logo: "Green Living Co" },
  { name: "Urban Spaces", logo: "Urban Spaces" },
  { name: "BD Architects", logo: "BD Architects" },
  { name: "Dhaka Realty", logo: "Dhaka Realty" },
  { name: "Style House", logo: "Style House" },
];
