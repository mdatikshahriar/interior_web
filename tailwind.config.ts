import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        soil: "#2C1F14",
        harvest: "#C8A96E",
        cream: "#FAF6EF",
        linen: "#F0E8D8",
        moss: "#4A5C3F",
        stone: "#7A7268",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        raleway: ["var(--font-raleway)", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-slow": "marquee 50s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "scale-in": "scaleIn 5s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.2)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
