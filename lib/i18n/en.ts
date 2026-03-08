/**
 * ENGLISH TEXT
 * All user-facing text for the English version of the site.
 * Edit here to update any English copy across the entire website.
 */

export const en = {
  // ─── Brand ────────────────────────────────────────────────────────────────
  brand: {
    name:     "Afrad",
    tagline:  "Corporation",
  },

  // ─── Navigation ───────────────────────────────────────────────────────────
  nav: {
    home:      "Home",
    about:     "About",
    services:  "Services",
    portfolio: "Portfolio",
    pricing:   "Pricing",
    contact:   "Contact",
    darkMode:  "Dark Mode",
    language:  "Language",
    openMenu:  "Open menu",
    closeMenu: "Close menu",
  },

  // ─── Hero Slider ──────────────────────────────────────────────────────────
  hero: {
    pretitle: "Afrad Corporation",
    cta1:     "Explore Projects",
    cta2:     "Get a Quote",
    slides: [
      {
        tagline:  "Where Nature",
        tagline2: "Meets Design",
        sub:      "Creating timeless interiors that blend organic beauty with modern elegance.",
      },
      {
        tagline:  "Luxury Living",
        tagline2: "Reimagined",
        sub:      "Bespoke residential spaces crafted to reflect your unique lifestyle.",
      },
      {
        tagline:  "Spaces That",
        tagline2: "Inspire",
        sub:      "Commercial interiors designed to energize teams and impress clients.",
      },
      {
        tagline:  "Farm & Nature",
        tagline2: "Brought Inside",
        sub:      "Our signature biophilic design brings the outdoors into every space.",
      },
    ],
  },

  // ─── Marquee Banner ───────────────────────────────────────────────────────
  marquee: {
    items: [
      "Afrad Corporation",
      "Premium Interiors",
      "Sustainable Spaces",
      "Farm & Nature Design",
      "Est. 2010",
      "Dhaka, Bangladesh",
      "Award-Winning Team",
      "Bespoke Solutions",
    ],
  },

  // ─── About Section (Home) ─────────────────────────────────────────────────
  about: {
    pretitle:  "Our Story",
    heading:   "Design That Grows From Nature",
    heading2:  "Grows From Nature",
    para1:
      "Founded in 2010, Afrad Corporation has been redefining interior design in Bangladesh. We believe the most beautiful spaces draw inspiration from the natural world — its textures, colours, and organic rhythms.",
    para2:
      "From luxury residences in Gulshan to farm-inspired commercial spaces in Banani, our portfolio spans every typology. Every project begins with a deep understanding of our client's life, work, and aspirations.",
    cta:       "Learn More About Us",
    badge:     "Est. 2010",
    stats: [
      { value: 350, suffix: "+", label: "Projects Completed" },
      { value: 200, suffix: "+", label: "Happy Clients" },
      { value: 15,  suffix: "",  label: "Years Experience" },
      { value: 12,  suffix: "",  label: "Design Awards" },
    ],
  },

  // ─── Core Values ──────────────────────────────────────────────────────────
  coreValues: {
    pretitle: "Why Choose Us",
    heading:  "Our Core Values",
    items: [
      { title: "Sustainability First",    description: "Every material, every choice — made with the planet in mind." },
      { title: "Uncompromised Quality",   description: "We settle for nothing less than exceptional craftsmanship." },
      { title: "Creative Excellence",     description: "Bold, original designs that stand the test of time." },
      { title: "Client Partnership",      description: "Your vision drives every decision we make." },
      { title: "Transparent Process",     description: "Clear timelines, honest pricing, no surprises." },
      { title: "Award-Winning Team",      description: "Decades of experience, nationally recognized." },
    ],
  },

  // ─── Services Showcase ────────────────────────────────────────────────────
  services: {
    pretitle:  "What We Do",
    heading:   "Our Services",
    viewAll:   "View All Services",
    learnMore: "Learn More",
    pageLabel: "Service",
    getQuote:  "Get a Quote",
    items: [
      {
        id:          "residential",
        title:       "Residential Design",
        description: "Transform your home into a personal sanctuary. We craft living spaces that reflect your lifestyle, blending comfort with timeless elegance.",
        features:    ["Full home design", "Kitchen & bath", "Custom furniture", "Lighting design"],
      },
      {
        id:          "commercial",
        title:       "Commercial Spaces",
        description: "Workplaces that inspire productivity and leave lasting impressions. From offices to retail, we design spaces that work as hard as you do.",
        features:    ["Office design", "Retail spaces", "Corporate branding", "Space planning"],
      },
      {
        id:          "hospitality",
        title:       "Hospitality Interiors",
        description: "Hotels, restaurants, and lounges that create unforgettable guest experiences. Every detail curated to delight.",
        features:    ["Hotel rooms & suites", "Restaurant design", "Lobby & common areas", "F&B spaces"],
      },
      {
        id:          "farm-nature",
        title:       "Farm & Nature Spaces",
        description: "Our signature offering. Indoor farms, biophilic retreats, and nature-integrated interiors that bring the outdoors in.",
        features:    ["Indoor gardens", "Vertical farms", "Biophilic design", "Sustainable materials"],
      },
      {
        id:          "renovation",
        title:       "Renovation & Styling",
        description: "Give your existing space a complete transformation. We handle everything from planning to the finishing touches.",
        features:    ["Full renovation", "Partial remodel", "Space refresh", "Material upgrade"],
      },
      {
        id:          "consultation",
        title:       "Design Consultation",
        description: "Expert guidance for your design journey. One-time sessions or ongoing support — we help you make confident decisions.",
        features:    ["Space analysis", "Mood boards", "Material selection", "Budget planning"],
      },
    ],
  },

  // ─── Portfolio Preview ────────────────────────────────────────────────────
  portfolio: {
    pretitle:    "Our Work",
    heading:     "Featured Projects",
    viewAll:     "View All Projects",
    noProjects:  "No projects in this category yet.",
    filters: {
      all:        "All",
      allProjects: "All Projects",
      residential: "Residential",
      commercial:  "Commercial",
      farmNature:  "Farm & Nature",
    },
    projects: [
      {
        id:          "1",
        title:       "Gulshan Luxury Villa",
        description: "A contemporary luxury residence blending natural textures with modern finishes. Floor-to-ceiling windows bring the outdoors in, while bespoke furniture pieces anchor each space.",
      },
      {
        id:          "2",
        title:       "Banani Corporate HQ",
        description: "A 12,000 sq ft office space designed to foster creativity and collaboration. Biophilic elements throughout — living walls, natural light channels, and organic material palettes.",
      },
      {
        id:          "3",
        title:       "Dhanmondi Farm House",
        description: "An urban farm home concept where interior green spaces, herb gardens, and natural ventilation create a sanctuary within the city.",
      },
      {
        id:          "4",
        title:       "Baridhara Penthouse",
        description: "Sky-high luxury with panoramic city views. Minimalist interiors in cream and charcoal, accented with hand-crafted brass fixtures.",
      },
      {
        id:          "5",
        title:       "Uttara Boutique Hotel",
        description: "24 rooms of curated luxury. Each suite features locally-sourced materials, handwoven textiles, and original artwork by Bangladeshi artists.",
      },
      {
        id:          "6",
        title:       "Mirpur Green Retreat",
        description: "A therapeutic green space designed to reconnect urban dwellers with nature. Indoor water features, vertical gardens, and natural stone surfaces.",
      },
    ],
  },

  // ─── Video Section ────────────────────────────────────────────────────────
  video: {
    pretitle: "Behind the Design",
    heading:  "Our Design Process",
    subtitle: "From the first sketch to the final reveal — watch how Afrad Corporation transforms empty spaces into extraordinary environments.",
    play:     "Play video",
    title:    "Afrad Corporation Design Process",
  },

  // ─── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    pretitle:     "Transparent Pricing",
    heading:      "Our Packages",
    residential:  "Residential",
    commercial:   "Commercial",
    mostPopular:  "Most Popular",
    getStarted:   "Get Started",
    plans: {
      residential: [
        {
          name:        "Essential",
          price:       "৳ 45,000",
          unit:        "/ room",
          tagline:     "Perfect for single rooms or small apartments",
          highlighted: false,
          features: [
            "Initial consultation (2hrs)",
            "Mood board & concept",
            "2D floor plan",
            "Material recommendations",
            "1 revision round",
          ],
        },
        {
          name:        "Signature",
          price:       "৳ 95,000",
          unit:        "/ room",
          tagline:     "Our most popular residential package",
          highlighted: true,
          features: [
            "Everything in Essential",
            "3D visualization renders",
            "Custom furniture design",
            "Procurement support",
            "3 revision rounds",
            "Site supervision (4 visits)",
          ],
        },
        {
          name:        "Bespoke",
          price:       "Custom",
          unit:        "",
          tagline:     "Full-home transformation with dedicated team",
          highlighted: false,
          features: [
            "Everything in Signature",
            "Dedicated project manager",
            "Unlimited revisions",
            "Full procurement",
            "Weekly site supervision",
            "1-year after-service support",
          ],
        },
      ],
      commercial: [
        {
          name:        "Essential",
          price:       "৳ 120,000",
          unit:        "/ project",
          tagline:     "Ideal for small offices up to 1,000 sq ft",
          highlighted: false,
          features: [
            "Space planning",
            "Concept presentation",
            "2D layout drawings",
            "Material board",
            "2 revision rounds",
          ],
        },
        {
          name:        "Signature",
          price:       "৳ 280,000",
          unit:        "/ project",
          tagline:     "Comprehensive package for mid-size spaces",
          highlighted: true,
          features: [
            "Everything in Essential",
            "3D walkthrough renders",
            "MEP coordination",
            "Vendor management",
            "4 revision rounds",
            "Bi-weekly site visits",
          ],
        },
        {
          name:        "Bespoke",
          price:       "Custom",
          unit:        "",
          tagline:     "Enterprise-level design for large projects",
          highlighted: false,
          features: [
            "Everything in Signature",
            "Dedicated design team",
            "Brand identity integration",
            "Full project management",
            "Unlimited revisions",
            "Turnkey delivery",
          ],
        },
      ],
    },
  },

  // ─── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    pretitle: "What Clients Say",
    heading:  "Testimonials",
    items: [
      {
        id:          "1",
        name:        "Rafiqul Islam",
        designation: "CEO",
        company:     "Horizon Group",
        quote:       "Afrad Corporation transformed our headquarters into a space we are proud to show every client. Their attention to detail and understanding of our brand identity is unmatched.",
        rating:      5,
      },
      {
        id:          "2",
        name:        "Nasrin Akhter",
        designation: "Homeowner",
        company:     "Gulshan Residence",
        quote:       "From the first consultation to the final reveal, every step was seamless. Our home feels like a dream — beautiful, functional, and uniquely ours.",
        rating:      5,
      },
      {
        id:          "3",
        name:        "Kamal Hossain",
        designation: "Managing Director",
        company:     "Emerald Hotels",
        quote:       "The farm & nature concept they brought to our lobby has become our most photographed feature. Guests love it — and so do we.",
        rating:      5,
      },
      {
        id:          "4",
        name:        "Fatema Begum",
        designation: "Architect",
        company:     "Design Studio BD",
        quote:       "As a fellow professional, I hold Afrad Corporation to a high standard. They exceed it every time. Their farm-nature integration work is truly pioneering.",
        rating:      5,
      },
      {
        id:          "5",
        name:        "Tanvir Ahmed",
        designation: "COO",
        company:     "TechPark BD",
        quote:       "Our office went from a generic space to an award-winning workplace. Employee satisfaction scores improved 40% in the first quarter after the redesign.",
        rating:      5,
      },
    ],
  },

  // ─── Client Logos ─────────────────────────────────────────────────────────
  clientLogos: {
    heading: "Trusted By",
  },

  // ─── Contact CTA ──────────────────────────────────────────────────────────
  contact: {
    pretitle:    "Get In Touch",
    heading:     "Let's Create Something Extraordinary",
    subtitle:    "Ready to transform your space? Tell us about your project and we'll be in touch within 24 hours.",
    labels: {
      address: "Address",
      phone:   "Phone",
      email:   "Email",
      hours:   "Hours",
    },
    form: {
      namePlaceholder:    "Your Name",
      phonePlaceholder:   "Phone Number",
      emailPlaceholder:   "Email Address",
      projectSelect:      "Select Project Type",
      messagePlaceholder: "Tell us about your project...",
      submit:             "Send Message",
      submitting:         "Sending…",
      projectTypes: [
        { value: "residential",  label: "Residential Design" },
        { value: "commercial",   label: "Commercial Spaces" },
        { value: "hospitality",  label: "Hospitality Interiors" },
        { value: "farm-nature",  label: "Farm & Nature" },
        { value: "renovation",   label: "Renovation" },
        { value: "consultation", label: "Consultation" },
      ],
    },
    success: {
      heading:     "Message Received!",
      body:        "We'll get back to you within 24 hours.",
      sendAnother: "Send Another",
    },
    error: "Something went wrong. Please try again.",
  },

  // ─── Footer ───────────────────────────────────────────────────────────────
  footer: {
    tagline:      "Crafting spaces where nature meets design. Interior excellence for homes, offices, and farm-inspired sanctuaries across Bangladesh.",
    copyright:    "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    terms:         "Terms of Service",
    sections: {
      company:  "Company",
      services: "Services",
    },
    companyLinks: [
      { label: "About Us",   href: "/about" },
      { label: "Services",   href: "/services" },
      { label: "Portfolio",  href: "/portfolio" },
      { label: "Pricing",    href: "/pricing" },
      { label: "Contact",    href: "/contact" },
    ],
    serviceLinks: [
      { label: "Residential Design",   href: "/services#residential" },
      { label: "Commercial Spaces",    href: "/services#commercial" },
      { label: "Hospitality Interiors",href: "/services#hospitality" },
      { label: "Farm & Nature",        href: "/services#farm-nature" },
      { label: "Renovation",           href: "/services#renovation" },
    ],
  },

  // ─── Pages ────────────────────────────────────────────────────────────────
  pages: {
    about: {
      heroPretitle: "About Us",
      heroHeading:  "Our Story",
      storyHeading: "Design That Grows From Nature",
      story: [
        "Founded in 2010, Afrad Corporation has spent over a decade redefining what interior design means in Bangladesh. We believe the most beautiful spaces are those that draw their inspiration from the natural world.",
        "Our signature \"Farm & Nature\" design philosophy integrates living walls, natural materials, organic forms, and biophilic principles into every project — from intimate apartments to expansive corporate campuses.",
        "Today, our 25-member team serves clients across Dhaka and beyond, delivering spaces that are as functional as they are beautiful.",
      ],
      storyCta:        "Start Your Project",
      timelinePretitle: "Our Journey",
      timelineHeading:  "Milestones",
      timeline: [
        { year: "2010", event: "Founded by Afrad Rahman in Dhaka" },
        { year: "2013", event: "First commercial project — Banani Corporate Hub" },
        { year: "2016", event: "Launched Farm & Nature interior concept" },
        { year: "2019", event: "Won National Interior Design Award" },
        { year: "2022", event: "Expanded to 25-member team" },
        { year: "2024", event: "350+ completed projects" },
      ],
      teamPretitle: "The People",
      teamHeading:  "Our Team",
      team: [
        {
          name:  "Afrad Rahman",
          role:  "Founder & Chief Designer",
          bio:   "15+ years shaping interiors across Bangladesh. Pioneer of the farm-nature design movement.",
        },
        {
          name:  "Sara Hossain",
          role:  "Creative Director",
          bio:   "Award-winning designer with expertise in luxury residential and hospitality projects.",
        },
        {
          name:  "Karim Ullah",
          role:  "Head of Commercial Design",
          bio:   "Specialist in corporate environments and biophilic commercial spaces.",
        },
        {
          name:  "Nadia Islam",
          role:  "Project Manager",
          bio:   "Ensures every project is delivered on time, on budget, and beyond expectation.",
        },
      ],
    },

    services: {
      heroPretitle: "What We Do",
      heroHeading:  "Our Services",
    },

    portfolio: {
      heroPretitle: "Our Work",
      heroHeading:  "Portfolio",
    },

    portfolioDetail: {
      backLink:       "Back to Portfolio",
      sidebarHeading: "Project Details",
      category:       "Category",
      location:       "Location",
      year:           "Year",
      area:           "Area",
      client:         "Client",
      cta:            "Start a Similar Project",
    },

    pricing: {
      heroPretitle:  "Investment",
      heroHeading:   "Our Pricing",
      faqPretitle:   "Questions",
      faqHeading:    "FAQ",
      stillHave:     "Still have questions?",
      talkCta:       "Talk to Our Team",
      faqs: [
        {
          q: "What's included in the initial consultation?",
          a: "A 2-hour session where we understand your vision, assess the space, discuss budget, and outline the design direction.",
        },
        {
          q: "How long does a typical project take?",
          a: "Residential projects typically take 8–16 weeks. Commercial projects range from 12–24 weeks depending on scope.",
        },
        {
          q: "Do you handle procurement and vendors?",
          a: "Yes — Signature and Bespoke packages include full procurement support. We work with trusted local and international suppliers.",
        },
        {
          q: "Can I customize a package?",
          a: "Absolutely. Contact us and we'll build a tailored proposal that fits your exact requirements and budget.",
        },
        {
          q: "Is there a payment plan?",
          a: "Yes. We offer milestone-based payment structures: 30% upfront, 40% at mid-project, 30% upon completion.",
        },
      ],
    },

    contact: {
      heroPretitle: "Reach Out",
      heroHeading:  "Contact Us",
    },
  },
};

export type Translations = typeof en;
