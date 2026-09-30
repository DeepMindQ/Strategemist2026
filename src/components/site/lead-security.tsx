'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Lock } from 'lucide-react'
import { SECURITY_GRID, LEAD_CARDS, EDGE } from '@/lib/site-data'
import { SectionHeading } from './section-heading'

export function SecurityGrid() {
  return (
    <section className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Security"
          title="Scale Innovation with Precision"
          description="AI-driven, quantum-secure, and zero-trust architectures engineered to outpace evolving threats and fortify digital sovereignty."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECURITY_GRID.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent ring-1 ring-accent/25">
                  <Lock className="h-5 w-5" />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-4 text-sm font-semibold leading-snug">{c.title}</h3>
              <p className="mt-1.5 text-xs text-muted-foreground">{c.standards}</p>
              <p className="mt-2 text-sm text-foreground/80">{c.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Lead() {
  return (
    <section id="lead" className="relative scroll-mt-24 border-y border-border/50 bg-muted/35 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Lead"
          title="Lead the Change. Shape the Future"
          description="Disruption isn't a challenge—it's an opportunity. At Strategemist, we empower enterprises with deep-tech innovation, scalable strategies, and resilient digital ecosystems to lead markets, redefine industries, and drive the future of technology."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LEAD_CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/12 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110">
                <ShieldCheck className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-sm font-semibold leading-tight">{c.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Edge() {
  return (
    <section className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Strategemist Edge"
          title={EDGE.hero}
          description={EDGE.sub}
        />

        {/* intro */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-6 max-w-3xl text-center text-muted-foreground"
        >
          {EDGE.intro}
        </motion.p>

        {/* 6 cards */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {EDGE.cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
              className="rounded-2xl border border-border/60 bg-card/50 p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <h3 className="font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
            </motion.div>
          ))}
        </div>

        {/* methodology timeline */}
        <div className="mt-16">
          <h3 className="text-center text-2xl font-semibold tracking-tight">
            Enterprise-Scale Deployment: The Strategemist Methodology
          </h3>
          <div className="relative mt-10">
            <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
            <div className="grid gap-6 lg:grid-cols-6">
              {EDGE.methodology.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative"
                >
                  <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-border bg-background text-sm font-bold text-primary shadow-sm">
                    {s.step}
                  </span>
                  <h4 className="mt-4 text-sm font-semibold leading-tight">{s.title}</h4>
                  <p className="mt-1.5 text-xs text-muted-foreground">{s.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
