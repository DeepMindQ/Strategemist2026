'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SOLVE_TABS } from '@/lib/site-data'
import { routeForLabel } from '@/lib/content'
import { SectionHeader, SectionDivider, ViewAllLink } from './section-header'
import { cn } from '@/lib/utils'

const PATENT_CHIP: Record<string, string> = {
  'Intelligent Decision Hubs': 'G(π)-Forma',
  'Real-Time Intelligence Hub': 'Σ-Graphion',
  'Smart Automation Systems': 'Autonomous Knowledge Core',
  'Scalable Security Frameworks': 'Φ-Federis',
  'Compliance & Digital Trust': 'EthicSense',
  'Blockchain Audit Models': 'Blockchain Trust',
  'High-Performance Systems': 'QµPrix',
  'Predictive Supply Chains': 'Σ-Graphion',
  'Enterprise Process Control': 'G(π)-Forma',
  'Hybrid Cloud Computing': 'Sustainable Compute',
  'Advanced Risk Analytics': 'Cognitive Pattern Engines',
  'Autonomous Digital Core': 'Self-Learning Frameworks',
}

const BEFORE_AFTER: Record<string, string> = {
  intelligence: 'Before: weeks · After: milliseconds',
  security: 'Before: vulnerable · After: zero-exposure',
  performance: 'Before: breaks at scale · After: holds throughput',
  infrastructure: 'Before: manual ops · After: self-optimizing',
}

export function Solve() {
  const [active, setActive] = React.useState(SOLVE_TABS[0].id)
  const tab = SOLVE_TABS.find((t) => t.id === active)!
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      const i = SOLVE_TABS.findIndex((t) => t.id === active)
      const next = SOLVE_TABS[(i + 1) % SOLVE_TABS.length]
      setActive(next.id); tabRefs.current[(i + 1) % SOLVE_TABS.length]?.focus()
    } else if (e.key === 'ArrowLeft') {
      const i = SOLVE_TABS.findIndex((t) => t.id === active)
      const prev = SOLVE_TABS[(i - 1 + SOLVE_TABS.length) % SOLVE_TABS.length]
      setActive(prev.id); tabRefs.current[(i - 1 + SOLVE_TABS.length) % SOLVE_TABS.length]?.focus()
    }
  }

  return (
    <section id="solve" className="relative bg-[#0B0C14] py-24 lg:py-32">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader number="§07" eyebrow="Solve" stage="Transformation" title="Smart. Secure. Scalable. Future-ready." description="Four solution lanes. Click a tab — the services below show what each delivers, with the patent that backs it." />
          <ViewAllLink href="/solve" label="Explore all Solve" />
        </div>

        {/* split-screen: left = tabs + headline, right = services as vertical list (not card grid) */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* LEFT: tabs + headline + before/after */}
          <div className="lg:col-span-5">
            <div role="tablist" onKeyDown={onKeyDown} className="flex flex-wrap gap-2">
              {SOLVE_TABS.map((t, i) => (
                <button key={t.id} ref={(el) => { tabRefs.current[i] = el }} role="tab" aria-selected={active === t.id} onClick={() => setActive(t.id)} className={cn('inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all', active === t.id ? 'bg-primary text-primary-foreground shadow-lg' : 'border border-white/10 text-foreground/70 hover:border-primary/40 hover:text-foreground')}>
                  {t.name}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
                <h3 className="h-section mt-6 text-2xl font-bold">{tab.headline}</h3>
                <p className="t-body mt-3 text-foreground/80">{tab.description}</p>
                <p className="mt-4 font-mono text-xs text-gold">{BEFORE_AFTER[active]}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: services as a vertical numbered list (not cards) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="space-y-3">
                {tab.services.map((s, i) => (
                  <Link key={s.name} href={routeForLabel('solve', s.name)} className="group flex items-start gap-4 rounded-xl border border-white/8 bg-card/50 p-5 transition-all hover:border-primary/30 hover:bg-primary/5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/12 font-mono text-sm font-bold text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110">{String(i + 1).padStart(2, '0')}</span>
                    <div className="min-w-0 flex-1">
                      <h4 className="flex items-center gap-2 font-semibold">{s.name}<ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" /></h4>
                      <p className="t-small mt-1 text-foreground/80">{s.desc}</p>
                    </div>
                    {PATENT_CHIP[s.name] && <span className="shrink-0 rounded-full bg-gold/12 px-2 py-0.5 text-[10px] font-medium text-gold">{PATENT_CHIP[s.name]}</span>}
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
