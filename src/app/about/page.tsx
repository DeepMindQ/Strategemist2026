import type { Metadata } from 'next'
import { PageHero } from '@/components/site/page-hero'
import { ContentRenderer } from '@/components/site/content-renderer'
import { getAbout } from '@/lib/content'
import { CORPORATE_STRUCTURE, OFFICES, BRAND } from '@/lib/site-data'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About — Strategemist',
  description: 'Strategemist unites data, AI, and delivery excellence to help enterprises move from insight to impact at boardroom speed.',
}

export default function AboutPage() {
  const about = getAbout()
  const hero = about.hero || {}

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow || 'About Strategemist'}
        title={hero.title || 'Orchestrated Intelligence → Measurable Outcomes'}
        subtitle={hero.subtitle}
        intro={hero.intro}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <ContentRenderer sections={about.sections || []} />
        </div>
      </section>

      {/* Corporate structure */}
      <section className="border-t border-border/50 bg-muted/20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Corporate Structure</div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">One Strategemist — global assurance architecture</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CORPORATE_STRUCTURE.map((c, i) => (
              <div key={c.name} className="rounded-xl border border-border/60 bg-card/50 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">{c.role}</span>
                  <span className="text-xs font-mono text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-2 text-base font-semibold leading-tight">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Global Footprint</div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Global footprint, local context</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OFFICES.map((o) => (
              <div key={o.country} className="rounded-xl border border-border/60 bg-card/50 p-5">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-accent">{o.role}</div>
                <h3 className="mt-1.5 text-lg font-semibold">{o.country}</h3>
                <p className="mt-1 text-xs font-medium text-primary">{o.entity}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{o.address}</p>
                <p className="mt-3 text-xs text-foreground/80">{o.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">{BRAND.tagline}</h2>
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
    </>
  )
}
