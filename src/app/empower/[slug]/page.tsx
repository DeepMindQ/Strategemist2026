import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PageHero } from '@/components/site/page-hero'
import { ContentRenderer, type ContentSection } from '@/components/site/content-renderer'
import { ReadingProgress } from '@/components/site/reading-progress'
import { Glossary } from '@/components/site/glossary'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, FileText, Shield } from 'lucide-react'
import { EMPOWER_PRODUCTS, BRAND } from '@/lib/site-data'
import { getRealPatent } from '@/lib/patents'

export const dynamicParams = false

export function generateStaticParams() {
  return EMPOWER_PRODUCTS.map((p) => ({ slug: p.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = EMPOWER_PRODUCTS.find((x) => x.id === slug)
  return { title: p ? `${p.name} — Strategemist Empower` : 'Empower — Strategemist', description: p?.description }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = EMPOWER_PRODUCTS.find((x) => x.id === slug)
  if (!product) notFound()

  const patent = product.patentRef ? getRealPatent(product.patentRef) : null
  const siblings = EMPOWER_PRODUCTS.filter((p) => p.id !== slug)
  const figureLabel = `FIG. ${slug.slice(0, 4).toUpperCase()}`

  const sections: ContentSection[] = [
    {
      type: 'cards',
      heading: 'Feature / Benefit',
      items: [
        { title: product.tagline, description: product.description },
        { title: 'Patent-backed', description: 'Built on Strategemist\'s 11-patent IP portfolio — not generic AI, but filed, specific IP.' },
        { title: 'Production-grade', description: 'Observability, guardrails, and governance built in from the first commit.' },
        { title: 'Composable', description: 'Integrates with the other 7 Empower platforms and the three delivery pillars.' },
      ],
    },
    {
      type: 'cards',
      heading: 'How it fits the Strategemist system',
      items: [
        { title: 'Data Foundations', description: 'Feeds on governed, lineage-tracked data from InsightMesh-style fabrics.' },
        { title: 'Applied AI & Automation', description: 'Embeds into workflows with explicit guardrails and human-in-the-loop.' },
        { title: 'Secure, Reliable Delivery', description: 'Ships on zero-trust, SRE-grade rails with audit-ready evidence.' },
      ],
    },
    {
      type: 'list',
      heading: 'Deployment options',
      items: ['Cloud (SaaS)', 'On-premises', 'Hybrid', 'Edge (for low-latency inference)'],
    },
    {
      type: 'cards',
      heading: 'Industry use cases',
      items: [
        { title: 'Financial Services', description: 'Fraud detection, risk modeling, compliance automation.' },
        { title: 'Healthcare', description: 'Diagnostics, patient ops, drug discovery acceleration.' },
        { title: 'Manufacturing', description: 'Predictive maintenance, quality control, supply optimization.' },
      ],
    },
  ]

  return (
    <>
      <ReadingProgress />
      <PageHero
        eyebrow="EMPOWER"
        stage="Platforms"
        title={product.name}
        subtitle={product.tagline}
        intro={product.description}
        figureLabel={figureLabel}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Empower', href: '/empower' }, { label: product.name }]}
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* linked real patent */}
          {patent && (
            <div className="mb-14 rounded-2xl border border-gold/20 bg-gold/5 p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-gold/15 px-3 py-1 text-xs font-bold text-gold ring-1 ring-gold/20">
                  <FileText className="h-3.5 w-3.5" /> Patent
                </span>
                <span className="text-sm font-medium text-muted-foreground">{patent.title}</span>
              </div>
              <h2 className="mt-5 text-2xl font-bold tracking-tight">{patent.shortName}</h2>
              <p className="mt-3 text-base leading-relaxed text-foreground/85">{patent.innovation}</p>

              {/* modules */}
              <h3 className="mt-6 text-lg font-bold">System architecture — {patent.modules.length} modules</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {patent.modules.map((m) => (
                  <div key={m.ref} className="flex items-center gap-3 rounded-lg border border-white/8 bg-card/50 p-3">
                    <span className="grid h-8 w-12 shrink-0 place-items-center rounded bg-primary/12 font-mono text-xs font-bold text-primary">{m.ref}</span>
                    <span className="text-sm text-foreground/80">{m.name}</span>
                  </div>
                ))}
              </div>

              {/* glossary terms */}
              <h3 className="mt-6 text-lg font-bold">Technical vocabulary</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {patent.keyTerms.map((t) => (
                  <Glossary key={t} term={t} className="rounded-lg border border-white/8 bg-white/[0.02] px-3 py-1.5 text-sm text-foreground/75">{t}</Glossary>
                ))}
              </div>
              <Link href={`/innovate/${patent.id}`} className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-400">
                View full patent specification <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}

          {/* trust badges for security platforms (items 59) */}
          {(slug === 'federis' || slug === 'ethicsense') && (
            <div className="mb-10 flex flex-wrap gap-2">
              {['SOC 2 (in process)', 'ISO 27001', 'GDPR', 'HIPAA-ready'].map((b) => (
                <span key={b} className="inline-flex items-center gap-1 rounded border border-white/10 bg-white/[0.02] px-2 py-0.5 text-[10px] font-medium text-muted-foreground"><Shield className="h-2.5 w-2.5 text-gold" /> {b}</span>
              ))}
            </div>
          )}

          {/* platform specs table (item 65) */}
          <div className="mb-10 rounded-xl border border-white/8 bg-card/30 p-5">
            <div className="font-mono text-[10px] uppercase tracking-wider text-primary mb-3">Platform Specs</div>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { l: 'Status', v: 'v1.0 · Production Ready' },
                { l: 'Latency', v: '< 40ms p99' },
                { l: 'Throughput', v: '10M+ transactions/sec' },
                { l: 'Model type', v: product.tagline },
              ].map((s) => (
                <div key={s.l} className="flex items-center justify-between rounded-lg border border-white/8 bg-white/[0.02] px-3 py-2">
                  <span className="text-xs text-muted-foreground">{s.l}</span>
                  <span className="text-xs font-medium text-foreground/85">{s.v}</span>
                </div>
              ))}
            </div>
          </div>

          <ContentRenderer sections={sections} />
        </div>
      </section>

      {/* Related platforms */}
      <section className="border-t border-border/50 bg-muted/20 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight">The other Empower platforms</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {siblings.map((s) => (
              <Link key={s.id} href={`/empower/${s.id}`} className="group flex flex-col rounded-xl border border-white/8 bg-card/50 p-5 transition-colors hover:border-primary/30 hover:bg-primary/5">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary">{s.symbol}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <h3 className="mt-3 text-sm font-bold">{s.name}</h3>
                <p className="mt-1 text-xs font-medium text-primary">{s.tagline}</p>
                {s.patentName && <span className="mt-2 inline-flex items-center gap-1 rounded bg-gold/12 px-2 py-0.5 text-[10px] font-medium text-gold">{s.patentName}</span>}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">{BRAND.manifesto}</h2>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2 rounded-full"><a href={BRAND.ctaPrimaryHref} target="_blank" rel="noopener noreferrer">{BRAND.ctaPrimary} <ArrowRight className="h-4 w-4" /></a></Button>
            <Button asChild size="lg" variant="outline" className="rounded-full"><Link href="/contact">Book a briefing</Link></Button>
          </div>
        </div>
      </section>

      <div className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <Link href="/empower" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" /> Back to Empower</Link>
        </div>
      </div>
    </>
  )
}
