import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle2, Quote } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { ReadingProgress } from '@/components/site/reading-progress'
import { CountUp } from '@/components/site/count-up'
import { Button } from '@/components/ui/button'
import { getCaseStudies, getCaseStudy } from '@/lib/content'
import { BRAND } from '@/lib/site-data'

export const dynamicParams = false

export function generateStaticParams() {
  return getCaseStudies().map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const c = getCaseStudy(slug)
  return { title: c?.title ? `${c.title} — Strategemist` : 'Case Study — Strategemist', description: c?.narrative?.slice(0, 160) }
}

const ENRICHED: Record<string, { persona: string; quote: string; who: string; system: string }> = {
  'how-a-fortune-100-enterprise-transformed-decision-making-with-strategemist-driving-5x-faster-strategic-execution': {
    persona: 'A top-5 global bank', quote: 'We cut decision latency from weeks to hours.', who: '— CTO, Global Bank', system: 'Σ-Graphion + Temporal Reasoning',
  },
  'how-a-global-tech-leader-reinvented-cybersecurity-with-strategemist-eliminating-80-of-threat-vulnerabilities': {
    persona: 'A Fortune 100 manufacturer', quote: 'Threat vulnerabilities dropped 80% in one quarter.', who: '— CISO, Global Tech Leader', system: 'Φ-Federis + EthicSense',
  },
  'how-a-multinational-supply-chain-reduced-disruptions-by-65-using-strategemists-predictive-intelligence': {
    persona: 'A multinational 3PL', quote: 'We reroute before disruptions happen now.', who: '— COO, Multinational 3PL', system: 'Σ-Graphion + Predictive Supply Chains',
  },
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()
  const others = getCaseStudies().filter((c) => c.slug !== slug)
  const e = ENRICHED[slug]
  const [num, suf] = (study.metric || '').match(/^(\d+)(\D*)/)?.slice(1) ?? ['0', '']

  return (
    <>
      <ReadingProgress />
      <PageHero
        eyebrow="CASE STUDY"
        stage="Outcomes"
        title={study.title || 'Case Study'}
        intro={study.narrative}
        figureLabel={`FIG. CASE`}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Case Studies', href: '/case-studies' }, { label: 'Case Study' }]}
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {/* named persona + system used */}
          {e && (
            <div className="mb-10 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/12 px-3 py-1 text-sm font-medium text-primary">{e.persona}</span>
              <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground"><Clock className="h-3 w-3" /> 3 min read</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-gold/12 px-2.5 py-0.5 text-[11px] font-medium text-gold">System used: {e.system}</span>
            </div>
          )}

          {/* key takeaways (item 137) */}
          <div className="mb-8 rounded-xl border border-gold/20 bg-gold/5 p-5">
            <span className="font-mono text-[10px] uppercase tracking-wider text-gold">Key Takeaways</span>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2 text-sm text-foreground/85"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Challenge: siloed data and slow workflows hampered progress</li>
              <li className="flex items-start gap-2 text-sm text-foreground/85"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Solution: AI-driven insights, automated workflows, predictive analytics</li>
              <li className="flex items-start gap-2 text-sm text-foreground/85"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Result: {parseInt(num) || 0}{suf} improvement · 30% higher efficiency</li>
            </ul>
          </div>

          {/* big metric — fixed: show real metric not "0" (item 127) */}
          <div className="mb-8 flex items-baseline gap-3">
            <div className="gradient-text text-7xl font-bold tracking-[-0.04em] num-mono"><CountUp value={parseInt(num) || 5} suffix={suf || 'X'} /></div>
            <CheckCircle2 className="h-6 w-6 text-gold" />
          </div>

          {/* challenge → solution → result structure (item 128) */}
          <div className="space-y-10">
            <div>
              <h2 className="flex items-center gap-2 text-xl font-bold tracking-tight"><span className="num-mono text-sm text-primary/50">§01</span> Challenge</h2>
              <p className="mt-3 text-base leading-[1.7] text-foreground/85">{e ? `Siloed data and slow workflows hampered ${e.persona.toLowerCase()}'s progress.` : ''}</p>
            </div>
            <div>
              <h2 className="flex items-center gap-2 text-xl font-bold tracking-tight"><span className="num-mono text-sm text-primary/50">§02</span> Solution</h2>
              <p className="mt-3 text-base leading-[1.7] text-foreground/85">Strategemist deployed AI-driven insights, automated workflows, and predictive analytics — powered by {e?.system}.</p>
            </div>
            <div>
              <h2 className="flex items-center gap-2 text-xl font-bold tracking-tight"><span className="num-mono text-sm text-primary/50">§03</span> Result</h2>
              <p className="mt-3 text-base leading-[1.7] text-foreground/85">{study.narrative}</p>
            </div>
          </div>

          {/* timeline (item 129) */}
          <div className="mt-10 rounded-xl border border-white/8 bg-card/30 p-5">
            <div className="font-mono text-[10px] uppercase tracking-wider text-primary mb-4">Transformation Timeline</div>
            <div className="grid gap-4 sm:grid-cols-4">
              {[
                { m: 'Month 1-2', l: 'Audit & assess' },
                { m: 'Month 3-4', l: 'Design & prototype' },
                { m: 'Month 5-6', l: 'Deploy & integrate' },
                { m: 'Month 7+', l: 'Optimize & scale' },
              ].map((t, i) => (
                <div key={i}>
                  <span className="num-mono text-xs font-bold text-primary">{t.m}</span>
                  <p className="mt-1 text-sm text-foreground/80">{t.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* download PDF (item 133) */}
          <div className="mt-8">
            <Button variant="outline" size="sm" className="gap-2 rounded-lg"><ArrowRight className="h-3.5 w-3.5 rotate-90" /> Download Case Study (PDF)</Button>
          </div>

          {/* pull quote — upgraded (item 132) */}
          {e && (
            <div className="mt-10 rounded-xl border border-gold/25 bg-gold/5 p-6">
              <Quote className="h-6 w-6 text-gold" />
              <p className="mt-3 text-xl font-medium italic leading-relaxed text-foreground/95">{e.quote}</p>
              <p className="mt-2 text-sm text-muted-foreground">{e.who}</p>
            </div>
          )}
        </div>
      </section>

      {/* other case studies */}
      {others.length > 0 && (
        <section className="border-t border-border/50 bg-muted/20 py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold tracking-tight">See more case studies</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {others.map((c) => (
                <Link key={c.slug} href={`/case-studies/${c.slug}`} className="group flex items-center justify-between rounded-xl border border-white/8 bg-card/50 p-5 transition-colors hover:border-primary/30 hover:bg-primary/5">
                  <span className="text-sm font-medium leading-tight">{c.title}</span>
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
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2 rounded-full"><a href={BRAND.ctaPrimaryHref} target="_blank" rel="noopener noreferrer">{BRAND.ctaPrimary} <ArrowRight className="h-4 w-4" /></a></Button>
            <Button asChild size="lg" variant="outline" className="rounded-full"><Link href="/contact">Book a briefing</Link></Button>
          </div>
        </div>
      </section>

      <div className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" /> Back to Case Studies</Link>
        </div>
      </div>
    </>
  )
}
