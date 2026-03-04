# Afrad Corporation — Interior Design Website

A modern, full-featured interior design company website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Designed to showcase projects, services, and pricing with a refined aesthetic and smooth animations.

---

## Features

- **Multi-section homepage** — Hero slider with parallax, about, services, portfolio, video, pricing, testimonials, and contact
- **Dark mode** — Smooth theme switching via `next-themes`
- **Animated UI** — Scroll-reveal animations, marquee strips, count-up stats, and letter-by-letter hero reveals using Framer Motion
- **Portfolio gallery** — Filterable project grid with dynamic `[slug]` detail pages
- **Pricing tiers** — Residential / Commercial toggle with three service packages
- **Contact form** — Server-side form handler with email delivery via [Resend](https://resend.com)
- **Security hardened** — CSP headers, HSTS, X-Frame-Options, and more configured in `next.config.ts`
- **Responsive** — Mobile-first layout across all pages

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Email | Resend |
| Theming | next-themes |
| Fonts | Playfair Display · Montserrat · Raleway |

---

## Project Structure

```
├── app/
│   ├── page.tsx                  # Home page
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── portfolio/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx       # Dynamic project detail
│   ├── pricing/page.tsx
│   ├── contact/page.tsx
│   └── api/contact/route.ts      # Contact form API endpoint
├── components/
│   ├── home/                     # All home page sections
│   │   ├── HeroSlider.tsx
│   │   ├── MarqueeBanner.tsx
│   │   ├── AboutSection.tsx
│   │   ├── CoreValues.tsx
│   │   ├── ServicesShowcase.tsx
│   │   ├── PortfolioPreview.tsx
│   │   ├── VideoSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ClientLogos.tsx
│   │   └── ContactCTA.tsx
│   ├── layout/                   # Navbar, Footer, FloatingButtons
│   └── ui/                       # Button, ThemeToggle
├── lib/
│   └── data/                     # Static data: projects, services, testimonials
├── styles/
│   └── globals.css               # CSS variables, keyframes, reveal animations
└── tailwind.config.ts            # Custom colors, fonts, animations
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/mdatikshahriar/interior_web.git
cd interior_web
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `CONTACT_RECEIVER_EMAIL` | Inbox that receives form submissions |
| `CONTACT_FROM_EMAIL` | Verified sender domain in Resend |

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production

```bash
npm run build
npm start
```

---

## Design System

| Token | Value | Usage |
|---|---|---|
| `soil` | `#2C1F14` | Primary dark background |
| `harvest` | `#C8A96E` | Gold accent / highlights |
| `cream` | `#FAF6EF` | Light background |
| `linen` | `#F0E8D8` | Secondary light surface |
| `moss` | `#4A5C3F` | Nature accent |
| `stone` | `#7A7268` | Muted text |

---

## Pages

| Route | Description |
|---|---|
| `/` | Full homepage with all sections |
| `/about` | Company story and team |
| `/services` | Service offerings detail |
| `/portfolio` | Filterable project gallery |
| `/portfolio/[slug]` | Individual project case study |
| `/pricing` | Residential & commercial pricing tiers |
| `/contact` | Contact form + location info |

---

## License

This project is private and proprietary to **Afrad Corporation**. Not licensed for redistribution.
