'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { INDUSTRIES } from '@/lib/data'
import { SectionHeading } from './section-heading'

export function Industries() {
  return (
    <section className="relative scroll-mt-24 border-y border-border/50 bg-muted/35 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Deep-tech fluency, domain by domain"
          description="Our IP is horizontal; our fluency is vertical. We speak the operating realities of the sectors we serve."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <Card className="group flex h-full items-center gap-4 border-border/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110">
                  <ind.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-semibold tracking-tight">{ind.name}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{ind.blurb}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
