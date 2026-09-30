'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, CheckCircle2, Quote } from 'lucide-react'
import { getCaseStudies } from '@/lib/content'
import { SectionHeader, SectionDivider, ViewAllLink } from './section-header'
import { CountUp } from './count-up'
import { cn } from '@/lib/utils'

/* Named personas (NDA-safe), pull-quotes, system-used chips, asymmetric layout */
const ENRICHED = [
  { persona: 'A top-5 global bank', quote: 'We cut decision latency from weeks to hours.', who: '— CTO, Global Bank', system: 'Σ-Graphion + Temporal Reasoning' },
  { persona: 'A Fortune 100 manufacturer', quote: 'Threat vulnerabilities dropped 80% in one quarter.', who: '— CISO, Global Tech Leader', system: 'Φ-Federis + EthicSense' },
  { persona: 'A multinational 3PL', quote: 'We reroute before disruptions happen now.', who: '— COO, Multinational 3PL', system: 'Σ-Graphion + Predictive Supply Chains' },
]

export function CaseStudies() {
  const cases = getCaseStudies()
  const featured = cases[0]
  const rest = cases.slice(1)
  const [filter, setFilter] = React.useState('All')
  const FILTERS = ['All', 'Financial', 'Cybersecurity', 'Logistics']
  const filterMap: Record<string, string> = { All: '', Financial: 'Bank', Cybersecurity: 'tech', Logistics: '3PL' }
  const visible = filter === 'All' ? cases : cases.filter((c) => c.industry?.includes(filterMap[filter]))

  return (
    <section id="cases" className="relative py-24 lg:py-32">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader number="§08" eyebrow="Case Studies" stage="Outcomes" title="Measurable outcomes, verified." description="We don't sell case studies — we build success stories. Named personas, named systems, named metrics." />
          <ViewAllLink href="/case-studies" label="All case studies" />
        </div>

        {/* industry filter (item 147) */}
        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={cn('rounded-full px-3 py-1.5 text-xs font-medium transition-all', filter === f ? 'bg-primary text-primary-foreground' : 'border border-white/10 text-foreground/70 hover:border-primary/40')}>{f}</button>
          ))}
        </div>

        {/* asymmetric: 1 large feature + 2 smaller (filtered) */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {filter === 'All' && featured && <FeatureCard c={featured} e={ENRICHED[0]} />}
          {rest.filter((c) => filter === 'All' || c.industry?.includes(filterMap[filter])).map((c, i) => <SmallCard key={c.slug} c={c} e={ENRICHED[i + 1]} />)}
          {filter !== 'All' && visible.slice(0, 1).map((c, i) => <FeatureCard key={c.slug} c={c} e={ENRICHED[i]} />)}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ c, e }: { c: any; e: any }) {
  const [num, suf] = (c.metric || '').match(/^(\d+)(\D*)/)?.slice(1) ?? ['0', '']
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="lg:col-span-2">
      <Link href={`/case-studies/${c.slug}`} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-card/50 p-8 card-hover hover:border-primary/30">
        <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ background: 'var(--grad-primary)' }} />
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/12 px-3 py-1 text-xs font-medium text-primary">{e.persona}</span>
          <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground"><Clock className="h-3 w-3" /> 3 min read</span>
        </div>
        <div className="mt-6 flex items-baseline gap-3">
          <div className="gradient-text text-7xl font-bold tracking-[-0.04em] num-mono"><CountUp value={parseInt(num) || 0} suffix={suf} /></div>
          <CheckCircle2 className="h-5 w-5 text-gold" />
        </div>
        <h3 className="mt-4 text-xl font-bold leading-snug">{c.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-4">{c.narrative}</p>
        <div className="mt-4 rounded-lg border-l-2 border-gold bg-gold/5 p-3">
          <Quote className="h-3 w-3 text-gold" />
          <p className="mt-1 text-sm italic text-foreground/85">{e.quote}</p>
          <p className="mt-1 text-xs text-muted-foreground">{e.who}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 rounded-full bg-gold/12 px-2.5 py-0.5 text-[11px] font-medium text-gold">System used: {e.system}</span>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">Read full story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></span>
        </div>
      </Link>
    </motion.div>
  )
}

function SmallCard({ c, e }: { c: any; e: any }) {
  const [num, suf] = (c.metric || '').match(/^(\d+)(\D*)/)?.slice(1) ?? ['0', '']
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: 0.1 }}>
      <Link href={`/case-studies/${c.slug}`} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-card/50 p-6 card-hover hover:border-primary/30">
        <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ background: 'var(--grad-primary)' }} />
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/12 px-2.5 py-1 text-[11px] font-medium text-primary">{e.persona}</span>
        <div className="mt-4 gradient-text text-5xl font-bold tracking-[-0.04em] num-mono"><CountUp value={parseInt(num) || 0} suffix={suf} /></div>
        <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">{c.narrative}</p>
        <span className="mt-3 inline-flex items-center gap-1 rounded bg-gold/12 px-2 py-0.5 text-[10px] font-medium text-gold">{e.system}</span>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">Read <ArrowRight className="h-3 w-3" /></span>
      </Link>
    </motion.div>
  )
}
