# Strategemist

**BEYOND CONSULTING. ENGINEERING THE FUTURE.**

Strategemist is an IP-led technology firm backed by **11 patents** — uniting quantum-inspired computing, contextual intelligence, and applied AI to engineer enterprise transformation. This repository is the marketing & product website, rebuilt as a production-grade Next.js application from the original Strategemist content.

---

## Highlights

- **Next.js 16** (App Router) + **TypeScript 5** + **Tailwind CSS 4** + **shadcn/ui**
- **Dark-first** brand design (emerald/teal primary, amber/gold accent) with full light mode
- **Heavy animations** — orbiting IP-product ring, gradient-pan text, glow pulses, marquees, tab transitions, scroll reveals (Framer Motion)
- **15+ content sections** on a single page, mirroring the original site's information architecture:
  - Hero (`BEYOND CONSULTING. ENGINEERING THE FUTURE.` + 11 patents)
  - **Empower** — 8 proprietary IP-platform products (QµPrix™, Σ-Graphion™, ReinQlynix™, Neuro-Quantus™, Φ-Federis™, EthicSense™, G(π)-Forma™, HoloSense™)
  - **Innovate** — 12 patents + visionary innovators marquee
  - **Solve** / **Transform** — tabbed capability areas (Intelligence / Security / Performance / Infrastructure · Evolution / Acceleration / Resilience / Optimization)
  - **Security** grid — 9 frameworks (ISO 27001, NIST, MITRE ATT&CK, FedRAMP, CMMC, etc.)
  - **Lead** — 8 strategy cards
  - **The Strategemist Edge** — 6 cards + 6-step deployment methodology
  - **About** — narrative, 3 execution pillars, differential, corporate structure, governance
  - **Team** — 12 leadership + 4 advisory (modals)
  - **Case Studies** — 5X faster execution · 80% threat reduction · 65% fewer disruptions
  - **Services** — 13 services across 4 lanes
  - Contact, CTA, Footer with 4 office addresses
- **Interactive backends**
  - `POST /api/chat` — "Strategemist Advisor" AI assistant (LLM, references the real IP platforms)
  - `POST /api/contact` — validated inquiry capture (Zod + Prisma + SQLite)
  - `POST /api/newsletter` — newsletter subscription (Prisma)
- **Sticky footer**, fully responsive (mobile-first), accessible

## Real content preserved

- **Logo**: Strategemist hexagon-gem mark
- **Footer**: `info@strategemist.com` · YouTube / X / LinkedIn · About · Career (LinkedIn) · Terms
- **Offices**: US (Lewes, Delaware), UK (London), India (Hyderabad), KSA (Riyadh)
- **Social**: https://www.youtube.com/@Strategemist · https://x.com/strategemist · https://www.linkedin.com/company/strategemist/

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + shadcn/ui (New York) |
| Animation | Framer Motion |
| Forms | react-hook-form + Zod |
| Database | Prisma ORM (SQLite) |
| AI | z-ai-web-dev-sdk (LLM) |

## Getting started

```bash
bun install
bun run db:push   # create the local SQLite DB
bun run dev       # http://localhost:3000
```

> The dev server must run on port 3000.

### Environment

`.env` (git-ignored):

```
DATABASE_URL="file:/home/z/my-project/db/custom.db"
```

## Project structure

```
src/
  app/
    api/
      chat/route.ts          # Strategemist Advisor (LLM)
      contact/route.ts       # inquiry capture (Prisma)
      newsletter/route.ts    # subscription (Prisma)
    layout.tsx
    page.tsx                 # composes all sections
    globals.css              # brand theme + animations
  components/
    site/                    # all website sections + AI assistant
    ui/                      # shadcn/ui primitives
  lib/
    site-data.ts             # all Strategemist content
    db.ts                    # prisma client
    utils.ts
prisma/
  schema.prisma              # ContactInquiry, NewsletterSubscriber
```

## License

All rights reserved © Strategemist Corporation.
