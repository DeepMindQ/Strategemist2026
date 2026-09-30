'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Atom, Activity, Zap, Award, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BRAND } from '@/lib/site-data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

/* Animated knowledge-graph visual (right column) */
function KnowledgeGraph() {
  const reduce = useReducedMotion()
  // 12 nodes in a pseudo-constellation
  const nodes = [
    { x: 50, y: 30 }, { x: 78, y: 22 }, { x: 30, y: 55 }, { x: 62, y: 58 },
    { x: 85, y: 48 }, { x: 20, y: 78 }, { x: 48, y: 80 }, { x: 72, y: 75 },
    { x: 38, y: 38 }, { x: 90, y: 68 }, { x: 58, y: 12 }, { x: 15, y: 40 },
  ]
  const edges = [
    [0, 8], [0, 10], [0, 2], [8, 2], [2, 11], [2, 3], [3, 8], [3, 4], [3, 6],
    [4, 1], [4, 9], [6, 5], [6, 7], [7, 9], [5, 11], [1, 10], [10, 0], [7, 3],
  ]
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      {/* glow orbs behind */}
      <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute right-0 top-1/4 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />

      <svg viewBox="0 0 100 100" className="relative h-full w-full">
        {/* edges */}
        {edges.map(([a, b], i) => {
          const na = nodes[a], nb = nodes[b]
          return (
            <motion.line
              key={i}
              x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
              stroke="var(--primary)"
              strokeWidth={0.35}
              strokeOpacity={0.45}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 3, delay: i * 0.08, repeat: Infinity, repeatType: 'reverse' }}
            />
          )
        })}
        {/* nodes */}
        {nodes.map((n, i) => (
          <g key={i}>
            <motion.circle
              cx={n.x} cy={n.y}
              r={i % 3 === 0 ? 2.4 : 1.5}
              fill={i % 2 === 0 ? 'var(--primary)' : 'var(--accent)'}
              animate={reduce ? {} : { r: [i % 3 === 0 ? 2.4 : 1.5, i % 3 === 0 ? 3.2 : 2.2, i % 3 === 0 ? 2.4 : 1.5] }}
              transition={{ duration: 2.5, delay: i * 0.15, repeat: Infinity }}
            />
            {i % 3 === 0 && (
              <motion.circle
                cx={n.x} cy={n.y} r={3.5}
                fill="none" stroke="var(--primary)" strokeWidth={0.3}
                animate={reduce ? {} : { r: [3.5, 6, 3.5], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.5, delay: i * 0.15, repeat: Infinity }}
              />
            )}
          </g>
        ))}
      </svg>

      {/* center label */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="rounded-full border border-white/15 bg-card/80 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur"
        >
          11 PATENTS
        </motion.div>
      </div>
    </div>
  )
}

const TRUST_LOGOS = ['FORTUNE 100', 'GLOBAL TECH LEADER', 'MULTINATIONAL', 'ENTERPRISE']

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute left-1/2 top-0 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-[-5%] top-[10%] h-72 w-72 rounded-full bg-primary/25 blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute left-[-5%] bottom-[5%] h-64 w-64 rounded-full bg-accent/20 blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <motion.div variants={fadeUp} custom={0} initial="hidden" animate="show">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                <Award className="h-3.5 w-3.5" /> Backed by 11 patents
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp} custom={1} initial="hidden" animate="show"
              className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              <span className="block text-white text-glow">Beyond Consulting.</span>
              <span className="gradient-text block">Engineering the Future.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp} custom={2} initial="hidden" animate="show"
              className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-foreground/80 sm:text-xl"
            >
              An IP-led technology firm engineering the future through quantum-inspired AI, intelligent systems, and enterprise transformation — delivering measurable outcomes, not slideware.
            </motion.p>

            <motion.div
              variants={fadeUp} custom={3} initial="hidden" animate="show"
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild size="lg" className="h-12 gap-2 rounded-full px-7 text-base">
                <a href={BRAND.ctaPrimaryHref} target="_blank" rel="noopener noreferrer">
                  {BRAND.heroCta} <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 gap-2 rounded-full border-primary/50 px-7 text-base text-primary hover:bg-primary/10 hover:text-primary">
                <Link href="/empower">Explore our IP platforms</Link>
              </Button>
            </motion.div>

            {/* trust bar */}
            <motion.div
              variants={fadeUp} custom={4} initial="hidden" animate="show"
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Trusted by</span>
              {TRUST_LOGOS.map((t) => (
                <span key={t} className="text-sm font-bold tracking-wider text-foreground/50">{t}</span>
              ))}
            </motion.div>

            {/* feature pills */}
            <motion.div
              variants={fadeUp} custom={5} initial="hidden" animate="show"
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {[
                { icon: ShieldCheck, label: 'Zero-Trust Security' },
                { icon: Atom, label: 'Quantum-Inspired' },
                { icon: Activity, label: 'Real-Time Intelligence' },
                { icon: Zap, label: 'Production-Grade' },
              ].map((f) => (
                <span key={f.label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card/50 px-3.5 py-1.5 text-sm text-foreground/75">
                  <f.icon className="h-4 w-4 text-primary" /> {f.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <KnowledgeGraph />
          </motion.div>
        </div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex justify-center"
        >
          <Link href="#empower" className="inline-flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-primary">
            <span className="uppercase tracking-[0.16em]">Scroll</span>
            <ChevronDown className="h-4 w-4 animate-bounce-down" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
