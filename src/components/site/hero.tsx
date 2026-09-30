'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, CheckCircle2, ChevronDown, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BRAND } from '@/lib/site-data'
import { CountUp } from './count-up'

const VERIFIED = [
  { metric: '5X faster execution', who: 'Fortune 100' },
  { metric: '80% threat reduction', who: 'Global tech leader' },
  { metric: '65% fewer disruptions', who: 'Multinational' },
]

const TERMINAL_LINES = [
  '→ ZKHNE enclave ready',
  '→ QE-VE embedding dim: 1024',
  '→ tensor contraction: 0.34ms',
  '→ GNN attention: 8 heads',
  '→ RL policy updated · reward +0.12',
  '→ temporal solver: deadline met',
  '→ federated round complete',
]

/* The Strategemist Console — the "living dashboard" product shot.
   Shows the 5-stage pipeline with a flowing packet, live metrics, a
   streaming inference terminal, and a self-drawing sparkline. */
function Console({ reduce }: { reduce: boolean | null }) {
  const [activeStage, setActiveStage] = React.useState(0)
  const [terminalLines, setTerminalLines] = React.useState<string[]>([])
  const [tick, setTick] = React.useState(0)

  // advance the pipeline packet
  React.useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setActiveStage((s) => (s + 1) % 5), 1400)
    return () => clearInterval(id)
  }, [reduce])

  // stream terminal lines
  React.useEffect(() => {
    if (reduce) { setTerminalLines(TERMINAL_LINES.slice(0, 4)); return }
    let i = 0
    const id = setInterval(() => {
      setTerminalLines((prev) => [...prev.slice(-3), TERMINAL_LINES[i % TERMINAL_LINES.length]])
      i++
    }, 1200)
    return () => clearInterval(id)
  }, [reduce])

  // live timestamp (client-only to avoid hydration mismatch)
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
    const id = setInterval(() => setTick((t) => t + 1), 1000)
    return () => clearInterval(id)
  }, [])

  const stages = ['IP', 'INTEL', 'PLAT', 'TRANS', 'OUT']

  return (
    <div className="console-surface relative w-full overflow-hidden rounded-2xl">
      {/* top accent line */}
      <div className="h-0.5 w-full" style={{ background: 'var(--grad-primary)' }} />
      {/* schematic corner */}
      <span className="pointer-events-none absolute left-3 top-3 font-mono text-[9px] uppercase tracking-[0.1em] text-white/25">FIG. 1 — CONSOLE</span>
      <span className="pointer-events-none absolute right-3 top-3 font-mono text-[9px] text-white/25">{mounted ? new Date(0, 0, 0, 0, 0, tick).toISOString().slice(11, 19) : '00:00:00'}</span>

      <div className="p-5 pt-8">
        {/* header row */}
        <div className="flex items-center justify-between">
          <span className="font-display text-sm font-bold tracking-tight text-white">strategemist console</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> SYSTEM ONLINE
          </span>
        </div>

        {/* pipeline panel */}
        <div className="mt-5">
          <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">PATENT PIPELINE</div>
          <div className="mt-3 flex items-center gap-1">
            {stages.map((s, i) => (
              <React.Fragment key={i}>
                <motion.div
                  animate={reduce ? {} : { scale: activeStage === i ? 1.08 : 1, opacity: activeStage === i ? 1 : 0.55 }}
                  transition={{ duration: 0.3 }}
                  className={`relative flex-1 rounded-md border px-1.5 py-2 text-center ${activeStage === i ? 'border-primary bg-primary/15' : 'border-white/8 bg-white/[0.02]'}`}
                >
                  <div className={`font-mono text-[9px] font-bold ${activeStage === i ? 'text-primary' : 'text-muted-foreground'}`}>{s}</div>
                  <div className="mt-0.5 h-0.5 w-full rounded-full bg-white/5">
                    <div className={`h-full rounded-full ${activeStage === i ? 'bg-primary' : 'bg-transparent'}`} style={{ width: activeStage === i ? '100%' : '0%' }} />
                  </div>
                </motion.div>
                {i < stages.length - 1 && (
                  <motion.div animate={reduce ? {} : { opacity: activeStage === i ? [0.3, 1, 0.3] : 0.3 }} transition={{ duration: 1.4, repeat: Infinity }} className="text-muted-foreground">
                    <svg width="10" height="8" viewBox="0 0 10 8"><path d="M0 4 L8 4 M5 1 L8 4 L5 7" stroke="currentColor" strokeWidth="1" fill="none" /></svg>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* metric row */}
        <div className="mt-5 grid grid-cols-3 gap-2">
          {[
            { l: 'PATENTS', v: <CountUp value={11} className="text-gold" /> },
            { l: 'PLATFORMS', v: <CountUp value={8} className="text-primary" /> },
            { l: 'INFERENCES/SEC', v: <span className="num-mono text-white">4,210</span> },
          ].map((m) => (
            <div key={m.l} className="rounded-lg border border-white/8 bg-white/[0.02] p-2.5">
              <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{m.l}</div>
              <div className="mt-0.5 text-lg font-bold tabular-nums">{m.v}</div>
            </div>
          ))}
        </div>

        {/* terminal + sparkline split */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          {/* inference terminal */}
          <div className="rounded-lg border border-white/8 bg-black/40 p-2.5">
            <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">INFERENCE STREAM</div>
            <div className="custom-scroll mt-1.5 h-20 space-y-0.5 overflow-hidden font-mono text-[10px] leading-tight">
              {terminalLines.map((l, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-400/80">{l}</motion.div>
              ))}
            </div>
          </div>
          {/* sparkline */}
          <div className="rounded-lg border border-white/8 bg-white/[0.02] p-2.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">THROUGHPUT</span>
              <Activity className="h-3 w-3 text-primary" />
            </div>
            <svg viewBox="0 0 100 40" className="mt-1.5 h-20 w-full">
              <motion.polyline
                points="0,30 12,22 24,26 36,15 48,20 60,10 72,16 84,8 100,12"
                fill="none" stroke="var(--primary)" strokeWidth="1.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: reduce ? 0 : Infinity, repeatType: 'reverse' }}
              />
              <polyline points="0,30 12,22 24,26 36,15 48,20 60,10 72,16 84,8 100,12" fill="none" stroke="var(--primary)" strokeWidth="0.5" strokeOpacity={0.3} />
            </svg>
          </div>
        </div>
      </div>

      {/* caption */}
      <div className="border-t border-white/8 px-5 py-2 text-center font-mono text-[9px] text-muted-foreground">
        Live preview — the actual platform ingests 4,210 inferences/sec
      </div>
    </div>
  )
}

export function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  // Real parallax: different layers move at different scroll speeds
  const orbX = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 40])
  const orbY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -30])
  const orb2X = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -50])
  const orb2Y = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 40])
  const gridY = useTransform(scrollY, [0, 800], [0, reduce ? 0 : 80])
  const meshRotate = useTransform(scrollY, [0, 2000], [0, reduce ? 0 : 60])
  const contentY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 60])
  const contentOpacity = useTransform(scrollY, [0, 500], [1, reduce ? 1 : 0.4])

  const headlineLines = [
    { words: ['Beyond', 'Consulting.'], gradient: false },
    { words: ['Engineering', 'the'], gradient: false },
    { words: ['Future.'], gradient: true },
  ]
  const wordVariants = {
    hidden: { y: '110%', opacity: 0 },
    show: (i: number) => ({ y: '0%', opacity: 1, transition: { duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] as const } }),
  }

  return (
    <section id="top" className="relative overflow-hidden">
      {/* background layers — real parallax depth */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div style={{ y: gridY }} className="absolute inset-0 bg-grid opacity-40" />
        <motion.div style={{ rotate: meshRotate }} className="absolute left-1/2 top-1/2 h-[120vh] w-[120vh] -translate-x-1/2 -translate-y-1/2 opacity-[0.04]" >
          <div className="h-full w-full animate-mesh" style={{ background: 'conic-gradient(from 0deg, #2E2ED9, #4D4DE0, #2323A8, #2E2ED9)' }} />
        </motion.div>
        <motion.div style={{ x: orbX, y: orbY }} className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-orb-1" />
        <motion.div style={{ x: orb2X, y: orb2Y }} className="absolute right-[5%] bottom-[10%] h-64 w-64 rounded-full bg-primary/12 blur-3xl animate-orb-2" />
        <div className="absolute inset-0 noise" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(8,9,15,0.7) 100%)' }} />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative mx-auto max-w-[1200px] px-6 py-32 lg:px-8 lg:py-40">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* LEFT: copy (55%) */}
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                <span className="num-mono text-primary/60">§00</span>
                <span className="h-3 w-px bg-primary/40" />
                {BRAND.heroEyebrow}
              </span>
            </motion.div>

            <h1 className="mt-7 text-balance text-6xl font-bold leading-[0.95] tracking-[-0.045em] sm:text-7xl lg:text-[5.25rem]">
              {headlineLines.map((line, li) => (
                <span key={li} className="block">
                  {line.words.map((w, wi) => (
                    <span key={w} className="inline-block overflow-hidden align-bottom">
                      <motion.span
                        custom={li * 10 + wi}
                        variants={wordVariants}
                        initial="hidden"
                        animate="show"
                        className={`inline-block ${line.gradient ? 'gradient-text text-glow' : 'text-white'}`}
                      >
                        {w}
                      </motion.span>
                    </span>
                  )).reduce<React.ReactNode[]>((acc, el, i) => i === 0 ? [el] : [...acc, ' ', el], [])}
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-7 max-w-md text-pretty text-base font-normal leading-[1.65] text-foreground/70"
            >
              The operating system for enterprise IP. Quantum-accurate. Production-grade. Outcome-linked.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <MagneticCta href={BRAND.ctaPrimaryHref} external>
                {BRAND.heroCta}
              </MagneticCta>
              <Button asChild size="lg" variant="outline" className="h-12 gap-2 rounded-lg border-white/20 px-7 text-[15px] font-semibold text-foreground hover:bg-white/5 hover:text-white">
                <Link href="#system">Explore the system</Link>
              </Button>
            </motion.div>

            {/* verified outcomes — replaces fake quotes */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="mt-9 flex flex-col gap-2 border-t border-white/8 pt-6"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Verified outcomes</span>
              <div className="mt-1 flex flex-col gap-1.5">
                {VERIFIED.map((v) => (
                  <div key={v.metric} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-gold" />
                    <span className="font-medium text-foreground/85">{v.metric}</span>
                    <span className="text-muted-foreground">· {v.who}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: console (45%) */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <CursorTilt reduce={reduce}>
              <Console reduce={reduce} />
            </CursorTilt>
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }} className="mt-16 flex justify-center">
          <a href="#system" className="inline-flex flex-col items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary">
            <span className="uppercase tracking-[0.18em]">Scroll to explore the system</span>
            <ChevronDown className="h-4 w-4 animate-bounce-down" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

/* Cursor-reactive tilt wrapper for the console */
function CursorTilt({ children, reduce }: { children: React.ReactNode; reduce: boolean | null }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - (r.left + r.width / 2)) / (r.width / 2)
    const y = (e.clientY - (r.top + r.height / 2)) / (r.height / 2)
    ref.current.style.transform = `perspective(900px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`
  }
  const reset = () => { if (ref.current) ref.current.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)' }
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className="transition-transform duration-200 ease-out" style={{ transformStyle: 'preserve-3d' }}>
      {children}
    </div>
  )
}

/* Magnetic CTA — pulls toward cursor */
function MagneticCta({ children, href, external }: { children: React.ReactNode; href: string; external?: boolean }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = e.clientX - (r.left + r.width / 2)
    const y = e.clientY - (r.top + r.height / 2)
    if (Math.hypot(x, y) < 100) ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`
    else ref.current.style.transform = 'translate(0,0)'
  }
  const reset = () => { if (ref.current) ref.current.style.transform = 'translate(0,0)' }
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className="magnetic inline-block">
      <Button asChild size="lg" className="h-12 gap-2 rounded-lg px-7 text-[15px] font-semibold shadow-[0_0_30px_-8px_var(--primary)]">
        {external ? (
          <a href={href} target="_blank" rel="noopener noreferrer">{children}<ArrowRight className="h-4 w-4" /></a>
        ) : (
          <Link href={href}>{children}<ArrowRight className="h-4 w-4" /></Link>
        )}
      </Button>
    </div>
  )
}
