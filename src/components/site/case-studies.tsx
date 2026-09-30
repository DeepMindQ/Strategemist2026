'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { CASE_STUDIES } from '@/lib/site-data'
import { SectionHeading } from './section-heading'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function CaseStudies() {
  const [active, setActive] = React.useState(0)
  const cs = CASE_STUDIES[active]

  return (
    <section id="cases" className="relative scroll-mt-24 border-y border-border/50 bg-muted/35 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case Studies"
          title="We don't sell case studies—we build success stories"
          description="Your journey with us is unique, powered by innovation, precision, and transformation. Here's a sample of measurable outcomes."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {/* selector */}
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-3">
              {CASE_STUDIES.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setActive(i)}
                  className={cn(
                    'group flex items-center gap-4 rounded-2xl border p-4 text-left transition-all',
                    i === active
                      ? 'border-primary/60 bg-primary/8 shadow-sm'
                      : 'border-border/60 hover:border-primary/40 hover:bg-card/50'
                  )}
                >
                  <span
                    className={cn(
                      'grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-colors',
                      i === active ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    )}
                  >
                    <c.icon className="h-6 w-6" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      {c.industry}
                    </div>
                    <div className="mt-0.5 line-clamp-2 text-sm font-semibold leading-snug">
                      {c.title}
                    </div>
                  </div>
                  <ArrowUpRight
                    className={cn(
                      'h-4 w-4 shrink-0 transition-all',
                      i === active ? 'text-primary' : 'text-muted-foreground/40 group-hover:text-foreground'
                    )}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* detail */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full overflow-hidden rounded-3xl border border-border/60 bg-card p-6 sm:p-8"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
                <div className="relative flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/12 px-3 py-1 text-xs font-medium text-primary">
                    <cs.icon className="h-3.5 w-3.5" />
                    {cs.industry}
                  </span>
                </div>
                <h3 className="relative mt-5 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                  {cs.title}
                </h3>
                <p className="relative mt-5 text-sm leading-relaxed text-muted-foreground">
                  {cs.narrative}
                </p>

                <div className="relative mt-7 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-accent">Challenge</div>
                    <p className="mt-2 text-sm text-muted-foreground">{cs.challenge}</p>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-primary">Solution</div>
                    <p className="mt-2 text-sm text-muted-foreground">{cs.solution}</p>
                  </div>
                </div>

                <div className="relative mt-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Measurable results
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cs.results.map((r) => (
                      <span
                        key={r}
                        className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative mt-7 flex flex-wrap gap-3">
                  <Button size="sm" className="gap-1.5 rounded-full">
                    Read full story
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full">
                    Download methodology
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
