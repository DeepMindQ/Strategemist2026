import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, CheckCircle2 } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { CountUp } from '@/components/site/count-up'
import { getCaseStudies } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Case Studies — Strategemist',
  description: "We don't sell case studies — we build success stories. 5X faster execution, 80% threat reduction, 65% fewer supply-chain disruptions.",
}

const ENRICHED = [
  { persona: 'A top-5 global bank', system: 'Σ-Graphion + Temporal Reasoning' },
  { persona: 'A Fortune 100 manufacturer', system: 'Φ-Federis + EthicSense' },
  { persona: 'A multinational 3PL', system: 'Σ-Graphion + Predictive Supply Chains' },
]

export default function CaseStudiesPage() {
  const cases = getCaseStudies()
  return (
    <>
      <PageHero
        eyebrow="CASE STUDIES"
        stage="Outcomes"
        title="Measurable outcomes, verified."
        intro="We don't sell case studies — we build success stories. Named personas, named systems, named metrics."
        figureLabel="FIG. CASES"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Case Studies' }]}
      />
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {cases.map((c, i) => {
              const e = ENRICHED[i] || ENRICHED[0]
              const [num, suf] = (c.metric || '').match(/^(\d+)(\D*)/)?.slice(1) ?? ['0', '']
              return (
                <Link key={c.slug} href={`/case-studies/${c.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-card/50 p-6 card-hover hover:border-primary/30">
                  <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ background: 'var(--grad-primary)' }} />
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/12 px-3 py-1 text-xs font-medium text-primary">{e.persona}</span>
                    <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground"><Clock className="h-3 w-3" /> 3 min read</span>
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <div className="gradient-text text-5xl font-bold tracking-[-0.04em] num-mono"><CountUp value={parseInt(num) || 0} suffix={suf} /></div>
                    <CheckCircle2 className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug">{c.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">{c.narrative}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 rounded bg-gold/12 px-2 py-0.5 text-[10px] font-medium text-gold">{e.system}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">Read <ArrowRight className="h-3 w-3" /></span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
