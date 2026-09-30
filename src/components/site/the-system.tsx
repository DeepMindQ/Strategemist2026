'use client'

import * as React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, FileText, Brain, Boxes, Workflow, Target } from 'lucide-react'
import { SectionHeader, SectionDivider } from './section-header'

const STAGES = [
  { n: '01', id: 'ip', label: 'IP', icon: FileText, blurb: '8 patents filed. The vault our pipeline starts from.', benefit: 'Your differentiator — competitors don\'t have this.', href: '#vault', modules: ['Tensor encoding (100)', 'GNN (303)', 'ZKHNE enclave', 'RL core (305)', 'Neuro-symbolic'] },
  { n: '02', id: 'intelligence', label: 'Intelligence', icon: Brain, blurb: 'Generative AI Core + Temporal Reasoning + GNN + RL.', benefit: 'Meets hard deadlines automatically — weeks → hours.', href: '#agents', modules: ['Generative AI Core (101)', 'Temporal Reasoning (102)', 'GNN (303)', 'RL Module (305)'] },
  { n: '03', id: 'platforms', label: 'Platforms', icon: Boxes, blurb: '8 productized Empower rails — each maps to a patent.', benefit: 'Start from a working baseline, not a blank page.', href: '#vault', modules: ['QµPrix', 'Σ-Graphion', 'Φ-Federis', 'EthicSense', 'G(π)-Forma'] },
  { n: '04', id: 'transformation', label: 'Transformation', icon: Workflow, blurb: 'Workflow Orchestration Engine + self-healing + knowledge liquidity.', benefit: 'Self-healing workflows — 99.98% uptime, no manual rework.', href: '#solve', modules: ['Orchestration Engine (105)', 'Self-healing loop', 'Knowledge liquidity (104)'] },
  { n: '05', id: 'outcomes', label: 'Outcomes', icon: Target, blurb: '5X, 80%, 65%. Measurable, verified, outcome-linked.', benefit: 'Fees tied to the metric on your scorecard — not hours.', href: '#cases', modules: ['Verified metrics', 'Outcome-linked fees', 'Board-grade reporting'] },
]

export function TheSystem() {
  const reduce = useReducedMotion()
  const [active, setActive] = React.useState<string | null>(null)

  return (
    <section id="system" className="relative scroll-mt-20 py-24 lg:py-32">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionHeader number="§01" eyebrow="The System" title="IP → Intelligence → Platforms → Transformation → Outcomes" description="Five stages, one connected pipeline. Every engagement runs through it. Hover a stage to see its real modules and the benefit it delivers." />

        {/* horizontal connected SVG pipeline (desktop) */}
        <div className="relative mt-16 hidden lg:block">
          {/* connecting line with draw-in + flowing packets */}
          <svg viewBox="0 0 1100 40" className="pointer-events-none absolute left-0 right-0 top-12" preserveAspectRatio="none">
            <line x1="80" y1="20" x2="1020" y2="20" stroke="var(--primary)" strokeWidth="1" strokeOpacity="0.25" />
            <motion.line x1="80" y1="20" x2="1020" y2="20" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="6 1100" initial={{ strokeDashoffset: 1100 }} whileInView={{ strokeDashoffset: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeInOut' }} />
            {!reduce && [0.15, 0.35, 0.55, 0.75, 0.92].map((p, i) => (
              <circle key={i} cx={80 + p * 940} cy="20" r="3" fill="var(--gold)">
                <animate attributeName="opacity" values="0;1;0" dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </svg>

          {/* 5 nodes on the line */}
          <div className="relative grid grid-cols-5 gap-5">
            {STAGES.map((s, i) => (
              <motion.div key={s.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.12 }}>
                <div onMouseEnter={() => setActive(s.id)} onMouseLeave={() => setActive(null)} onFocus={() => setActive(s.id)} onBlur={() => setActive(null)} tabIndex={0} role="button" aria-label={`Stage ${s.label}`} className={`group relative cursor-pointer text-center ${active !== null && active !== s.id ? 'opacity-50' : ''} transition-opacity`}>
                  {/* node badge sitting on the line */}
                  <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full ring-4 ring-background transition-all group-hover:scale-110" style={{ background: active === s.id ? 'var(--primary)' : 'var(--card)', border: '1px solid var(--primary)' }}>
                    <s.icon className={`h-5 w-5 ${active === s.id ? 'text-white' : 'text-primary'}`} />
                  </div>
                  <span className="num-mono text-xs font-bold text-primary/70">§{s.n}</span>
                  <h3 className="mt-2 text-lg font-bold tracking-tight">{s.label}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* mobile vertical stack */}
        <div className="mt-12 space-y-4 lg:hidden">
          {STAGES.map((s, i) => (
            <motion.div key={s.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.12 }}>
              <div onMouseEnter={() => setActive(s.id)} onMouseLeave={() => setActive(null)} className="relative flex items-start gap-4 rounded-xl border border-white/8 bg-card/50 p-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-white ring-4 ring-background"><s.icon className="h-5 w-5" /></div>
                <div>
                  <span className="num-mono text-xs font-bold text-primary/70">§{s.n}</span>
                  <h3 className="text-lg font-bold">{s.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.blurb}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* active stage detail — real modules + benefit (inline expand) */}
        {active && (
          <motion.div key={active} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <div className="schematic-corner mt-8 rounded-xl border border-white/8 bg-card/30 p-6" data-schematic={`STAGE ${active.toUpperCase()}`}>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-primary">Benefit</div>
                  <p className="mt-1.5 text-sm font-medium text-foreground/85">{STAGES.find((s) => s.id === active)!.benefit}</p>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-primary">Real system modules</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {STAGES.find((s) => s.id === active)!.modules.map((m) => <span key={m} className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-foreground/80">{m}</span>)}
                  </div>
                </div>
              </div>
              <a href={STAGES.find((s) => s.id === active)!.href} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-400">Enter this stage <ArrowRight className="h-3.5 w-3.5" /></a>
            </div>
          </motion.div>
        )}

        <div className="mt-8 text-center">
          <a href="/system" className="group inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-400">View full architecture <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></a>
        </div>
      </div>
    </section>
  )
}
