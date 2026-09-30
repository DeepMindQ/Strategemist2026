import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { PageHero } from './page-hero'
import { ContentRenderer } from './content-renderer'
import { ReadingProgress } from './reading-progress'
import { Button } from '@/components/ui/button'
import { PageContent, Category, CATEGORY_META, getPages } from '@/lib/content'
import { BRAND, EMPOWER_PRODUCTS } from '@/lib/site-data'
import { SOLVE_ICONS, LEAD_ICONS } from './custom-icons'

const ICON_MAPS: Record<string, Record<string, () => JSX.Element>> = {
  solve: SOLVE_ICONS,
  lead: LEAD_ICONS,
}

export function InnerPage({ page, category }: { page: PageContent; category: Category }) {
  const meta = CATEGORY_META[category]
  const siblings = getPages(category).filter((p) => p.slug !== page.slug).slice(0, 6)

  const hero = page.hero || {}
  const heroTitle = hero.title || page.navLabel || page.metaTitle || ''
  const heroSubtitle = hero.subtitle
  const heroIntro = hero.intro

  // figure label for the blueprint aesthetic
  const figureLabel = `FIG. ${page.slug?.slice(0, 4).toUpperCase()}`

  return (
    <>
      <ReadingProgress />
      <PageHero
        eyebrow={meta.label.toUpperCase()}
        stage={meta.label}
        title={heroTitle}
        subtitle={heroSubtitle}
        intro={heroIntro}
        figureLabel={figureLabel}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: meta.label, href: `/${category}` },
          { label: page.navLabel || heroTitle },
        ]}
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <ContentRenderer sections={page.sections || []} />
        </div>
      </section>

      {/* Related pages in the same category */}
      {siblings.length > 0 && (
        <section className="border-t border-border/50 bg-muted/20 py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">More in {meta.label}</div>
                <h2 className="mt-2 text-2xl font-bold tracking-tight">Explore related {meta.label.toLowerCase()} capabilities</h2>
              </div>
              <Link href={`/${category}`} className="hidden shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline sm:inline-flex">
                View all {meta.label} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {siblings.map((s) => {
                const iconMap = ICON_MAPS[category]
                const Icon = iconMap?.[s.navLabel || s.hero?.title || '']
                return (
                  <Link
                    key={s.slug}
                    href={`/${category}/${s.slug}`}
                    className="group flex items-center gap-3 rounded-xl border border-white/8 bg-card/50 p-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
                  >
                    {Icon && <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110"><Icon /></span>}
                    <span className="flex-1 text-sm font-medium leading-tight">{s.navLabel || s.hero?.title}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-border/50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">{BRAND.tagline}</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Bring us your hardest deep-tech problem. We&apos;ll bring the IP, the method, and measurable outcomes.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2 rounded-full">
              <a href={BRAND.ctaPrimaryHref} target="_blank" rel="noopener noreferrer">
                {BRAND.ctaPrimary} <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/contact">Book a briefing</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <Link href={`/${category}`} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to {meta.label}
          </Link>
        </div>
      </div>
    </>
  )
}
