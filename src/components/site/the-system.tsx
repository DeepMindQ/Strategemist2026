'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, FileText, Brain, Boxes, Workflow, Target } from 'lucide-react'
import { SectionHeader, SectionDivider } from './section-header'

const STAGES = [
  { n: '01', id: 'ip', label: 'IP', icon: FileText, blurb: '8 patents filed. The vault our pipeline starts from.', href: '#vault', modules: ['Tensor encoding', 'GNN', 'ZKHNE', 'RL core', 'Neuro-symbolic'] },
  { n: '02', id: 'intelligence', label: 'Intelligence', icon: Brain, blurb: 'Generative AI Core (101) + Temporal Reasoning (102) + GNN + RL.', href: '/empower', modules: ['Generative AI Core (101)', 'Temporal Reasoning (102)', 'GNN (303)', 'RL Module (305)'] },
  { n: '03', id: 'platforms', label: 'Platforms', icon: Boxes, blurb: '8 productized Empower rails — each maps to a patent.', href: '/empower', modules: ['QµPrix', 'Σ-Graphion', 'Φ-Federis', 'EthicSense', 'G(π)-Forma'] },
  { n: '04', id: 'transformation', label: 'Transformation', icon: Workflow, blurb: 'Workflow Orchestration Engine (105) + self-healing + knowledge liquidity.', href: '/solve', modules: ['Orchestration Engine (105)', 'Self-healing', 'Knowledge liquidity'] },
  { n: '05', id: 'outcomes', label: 'Outcomes', icon: Target, blurb: '5X, 80%, 65%. Measurable, verified, outcome-linked.', href: '/case-studies', modules: ['Verified metrics', 'Outcome-linked fees'] },
]

export function TheSystem() {
  const [active, setActive] = React.useState<string | null>(null)
  return (
    <section id="system" className="relative scroll-mt-20 py-24 lg:py-32">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionHeader number="§" eyebrow="The System" title="IP → Intelligence → Platforms → Transformation → Outcomes" description="Strategemist isn't an AI company website — it's a transformation intelligence platform. This is the connected system every engagement runs through. Hover a stage to see its real modules." />

        {/* connected pipeline diagram */}
        <div className="relative mt-16">
          {/* horizontal connector with flowing packets (desktop) */}
          <svg viewBox="0 0 1100 40" className="pointer-events-none absolute left-0 right-0 top-6 hidden lg:block" preserveAspectRatio="none">
            <line x1="80" y1="20" x2="1020" y2="20" stroke="var(--primary)" strokeWidth="1" strokeOpacity="0.25" />
            <motion.line x1="80" y1="20" x2="1020" y2="20" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="6 1100" initial={{ strokeDashoffset: 1100 }} whileInView={{ strokeDashoffset: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeInOut' }} />
            {[0.15, 0.35, 0.55, 0.75, 0.92].map((p, i) => (
              <circle key={i} cx={80 + p * 940} cy="20" r="3" fill="var(--gold)">
                <animate attributeName="opacity" values="0;1;0" dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </svg>

          <div className="grid gap-5 lg:grid-cols-5">
            {STAGES.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <Link
                  href={s.href}
                  onMouseEnter={() => setActive(s.id)}
                  onMouseLeave={() => setActive(null)}
                  className={`group relative block overflow-hidden rounded-xl border bg-card/50 p-6 card-hover ${active === s.id ? 'border-primary/40 shadow-[0_0_40px_-12px_var(--primary)]' : 'border-white/8 hover:border-primary/30'}`}
                >
                  <span className="pointer-events-none absolute left-2 top-2 h-2.5 w-2.5 border-l border-t border-white/15" />
                  <span className="pointer-events-none absolute bottom-2 right-2 h-2.5 w-2.5 border-b border-r border-white/15" />
                  <div className="flex items-center justify-between">
                    <span className="num-mono text-xs font-bold text-primary/70">§{s.n}</span>
                    <span className={`grid h-10 w-10 place-items-center rounded-lg text-primary ring-1 transition-transform group-hover:scale-110 ${active === s.id ? 'bg-primary/15 ring-primary/30' : 'bg-primary/10 ring-primary/20'}`}>
                      <s.icon className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold tracking-tight">{s.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-all group-hover:opacity-100">Enter <ArrowRight className="h-3 w-3" /></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* active stage detail panel — shows real modules */}
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="schematic-corner mt-6 rounded-xl border border-white/8 bg-card/30 p-6" data-schematic={`STAGE ${active.toUpperCase()}`}>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-primary">Real system modules at this stage</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {STAGES.find((s) => s.id === active)!.modules.map((m) => (
                      <span key={m} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-foreground/80">{m}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
