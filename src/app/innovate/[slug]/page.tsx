import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PageHero } from '@/components/site/page-hero'
import { ContentRenderer } from '@/components/site/content-renderer'
import { ReadingProgress } from '@/components/site/reading-progress'
import { Glossary } from '@/components/site/glossary'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, FileText } from 'lucide-react'
import { getPage, getAllSlugs, CATEGORY_META, getPages, type PageContent, type Category } from '@/lib/content'
import { REAL_PATENTS, getRealPatent } from '@/lib/patents'
import { BRAND } from '@/lib/site-data'
import { CountUp } from '@/components/site/count-up'

export const dynamicParams = false

export function generateStaticParams() {
  return getAllSlugs('innovate').map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = getPage('innovate', slug)
  const patent = getRealPatent(slug)
  return {
    title: patent ? `${patent.title} — Strategemist` : `${page?.navLabel ?? 'Innovate'} — Strategemist`,
    description: patent?.innovation?.slice(0, 160) || page?.hero?.intro || CATEGORY_META.innovate.blurb,
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = getPage('innovate', slug)
  if (!page) notFound()

  const patent = getRealPatent(slug)
  const siblings = getPages('innovate').filter((p) => p.slug !== slug).slice(0, 6)
  const figureLabel = `FIG. ${slug.slice(0, 4).toUpperCase()}`

  return (
    <>
      <ReadingProgress />
      <PageHero
        eyebrow="INNOVATE"
        stage="IP"
        title={patent?.shortName || page.hero?.title || page.navLabel || ''}
        subtitle={patent?.field || page.hero?.subtitle}
        intro={patent ? patent.problem : page.hero?.intro}
        figureLabel={figureLabel}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Innovate', href: '/innovate' },
          { label: patent?.shortName || page.navLabel || '' },
        ]}
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {patent && (
            /* Real patent data — innovation, modules, key terms with glossary */
            <div className="mb-14 space-y-10">
              {/* gold patent badge */}
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-gold/15 px-3 py-1 text-xs font-bold text-gold ring-1 ring-gold/20">
                  <FileText className="h-3.5 w-3.5" /> Patent
                </span>
                <span className="text-sm font-medium text-muted-foreground">{patent.title}</span>
              </div>

              {/* key innovation */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Key innovation</h2>
                <p className="mt-3 text-base leading-relaxed text-foreground/85">{patent.innovation}</p>
              </div>

              {/* system architecture — real numbered modules */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight">System architecture — {patent.modules.length} modules</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {patent.modules.map((m) => (
                    <div key={m.ref} className="flex items-center gap-3 rounded-lg border border-white/8 bg-card/50 p-3">
                      <span className="grid h-8 w-12 shrink-0 place-items-center rounded bg-primary/12 font-mono text-xs font-bold text-primary">{m.ref}</span>
                      <span className="text-sm text-foreground/80">{m.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* technical vocabulary with glossary tooltips */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Technical vocabulary</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {patent.keyTerms.map((t) => (
                    <Glossary key={t} term={t} className="rounded-lg border border-white/8 bg-white/[0.02] px-3 py-1.5 text-sm text-foreground/75">{t}</Glossary>
                  ))}
                </div>
              </div>

              {/* category badge */}
              <div>
                <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">Category: {patent.category}</span>
              </div>
            </div>
          )}

          {/* remaining content from the original extracted HTML */}
          <ContentRenderer sections={page.sections || []} />
        </div>
      </section>

      {/* Related patents */}
      {siblings.length > 0 && (
        <section className="border-t border-border/50 bg-muted/20 py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">More patents</div>
                <h2 className="mt-2 text-2xl font-bold tracking-tight">Explore the rest of the vault</h2>
              </div>
              <Link href="/innovate" className="hidden shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline sm:inline-flex">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {siblings.map((s) => (
                <Link key={s.slug} href={`/innovate/${s.slug}`} className="group flex items-center justify-between rounded-xl border border-white/8 bg-card/50 p-4 transition-colors hover:border-primary/30 hover:bg-primary/5">
                  <span className="text-sm font-medium leading-tight">{s.navLabel || s.hero?.title}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-border/50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">{BRAND.tagline}</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Bring us your hardest deep-tech problem. We&apos;ll bring the IP, the method, and measurable outcomes.</p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2 rounded-full"><a href={BRAND.ctaPrimaryHref} target="_blank" rel="noopener noreferrer">{BRAND.ctaPrimary} <ArrowRight className="h-4 w-4" /></a></Button>
            <Button asChild size="lg" variant="outline" className="rounded-full"><Link href="/contact">Book a briefing</Link></Button>
          </div>
        </div>
      </section>

      <div className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <Link href="/innovate" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" /> Back to Innovate</Link>
        </div>
      </div>
    </>
  )
}
