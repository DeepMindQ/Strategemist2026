import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { getCaseStudies } from '@/lib/content'
import { BRAND } from '@/lib/site-data'
import { Button } from '@/components/ui/button'

export const dynamicParams = false

export function generateStaticParams() {
  return getCaseStudies().map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const c = getCaseStudies().find((x) => x.slug === slug)
  return { title: c?.title ? `${c.title} — Strategemist` : 'Case Study — Strategemist', description: c?.narrative?.slice(0, 160) }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getCaseStudies().find((x) => x.slug === slug)
  if (!study) notFound()
  const others = getCaseStudies().filter((c) => c.slug !== slug)

  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title={study.title || 'Case Study'}
        intro={study.narrative}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Case Studies', href: '/case-studies' }, { label: 'Case Study' }]}
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="prose-invert space-y-6 text-pretty leading-relaxed text-foreground/85">
            {(study.narrative || '').split(/\n\n+/).map((p, i) => (
              <p key={i} className="text-base sm:text-lg">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="border-t border-border/50 bg-muted/20 py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold tracking-tight">See more case studies</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">At Strategemist, we don&apos;t sell case studies—we build success stories that speak for themselves. Your journey with us is unique, powered by innovation, precision, and transformation.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {others.map((c) => (
                <Link key={c.slug} href={`/case-studies/${c.slug}`} className="group flex items-center justify-between rounded-xl border border-border/60 bg-card/50 p-5 transition-colors hover:border-primary/50 hover:bg-primary/5">
                  <span className="text-sm font-medium leading-tight">{c.title}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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

      <div className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Case Studies
          </Link>
        </div>
      </div>
    </>
  )
}
