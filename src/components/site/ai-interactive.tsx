'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Database, Brain, Workflow, Target, Shield, Cpu, Layers, Server, Cloud, Calculator, CheckCircle2 } from 'lucide-react'
import { SectionHeader, SectionDivider } from './section-header'
import { Button } from '@/components/ui/button'
import { Glossary } from './glossary'
import { cn } from '@/lib/utils'

/* Data → Intelligence → Action pipeline with real module numbers */
const PIPELINE = [
  { icon: Database, label: 'Data', sub: 'Input Interface (100) · governed', modules: ['Ingest', 'Validate', 'Govern'] },
  { icon: Brain, label: 'Intelligence', sub: 'Generative AI Core (101) + Temporal (102)', modules: ['Embed', 'Reason', 'Plan'] },
  { icon: Target, label: 'Action', sub: 'Orchestration (105) + Output (108)', modules: ['Decide', 'Execute', 'Report'] },
]

export function DataPipeline() {
  return (
    <section className="relative py-24 lg:py-32">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionHeader number="§06" eyebrow="The Pipeline" stage="Intelligence" title="Data → Intelligence → Action" description="Every engagement runs through this pipeline — with real module numbers from the patent specs. Motion that explains the system." align="center" />
        <div className="mt-16 flex flex-col items-stretch justify-center gap-4 lg:flex-row lg:items-center">
          {PIPELINE.map((p, i) => (
            <React.Fragment key={p.label}>
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.2 }} className="relative flex-1 overflow-hidden rounded-xl border border-white/8 bg-card/50 p-8 text-center">
                <span className="pointer-events-none absolute left-2 top-2 h-2.5 w-2.5 border-l border-t border-white/15" />
                <span className="pointer-events-none absolute bottom-2 right-2 h-2.5 w-2.5 border-b border-r border-white/15" />
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20"><p.icon className="h-7 w-7" /></span>
                <h3 className="mt-5 text-lg font-bold">{p.label}</h3>
                <p className="mt-1 font-mono text-[11px] text-muted-foreground">{p.sub}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                  {p.modules.map((m) => <span key={m} className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-foreground/70">{m}</span>)}
                </div>
                <span className="num-mono mt-3 inline-block text-[10px] font-bold text-primary/60">STAGE {String(i + 1).padStart(2, '0')}</span>
              </motion.div>
              {i < PIPELINE.length - 1 && (
                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.2 + 0.3 }} className="hidden h-px w-12 origin-left lg:block" style={{ background: 'var(--grad-primary)' }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Agent Orchestration — 4 agents with Governor */
const AGENTS = [
  { label: 'Planner', icon: Brain },
  { label: 'Executor', icon: Workflow },
  { label: 'Critic', icon: Cpu },
  { label: 'Governor', icon: Shield },
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
        <SectionHeader number="§07" eyebrow="Agent Orchestration" stage="Intelligence" title="Planner → Executor → Critic → Governor" description="A glimpse of how Strategemist agents collaborate — a task token passing through bounded, governed roles. The Governor enforces compliance and validation (from Patent 1)." align="center" />
        <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
          {AGENTS.map((a, i) => {
            const isActive = active === i
            return (
              <React.Fragment key={a.label}>
                <motion.div animate={{ scale: isActive ? 1.05 : 1, opacity: isActive ? 1 : 0.55 }} transition={{ duration: 0.3 }} className={cn('relative grid h-24 w-24 place-items-center rounded-2xl border bg-card/50 text-center transition-colors', isActive ? 'border-primary shadow-[0_0_30px_-8px_var(--primary)]' : 'border-white/8')}>
                  <a.icon className={cn('h-8 w-8', isActive ? 'text-primary' : 'text-muted-foreground')} />
                  <span className="absolute -bottom-6 text-xs font-semibold">{a.label}</span>
                  {isActive && <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-primary ring-2 ring-background" />}
                </motion.div>
                {i < AGENTS.length - 1 && <motion.div animate={{ opacity: active === i ? [0.3, 1, 0.3] : 0.3 }} transition={{ duration: 1.4, repeat: Infinity }} className="text-muted-foreground/40 text-xl">→</motion.div>}
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* AI Maturity Assessment — real 5 stages tied to IP */
const MATURITY = ['Ad-hoc', 'Pilots', 'Reference architectures', 'Production MLOps + governance', 'Compounding IP']
const MATURITY_IP: Record<number, { blurb: string; ip: string[] }> = {
  0: { blurb: 'Ad-hoc, siloed experiments. No operating model. ROI unmeasured.', ip: ['AI Consulting', 'PoC'] },
  1: { blurb: 'Pilots running, but delivery is reactive and fragile.', ip: ['MLOps consulting', 'Data engineering'] },
  2: { blurb: 'Reference architectures, guardrails, and a PMO in place.', ip: ['EthicSense', 'Reference designs'] },
  3: { blurb: 'Production-grade MLOps, governance, outcome dashboards.', ip: ['Φ-Federis', 'Self-healing workflows'] },
  4: { blurb: 'Compounding IP, continuous retraining, board-grade reporting.', ip: ['QµPrix', 'Σ-Graphion', 'Autonomous Knowledge Core'] },
}

export function MaturityAssessment() {
  const [stage, setStage] = React.useState(2)
  return (
    <section className="relative py-24 lg:py-32">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionHeader number="§08" eyebrow="AI Transformation Maturity" stage="Transformation" title="Where are you on the journey?" description="Drag the handle to find your stage. We meet you there — and design the next, with the right IP for each level." align="center" />
        <div className="mx-auto mt-14 max-w-2xl">
          <div className="flex items-center justify-between font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {MATURITY.map((m, i) => <button key={m} onClick={() => setStage(i)} className={cn('transition-colors', i <= stage ? 'text-primary' : 'text-muted-foreground/40 hover:text-foreground')}>{m.split(' ')[0]}</button>)}
          </div>
          <input type="range" min={0} max={4} value={stage} onChange={(e) => setStage(parseInt(e.target.value))} className="mt-4 w-full cursor-pointer accent-[var(--primary)]" aria-label="AI maturity stage" />
          <motion.div key={stage} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-6">
            <div className="flex items-center gap-2">
              <span className="num-mono text-sm font-bold text-primary">Stage {stage + 1}/5</span>
              <span className="h-px flex-1 bg-primary/20" />
              <span className="text-sm font-semibold">{MATURITY[stage]}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{MATURITY_IP[stage].blurb}</p>
            <div className="mt-4">
              <div className="font-mono text-[10px] uppercase tracking-wider text-primary">Strategemist IP at this stage</div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {MATURITY_IP[stage].ip.map((ip) => <span key={ip} className="rounded-full bg-gold/12 px-2.5 py-0.5 text-xs font-medium text-gold">{ip}</span>)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* AI ROI Calculator — with maturity multiplier + range */
export function RoiCalculator() {
  const [industry, setIndustry] = React.useState('Tech')
  const [employees, setEmployees] = React.useState(5000)
  const [spend, setSpend] = React.useState(2)
  const [maturity, setMaturity] = React.useState(2)
  const mult = [1.2, 1.8, 2.5, 3.2, 4.0][maturity]
  const base = employees * 2500 + spend * 1000000 * 3.2
  const low = Math.round((base * mult * 0.7) / 1000000)
  const high = Math.round((base * mult * 1.3) / 1000000)
  return (
    <section className="relative bg-[#0B0C14] py-24 lg:py-32">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionHeader number="§09" eyebrow="AI ROI" stage="Outcomes" title="Estimate your annual impact" description="A heuristic, not a commitment — but directionally right. Real estimates come in a briefing. Based on verified outcomes (5X / 80% / 65%)." align="center" />
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 rounded-2xl border border-white/8 bg-card/50 p-6 sm:p-8 md:grid-cols-2">
          <div className="space-y-5">
            <div>
              <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Industry</label>
              <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="mt-2 w-full rounded-lg border border-white/10 bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none">
                {['Tech', 'Financial Services', 'Manufacturing', 'Healthcare', 'Logistics', 'Retail'].map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Employees: <span className="num-mono text-primary">{employees.toLocaleString()}</span></label>
              <input type="range" min={500} max={200000} step={500} value={employees} onChange={(e) => setEmployees(parseInt(e.target.value))} className="mt-2 w-full accent-[var(--primary)]" />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Current AI spend: <span className="num-mono text-primary">${spend}M/yr</span></label>
              <input type="range" min={0} max={20} step={1} value={spend} onChange={(e) => setSpend(parseInt(e.target.value))} className="mt-2 w-full accent-[var(--primary)]" />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">AI maturity: <span className="text-primary">{MATURITY[maturity]}</span></label>
              <input type="range" min={0} max={4} value={maturity} onChange={(e) => setMaturity(parseInt(e.target.value))} className="mt-2 w-full accent-[var(--primary)]" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
            <Calculator className="h-6 w-6 text-primary" />
            <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Estimated annual impact (range)</p>
            <p className="gradient-text mt-2 text-4xl font-bold tracking-tight num-mono">${low}–{high}M</p>
            <p className="mt-2 text-xs text-muted-foreground">{industry} · {employees.toLocaleString()} employees · {MATURITY[maturity]}</p>
            <Button asChild size="sm" className="mt-5 gap-1.5 rounded-lg"><a href="#contact">Get a real estimate <Target className="h-3.5 w-3.5" /></a></Button>
          </div>
        </div>
        <p className="mx-auto mt-3 max-w-3xl text-center font-mono text-[10px] text-muted-foreground/60">Heuristic only · based on verified outcomes (5X execution, 80% threat reduction, 65% fewer disruptions)</p>
      </div>
    </section>
  )
}

/* Architecture Explorer — 5 layers, click to see IP */
const LAYERS = [
  { name: 'Presentation', icon: Layers, ip: ['EthicSense — explainable UI'] },
  { name: 'Application', icon: Workflow, ip: ['G(π)-Forma — orchestration'] },
  { name: 'Model', icon: Brain, ip: ['QµPrix', 'Σ-Graphion', 'Neuro-Quantus'] },
  { name: 'Data', icon: Database, ip: ['InsightMesh', 'tensor encoding'] },
  { name: 'Infrastructure', icon: Server, ip: ['Φ-Federis — zero-exposure', 'Sustainable Compute'] },
]

export function ArchitectureExplorer() {
  const [active, setActive] = React.useState('Model')
  return (
    <section className="relative py-24 lg:py-32">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionHeader number="§10" eyebrow="Architecture Explorer" stage="Platforms" title="Explore the system, layer by layer" description="Click a layer of the AI stack to see which Strategemist IP maps to it. A genuine 'explore the system' tool." align="center" />
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="flex flex-col gap-2">
            {LAYERS.map((l, i) => (
              <button key={l.name} onClick={() => setActive(l.name)} className={cn('flex items-center gap-4 rounded-xl border p-4 text-left transition-all', active === l.name ? 'border-primary/40 bg-primary/5 shadow-[0_0_30px_-10px_var(--primary)]' : 'border-white/8 hover:border-primary/30')}>
                <span className="num-mono text-xs font-bold text-primary/60">L{5 - i}</span>
                <span className={cn('grid h-10 w-10 place-items-center rounded-lg', active === l.name ? 'bg-primary/15 text-primary' : 'bg-white/5 text-muted-foreground')}><l.icon className="h-5 w-5" /></span>
                <span className={cn('flex-1 font-semibold', active === l.name ? 'text-primary' : 'text-foreground')}>{l.name}</span>
                {active === l.name && (
                  <span className="hidden flex-wrap justify-end gap-1.5 sm:flex">
                    {l.ip.map((x) => <span key={x} className="rounded-full bg-gold/12 px-2 py-0.5 text-[10px] font-medium text-gold">{x}</span>)}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
