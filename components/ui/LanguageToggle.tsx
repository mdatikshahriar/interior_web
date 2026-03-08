"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useEffect, useState } from "react";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Avoid hydration mismatch — render placeholder until mounted
  if (!mounted) return <div className="w-10 h-6" />;

  return (
    <button
      onClick={() => setLang(lang === "en" ? "bn" : "en")}
      aria-label="Toggle language"
      title={lang === "en" ? "Switch to Bengali" : "Switch to English"}
      className="font-montserrat text-[11px] tracking-wider border border-current px-2 py-1 transition-colors hover:border-harvest hover:text-harvest focus:outline-none focus-visible:ring-2 focus-visible:ring-harvest"
    >
      {lang === "en" ? "বাং" : "EN"}
    </button>
  );
}
