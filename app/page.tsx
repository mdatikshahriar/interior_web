import type { Metadata } from "next";
import HeroSlider from "@/components/home/HeroSlider";
import MarqueeBanner from "@/components/home/MarqueeBanner";
import AboutSection from "@/components/home/AboutSection";
import CoreValues from "@/components/home/CoreValues";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import VideoSection from "@/components/home/VideoSection";
import PricingSection from "@/components/home/PricingSection";
import Testimonials from "@/components/home/Testimonials";
import ClientLogos from "@/components/home/ClientLogos";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Afrad Corporation — Premium Interior Design in Bangladesh",
  description:
    "Afrad Corporation crafts exceptional interiors for homes, offices, and farm-inspired spaces across Bangladesh. Where nature meets design.",
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Afrad Corporation",
  description: "Premium interior design company in Bangladesh",
  url: "https://afradcorporation.com",
  telephone: "+880-1XXX-XXXXXX",
  email: "hello@afradcorporation.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "House 12, Road 4, Gulshan-1",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  sameAs: [
    "https://instagram.com/afradcorporation",
    "https://facebook.com/afradcorporation",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSlider />
      <MarqueeBanner />
      <AboutSection />
      <CoreValues />
      <ServicesShowcase />
      <PortfolioPreview />
      <VideoSection />
      <PricingSection />
      <Testimonials />
      <ClientLogos />
      <ContactCTA />
    </>
  );
}
