'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BRAND } from '@/lib/site-data'
import { CountUp } from './count-up'

const VERIFIED = [
  { metric: '5X', label: 'faster execution', who: 'Fortune 100' },
  { metric: '80%', label: 'threat reduction', who: 'Global tech leader' },
  { metric: '65%', label: 'fewer disruptions', who: 'Multinational 3PL' },
]

const TRUST_BADGES = ['ISO/IEC 42001', 'NIST AI RMF', 'SOC 2 (in process)']

const TERMINAL_LINES = [
  '→ ZKHNE enclave ready',
  '→ QE-VE embedding dim: 1024',
  '→ tensor contraction: 0.34ms',
  '→ GNN attention: 8 heads',
  '→ RL policy updated · reward +0.12',
  '→ temporal solver: deadline met',
  '→ federated round complete',
]

/* The Strategemist Console — living dashboard product shot */
function Console({ reduce, mounted }: { reduce: boolean | null; mounted: boolean }) {
  const [activeStage, setActiveStage] = React.useState(0)
  const [terminalLines, setTerminalLines] = React.useState<string[]>([])
  const [inferences, setInferences] = React.useState(4210)

  React.useEffect(() => {
    if (reduce) { setTerminalLines(TERMINAL_LINES.slice(0, 4)); return }
    const stageId = setInterval(() => setActiveStage((s) => (s + 1) % 5), 1400)
    let i = 0
    const termId = setInterval(() => {
      setTerminalLines((prev) => [...prev.slice(-3), TERMINAL_LINES[i % TERMINAL_LINES.length]])
      i++
    }, 1200)
    const infId = setInterval(() => setInferences((v) => v + Math.round((Math.random() - 0.5) * 80)), 1500)
    return () => { clearInterval(stageId); clearInterval(termId); clearInterval(infId) }
  }, [reduce])

  const stages = ['IP', 'INTEL', 'PLAT', 'TRANS', 'OUT']

  return (
    <div className="console-surface relative w-full overflow-hidden rounded-2xl">
      <div className="h-0.5 w-full" style={{ background: 'var(--grad-primary)' }} />
      <span className="pointer-events-none absolute left-3 top-3 font-mono text-[9px] uppercase tracking-[0.1em] text-white/25">FIG. 1 — CONSOLE</span>
      <span className="pointer-events-none absolute right-3 top-3 font-mono text-[9px] text-white/25">{mounted ? '● LIVE' : '○ INIT'}</span>

      <div className="p-5 pt-9">
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
                <motion.div animate={reduce ? {} : { scale: activeStage === i ? 1.08 : 1, opacity: activeStage === i ? 1 : 0.55 }} transition={{ duration: 0.3 }} className={`relative flex-1 rounded-md border px-1.5 py-2 text-center ${activeStage === i ? 'border-primary bg-primary/15' : 'border-white/8 bg-white/[0.02]'}`}>
                  <div className={`font-mono text-[9px] font-bold ${activeStage === i ? 'text-primary' : 'text-muted-foreground'}`}>{s}</div>
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

        {/* metric row — legible */}
        <div className="mt-5 grid grid-cols-3 gap-2">
          <div className="rounded-lg border border-white/8 bg-white/[0.02] p-3">
            <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">PATENTS</div>
            <div className="mt-1 text-2xl font-bold tabular-nums text-gold"><CountUp value={11} /></div>
          </div>
          <div className="rounded-lg border border-white/8 bg-white/[0.02] p-3">
            <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">PLATFORMS</div>
            <div className="mt-1 text-2xl font-bold tabular-nums text-primary"><CountUp value={8} /></div>
          </div>
          <div className="rounded-lg border border-white/8 bg-white/[0.02] p-3">
            <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">INFERENCES/SEC</div>
            <div className="mt-1 text-2xl font-bold tabular-nums text-white">{mounted ? inferences.toLocaleString() : '4,210'}</div>
          </div>
        </div>

        {/* terminal + sparkline */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-white/8 bg-black/40 p-2.5">
            <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">INFERENCE STREAM</div>
            <div className="custom-scroll mt-1.5 h-20 space-y-0.5 overflow-hidden font-mono text-[10px] leading-tight">
              {terminalLines.map((l, i) => <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-400/80">{l}</motion.div>)}
            </div>
          </div>
          <div className="rounded-lg border border-white/8 bg-white/[0.02] p-2.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">THROUGHPUT</span>
              <Sparkles className="h-3 w-3 text-primary" />
            </div>
            <svg viewBox="0 0 100 40" className="mt-1.5 h-20 w-full">
              <motion.polyline points="0,30 12,22 24,26 36,15 48,20 60,10 72,16 84,8 100,12" fill="none" stroke="var(--primary)" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: reduce ? 0 : Infinity, repeatType: 'reverse' }} />
            </svg>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8 px-5 py-2 text-center font-mono text-[9px] text-muted-foreground">Live preview — ingests 4,210 inferences/sec</div>
    </div>
  )
}

export function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  // Real parallax — different layers at different scroll speeds
  const orb1X = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 40])
  const orb1Y = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -30])
  const orb2X = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -50])
  const orb2Y = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 40])
  const gridY = useTransform(scrollY, [0, 800], [0, reduce ? 0 : 80])
  const meshRotate = useTransform(scrollY, [0, 2000], [0, reduce ? 0 : 60])
  const contentY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 60])
  const contentOpacity = useTransform(scrollY, [0, 500], [1, reduce ? 1 : 0.4])

  // Headline — NEW: "Enterprise decisions in milliseconds, not months."
  const headline = [
    { words: ['Enterprise', 'decisions'], gradient: false },
    { words: ['in', 'milliseconds,'], gradient: false },
    { words: ['not', 'months.'], gradient: ['milliseconds,'] },  // gradient on "milliseconds"
  ]
  const wordVariants = {
    hidden: { y: '110%', opacity: 0 },
    show: (i: number) => ({ y: '0%', opacity: 1, transition: { duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] as const } }),
  }

  return (
    <section id="top" className="relative overflow-hidden">
      <a href="#system" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-20 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-white">Skip to content</a>
      {/* system-online micro-line (top-right, fades in during load then fades) */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 3, delay: 1.8, times: [0, 0.2, 0.8, 1] }} className="pointer-events-none absolute right-6 top-24 z-10 hidden font-mono text-[10px] uppercase tracking-[0.16em] text-primary/60 lg:block">
        ● system initializing…
      </motion.div>
      {/* background layers — real parallax depth */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div style={{ y: gridY }} className="absolute inset-0 bg-grid opacity-40" />
        <motion.div style={{ rotate: meshRotate }} className="absolute left-1/2 top-1/2 h-[120vh] w-[120vh] -translate-x-1/2 -translate-y-1/2 opacity-[0.04]">
          <div className="h-full w-full animate-mesh" style={{ background: 'conic-gradient(from 0deg, #2E2ED9, #4D4DE0, #2323A8, #2E2ED9)' }} />
        </motion.div>
        <motion.div style={{ x: orb1X, y: orb1Y }} className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-orb-1" />
        <motion.div style={{ x: orb2X, y: orb2Y }} className="absolute right-[5%] bottom-[10%] h-64 w-64 rounded-full bg-primary/12 blur-3xl animate-orb-2" />
        <div className="absolute inset-0 noise" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(8,9,15,0.7) 100%)' }} />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative mx-auto max-w-[1200px] px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* LEFT: copy (55%) — LEFT-ALIGNED */}
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2">
              <span className="num-mono text-[11px] text-primary/60">§00</span>
              <span className="h-3 w-6" style={{ background: 'var(--grad-primary)' }} />
              <span className="t-mono text-primary">{BRAND.heroEyebrow}</span>
            </motion.div>

            <h1 className="h-hero mt-7 text-balance text-white">
              {headline.map((line, li) => (
                <span key={li} className="block">
                  {line.words.map((w, wi) => (
                    <span key={w} className="inline-block overflow-hidden align-bottom">
                      <motion.span custom={li * 10 + wi} variants={wordVariants} initial="hidden" animate="show" className={`inline-block ${Array.isArray(line.gradient) && line.gradient.includes(w) ? 'gradient-text text-glow' : 'text-white'}`}>
                        {w}
                      </motion.span>
                    </span>
                  )).reduce<React.ReactNode[]>((acc, el, i) => i === 0 ? [el] : [...acc, ' ', el], [])}
                </span>
              ))}
            </h1>

            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.9 }} className="t-subhead mt-7 max-w-md text-foreground/75">
              The operating system for AI transformation. 8 patents. Zero data exposure. Outcome-linked engagements.
            </motion.p>

            {/* verified outcomes — moved UP under subhead (was buried at bottom) */}
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.0 }} className="mt-6 flex flex-wrap gap-3">
              {VERIFIED.map((v) => (
                <span key={v.metric} className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-1.5 text-sm">
                  <CheckCircle2 className="h-3.5 w-3.5 text-gold" />
                  <span className="font-bold text-foreground">{v.metric}</span>
                  <span className="text-muted-foreground">{v.label} · {v.who}</span>
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.15 }} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <MagneticCta href={BRAND.ctaPrimaryHref} external>{BRAND.heroCta}</MagneticCta>
              <Button asChild size="lg" variant="outline" className="h-12 gap-2 rounded-lg border-white/20 px-7 text-[15px] font-semibold text-foreground hover:bg-white/5 hover:text-white">
                <Link href="#system">Explore the system</Link>
              </Button>
            </motion.div>

            {/* trust badges */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.3 }} className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="t-mono text-muted-foreground/70">Compliance</span>
              {TRUST_BADGES.map((b) => <span key={b} className="t-mono text-muted-foreground/80">{b}</span>)}
            </motion.div>
          </div>

          {/* RIGHT: console (45%) */}
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9, delay: 1.2, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-5">
            <CursorTilt reduce={reduce}><Console reduce={reduce} mounted={mounted} /></CursorTilt>
          </motion.div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#system" className="inline-flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-primary">
          <ChevronDown className="h-4 w-4 animate-bounce-down" />
        </a>
      </motion.div>
    </section>
  )
}

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
  return <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className="transition-transform duration-200 ease-out" style={{ transformStyle: 'preserve-3d' }}>{children}</div>
}

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
      <Button asChild size="lg" className="h-12 gap-2 rounded-lg px-7 text-[15px] font-semibold shadow-[0_0_24px_-4px_var(--primary)]" style={{ backgroundColor: '#3B82F6' }}>
        {external ? <a href={href} target="_blank" rel="noopener noreferrer">{children}<ArrowRight className="h-4 w-4" /></a> : <Link href={href}>{children}<ArrowRight className="h-4 w-4" /></Link>}
      </Button>
    </div>
  )
}
