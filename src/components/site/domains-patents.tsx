'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Layers, Lightbulb, Workflow, Gauge, Boxes, Server } from 'lucide-react'
import { PATENTS } from '@/lib/site-data'
import { CATEGORY_META } from '@/lib/content'
import { SectionHeader, SectionDivider, ViewAllLink } from './section-header'
import { cn } from '@/lib/utils'

const DOMAIN_COUNTS: Record<string, string> = {
  innovate: '12 pages', solve: '12 pages', transform: '12 pages',
  lead: '8 pages', empower: '8 platforms', services: '13 services',
}

/* Bento grid — 1 large feature tile + 5 smaller varied, not uniform 3×2 */
export function Domains() {
  const domains = [
    ['innovate', 'IP — the vault', '12 patent-backed deep-tech capabilities.', Layers],
    ['empower', 'Platforms', '8 proprietary IP-platform products.', Boxes],
    ['solve', 'Transformation', '12 solutions: intelligence, security, performance, infrastructure.', Workflow],
    ['transform', 'Transformation', '12 plays: evolution, acceleration, resilience, optimization.', Lightbulb],
    ['lead', 'Outcomes', '8 strategy and thought-leadership plays.', Gauge],
    ['services', 'Intelligence', '13 consulting and delivery services.', Server],
  ] as const

  return (
    <section className="relative bg-[#0B0C14] py-24 lg:py-32">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionHeader number="§03" eyebrow="Capabilities" title="Six domains. One execution system." description="Bento, not a uniform grid — the first domain is the feature; the rest fill the system around it." />
        {/* bento grid: col-span-2 feature on lg */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map(([cat, stage, blurb, Icon], i) => {
            const feature = i === 0
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className={cn(feature && 'sm:col-span-2 lg:col-span-2 lg:row-span-2')}
              >
                <Link href={`/${cat}`} className={cn(
                  'group relative flex h-full overflow-hidden rounded-xl border border-white/8 bg-card/50 p-6 card-hover hover:border-primary/30',
                  feature && 'flex-col justify-between p-8'
                )}>
                  <span className="pointer-events-none absolute right-3 top-1 font-display text-6xl font-bold text-white/[0.03]">{String(i + 1).padStart(2, '0')}</span>
                  <div className="relative">
                    <span className={cn('grid place-items-center rounded-xl bg-primary/12 num-mono font-bold text-primary ring-1 ring-primary/20', feature ? 'h-16 w-16 text-xl' : 'h-12 w-12 text-sm')}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="mt-4 flex items-center gap-2">
                      <Icon className={cn('text-primary/60', feature ? 'h-5 w-5' : 'h-4 w-4')} />
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">{stage}</span>
                    </div>
                    <h3 className={cn('mt-1 font-bold tracking-tight', feature ? 'text-2xl' : 'text-lg')}>{CATEGORY_META[cat].label}</h3>
                    <p className={cn('mt-1 text-muted-foreground', feature ? 'text-base max-w-md' : 'text-sm')}>{blurb}</p>
                  </div>
                  <div className="relative mt-4 flex items-center justify-between">
                    <span className="inline-block rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">{DOMAIN_COUNTS[cat]}</span>
                    <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* Patent vault — horizontal scroll-snap on desktop, with category filter */
const PATENT_CATS = ['All', 'Compute', 'Intelligence', 'Trust', 'Optimization', 'Automation'] as const
const PATENT_CATEGORY: Record<string, string> = {
  'Quantum Computing': 'Compute', 'Sustainable Compute Models': 'Compute',
  'Contextual Intelligence': 'Intelligence', 'Self-Learning Frameworks': 'Intelligence',
  'Cognitive Pattern Engines': 'Intelligence', 'Federated Intelligence Grid': 'Intelligence',
  'Genomic Data Intelligence': 'Intelligence', 'Cognitive Pattern AI': 'Intelligence',
  'Algorithmic Ethics & Trust': 'Trust', 'Blockchain Trust Systems': 'Trust',
  'Real-Time Optimization Hub': 'Optimization',
  'Autonomous Knowledge Core': 'Automation',
}

export function Patents() {
  const [cat, setCat] = React.useState<(typeof PATENT_CATS)[number]>('All')
  const filtered = PATENTS.filter((p) => cat === 'All' || PATENT_CATEGORY[p.name] === cat)

  return (
    <section className="relative py-24 lg:py-32">
      <SectionDivider />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader number="§04" eyebrow="Innovate" stage="IP" title="11 patents, one vault" description="The IP our pipeline starts from. Filter by category — or scroll the vault horizontally." />
          <ViewAllLink href="/innovate/the-patent-value" label="Open the Patent Vault" />
        </div>

        {/* category filter */}
        <div className="mt-10 flex flex-wrap gap-2">
          {PATENT_CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={cn(
                'rounded-full px-4 py-1.5 text-xs font-medium transition-all',
                cat === c ? 'bg-primary text-primary-foreground' : 'border border-white/10 text-foreground/70 hover:border-primary/40 hover:text-foreground'
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* horizontal scroll-snap vault */}
        <div className="mt-8 custom-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible">
          {filtered.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="shrink-0 snap-start sm:w-[280px] lg:w-auto"
            >
              <Link href="/innovate/the-patent-value" className="group relative h-full overflow-hidden rounded-xl border border-white/8 bg-card/50 p-6 card-hover hover:border-primary/30">
                <div className="pointer-events-none absolute inset-0 bg-dots opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
                <div className="relative flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20"><p.icon className="h-6 w-6" /></span>
                  <span className="num-mono rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">Patent #{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="relative mt-5 text-sm font-bold leading-tight">{p.name}</h3>
                <p className="relative mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">{p.description}</p>
                <span className="relative mt-3 inline-block rounded bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">{PATENT_CATEGORY[p.name]}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
