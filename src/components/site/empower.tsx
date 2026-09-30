'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { EMPOWER_PRODUCTS } from '@/lib/site-data'
import { SectionHeader, SectionDivider } from './section-header'

export function Empower() {
  return (
    <section id="empower" className="relative scroll-mt-[72px] py-20 lg:py-24">
      <SectionDivider />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            number="01"
            eyebrow="Empower"
            title="Eight proprietary IP platforms"
            description="Redefining intelligent systems — each platform a distinct frontier of intelligence, backed by our 11 patents."
          />
          <Link href="/empower" className="group hidden shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline sm:inline-flex">
            View all platforms <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
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
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/50 p-6 card-hover hover:border-primary/50 hover:shadow-[0_0_40px_-12px_var(--primary)]"
              >
                {/* top accent line on hover */}
                <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ background: 'linear-gradient(to right, var(--primary), var(--accent))' }} />
                {/* hover bg pattern */}
                <div className="pointer-events-none absolute inset-0 bg-dots opacity-0 transition-opacity duration-500 group-hover:opacity-20" />

                <div className="relative flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl text-2xl font-bold text-white shadow-lg" style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}>
                    {p.symbol}
                  </span>
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>

                <h3 className="relative mt-5 text-lg font-bold">{p.name}</h3>
                <p className="relative mt-1 text-sm font-medium text-primary">{p.tagline}</p>
                <p className="relative mt-3 text-sm leading-relaxed text-foreground/75">{p.description}</p>

                <span className="relative mt-5 inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-all group-hover:opacity-100">
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
