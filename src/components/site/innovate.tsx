'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { PATENTS, VISIONARY_INNOVATORS } from '@/lib/site-data'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

export function Innovate() {
  const [hovered, setHovered] = React.useState<number | null>(null)

  return (
    <section id="innovate" className="relative scroll-mt-24 border-y border-border/50 bg-muted/35 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Innovate"
          title="Engineered for Visionary Innovators"
          description="We drive strategy, innovation, and transformation through cutting-edge technology, delivering proven excellence in execution."
        />

        {/* Visionary innovators marquee */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-border/50 bg-card/40 py-4">
          <div className="flex w-max animate-marquee gap-3 px-3">
            {[...VISIONARY_INNOVATORS, ...VISIONARY_INNOVATORS].map((v, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-border/60 bg-background/60 px-4 py-2 text-sm font-medium text-muted-foreground"
              >
                {v}
              </span>
            ))}
          </div>
        </div>

        {/* 12 patents grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PATENTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                'group relative overflow-hidden rounded-2xl border bg-card/60 p-5 transition-all duration-300',
                hovered === i ? 'border-primary/60 shadow-xl -translate-y-1' : 'border-border/50'
              )}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="text-sm font-semibold leading-tight">{p.name}</h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{p.description}</p>
              <span className="mt-3 inline-flex text-[10px] font-semibold uppercase tracking-wider text-accent">
                Patent #{(i + 1).toString().padStart(2, '0')}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
