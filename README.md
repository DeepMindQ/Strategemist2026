# Strategemist

**Beyond Consulting. Engineering the Future.**

Strategemist is an IP-led technology firm backed by **11 patents**. This is the marketing & product website — a **multi-page Next.js** site rebuilt from the original Strategemist content, with every inner page preserved as its own route.

---

## What's here

- **Multi-page architecture** — a real site, not a one-pager. 65+ inner pages across six capability domains, plus About, Contact, and Case Studies.
- **Real brand** — the attached Strategemist logo (square blue wordmark), electric blue (`#2E2ED9`) brand color, **dark navy** background only.
- **Professional, restrained design** — clean typography, structured cards, subtle hovers. No flashy animations.
- **Full original content** — extracted verbatim from the 63 uploaded HTML pages into a structured content store, rendered through a dynamic route system.

## Pages

| Route | What |
| --- | --- |
| `/` | Homepage — landing that links to every section + inner page |
| `/about` | About — narrative, 3 pillars, corporate structure, governance, offices |
| `/contact` | Contact form + 4 office addresses |
| `/case-studies` + `/case-studies/[slug]` | 3 case studies (5X / 80% / 65%) |
| `/innovate/[slug]` | 12 Innovate pages (patents / deep-tech R&D) |
| `/solve/[slug]` | 12 Solve pages |
| `/transform/[slug]` | 12 Transform pages |
| `/lead/[slug]` | 8 Lead pages |
| `/empower/[slug]` | 8 Empower IP-platform pages (QµPrix™, Σ-Graphion™, …) |
| `/services/[slug]` | 13 Services pages |
| `/innovate`, `/solve`, `/transform`, `/lead`, `/empower`, `/services` | Category index pages |

## Tech stack

Next.js 16 (App Router) · TypeScript 5 · Tailwind CSS 4 · shadcn/ui · Framer Motion (subtle) · Prisma (SQLite) · z-ai-web-dev-sdk (AI assistant).

## Getting started

```bash
bun install
bun run db:push   # local SQLite for contact/newsletter
bun run dev       # http://localhost:3000
```

`.env` (git-ignored):
```
DATABASE_URL="file:/home/z/my-project/db/custom.db"
```

## Structure

```
src/
  app/
    page.tsx                       # homepage
    about/ contact/ case-studies/  # static pages
    innovate/[slug] solve/[slug] transform/[slug] lead/[slug] empower/[slug] services/[slug]
    api/ chat | contact | newsletter
  components/site/
    navbar.tsx                     # 6 mega-menus, real logo
    footer.tsx                      # 4 offices, 5 link columns, newsletter
    inner-page.tsx                  # shared inner-page layout (hero + content + related + CTA)
    page-hero.tsx content-renderer.tsx breadcrumbs.tsx category-index.tsx
    ai-assistant.tsx contact-form.tsx
  lib/
    full-content.json               # all extracted page content (540 KB)
    content.ts                      # typed access + generateStaticParams helpers
    site-data.ts                    # nav, brand, empower products, offices, etc.
    route-map.ts                    # tiny client-safe footer link map
```

## Backends

- `POST /api/chat` — "Strategemist Advisor" AI assistant (LLM, references the real IP platforms)
- `POST /api/contact` — inquiry capture (Zod + Prisma; gracefully logs if DB unavailable)
- `POST /api/newsletter` — subscription (Prisma)

## Brand

- Logo: `/public/logo.jpeg` (the attached Strategemist wordmark)
- Email: info@strategemist.com
- Social: YouTube / X / LinkedIn (@strategemist)
- Offices: US (Lewes, Delaware) · UK (London) · India (Hyderabad) · KSA (Riyadh)

© Strategemist Corporation.
