'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { BRAND } from '@/lib/site-data'

export function Manifesto() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const gridY = useTransform(scrollY, [0, 2000], [0, reduce ? 0 : 120])
  const orbY = useTransform(scrollY, [0, 2000], [0, reduce ? 0 : -80])
  const textY = useTransform(scrollY, [0, 2000], [0, reduce ? 0 : 40])

  const lines = ['8 patents.', '8 platforms.', 'Data never leaves your perimeter.', 'Self-healing workflows — 99.98% uptime.', 'No compromises.']
  return (
    <section className="relative overflow-hidden border-y border-white/8 bg-[#0B0C14] py-32 lg:py-44" aria-label="Strategemist manifesto">
      <motion.div style={{ y: gridY }} className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-30" />
      </motion.div>
      <motion.div style={{ y: orbY, background: 'radial-gradient(circle, rgba(46,46,217,0.14) 0%, transparent 70%)' }} className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <div className="pointer-events-none absolute inset-0 noise" />

      <motion.div style={{ y: textY }} className="relative mx-auto max-w-[1100px] px-6 lg:px-8">
        <span className="t-mono text-primary/70">§03 — MANIFESTO</span>
        <div className="mt-4 text-left">
          {lines.map((line, i) => (
            <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: i * 0.1 }} className={`text-balance text-4xl font-bold leading-[1.1] tracking-[-0.04em] sm:text-5xl lg:text-6xl ${i === lines.length - 1 ? 'text-white text-glow' : 'text-white'}`}>
              {line}
            </motion.p>
          ))}
        </div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.6 }} className="t-subhead mt-8 max-w-xl text-foreground/75">
          {BRAND.manifesto} That's the Strategemist difference — and the spine of everything we build.
        </motion.p>
        <a href="/manifesto" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-400">Read the manifesto →</a>
      </motion.div>
    </section>
  )
}
