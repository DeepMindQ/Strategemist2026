'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, ShieldCheck, Atom, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BRAND, EMPOWER_PRODUCTS } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

/* Orbiting IP product ring */
function OrbitRing() {
  const reduce = useReducedMotion()
  const products = EMPOWER_PRODUCTS
  return (
    <div className="pointer-events-none relative mx-auto h-[300px] w-[300px] sm:h-[420px] sm:w-[420px]">
      {/* concentric rings */}
      {[0.5, 0.72, 0.94].map((r, i) => (
        <div
          key={i}
          className="absolute inset-0 m-auto rounded-full border border-border/50"
          style={{ width: `${r * 100}%`, height: `${r * 100}%`, left: 0, top: 0, right: 0, bottom: 0 }}
        />
      ))}
      {/* center core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={reduce ? {} : { scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="relative grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[0_0_40px_var(--primary)] sm:h-24 sm:w-24"
        >
          <span className="text-2xl font-bold">S</span>
          <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" style={{ animationDuration: '3s' }} />
        </motion.div>
      </div>
      {/* orbiting nodes */}
      <motion.div
        className="absolute inset-0"
        animate={reduce ? {} : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {products.slice(0, 8).map((p, i) => {
          const angle = (i / products.length) * Math.PI * 2
          const radius = 160
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius
          return (
            <motion.div
              key={p.id}
              className="absolute left-1/2 top-1/2"
              style={{ x, y }}
              animate={reduce ? {} : { rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              <div className="-ml-6 -mt-6 flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-card/80 text-xs font-semibold text-primary shadow-lg backdrop-blur sm:h-14 sm:w-14">
                {p.symbol}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

/* Animated counter for patents */
function PatentCounter() {
  const [n, setN] = React.useState(0)
  React.useEffect(() => {
    let raf = 0
    const start = performance.now()
    const dur = 1400
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      setN(Math.round(11 * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])
  return <span>{n}</span>
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_0%,color-mix(in_oklch,var(--primary)_28%,transparent),transparent_70%)]" />
        <div className="absolute right-[-10%] top-[-10%] h-[32rem] w-[32rem] rounded-full bg-accent/12 blur-3xl animate-glow" />
        <div className="absolute left-[-10%] top-[30%] h-[24rem] w-[24rem] rounded-full bg-primary/15 blur-3xl animate-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <motion.div variants={fadeUp} custom={0} initial="hidden" animate="show">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                Backed by <PatentCounter /> Patents
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="show"
              className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.5rem]"
            >
              <span className="block">BEYOND</span>
              <span className="gradient-text gradient-pan block">CONSULTING.</span>
              <span className="block">ENGINEERING THE</span>
              <span className="gradient-text gradient-pan block">FUTURE.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate="show"
              className="mt-6 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg"
            >
              {BRAND.heroSub}
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild size="lg" className="gap-2 rounded-full">
                <a href={BRAND.ctaPrimaryHref} target="_blank" rel="noopener noreferrer">
                  {BRAND.heroCta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 rounded-full">
                <Link href="#empower">
                  Explore our IP platforms
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-primary" /> Zero-Trust Security</span>
              <span className="inline-flex items-center gap-1.5"><Atom className="h-3.5 w-3.5 text-primary" /> Quantum-Inspired</span>
              <span className="inline-flex items-center gap-1.5"><Activity className="h-3.5 w-3.5 text-primary" /> Real-Time Intelligence</span>
              <span className="inline-flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-primary" /> Production-Grade</span>
            </motion.div>
          </div>

          {/* Right: orbit ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <OrbitRing />
            <p className="mt-4 text-center text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Empower — Redefining Intelligent Systems
            </p>
          </motion.div>
        </div>

        {/* Empower product strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {EMPOWER_PRODUCTS.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-xl border border-border/50 bg-card/40 p-3 text-center transition-colors hover:border-primary/50"
              >
                <p.icon className="mx-auto h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                <div className="mt-2 text-xs font-semibold">{p.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
