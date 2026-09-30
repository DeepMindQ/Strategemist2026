'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SOLVE_TABS, TRANSFORM_TABS } from '@/lib/site-data'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

function TabbedSection({
  id,
  eyebrow,
  title,
  description,
  tabs,
}: {
  id: string
  eyebrow: string
  title: string
  description: string
  tabs: typeof SOLVE_TABS
}) {
  const [active, setActive] = React.useState(tabs[0].id)
  const tab = tabs.find((t) => t.id === active)!

  return (
    <section id={id} className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        {/* tab triggers */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={cn(
                'rounded-full px-5 py-2.5 text-sm font-medium transition-all',
                active === t.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'border border-border/60 text-muted-foreground hover:border-primary/50 hover:text-foreground'
              )}
            >
              {t.name}
            </button>
          ))}
        </div>

        {/* active panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                {tab.headline}
              </h3>
              <p className="mt-3 text-pretty text-muted-foreground">{tab.description}</p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {tab.services.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="group rounded-2xl border border-border/60 bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h4 className="mt-4 font-semibold tracking-tight">{s.name}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export function Solve() {
  return (
    <TabbedSection
      id="solve"
      eyebrow="Solve"
      title="Smart. Secure. Scalable. Future-Ready."
      description="At Strategemist, we deliver intelligent decision-making, robust security, high-performance systems, and scalable infrastructure. Our solutions power enterprises with real-time intelligence, predictive automation, and resilient digital frameworks—built for the future."
      tabs={SOLVE_TABS}
    />
  )
}

export function Transform() {
  return (
    <div className="border-y border-border/50 bg-muted/35">
      <TabbedSection
        id="transform"
        eyebrow="Transform"
        title="Redefine the Future. Build What's Next."
        description="Transformation isn't just about change—it's about intelligent reinvention. From autonomous systems to predictive intelligence and scalable digital ecosystems, Strategemist empowers global enterprises to lead, disrupt, and shape the future."
        tabs={TRANSFORM_TABS}
      />
    </div>
  )
}
