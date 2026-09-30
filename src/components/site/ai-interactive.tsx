'use client'

import * as React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeader, SectionDivider } from './section-header'

/* Custom thin-line SVG icons per agent role (replaces generic lucide) */
const PlannerIcon = () => <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="14" cy="14" r="10" /><path d="M14 4 L14 14 L20 18" /></svg>
const ExecutorIcon = () => <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 6 L20 14 L8 22 Z" /></svg>
const CriticIcon = () => <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="7" /><path d="M17 17 L23 23" /></svg>
const GovernorIcon = () => <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 3 L23 7 L23 14 C23 20 14 25 14 25 C14 25 5 20 5 14 L5 7 Z" /></svg>

const AGENTS = [
  { label: 'Planner', icon: PlannerIcon, packet: 'task' },
  { label: 'Executor', icon: ExecutorIcon, packet: 'result' },
  { label: 'Critic', icon: CriticIcon, packet: 'review' },
  { label: 'Governor', icon: GovernorIcon, packet: 'approve', gold: true },
]

export function AgentOrchestration() {
  const reduce = useReducedMotion()
  const [active, setActive] = React.useState(0)
  React.useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setActive((a) => (a + 1) % AGENTS.length), 1400)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <section id="agents" className="relative py-24 lg:py-32">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionHeader number="§05" eyebrow="Agent Orchestration" stage="Intelligence" title="Planner → Executor → Critic → Governor" description="A task token passes through bounded, governed roles — from Patent 1's Orchestration Engine (105). The Governor enforces compliance and validation. Hover an agent to see its role." align="center" />

        {/* console-surface panel — reads as a system diagram, not floating icons */}
        <div className="console-surface relative mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl">
          <div className="h-0.5 w-full" style={{ background: 'var(--grad-primary)' }} />
          <span className="pointer-events-none absolute left-4 top-3 font-mono text-[9px] uppercase tracking-[0.1em] text-white/25">FIG. 3 — AGENT ORCHESTRATION</span>

          <div className="p-8 pt-10">
            {/* agents + connector with flowing packet */}
            <div className="relative flex items-center justify-center gap-2 sm:gap-6">
              {AGENTS.map((a, i) => {
                const isActive = active === i
                return (
                  <React.Fragment key={a.label}>
                    <motion.div animate={reduce ? {} : { scale: isActive ? 1.08 : 1, opacity: isActive ? 1 : 0.6 }} transition={{ duration: 0.3 }} className="relative grid h-24 w-24 place-items-center rounded-2xl border text-center transition-colors" style={{ borderColor: isActive ? (a.gold ? 'var(--gold)' : 'var(--primary)') : 'rgba(255,255,255,0.08)', background: isActive ? (a.gold ? 'rgba(201,162,39,0.10)' : 'rgba(46,46,217,0.10)') : 'rgba(255,255,255,0.02)' }}>
                      <span className={isActive ? (a.gold ? 'text-gold' : 'text-primary') : 'text-muted-foreground'}><a.icon /></span>
                      <span className="absolute -bottom-6 text-xs font-semibold">{a.label}</span>
                      {isActive && <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full ring-2 ring-background" style={{ backgroundColor: a.gold ? 'var(--gold)' : 'var(--primary)' }} />}
                    </motion.div>
                    {i < AGENTS.length - 1 && (
                      <div className="relative flex items-center">
                        <div className="hidden h-px w-12 bg-white/10 sm:block" />
                        {/* the packet flowing along the connector */}
                        {!reduce && (
                          <motion.div className="absolute" animate={{ left: active === i ? ['-10%', '110%'] : '-10%' }} transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}>
                            <span className="inline-flex items-center gap-1 rounded-full bg-primary/20 px-2 py-0.5 font-mono text-[9px] text-primary">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {AGENTS[i].packet}
                            </span>
                          </motion.div>
                        )}
                      </div>
                    )}
                  </React.Fragment>
                )
              })}
            </div>

            <p className="mt-12 text-center text-sm text-muted-foreground">
              <span className="font-mono text-[10px] uppercase tracking-wider text-gold">Governed autonomy</span> · bounded + audited · Orchestration Engine (105) · Feedback Loop (106)
            </p>
            <div className="mt-4 flex justify-center">
              <a href="/innovate/autonomous-knowledge-core" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-400">View the agent spec →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
