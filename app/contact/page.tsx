import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Afrad Corporation. Start your interior design project today. Located in Gulshan, Dhaka, Bangladesh.",
};

export default function ContactPage() {
  return <ContactContent />;
}
