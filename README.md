# Strategemist

**IP-led deep-tech, engineered for outcomes.**

Strategemist is an IP-led technology firm focused on enabling digital transformation
through advanced predictive analytics, AI, automation, and intelligent systems — turning
deep-tech innovation into scalable business outcomes.

This repository contains the marketing & product website for Strategemist, built as a
production-grade Next.js application.

---

## Highlights

- **Next.js 16** (App Router) + **TypeScript 5** + **Tailwind CSS 4** + **shadcn/ui**
- **Dark-first** brand design (emerald/teal primary, amber/gold accent) with full light mode
- **13 sections** on a single page: hero, stats, capabilities, approach, IP portfolio,
  live analytics demo, case studies, industries, differentiators, insights, CTA, contact, footer
- **Interactive demos**
  - Live predictive-analytics dashboard (Recharts) with scenario switching + confidence band
  - "Ask Strategemist" floating AI assistant (LLM-powered)
- **Real backends**
  - `POST /api/chat` — multi-turn AI advisor via `z-ai-web-dev-sdk`
  - `POST /api/contact` — validated inquiry capture (Zod + Prisma + SQLite)
  - `POST /api/newsletter` — newsletter subscription (Prisma)
- **Sticky footer**, fully responsive (mobile-first), accessible, Framer Motion animations

## Tech stack

| Layer        | Choice                                  |
| ------------ | --------------------------------------- |
| Framework    | Next.js 16 (App Router, Turbopack)      |
| Language     | TypeScript 5                            |
| Styling      | Tailwind CSS 4 + shadcn/ui (New York)   |
| Charts       | Recharts                                |
| Animation    | Framer Motion                           |
| Forms        | react-hook-form + Zod                   |
| Database     | Prisma ORM (SQLite)                     |
| AI           | z-ai-web-dev-sdk (LLM, VLM, ...)        |

## Getting started

```bash
# install deps
bun install

# push the prisma schema to a local sqlite db
bun run db:push

# start the dev server on http://localhost:3000
bun run dev
```

> The dev server must run on port 3000. Do not use `bun run build` for local development.

### Environment

Create a `.env` file (already git-ignored):

```
DATABASE_URL="file:/home/z/my-project/db/custom.db"
```

## Project structure

```
src/
  app/
    api/
      chat/route.ts        # AI advisor (LLM)
      contact/route.ts     # inquiry capture (Prisma)
      newsletter/route.ts  # subscription (Prisma)
    layout.tsx
    page.tsx               # composes all sections
    globals.css            # brand theme
  components/
    site/                  # all website sections + AI assistant
    ui/                    # shadcn/ui primitives
  lib/
    data.ts                # all site copy & content
    db.ts                  # prisma client
    utils.ts
prisma/
  schema.prisma            # ContactInquiry, NewsletterSubscriber
```

## IP portfolio referenced on the site

ForeCortex · CognoGuard · FlowLoom · SightLine · TwinForge · InsightMesh

## License

All rights reserved © Strategemist, Inc.
