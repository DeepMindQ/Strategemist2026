'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SERVICE_GROUPS } from '@/lib/site-data'
import { SectionHeading } from './section-heading'
import { Button } from '@/components/ui/button'

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Consulting & delivery, across the stack"
          description="From AI strategy to MLOps in production—our services span the four lanes of a modern data & AI organization."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {SERVICE_GROUPS.map((g, gi) => (
            <motion.div
              key={g.group}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="rounded-2xl border border-border/60 bg-card/50 p-6 sm:p-7"
            >
              <h3 className="text-lg font-semibold tracking-tight">{g.group}</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {g.services.map((s) => (
                  <div
                    key={s.name}
                    className="group flex items-start gap-3 rounded-xl border border-border/50 bg-background/40 p-4 transition-all hover:border-primary/50 hover:bg-primary/5"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold leading-tight">{s.name}</h4>
                      <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="gap-2 rounded-full">
            <a href="https://deepmindq.com/" target="_blank" rel="noopener noreferrer">
              Let's Build Together
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
