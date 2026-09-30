'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Database, Cpu, Brain, Workflow, Target, Calculator, CheckCircle2 } from 'lucide-react'
import { SectionHeader, SectionDivider } from './section-header'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/* Data → Intelligence → Action pipeline — scroll-pinned 3-stage animation */
const PIPELINE = [
  { icon: Database, label: 'Data', sub: 'Raw, governed, lineage-tracked', color: 'var(--primary)' },
  { icon: Brain, label: 'Intelligence', sub: 'Models · RAG · Agents', color: 'var(--primary)' },
  { icon: Target, label: 'Action', sub: 'Decisions · Workflows · ROI', color: 'var(--primary)' },
]

export function DataPipeline() {
  return (
    <section className="relative py-24 lg:py-32">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionHeader number="§05" eyebrow="The Pipeline" title="Data → Intelligence → Action" description="Every engagement runs through this pipeline. Motion that explains the system, not decorates it." align="center" />

        <div className="mt-16 flex flex-col items-stretch justify-center gap-4 lg:flex-row lg:items-center">
          {PIPELINE.map((p, i) => (
            <React.Fragment key={p.label}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative flex-1 overflow-hidden rounded-xl border border-white/8 bg-card/50 p-8 text-center"
              >
                <span className="pointer-events-none absolute left-2 top-2 h-2.5 w-2.5 border-l border-t border-white/15" />
                <span className="pointer-events-none absolute bottom-2 right-2 h-2.5 w-2.5 border-b border-r border-white/15" />
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20">
                  <p.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{p.label}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{p.sub}</p>
                <span className="num-mono mt-3 inline-block text-[10px] font-bold text-primary/60">STAGE {String(i + 1).padStart(2, '0')}</span>
              </motion.div>
              {i < PIPELINE.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.2 + 0.3 }}
                  className="hidden h-px w-12 origin-left lg:block"
                  style={{ background: 'var(--grad-primary)' }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Agent orchestration — 3 agents passing a token in sequence */
const AGENTS = [
  { label: 'Planner', icon: Brain },
  { label: 'Executor', icon: Workflow },
  { label: 'Critic', icon: Cpu },
]

export function AgentOrchestration() {
  const [active, setActive] = React.useState(0)
  React.useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % AGENTS.length), 1400)
    return () => clearInterval(id)
  }, [])
  return (
    <section className="relative bg-[#0B0C14] py-24 lg:py-32">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionHeader number="§06" eyebrow="Agent Orchestration" title="Planner → Executor → Critic" description="A glimpse of how Strategemist agents collaborate — a task token passing through bounded, governed roles." align="center" />
        <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
          {AGENTS.map((a, i) => {
            const isActive = active === i
            return (
              <React.Fragment key={a.label}>
                <motion.div
                  animate={{ scale: isActive ? 1.05 : 1, opacity: isActive ? 1 : 0.55 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    'relative grid h-24 w-24 place-items-center rounded-2xl border bg-card/50 text-center transition-colors',
                    isActive ? 'border-primary shadow-[0_0_30px_-8px_var(--primary)]' : 'border-white/8'
                  )}
                >
                  <a.icon className={cn('h-8 w-8', isActive ? 'text-primary' : 'text-muted-foreground')} />
                  <span className="absolute -bottom-6 text-xs font-semibold">{a.label}</span>
                  {isActive && <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-primary ring-2 ring-background" />}
                </motion.div>
                {i < AGENTS.length - 1 && (
                  <div className="flex items-center text-muted-foreground/40">
                    <motion.div
                      animate={{ opacity: active === i ? [0.3, 1, 0.3] : 0.3 }}
                      transition={{ duration: 1.4, repeat: Infinity }}
                      className="text-xl"
                    >→</motion.div>
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* AI Maturity Assessment — 5-stage slider */
const MATURITY = ['Initial', 'Reactive', 'Defined', 'Managed', 'Optimizing']
const MATURITY_BLURBS: Record<string, string> = {
  Initial: 'Ad-hoc, siloed experiments. No operating model. ROI unmeasured.',
  Reactive: 'Pilots running, but delivery is reactive and fragile.',
  Defined: 'Reference architectures, guardrails, and a PMO in place.',
  Managed: 'Production-grade MLOps, governance, and outcome dashboards.',
  Optimizing: 'Compounding IP, continuous retraining, board-grade reporting.',
}

export function MaturityAssessment() {
  const [stage, setStage] = React.useState(2)
  return (
    <section className="relative py-24 lg:py-32">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionHeader number="§07" eyebrow="AI Maturity" title="Where are you on the journey?" description="Drag the handle to find your stage. We meet you there — and design the next." align="center" />
        <div className="mx-auto mt-14 max-w-2xl">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {MATURITY.map((m, i) => (
              <button key={m} onClick={() => setStage(i)} className={cn('transition-colors', i <= stage ? 'text-primary' : 'text-muted-foreground/40 hover:text-foreground')}>
                {m}
              </button>
            ))}
          </div>
          <input
            type="range" min={0} max={4} value={stage}
            onChange={(e) => setStage(parseInt(e.target.value))}
            className="mt-4 w-full cursor-pointer accent-[var(--primary)]"
            aria-label="AI maturity stage"
          />
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-6"
          >
            <div className="flex items-center gap-2">
              <span className="num-mono text-sm font-bold text-primary">Stage {stage + 1}/5</span>
              <span className="h-px flex-1 bg-primary/20" />
              <span className="text-sm font-semibold">{MATURITY[stage]}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{MATURITY_BLURBS[MATURITY[stage]]}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* AI ROI Calculator — simple formula-based estimate */
export function RoiCalculator() {
  const [industry, setIndustry] = React.useState('Tech')
  const [employees, setEmployees] = React.useState(5000)
  const [spend, setSpend] = React.useState(2)

  // rough heuristic: $saved = employees × $2.5k/yr efficiency + spend × 3.2x ROI
  const impact = Math.round((employees * 2500 + spend * 1000000 * 3.2) / 1000000)

  return (
    <section className="relative bg-[#0B0C14] py-24 lg:py-32">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionHeader number="§08" eyebrow="AI ROI" title="Estimate your annual impact" description="A rough heuristic, not a commitment — but directionally right. Real estimates come in a briefing." align="center" />
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 rounded-2xl border border-white/8 bg-card/50 p-6 sm:p-8 md:grid-cols-2">
          <div className="space-y-5">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Industry</label>
              <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="mt-2 w-full rounded-lg border border-white/10 bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none">
                {['Tech', 'Financial Services', 'Manufacturing', 'Healthcare', 'Logistics', 'Retail'].map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Employees: <span className="num-mono text-primary">{employees.toLocaleString()}</span></label>
              <input type="range" min={500} max={200000} step={500} value={employees} onChange={(e) => setEmployees(parseInt(e.target.value))} className="mt-2 w-full accent-[var(--primary)]" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Current AI spend: <span className="num-mono text-primary">${spend}M/yr</span></label>
              <input type="range" min={0} max={20} step={1} value={spend} onChange={(e) => setSpend(parseInt(e.target.value))} className="mt-2 w-full accent-[var(--primary)]" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
            <Calculator className="h-6 w-6 text-primary" />
            <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">Estimated annual impact</p>
            <p className="gradient-text mt-2 text-5xl font-bold tracking-tight num-mono">${impact}M</p>
            <p className="mt-2 text-xs text-muted-foreground">For {industry} · {employees.toLocaleString()} employees</p>
            <Button asChild size="sm" className="mt-5 gap-1.5 rounded-full">
              <a href="#contact">Get a real estimate <Target className="h-3.5 w-3.5" /></a>
            </Button>
          </div>
        </div>
        <p className="mx-auto mt-3 max-w-3xl text-center text-[11px] text-muted-foreground/60">
          Heuristic only. Outcomes depend on data maturity, use-case fit, and execution discipline.
        </p>
      </div>
    </section>
  )
}
