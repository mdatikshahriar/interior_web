"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

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
              Afrad
            </span>
            <span
              className={cn(
                "font-montserrat text-[10px] tracking-[0.25em] uppercase transition-colors",
                scrolled ? "text-soil dark:text-cream" : "text-cream"
              )}
            >
              Corporation
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
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {/* Hamburger */}
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              className={cn(
                "lg:hidden flex flex-col gap-1.5 p-1",
                scrolled ? "text-soil dark:text-cream" : "text-cream"
              )}
            >
              <span className="block w-6 h-0.5 bg-current transition-all" />
              <span className="block w-6 h-0.5 bg-current transition-all" />
              <span className="block w-4 h-0.5 bg-current transition-all" />
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
          <span className="font-playfair text-xl text-harvest font-bold">Afrad Corporation</span>
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
            className="text-soil dark:text-cream hover:text-harvest transition-colors text-2xl leading-none"
          >
            ✕
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
          <div className="flex items-center justify-between mb-4">
            <span className="font-raleway text-sm text-stone dark:text-stone">Dark Mode</span>
            <ThemeToggle />
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
