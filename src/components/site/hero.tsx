'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Award, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BRAND } from '@/lib/site-data'
import { PIPELINE_STAGES } from './pipeline-rail'
import { CountUp } from './count-up'

const reduce = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false

/* Structured AI architecture diagram — 5 horizontal layers, NOT a neural blob.
   Builds layer-by-layer on scroll into view; lines light in sequence. */
function ArchitectureDiagram() {
  const layers = [
    { id: 'l1', label: 'Data', sub: 'Ingest · Govern', y: 8 },
    { id: 'l2', label: 'Intelligence', sub: 'Models · RAG', y: 32 },
    { id: 'l3', label: 'Platforms', sub: '8 IP products', y: 56 },
    { id: 'l4', label: 'Transformation', sub: 'Agents · Workflows', y: 80 },
    { id: 'l5', label: 'Outcomes', sub: 'Measurable ROI', y: 104 },
  ]
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <svg viewBox="0 0 400 130" className="w-full">
        {/* vertical connectors */}
        {[32, 56, 80].map((y, i) => (
          <motion.line
            key={i}
            x1={200} y1={y - 14} x2={200} y2={y + 6}
            stroke="var(--primary)" strokeWidth={1} strokeOpacity={0.4}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.2 }}
          />
        ))}
        {/* layers */}
        {layers.map((l, i) => (
          <motion.g
            key={l.id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.18 }}
          >
            <rect
              x={i % 2 === 0 ? 40 : 120}
              y={l.y - 10}
              width={240} height={20} rx={3}
              fill="rgba(46,46,217,0.10)"
              stroke="var(--primary)" strokeWidth={0.6} strokeOpacity={0.5}
            />
            <text x={200} y={l.y + 3} textAnchor="middle" fontSize={9} fontWeight={700} fill="var(--foreground)" fontFamily="var(--font-geist-sans)">
              {l.label.toUpperCase()}
            </text>
            <text x={200} y={l.y + 14} textAnchor="middle" fontSize={5.5} fill="var(--muted-foreground)" fontFamily="var(--font-geist-sans)">
              {l.sub}
            </text>
          </motion.g>
        ))}
        {/* data-flow line on the right edge */}
        <line x1={370} y1={8} x2={370} y2={104} stroke="var(--primary)" strokeWidth={0.5} strokeOpacity={0.3} className="animate-data-flow" />
      </svg>
    </div>
  )
}

const QUOTES = [
  { q: '5X faster strategic execution', who: 'Fortune 100 enterprise' },
  { q: '80% threat-vulnerability reduction', who: 'Global tech leader' },
  { q: '65% fewer supply-chain disruptions', who: 'Multinational supply chain' },
]

export function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const orbX = useTransform(scrollY, [0, 400], [0, reduce ? 0 : 20])
  const orbY = useTransform(scrollY, [0, 400], [0, reduce ? 0 : -15])

  // word reveal for headline
  const words = ['Beyond', 'Consulting.', 'Engineering', 'the', 'Future.']
  const wordVariants = {
    hidden: { y: '110%', opacity: 0 },
    show: (i: number) => ({
      y: '0%', opacity: 1,
      transition: { duration: 0.6, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
    }),
  }

  return (
    <section id="top" className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden">
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-40" />
        {/* slow mesh — barely perceptible 60s */}
        <div className="absolute left-1/2 top-1/2 h-[120vh] w-[120vh] -translate-x-1/2 -translate-y-1/2 opacity-[0.04] animate-mesh" style={{ background: 'conic-gradient(from 0deg, #2E2ED9, #4D4DE0, #2323A8, #2E2ED9)' }} />
        {/* drifting orbs (not pulsing) */}
        <motion.div style={{ x: orbX, y: orbY }} className="absolute left-[12%] top-[18%] h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-orb-1" />
        <motion.div style={{ x: orbX, y: orbY }} className="absolute right-[8%] bottom-[12%] h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-orb-2" />
        {/* radial glow behind headline */}
        <div className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: 'radial-gradient(circle, rgba(46,46,217,0.16) 0%, transparent 70%)' }} />
        {/* film grain */}
        <div className="absolute inset-0 noise" />
        {/* vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(8,9,15,0.6) 100%)' }} />
        {/* top + bottom fades */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* eyebrow — the manifesto positioning */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              <Award className="h-3.5 w-3.5" /> {BRAND.heroEyebrow}
            </span>
          </motion.div>

          {/* headline — per-word mask reveal */}
          <h1 className="mt-8 text-balance text-6xl font-bold leading-[1.0] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
            <span className="block text-white text-glow">
              <Word w={words[0]} i={0} v={wordVariants} />
              <Word w={words[1]} i={1} v={wordVariants} />
            </span>
            <span className="mt-1 block text-white">
              <Word w={words[2]} i={2} v={wordVariants} />
              <Word w={words[3]} i={3} v={wordVariants} />
            </span>
            <span className="mt-1 block">
              <Word w={words[4]} i={4} v={wordVariants} gradient />
            </span>
          </h1>

          {/* subhead */}
          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mx-auto mt-7 max-w-2xl text-pretty text-xl leading-relaxed tracking-[-0.01em] text-foreground/80"
          >
            {BRAND.heroSub}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <MagneticButton>
              <Button asChild size="lg" className="h-14 gap-2 rounded-full px-10 text-base font-semibold">
                <a href={BRAND.ctaPrimaryHref} target="_blank" rel="noopener noreferrer">
                  {BRAND.heroCta}<ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </MagneticButton>
            <Button asChild size="lg" variant="outline" className="h-14 gap-2 rounded-full border-primary/40 px-10 text-base font-semibold text-primary hover:bg-primary/10 hover:text-primary">
              <Link href="#system">Explore the system</Link>
            </Button>
          </motion.div>

          {/* live status strip — command center feel */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mx-auto mt-10 flex w-fit flex-wrap items-center justify-center gap-x-5 gap-y-1.5 rounded-full border border-white/8 bg-card/40 px-5 py-2 font-mono text-[11px] text-muted-foreground backdrop-blur"
          >
            <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Models: 8 online</span>
            <span className="text-white/15">|</span>
            <span>Patents: <CountUp value={11} className="text-primary" /></span>
            <span className="text-white/15">|</span>
            <span>Inferences/sec: 4,210</span>
            <span className="text-white/15">|</span>
            <span>Uptime: 99.98%</span>
          </motion.div>

          {/* real quotes instead of fake logos */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="mt-12 grid gap-4 sm:grid-cols-3"
          >
            {QUOTES.map((q) => (
              <div key={q.q} className="text-left">
                <p className="text-sm font-medium text-foreground/85">"{q.q}"</p>
                <p className="mt-1 text-xs text-muted-foreground">— {q.who}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* scroll indicator — appears last */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#system" className="inline-flex flex-col items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary">
          <span className="uppercase tracking-[0.18em]">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce-down" />
        </a>
      </motion.div>
    </section>
  )
}

function Word({ w, i, v, gradient = false }: { w: string; i: number; v: any; gradient?: boolean }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span custom={i} variants={v} initial="hidden" animate="show" className={`inline-block ${gradient ? 'gradient-text' : ''}`}>
        {w}{i === 1 || i === 4 ? '' : ' '}
      </motion.span>
    </span>
  )
}

/* Magnetic button — pulls toward cursor within a radius */
function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = e.clientX - (r.left + r.width / 2)
    const y = e.clientY - (r.top + r.height / 2)
    const dist = Math.hypot(x, y)
    if (dist < 100) {
      ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`
    } else {
      ref.current.style.transform = 'translate(0,0)'
    }
  }
  const reset = () => { if (ref.current) ref.current.style.transform = 'translate(0,0)' }
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className="magnetic inline-block">
      {children}
    </div>
  )
}
