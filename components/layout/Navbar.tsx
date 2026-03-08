"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const navLinks = [
    { href: "/",          label: t.nav.home },
    { href: "/about",     label: t.nav.about },
    { href: "/services",  label: t.nav.services },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/pricing",   label: t.nav.pricing },
    { href: "/contact",   label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => setDrawerOpen(false), [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass bg-cream/80 dark:bg-soil/80 border-b border-harvest/20 py-3 shadow-sm"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-playfair font-bold text-xl md:text-2xl text-harvest">
              {t.brand.name}
            </span>
            <span
              className={cn(
                "font-montserrat text-[10px] tracking-[0.25em] uppercase transition-colors",
                scrolled ? "text-soil dark:text-cream" : "text-cream"
              )}
            >
              {t.brand.tagline}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-montserrat text-xs uppercase tracking-widest transition-colors duration-200 relative pb-1",
                  pathname === link.href
                    ? "text-harvest nav-active"
                    : scrolled
                    ? "text-soil dark:text-cream hover:text-harvest dark:hover:text-harvest"
                    : "text-cream hover:text-harvest"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
            {/* Hamburger */}
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label={t.nav.openMenu}
              className={cn(
                "lg:hidden p-1 transition-colors",
                scrolled ? "text-soil dark:text-cream" : "text-cream"
              )}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-soil/60 transition-opacity duration-300 lg:hidden",
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Drawer Panel */}
      <aside
        className={cn(
          "fixed top-0 right-0 h-full w-72 z-50 bg-cream dark:bg-soil shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col",
          drawerOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between p-6 border-b border-harvest/20">
          <span className="font-playfair text-xl text-harvest font-bold">{t.brand.name} {t.brand.tagline}</span>
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label={t.nav.closeMenu}
            className="text-soil dark:text-cream hover:text-harvest transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col p-6 gap-1 flex-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-montserrat text-sm uppercase tracking-widest py-3 px-2 border-b border-harvest/10 transition-colors",
                pathname === link.href
                  ? "text-harvest"
                  : "text-soil dark:text-cream hover:text-harvest"
              )}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="p-6 border-t border-harvest/20">
          <div className="flex items-center justify-between mb-3">
            <span className="font-raleway text-sm text-stone dark:text-stone">{t.nav.darkMode}</span>
            <ThemeToggle />
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-raleway text-sm text-stone dark:text-stone">{t.nav.language}</span>
            <LanguageToggle />
          </div>
          <div className="flex gap-4">
            {["Instagram", "Facebook", "LinkedIn"].map((s) => (
              <a
                key={s}
                href="#"
                className="font-montserrat text-[10px] uppercase tracking-wider text-stone hover:text-harvest transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
