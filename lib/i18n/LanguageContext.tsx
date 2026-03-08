"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { en } from "./en";
import { bn } from "./bn";

export type Language = "en" | "bn";

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: typeof en;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  // Restore saved preference on mount
  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language | null;
    if (stored === "bn") setLangState("bn");
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: lang === "bn" ? bn : en }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
