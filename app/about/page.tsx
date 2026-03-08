import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Afrad Corporation — our story, values, and the team behind Bangladesh's most innovative interior designs.",
};

export default function AboutPage() {
  return <AboutContent />;
}
