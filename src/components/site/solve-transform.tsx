'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Brain, Shield, Gauge, Server, Boxes, Atom, Lock, Activity, CheckCircle2 } from 'lucide-react'
import { SOLVE_TABS, TRANSFORM_TABS } from '@/lib/site-data'
import { routeForLabel } from '@/lib/content'
import { SectionHeader, SectionDivider } from './section-header'
import { cn } from '@/lib/utils'

const TAB_ICONS: Record<string, typeof Brain> = {
  Intelligence: Brain, Security: Shield, Performance: Gauge, Infrastructure: Server,
  Evolution: Boxes, Acceleration: Atom, Resilience: Lock, Optimization: Activity,
}

function TabbedSection({
  number, eyebrow, title, description, tabs, href, muted = false, linkCat,
}: {
  number: string
  eyebrow: string
  title: string
  description: string
  tabs: typeof SOLVE_TABS
  href: string
  linkCat: 'solve' | 'transform'
  muted?: boolean
}) {
  const [active, setActive] = React.useState(tabs[0].id)
  const tab = tabs.find((t) => t.id === active)!

  return (
    <section className={cn('relative py-20 lg:py-24', muted && 'bg-muted/20')}>
      <SectionDivider />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader number={number} eyebrow={eyebrow} title={title} description={description} />
          <Link href={href} className="group hidden shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline sm:inline-flex">
            Explore all {eyebrow} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* tab bar */}
        <div className="mt-10 flex flex-wrap gap-2">
          {tabs.map((t) => {
            const Icon = TAB_ICONS[t.name] || Brain
            const isActive = active === t.id
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={cn(
                  'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all',
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'border border-white/10 text-foreground/75 hover:border-primary/40 hover:text-foreground'
                )}
              >
                <Icon className="h-4 w-4" />
                {t.name}
              </button>
            )
          })}
        </div>

        {/* panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">{tab.headline}</h3>
              <p className="mt-3 text-pretty text-muted-foreground">{tab.description}</p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {tab.services.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={routeForLabel(linkCat, s.name)}
                    className="group flex h-full flex-col rounded-2xl border border-white/10 bg-card/50 p-6 card-hover hover:border-primary/50 hover:shadow-[0_0_40px_-12px_var(--primary)]"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110">
                      <s.icon className="h-6 w-6" />
                    </span>
                    <h4 className="mt-4 flex items-center gap-1.5 font-semibold">
                      {s.name}
                      <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  </Link>
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
      number="04"
      eyebrow="Solve"
      title="Smart. Secure. Scalable. Future-Ready."
      description="Intelligent decision-making, robust security, high-performance systems, and scalable infrastructure — powered by real-time intelligence."
      tabs={SOLVE_TABS}
      href="/solve"
      linkCat="solve"
    />
  )
}

export function Transform() {
  return (
    <TabbedSection
      number="05"
      eyebrow="Transform"
      title="Redefine the Future. Build What's Next."
      description="Intelligent reinvention — from autonomous systems to predictive intelligence and scalable digital ecosystems."
      tabs={TRANSFORM_TABS}
      href="/transform"
      linkCat="transform"
      muted
    />
  )
}
