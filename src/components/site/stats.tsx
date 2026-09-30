'use client'

import { motion } from 'framer-motion'
import { STATS, CLIENTS } from '@/lib/data'

export function Stats() {
  return (
    <section className="relative border-y border-border/50 bg-muted/40">
      {/* Client marquee */}
      <div className="overflow-hidden border-b border-border/40 py-5">
        <div className="relative">
          <div className="flex w-max animate-marquee items-center gap-12 pr-12">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-sm font-semibold tracking-[0.16em] text-muted-foreground/70"
              >
                {c}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center sm:text-left"
            >
              <div className="gradient-text text-4xl font-semibold tracking-tight sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm font-medium">{s.label}</div>
              <div className="mt-0.5 text-xs text-muted-foreground">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
