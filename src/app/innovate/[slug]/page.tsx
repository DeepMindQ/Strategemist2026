import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PageHero } from '@/components/site/page-hero'
import { ContentRenderer, BusinessImpact, KeyTakeaways, ModuleFlow } from '@/components/site/content-renderer'
import { ReadingProgress } from '@/components/site/reading-progress'
import { Glossary } from '@/components/site/glossary'
import { PatentDiagram } from '@/components/site/patent-diagram'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, FileText, Clock, Share2 } from 'lucide-react'
import { getPage, getAllSlugs, CATEGORY_META, getPages } from '@/lib/content'
import { REAL_PATENTS, getRealPatent } from '@/lib/patents'
import { BRAND } from '@/lib/site-data'

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

const INDUSTRIES = ['Financial Services', 'Healthcare', 'Manufacturing', 'Logistics', 'Energy', 'Public Sector']

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = getPage('innovate', slug)
  if (!page) notFound()

  const patent = getRealPatent(slug)
  const siblings = getPages('innovate').filter((p) => p.slug !== slug).slice(0, 6)
  const figureLabel = `FIG. ${slug.slice(0, 4).toUpperCase()}`

  const takeaways = patent ? [
    patent.field,
    `Reduces O(2ⁿ) to O(log n) — infeasible problems become minutes`,
    `Backed by real patent ${patent.id} · filed by Strategemist Global Pvt Ltd`,
  ] : []

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
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Innovate', href: '/innovate' }, { label: patent?.shortName || page.navLabel || '' }]}
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {/* reading time + share */}
          <div className="mb-8 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> 5 min read</span>
            <span className="font-mono text-[10px] text-muted-foreground/50">Last updated: Q3 2026</span>
          </div>

          {takeaways.length > 0 && <KeyTakeaways items={takeaways} />}

          {patent && (
            <div className="mb-12 space-y-8">
              {/* patent metadata bar (item 42) */}
              <div className="flex flex-wrap items-center gap-3 rounded-lg border border-gold/20 bg-gold/5 px-4 py-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-gold/15 px-2.5 py-1 text-xs font-bold text-gold ring-1 ring-gold/20">
                  <FileText className="h-3.5 w-3.5" /> Patent
                </span>
                <span className="text-xs text-muted-foreground">Filed by: Strategemist Global Pvt Ltd · Category: {patent.category}</span>
              </div>

              {/* key innovation */}
              <div>
                <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight"><span className="num-mono text-sm text-primary/50">§01</span> Key innovation</h2>
                <p className="mt-3 text-base leading-[1.7] text-foreground/85">{patent.innovation}</p>
              </div>

              {/* business impact (item 39) */}
              <BusinessImpact>
                This patent reduces computational complexity from O(2ⁿ) to O(log n) — turning previously infeasible problems into minutes of compute. For enterprises, that means decisions that took days now happen in real time.
              </BusinessImpact>

              {/* system architecture diagram (items 26-37) */}
              <PatentDiagram patentId={slug} />

              {/* modules with flow connectors (items 40-41) */}
              <div>
                <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight"><span className="num-mono text-sm text-primary/50">§02</span> System architecture — {patent.modules.length} modules</h2>
                <ModuleFlow count={patent.modules.length} />
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {patent.modules.map((m) => (
                    <div key={m.ref} className="group flex items-center gap-3 rounded-lg border border-white/8 bg-card/50 p-3 card-hover hover:border-primary/30">
                      <span className="grid h-8 w-12 shrink-0 place-items-center rounded bg-primary/12 font-mono text-xs font-bold text-primary">{m.ref}</span>
                      <span className="text-sm text-foreground/80">{m.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* technical vocabulary with glossary (item 43) */}
              <div>
                <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight"><span className="num-mono text-sm text-primary/50">§03</span> Technical vocabulary</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {patent.keyTerms.map((t) => (
                    <Glossary key={t} term={t} className="rounded-lg border border-white/8 bg-white/[0.02] px-3 py-1.5 text-sm text-foreground/75">{t}</Glossary>
                  ))}
                </div>
              </div>

              {/* industry applications (item 48) */}
              <div>
                <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight"><span className="num-mono text-sm text-primary/50">§04</span> Industry applications</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {INDUSTRIES.map((ind) => (
                    <span key={ind} className="rounded-full bg-gold/12 px-3 py-1 text-xs font-medium text-gold">{ind}</span>
                  ))}
                </div>
              </div>

              {/* what makes this novel (item 55) */}
              <div>
                <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight"><span className="num-mono text-sm text-primary/50">§05</span> What makes this novel</h2>
                <ul className="mt-4 space-y-2.5">
                  <li className="flex items-start gap-2.5 text-sm text-foreground/85"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold" /> Combines quantum-inspired algorithms with enterprise-scale data processing — not theoretical quantum, but practically applicable today.</li>
                  <li className="flex items-start gap-2.5 text-sm text-foreground/85"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold" /> Self-adaptive computational architecture that reconfigures neural processing pathways in response to changing workloads.</li>
                  <li className="flex items-start gap-2.5 text-sm text-foreground/85"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold" /> Logarithmic-scale probabilistic exploration — a fundamentally different traversal model from conventional approaches.</li>
                </ul>
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
              <Link href="/innovate" className="hidden shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline sm:inline-flex">View all <ArrowRight className="h-4 w-4" /></Link>
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

      {/* CTA — patent-specific */}
      <section className="border-t border-border/50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">{BRAND.tagline}</h2>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2 rounded-lg"><Link href="/contact">License this IP <ArrowRight className="h-4 w-4" /></Link></Button>
            <Button asChild size="lg" variant="outline" className="rounded-lg"><Link href="/contact">Book a briefing</Link></Button>
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
