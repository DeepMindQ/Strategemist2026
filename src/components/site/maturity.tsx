'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { SectionHeader, SectionDivider } from './section-header'
import { cn } from '@/lib/utils'

const MATURITY = ['Ad-hoc', 'Pilots', 'Reference architectures', 'Production MLOps', 'Compounding IP']
const STAGE_ICONS = ['◐', '◑', '◒', '◓', '●']
const MATURITY_DATA: Record<number, { blurb: string; ip: string[]; next: string }> = {
  0: { blurb: 'Siloed experiments. No operating model. ROI unmeasured. We meet you here and design the next stage.', ip: ['AI Consulting', 'PoC'], next: 'Up next: Pilots with stage-gate rigor' },
  1: { blurb: 'Pilots running, but delivery is reactive and fragile. We add reference architectures and a Prime PMO.', ip: ['MLOps consulting', 'Data engineering'], next: 'Up next: Reference architectures + guardrails' },
  2: { blurb: 'Reference architectures, guardrails, PMO in place. Your team ships AI with reusable patterns.', ip: ['EthicSense', 'Reference designs'], next: 'Up next: Production MLOps + governance' },
  3: { blurb: 'Production-grade MLOps, governance, outcome dashboards. Self-healing workflows hold 99.98% uptime.', ip: ['Φ-Federis', 'Self-healing workflows'], next: 'Up next: Compounding IP + board-grade reporting' },
  4: { blurb: 'Compounding IP, continuous retraining, board-grade reporting. Your capability grows itself.', ip: ['QµPrix', 'Σ-Graphion', 'Autonomous Knowledge Core'], next: 'You\'re at the frontier — let\'s push it.' },
}

export function MaturityAssessment() {
  const [stage, setStage] = React.useState(2)
  const data = MATURITY_DATA[stage]
  return (
    <section className="relative py-24 lg:py-32">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionHeader number="§06" eyebrow="AI Transformation Maturity" stage="Transformation" title="Where are you on the journey?" description="Drag the handle to find your stage. We meet you there — and design the next, with the right IP for each level." align="center" />
        <div className="mx-auto mt-14 max-w-2xl">
          <div className="flex items-center justify-between text-xs font-semibold">
            {MATURITY.map((m, i) => (
              <button key={m} onClick={() => setStage(i)} className={cn('flex flex-col items-center gap-1 transition-colors', i <= stage ? 'text-primary' : 'text-muted-foreground/40 hover:text-foreground')}>
                <span className={cn('text-lg', i === stage && 'text-gold')}>{STAGE_ICONS[i]}</span>
                <span className="hidden sm:inline">{m.split(' ')[0]}</span>
              </button>
            ))}
          </div>
          <div className="relative mt-4">
            <input type="range" min={0} max={4} value={stage} onChange={(e) => setStage(parseInt(e.target.value))} className="w-full cursor-ew-resize accent-[var(--primary)]" aria-label="AI maturity stage" />
            <div className="absolute left-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-primary/30 pointer-events-none" style={{ width: `${(stage / 4) * 100}%` }} />
          </div>

          <motion.div key={stage} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-6">
            <div className="flex items-center gap-2">
              <span className="num-mono text-sm font-bold text-primary">Stage {stage + 1}/5</span>
              <span className="h-px flex-1 bg-primary/20" />
              <span className="text-sm font-semibold">{MATURITY[stage]}</span>
            </div>
            <p className="t-body mt-3 text-foreground/80">{data.blurb}</p>
            <div className="mt-4">
              <div className="font-mono text-[10px] uppercase tracking-wider text-primary">Strategemist IP at this stage</div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {data.ip.map((ip) => <span key={ip} className="rounded-full bg-gold/12 px-2.5 py-0.5 text-xs font-medium text-gold">{ip}</span>)}
              </div>
            </div>
            <p className="mt-4 font-mono text-[11px] text-muted-foreground">{data.next}</p>
            <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-400">Book a maturity assessment →</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
