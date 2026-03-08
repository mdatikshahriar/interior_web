"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { links } from "@/lib/content/links";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-soil text-cream/80">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-playfair text-3xl font-bold text-harvest">{t.brand.name}</span>
              <br />
              <span className="font-montserrat text-xs tracking-[0.3em] uppercase text-cream/60">
                {t.brand.tagline}
              </span>
            </div>
            <p className="font-raleway text-sm text-cream/60 leading-relaxed max-w-xs mb-6">
              {t.footer.tagline}
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: "Instagram", href: links.social.instagram },
                { icon: Facebook,  label: "Facebook",  href: links.social.facebook },
                { icon: Linkedin,  label: "LinkedIn",  href: links.social.linkedin },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-cream/40 hover:text-harvest transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
              <a
                href={links.social.behance}
                rel="noopener noreferrer"
                className="font-montserrat text-[10px] uppercase tracking-wider text-cream/40 hover:text-harvest transition-colors self-center"
              >
                Bē
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-montserrat text-xs uppercase tracking-widest text-harvest mb-5">
              {t.footer.sections.company}
            </h4>
            <ul className="space-y-3">
              {t.footer.companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-raleway text-sm text-cream/60 hover:text-harvest transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4 className="font-montserrat text-xs uppercase tracking-widest text-harvest mb-5">
              {t.footer.sections.services}
            </h4>
            <ul className="space-y-3">
              {t.footer.serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-raleway text-sm text-cream/60 hover:text-harvest transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row gap-4 md:gap-8 text-sm font-raleway text-cream/50">
          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-harvest shrink-0" />
            {links.contact.addressFull}
          </span>
          <span className="flex items-center gap-2">
            <Phone size={14} className="text-harvest shrink-0" />
            {links.contact.phone}
          </span>
          <span className="flex items-center gap-2">
            <Mail size={14} className="text-harvest shrink-0" />
            {links.contact.email}
          </span>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-montserrat text-cream/30 uppercase tracking-wider">
          <span>© {new Date().getFullYear()} {t.brand.name} {t.brand.tagline}. {t.footer.copyright}</span>
          <div className="flex gap-6">
            <a href="#" rel="noopener noreferrer" className="hover:text-harvest transition-colors">
              {t.footer.privacyPolicy}
            </a>
            <a href="#" rel="noopener noreferrer" className="hover:text-harvest transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
