import content from './full-content.json'

/* ============================================================
   Typed access to the full extracted Strategemist content.
   ============================================================ */

export interface HeroContent {
  eyebrow?: string
  title: string
  subtitle?: string
  intro?: string
}

export interface CardItem {
  title?: string
  description?: string
}

export interface ContentSection {
  type: 'heading-paragraph' | 'cards' | 'list' | 'comparison' | 'timeline'
  heading?: string
  intro?: string
  body?: string
  items?: CardItem[] | string[]
  columns?: { title: string; items: string[] }[]
}

export interface PageContent {
  slug: string
  filename?: string
  navLabel?: string
  metaTitle?: string
  hero: HeroContent
  sections: ContentSection[]
}

export interface AboutContent {
  hero?: HeroContent
  sections?: ContentSection[]
  [k: string]: unknown
}

export interface CaseStudyContent {
  slug: string
  title?: string
  industry?: string
  narrative?: string
  challenge?: string
  solution?: string
  results?: string[]
  metric?: string
}

interface FullContent {
  innovate: PageContent[]
  solve: PageContent[]
  transform: PageContent[]
  lead: PageContent[]
  empower: PageContent[]
  services: PageContent[]
  about: AboutContent
  caseStudies: CaseStudyContent[]
  team?: unknown
  home?: unknown
}

const data = content as FullContent

export const CATEGORIES = ['innovate', 'solve', 'transform', 'lead', 'empower', 'services'] as const
export type Category = (typeof CATEGORIES)[number]

export const CATEGORY_META: Record<Category, { label: string; title: string; blurb: string }> = {
  innovate: { label: 'Innovate', title: 'Innovate', blurb: 'Patent-backed deep-tech research and breakthroughs.' },
  solve: { label: 'Solve', title: 'Solve', blurb: 'Smart, secure, scalable, future-ready enterprise solutions.' },
  transform: { label: 'Transform', title: 'Transform', blurb: 'Intelligent reinvention for the enterprise of the future.' },
  lead: { label: 'Lead', title: 'Lead', blurb: 'Strategy and thought leadership for market-making enterprises.' },
  empower: { label: 'Empower', title: 'Empower', blurb: 'Eight proprietary, patent-backed IP platforms.' },
  services: { label: 'Services', title: 'Services', blurb: 'Consulting and delivery across the data & AI stack.' },
}

export function getPages(category: Category): PageContent[] {
  return data[category] ?? []
}

export function getPage(category: Category, slug: string): PageContent | null {
  return (data[category] ?? []).find((p) => p.slug === slug) ?? null
}

export function getAllSlugs(category: Category): string[] {
  return (data[category] ?? []).map((p) => p.slug)
}

/* Resolve a display label (e.g. "AI Proof of Concept (PoC)") to its actual
   inner-page route using the real slug from the content JSON. Falls back to
   the category index if no match. */
export function routeForLabel(category: Category, label: string): string {
  const pages = getPages(category)
  const found = pages.find((p) => (p.navLabel || p.hero?.title || '') === label)
  if (found) return `/${category}/${found.slug}`
  return `/${category}`
}

export function getAbout(): AboutContent {
  return data.about
}

export function getCaseStudies(): CaseStudyContent[] {
  return data.caseStudies ?? []
}

export function getCaseStudy(slug: string): CaseStudyContent | null {
  return (data.caseStudies ?? []).find((c) => c.slug === slug) ?? null
}

/* Navigation + brand (kept in sync with site-data.ts) */
export { NAV_GROUPS, EMPOWER_PRODUCTS, OFFICES, CORPORATE_STRUCTURE, BRAND, FOOTER_COLUMNS, SOCIAL } from './site-data'
