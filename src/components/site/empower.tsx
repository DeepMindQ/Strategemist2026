'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { EMPOWER_PRODUCTS } from '@/lib/site-data'
import { SectionHeader, SectionDivider, ViewAllLink } from './section-header'

const TRUST_LOGOS = ['FORTUNE 100', 'GLOBAL TECH LEADER', 'MULTINATIONAL', 'GLOBAL BANK', 'ENTERPRISE', 'TITAN']

export function TrustStrip() {
  return (
    <section id="trust" className="relative border-y border-white/5 bg-[#0D0E18] py-10">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Trusted by global enterprises</p>
        {/* desktop: static */}
        <div className="mt-6 hidden flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:flex">
          {TRUST_LOGOS.map((t, i) => (
            <span key={t} className="text-sm font-bold tracking-[0.2em] text-foreground/40 transition-colors hover:text-primary">{t}</span>
          ))}
        </div>
        {/* mobile: marquee */}
        <div className="mt-6 overflow-hidden sm:hidden">
          <div className="flex w-max animate-marquee gap-8">
            {[...TRUST_LOGOS, ...TRUST_LOGOS].map((t, i) => (
              <span key={i} className="whitespace-nowrap text-sm font-bold tracking-[0.2em] text-foreground/40">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Empower() {
  return (
    <section id="empower" className="relative scroll-mt-20 py-20 lg:py-24">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            number="01"
            eyebrow="Empower"
            title="Eight proprietary IP platforms"
            description="Redefining intelligent systems — each platform a distinct frontier of intelligence, backed by our 11 patents."
          />
          <ViewAllLink href="/empower" label="View all platforms" />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EMPOWER_PRODUCTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <Link
                href={`/empower/${p.id}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-card/40 p-8 card-hover hover:border-primary/30"
              >
                {/* top accent line */}
                <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ background: 'var(--grad-primary)' }} />
                {/* hover dot pattern */}
                <div className="pointer-events-none absolute inset-0 bg-dots opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
                {/* corner number */}
                <span className="num-mono absolute right-6 top-6 text-xs text-muted-foreground/50">{String(i + 1).padStart(2, '0')}</span>

                <div className="relative flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl text-2xl font-bold text-white shadow-lg" style={{ background: 'var(--grad-primary)' }}>
                    {p.symbol}
                  </span>
                </div>

                <h3 className="relative mt-6 text-lg font-bold">{p.name}</h3>
                <p className="relative mt-1 text-sm font-medium text-primary">{p.tagline}</p>
                <p className="relative mt-3 text-sm leading-relaxed text-foreground/75">{p.description}</p>

                <span className="relative mt-5 inline-flex -translate-x-1 items-center gap-1 text-xs font-medium text-primary opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
