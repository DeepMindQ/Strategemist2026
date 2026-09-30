'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { PATENTS } from '@/lib/site-data'
import { CATEGORY_META } from '@/lib/content'
import { SectionHeader, SectionDivider, ViewAllLink } from './section-header'

const DOMAIN_COUNTS: Record<string, string> = {
  innovate: '12 pages', solve: '12 pages', transform: '12 pages',
  lead: '8 pages', empower: '8 platforms', services: '13 services',
}

export function Domains() {
  const domains = ([
    ['innovate', '12 patent-backed deep-tech capabilities'],
    ['solve', '12 solutions across intelligence, security, performance, infrastructure'],
    ['transform', '12 transformation plays across evolution, acceleration, resilience, optimization'],
    ['lead', '8 strategy and thought-leadership plays'],
    ['empower', '8 proprietary IP-platform products'],
    ['services', '13 consulting and delivery services'],
  ] as const)

  return (
    <section className="relative bg-[#0D0E18] py-20 lg:py-24">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader number="02" eyebrow="Capabilities" title="Six domains. One execution system." description="Explore our full capability portfolio across Innovate, Solve, Transform, Lead, Empower, and Services." />
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map(([cat, blurb], i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <Link href={`/${cat}`} className="group relative flex h-full items-start justify-between overflow-hidden rounded-2xl border border-white/8 bg-card/40 p-6 card-hover hover:border-primary/30">
                <span className="pointer-events-none absolute right-3 top-1 font-display text-6xl font-bold text-white/[0.03]">{String(i + 1).padStart(2, '0')}</span>
                <div className="relative">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/12 num-mono text-sm font-bold text-primary ring-1 ring-primary/20">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-4 text-lg font-bold">{CATEGORY_META[cat].label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{blurb}</p>
                  <span className="mt-3 inline-block rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">{DOMAIN_COUNTS[cat]}</span>
                </div>
                <ArrowRight className="relative mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Patents() {
  return (
    <section className="relative py-20 lg:py-24">
      <SectionDivider />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />
      <span className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 font-display text-[20rem] font-bold leading-none text-white/[0.02]">11</span>
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader number="03" eyebrow="Innovate" title="11 patents, one vault" description="Patent-backed deep-tech research and breakthroughs, from quantum-inspired computation to genomic data intelligence." />
          <ViewAllLink href="/innovate/the-patent-value" label="Explore the Patent Vault" />
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PATENTS.slice(0, 8).map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
            >
              <Link href="/innovate/the-patent-value" className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-card/40 p-6 card-hover hover:border-primary/30">
                <div className="pointer-events-none absolute inset-0 bg-dots opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
                <div className="relative flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20"><p.icon className="h-6 w-6" /></span>
                  <span className="num-mono rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">Patent #{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="relative mt-5 text-sm font-bold leading-tight">{p.name}</h3>
                <p className="relative mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">{p.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
