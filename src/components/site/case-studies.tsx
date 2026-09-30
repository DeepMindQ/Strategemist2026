'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CASE_STUDIES } from '@/lib/data'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

export function CaseStudies() {
  const [active, setActive] = React.useState(0)
  const cs = CASE_STUDIES[active]

  return (
    <section id="outcomes" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Outcomes"
          title="Business cases that moved the P&L"
          description="We instrument the metric before we build, and we publish the result after. These are the outcomes we're willing to put our name to."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {/* Selector */}
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-2">
              {CASE_STUDIES.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setActive(i)}
                  className={cn(
                    'group flex items-center gap-4 rounded-xl border p-4 text-left transition-all',
                    i === active
                      ? 'border-primary/60 bg-primary/8 shadow-sm'
                      : 'border-border/60 hover:border-primary/40 hover:bg-card/50'
                  )}
                >
                  <span
                    className={cn(
                      'grid h-12 w-12 shrink-0 place-items-center rounded-lg transition-colors',
                      i === active ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    )}
                  >
                    <c.icon className="h-5 w-5" />
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
                      i === active ? 'text-primary' : 'text-muted-foreground/50 group-hover:text-foreground'
                    )}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Detail */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="relative h-full overflow-hidden border-border/60 p-6 sm:p-8">
                  <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/12 px-3 py-1 text-xs font-medium text-primary">
                      <cs.icon className="h-3.5 w-3.5" />
                      {cs.industry}
                    </span>
                    {cs.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-5 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                    {cs.title}
                  </h3>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wider text-accent">
                        The challenge
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{cs.challenge}</p>
                    </div>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wider text-primary">
                        The outcome
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{cs.outcome}</p>
                    </div>
                  </div>

                  <div className="mt-7 grid grid-cols-3 gap-4 border-t border-border/60 pt-6">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="gradient-text text-3xl font-semibold tracking-tight sm:text-4xl">
                          {m.value}
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button size="sm" className="gap-1.5 rounded-full">
                      Read the full case
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-full">
                      Download methodology
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
