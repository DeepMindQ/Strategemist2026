'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, Brain, Boxes, Workflow, Target } from 'lucide-react'
import { SectionHeader, SectionDivider } from './section-header'

const STAGES = [
  { n: '01', id: 'ip', label: 'IP', icon: FileText, blurb: '11 patents. The vault our pipeline starts from.', href: '/innovate/the-patent-value' },
  { n: '02', id: 'intelligence', label: 'Intelligence', icon: Brain, blurb: 'Quantum-inspired models, RAG, agents — the engine.', href: '/empower' },
  { n: '03', id: 'platforms', label: 'Platforms', icon: Boxes, blurb: '8 proprietary IP platforms. The productized rails.', href: '/empower' },
  { n: '04', id: 'transformation', label: 'Transformation', icon: Workflow, blurb: 'Solve + Transform. Where intelligence meets your business.', href: '/solve' },
  { n: '05', id: 'outcomes', label: 'Outcomes', icon: Target, blurb: '5X, 80%, 65%. Measurable, verified, outcome-linked.', href: '/case-studies' },
]

export function TheSystem() {
  return (
    <section id="system" className="relative scroll-mt-20 py-24 lg:py-32">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionHeader
          number="§"
          eyebrow="The System"
          title="IP → Intelligence → Platforms → Transformation → Outcomes"
          description="Strategemist isn't an AI company website — it's a transformation intelligence platform. This is the pipeline every engagement runs through."
        />

        {/* 5-stage pipeline diagram */}
        <div className="mt-16">
          {/* horizontal connector with flowing packets */}
          <div className="relative hidden lg:block">
            <svg viewBox="0 0 1100 40" className="w-full" preserveAspectRatio="none">
              <line x1="60" y1="20" x2="1040" y2="20" stroke="var(--primary)" strokeWidth="1" strokeOpacity="0.25" />
              <line x1="60" y1="20" x2="1040" y2="20" stroke="var(--primary)" strokeWidth="1.5" className="animate-data-flow" />
              {/* packet dots */}
              {[0.15, 0.35, 0.55, 0.75, 0.92].map((p, i) => (
                <circle key={i} cx={60 + p * 980} cy={20} r={3} fill="var(--primary)">
                  <animate attributeName="opacity" values="0;1;0" dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
                </circle>
              ))}
            </svg>
          </div>

          <div className="grid gap-5 lg:grid-cols-5">
            {STAGES.map((s, i) => (
              <motion.a
                key={s.id}
                href={s.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative overflow-hidden rounded-xl border border-white/8 bg-card/50 p-6 card-hover hover:border-primary/40"
              >
                {/* corner ticks — blueprint */}
                <span className="pointer-events-none absolute left-2 top-2 h-2.5 w-2.5 border-l border-t border-white/15" />
                <span className="pointer-events-none absolute bottom-2 right-2 h-2.5 w-2.5 border-b border-r border-white/15" />
                <div className="flex items-center justify-between">
                  <span className="num-mono text-xs font-bold text-primary/70">§{s.n}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110">
                    <s.icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight">{s.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-all group-hover:opacity-100">
                  Enter <ArrowRight className="h-3 w-3" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
