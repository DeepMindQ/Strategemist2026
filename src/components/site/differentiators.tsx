'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { DIFFERENTIATORS } from '@/lib/data'
import { SectionHeading } from './section-heading'

export function Differentiators() {
  return (
    <section className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Strategemist"
          title="A different kind of technology partner"
          description="Most firms sell hours. We sell outcomes, backed by IP we own and a method we can prove. Here's what makes us different—by behavior, not brochure."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIATORS.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <Card className="group relative h-full overflow-hidden border-border/60 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
                <div className="pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full bg-primary/8 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent ring-1 ring-accent/25 transition-transform duration-300 group-hover:scale-110">
                  <d.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold tracking-tight">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
