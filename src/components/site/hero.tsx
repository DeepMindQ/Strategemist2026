'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Award, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BRAND } from '@/lib/site-data'

/* Per-word mask reveal for the headline */
const wordVariants = {
  hidden: { y: '110%' },
  show: (i: number) => ({
    y: '0%',
    transition: { duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const TRUST = ['FORTUNE 100', 'GLOBAL TECH LEADER', 'MULTINATIONAL', 'GLOBAL BANK', 'ENTERPRISE']

export function Hero() {
  const reduce = useReducedMotion()
  return (
    <section id="top" className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden">
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-30" />
        {/* mesh gradient (slow rotation) */}
        <div className="absolute left-1/2 top-1/2 h-[120vh] w-[120vh] -translate-x-1/2 -translate-y-1/2 opacity-[0.06] animate-mesh" style={{ background: 'conic-gradient(from 0deg, #2E2ED9, #6B6BF5, #2424B0, #2E2ED9)' }} />
        {/* orbs */}
        <div className="absolute left-[15%] top-[15%] h-80 w-80 rounded-full bg-primary/25 blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute right-[10%] bottom-[10%] h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        {/* radial glow behind headline */}
        <div className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: 'radial-gradient(circle, rgba(46,46,217,0.18) 0%, transparent 70%)' }} />
        {/* noise */}
        <div className="absolute inset-0 noise" />
        {/* vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,11,20,0.6) 100%)' }} />
        {/* top + bottom fades to blend sections */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              <Award className="h-3.5 w-3.5" /> Backed by 11 patents
            </span>
          </motion.div>

          {/* headline — per-word mask reveal */}
          <h1 className="mt-8 text-balance text-6xl font-bold leading-[1.0] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
            <span className="block text-white text-glow">
              <span className="inline-block overflow-hidden align-bottom">
                <motion.span custom={0} variants={wordVariants} initial="hidden" animate="show" className="inline-block">Beyond</motion.span>{' '}
                <motion.span custom={1} variants={wordVariants} initial="hidden" animate="show" className="inline-block">Consulting.</motion.span>
              </span>
            </span>
            <span className="mt-2 block text-white">
              <span className="inline-block overflow-hidden align-bottom">
                <motion.span custom={2} variants={wordVariants} initial="hidden" animate="show" className="inline-block text-7xl lg:text-7xl">Engineering</motion.span>{' '}
                <motion.span custom={3} variants={wordVariants} initial="hidden" animate="show" className="inline-block text-7xl lg:text-7xl">the</motion.span>
              </span>
            </span>
            <span className="mt-1 block">
              <span className="inline-block overflow-hidden align-bottom">
                <motion.span custom={4} variants={wordVariants} initial="hidden" animate="show" className="inline-block gradient-text">Future.</motion.span>
              </span>
            </span>
          </h1>

          {/* subhead */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mx-auto mt-7 max-w-2xl text-pretty text-xl leading-relaxed tracking-[-0.01em] text-foreground/75"
          >
            An IP-led technology firm engineering the future through quantum-inspired AI, intelligent systems, and enterprise transformation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="h-12 gap-2 rounded-full px-8 text-[15px] font-semibold">
              <a href={BRAND.ctaPrimaryHref} target="_blank" rel="noopener noreferrer">
                {BRAND.heroCta}<ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 gap-2 rounded-full border-primary/40 px-8 text-[15px] font-semibold text-primary hover:bg-primary/10 hover:text-primary">
              <Link href="/empower">Explore our IP platforms</Link>
            </Button>
          </motion.div>

          {/* divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="mx-auto mt-10 h-px w-32 origin-center"
            style={{ background: 'var(--grad-primary)' }}
          />

          {/* trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Trusted by</span>
            {TRUST.map((t) => (
              <span key={t} className="text-sm font-bold tracking-[0.12em] text-foreground/40 transition-colors hover:text-primary">{t}</span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link href="#trust" className="inline-flex flex-col items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary">
          <span className="uppercase tracking-[0.18em]">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce-down" />
        </Link>
      </motion.div>
    </section>
  )
}
