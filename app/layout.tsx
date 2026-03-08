import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Raleway } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import "@/styles/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://afradcorporation.com"),
  title: {
    template: "%s | Afrad Corporation",
    default: "Afrad Corporation — Premium Interior Design in Bangladesh",
  },
  description:
    "Afrad Corporation crafts exceptional interiors for homes, offices, and farm-inspired spaces across Bangladesh. Where nature meets design.",
  keywords: [
    "interior design Bangladesh",
    "interior design Dhaka",
    "Afrad Corporation",
    "farm interior design",
    "luxury interior",
    "residential interior",
    "commercial interior",
  ],
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: "https://afradcorporation.com",
    siteName: "Afrad Corporation",
    title: "Afrad Corporation — Premium Interior Design in Bangladesh",
    description:
      "Crafting spaces where nature meets design. Interior excellence for homes, offices, and farm-inspired sanctuaries across Bangladesh.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Afrad Corporation Interior Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Afrad Corporation — Premium Interior Design",
    description: "Crafting spaces where nature meets design.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${montserrat.variable} ${raleway.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <FloatingButtons />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
