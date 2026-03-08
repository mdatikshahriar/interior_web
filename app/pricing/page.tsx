import type { Metadata } from "next";
import PricingContent from "@/components/pages/PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for Afrad Corporation's interior design services. Choose from Essential, Signature, or Bespoke packages.",
};

export default function PricingPage() {
  return <PricingContent />;
}
