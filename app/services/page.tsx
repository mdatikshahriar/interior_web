import type { Metadata } from "next";
import ServicesContent from "@/components/pages/ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Afrad Corporation's full range of interior design services: residential, commercial, hospitality, farm & nature spaces, renovation, and consultation.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
