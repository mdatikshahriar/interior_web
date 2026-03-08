import type { Metadata } from "next";
import PortfolioContent from "@/components/pages/PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse Afrad Corporation's portfolio of premium interior design projects across Bangladesh.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
