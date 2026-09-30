'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { INSIGHTS } from '@/lib/data'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

const typeColor: Record<string, string> = {
  Perspective: 'bg-accent/15 text-accent',
  Playbook: 'bg-primary/12 text-primary',
  Brief: 'bg-muted text-muted-foreground',
}

export function Insights() {
  return (
    <section id="insights" className="relative scroll-mt-24 border-y border-border/50 bg-muted/35 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Insights"
            title="Thinking from the frontier"
            description="Field notes, playbooks, and perspectives from practitioners shipping deep tech to production."
          />
          <Button variant="outline" className="gap-1.5 rounded-full">
            All insights
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {INSIGHTS.map((it, i) => (
            <motion.div
              key={it.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="group flex h-full cursor-pointer flex-col overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/12 via-card to-accent/10">
                  <div className="absolute inset-0 bg-dots opacity-40" />
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <span
                    className={cn(
                      'absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium',
                      typeColor[it.type]
                    )}
                  >
                    {it.type}
                  </span>
                  <div className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-background/80 text-foreground backdrop-blur transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4.5 w-4.5" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-balance text-lg font-semibold leading-snug tracking-tight">
                    {it.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{it.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs text-muted-foreground">
                    <span>{it.date}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {it.readTime}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
