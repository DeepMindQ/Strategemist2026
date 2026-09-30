'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Activity,
  BrainCircuit,
  Workflow,
  Gauge,
  ShieldCheck,
  TrendingUp,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

function AnimatedBars() {
  const [bars, setBars] = React.useState<number[]>(
    Array.from({ length: 28 }, () => 20 + Math.random() * 60)
  )
  React.useEffect(() => {
    const id = setInterval(() => {
      setBars((prev) => prev.map((_, i) => {
        const wave = Math.sin(Date.now() / 600 + i * 0.4) * 18
        return Math.max(8, Math.min(92, 40 + wave + Math.random() * 22))
      }))
    }, 900)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex h-24 items-end gap-1.5">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-t-sm"
          style={{
            height: `${h}%`,
            background: i % 3 === 0
              ? 'linear-gradient(to top, var(--accent), transparent)'
              : 'linear-gradient(to top, var(--primary), transparent)',
          }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

function NodeGraph() {
  const nodes = [
    { x: 15, y: 30, r: 4, label: 'ingest' },
    { x: 38, y: 18, r: 3, label: '' },
    { x: 40, y: 55, r: 5, label: 'model' },
    { x: 64, y: 38, r: 3, label: '' },
    { x: 70, y: 70, r: 4, label: 'decide' },
    { x: 88, y: 30, r: 3, label: '' },
  ]
  const edges = [
    [0, 1], [0, 2], [1, 3], [2, 3], [2, 4], [3, 4], [3, 5], [4, 5],
  ]
  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="var(--primary)"
          strokeWidth={0.4}
          strokeOpacity={0.5}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 2.4, delay: i * 0.12, repeat: Infinity }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r * 0.4}
          fill={i % 2 === 0 ? 'var(--primary)' : 'var(--accent)'}
          animate={{ r: [n.r * 0.35, n.r * 0.5, n.r * 0.35] }}
          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
        />
      ))}
    </svg>
  )
}

function StatusPill({ label, tone = 'primary' }: { label: string; tone?: 'primary' | 'accent' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium',
        tone === 'primary'
          ? 'bg-primary/12 text-primary'
          : 'bg-accent/15 text-accent'
      )}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full animate-pulse', tone === 'primary' ? 'bg-primary' : 'bg-accent')} />
      {label}
    </span>
  )
}

function CommandDeck() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-4xl"
      style={{ perspective: 1200 }}
    >
      <div className="glass relative overflow-hidden rounded-2xl border border-border/70 shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-border/60 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-3 text-xs font-medium text-muted-foreground">
              strategemist · command deck
            </span>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <StatusPill label="models live" tone="primary" />
            <StatusPill label="guardrails active" tone="accent" />
          </div>
        </div>

        {/* Body grid */}
        <div className="grid gap-3 p-4 sm:grid-cols-12 sm:p-5">
          {/* Forecast panel */}
          <div className="sm:col-span-7 rounded-xl border border-border/50 bg-card/60 p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Demand forecast · 14d</span>
              </div>
              <span className="text-xs text-muted-foreground">ForeCortex</span>
            </div>
            <AnimatedBars />
            <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
              <div className="rounded-lg bg-muted/50 p-2">
                <div className="text-muted-foreground">MAPE</div>
                <div className="font-semibold text-primary">3.1%</div>
              </div>
              <div className="rounded-lg bg-muted/50 p-2">
                <div className="text-muted-foreground">Confidence</div>
                <div className="font-semibold">92%</div>
              </div>
              <div className="rounded-lg bg-muted/50 p-2">
                <div className="text-muted-foreground">Drift</div>
                <div className="font-semibold text-accent">stable</div>
              </div>
            </div>
          </div>

          {/* Orchestration panel */}
          <div className="sm:col-span-5 rounded-xl border border-border/50 bg-card/60 p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Workflow className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">Orchestration</span>
              </div>
              <span className="text-xs text-muted-foreground">FlowLoom</span>
            </div>
            <div className="relative h-32 rounded-lg bg-muted/30">
              <NodeGraph />
            </div>
            <div className="mt-3 space-y-1.5">
              {[
                { l: 'Straight-through', v: '63%' },
                { l: 'Self-heal events', v: '11' },
                { l: 'Human-in-loop', v: '4' },
              ].map((r) => (
                <div key={r.l} className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{r.l}</span>
                  <span className="font-medium">{r.v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom strip */}
          <div className="sm:col-span-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { icon: BrainCircuit, label: 'Inferences / sec', value: '8,402' },
              { icon: ShieldCheck, label: 'Policy blocks', value: '99.4%' },
              { icon: Gauge, label: 'p99 latency', value: '38ms' },
              { icon: TrendingUp, label: 'ROI vs plan', value: '+3.2x' },
            ].map((m) => (
              <div
                key={m.label}
                className="flex items-center gap-3 rounded-xl border border-border/50 bg-card/60 p-3"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/12 text-primary">
                  <m.icon className="h-4.5 w-4.5" />
                </span>
                <div className="min-w-0">
                  <div className="truncate text-[11px] text-muted-foreground">{m.label}</div>
                  <div className="text-sm font-semibold">{m.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Glow line */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl"
          style={{
            background:
              'linear-gradient(120deg, transparent 30%, color-mix(in oklch, var(--primary) 35%, transparent) 50%, transparent 70%)',
            opacity: 0.25,
          }}
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,color-mix(in_oklch,var(--primary)_22%,transparent),transparent_70%)]" />
        <div className="absolute right-[-10%] top-[-10%] h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute left-[-10%] top-[20%] h-[22rem] w-[22rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="show"
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <Zap className="h-3.5 w-3.5 text-accent" />
            IP-led deep-tech, engineered for outcomes
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Turning <span className="gradient-text">deep-tech innovation</span> into
            <br className="hidden sm:block" /> scalable business outcomes
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg"
          >
            Strategemist is an IP-led technology firm. We build with predictive analytics,
            applied AI, intelligent automation, and intelligent systems—and we ship to the
            metric on your scorecard, not the hours on our timesheet.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="w-full gap-2 rounded-full sm:w-auto">
              <Link href="#contact">
                Book a briefing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full gap-2 rounded-full sm:w-auto"
            >
              <Link href="#portfolio">Explore the IP portfolio</Link>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="show"
            className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-primary" /> Responsible AI</span>
            <span className="inline-flex items-center gap-1.5"><Gauge className="h-3.5 w-3.5 text-primary" /> Outcome-linked</span>
            <span className="inline-flex items-center gap-1.5"><Activity className="h-3.5 w-3.5 text-primary" /> Production-grade</span>
          </motion.div>
        </div>

        <div className="mt-14">
          <CommandDeck />
        </div>
      </div>
    </section>
  )
}
