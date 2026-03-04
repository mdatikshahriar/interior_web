import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Residential Design", href: "/services#residential" },
    { label: "Commercial Spaces", href: "/services#commercial" },
    { label: "Hospitality Interiors", href: "/services#hospitality" },
    { label: "Farm & Nature", href: "/services#farm-nature" },
    { label: "Renovation", href: "/services#renovation" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-soil text-cream/80">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-playfair text-3xl font-bold text-harvest">Afrad</span>
              <br />
              <span className="font-montserrat text-xs tracking-[0.3em] uppercase text-cream/60">
                Corporation
              </span>
            </div>
            <p className="font-raleway text-sm text-cream/60 leading-relaxed max-w-xs mb-6">
              Crafting spaces where nature meets design. Interior excellence for homes,
              offices, and farm-inspired sanctuaries across Bangladesh.
            </p>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "LinkedIn", "Behance"].map((s) => (
                <a
                  key={s}
                  href="#"
                  rel="noopener noreferrer"
                  className="font-montserrat text-[10px] uppercase tracking-wider text-cream/40 hover:text-harvest transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-montserrat text-xs uppercase tracking-widest text-harvest mb-5">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
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
          ))}
        </div>

        {/* Contact strip */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row gap-4 md:gap-8 text-sm font-raleway text-cream/50">
          <span>📍 House 12, Road 4, Gulshan-1, Dhaka 1212</span>
          <span>📞 +880 1XXX-XXXXXX</span>
          <span>✉️ hello@afradcorporation.com</span>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-montserrat text-cream/30 uppercase tracking-wider">
          <span>© {new Date().getFullYear()} Afrad Corporation. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" rel="noopener noreferrer" className="hover:text-harvest transition-colors">Privacy Policy</a>
            <a href="#" rel="noopener noreferrer" className="hover:text-harvest transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
