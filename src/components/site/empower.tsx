'use client'

import { motion } from 'framer-motion'
import { EMPOWER_PRODUCTS } from '@/lib/site-data'
import { SectionHeading } from './section-heading'

export function Empower() {
  return (
    <section id="empower" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Empower"
          title="Redefining Intelligent Systems — Choose Your Breakthrough"
          description="Eight proprietary, patent-backed IP platforms. Each one a distinct frontier of intelligence—compute, perception, learning, ethics, and synthesis."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {EMPOWER_PRODUCTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl"
            >
              {/* glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/12 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* symbol badge */}
              <div className="flex items-center justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 text-2xl font-bold text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {p.symbol}
                </span>
                <p.icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-accent" />
              </div>

              <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{p.tagline}</p>
              <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
