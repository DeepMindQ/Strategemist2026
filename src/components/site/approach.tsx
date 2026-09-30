'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { APPROACH, PRINCIPLES } from '@/lib/data'
import { SectionHeading } from './section-heading'

export function Approach() {
  return (
    <section id="approach" className="relative scroll-mt-24 border-y border-border/50 bg-muted/35 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Approach"
          title="A method that compounds, not a project that ends"
          description="We diagnose before we build, design for reuse, ship to production, and industrialize the win. Every phase leaves you with more capability than you started with."
        />

        {/* Steps */}
        <div className="relative mt-16">
          {/* Connecting line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

          <div className="grid gap-6 lg:grid-cols-4">
            {APPROACH.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                  <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-border bg-background text-primary shadow-sm">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-5xl font-bold tracking-tight text-primary/15 lg:absolute lg:right-0 lg:top-0">
                    {s.step}
                  </span>
                </div>
                <div className="mt-4 lg:mt-5">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Principles */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full border-border/50 p-5">
                <p.icon className="h-5 w-5 text-accent" />
                <h4 className="mt-3 font-semibold">{p.title}</h4>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.body}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
