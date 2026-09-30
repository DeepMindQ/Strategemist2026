import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PageHero } from '@/components/site/page-hero'
import { ContentRenderer, type ContentSection } from '@/components/site/content-renderer'
import { EMPOWER_PRODUCTS, BRAND } from '@/lib/site-data'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const dynamicParams = false

export function generateStaticParams() {
  return EMPOWER_PRODUCTS.map((p) => ({ slug: p.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = EMPOWER_PRODUCTS.find((x) => x.id === slug)
  return {
    title: p ? `${p.name} — Strategemist Empower` : 'Empower — Strategemist',
    description: p?.description || 'A proprietary Strategemist IP platform.',
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = EMPOWER_PRODUCTS.find((x) => x.id === slug)
  if (!product) notFound()

  const siblings = EMPOWER_PRODUCTS.filter((p) => p.id !== slug)

  const sections: ContentSection[] = [
    {
      type: 'cards',
      heading: 'Core Capabilities',
      items: [
        { title: 'Symbol', description: `${product.symbol} — the ${product.name} signature.` },
        { title: 'Domain', description: product.tagline },
        { title: 'What it does', description: product.description },
      ],
    },
    {
      type: 'list',
      heading: 'Why it matters',
      items: [
        'Patent-backed: built on Strategemist’s 11-patent IP portfolio',
        'Production-grade: observability, guardrails, and governance built in',
        'Composable: integrates with the other Empower platforms and our three delivery pillars',
        'Outcome-linked: shipped with a benefit hypothesis and value instrumentation',
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
  ]

  return (
    <>
      <PageHero
        eyebrow={`Empower · ${product.symbol}`}
        title={product.name}
        subtitle={product.tagline}
        intro={product.description}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Empower', href: '/empower' },
          { label: product.name },
        ]}
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <ContentRenderer sections={sections} />
        </div>
      </section>

      <section className="border-t border-border/50 bg-muted/20 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight">The other Empower platforms</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {siblings.map((s) => (
              <Link key={s.id} href={`/empower/${s.id}`} className="group flex items-center justify-between rounded-xl border border-border/60 bg-card/50 p-4 transition-colors hover:border-primary/50 hover:bg-primary/5">
                <div>
                  <div className="text-xs text-muted-foreground">{s.symbol}</div>
                  <div className="text-sm font-medium">{s.name}</div>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">{BRAND.tagline}</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            See {product.name} in the context of a real engagement. Book a briefing.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2 rounded-full">
              <a href={BRAND.ctaPrimaryHref} target="_blank" rel="noopener noreferrer">{BRAND.ctaPrimary} <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/contact">Book a briefing</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <Link href="/empower" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Empower
          </Link>
        </div>
      </div>
    </>
  )
}
