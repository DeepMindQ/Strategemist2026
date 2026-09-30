'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Lock } from 'lucide-react'
import { SECURITY_GRID, LEAD_CARDS, EDGE } from '@/lib/site-data'
import { routeForLabel } from '@/lib/content'
import { SectionHeader, SectionDivider, ViewAllLink } from './section-header'

export function Security() {
  return (
    <section className="relative py-20 lg:py-24">
      <SectionDivider />
      <span className="pointer-events-none absolute right-8 top-8 text-white/[0.02] font-display text-[16rem] font-bold leading-none">⌖</span>
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionHeader number="06" eyebrow="Security" title="Scale Innovation with Precision" description="AI-driven, quantum-secure, and zero-trust architectures engineered to outpace evolving threats." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECURITY_GRID.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              className="relative overflow-hidden rounded-2xl border border-white/8 bg-card/40 p-5 card-hover hover:border-primary/30"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent ring-1 ring-accent/25"><Lock className="h-5 w-5" /></span>
                <span className="num-mono text-xs font-bold text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-4 text-sm font-bold leading-snug">{c.title}</h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {c.standards.split('·').map((s) => (
                  <span key={s.trim()} className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">{s.trim()}</span>
                ))}
              </div>
              <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Lead() {
  return (
    <section className="relative bg-[#0D0E18] py-20 lg:py-24">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionHeader number="07" eyebrow="Lead" title="Lead the Change. Shape the Future." description="Disruption isn't a challenge — it's an opportunity. Deep-tech innovation, scalable strategies, and resilient digital ecosystems." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LEAD_CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
            >
              <Link href={routeForLabel('lead', c.title)} className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-card/40 p-6 card-hover hover:border-primary/30">
                <div className="absolute right-0 top-0 h-12 w-12 opacity-15" style={{ background: 'linear-gradient(225deg, var(--primary), transparent 50%)' }} />
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/12 num-mono text-sm font-bold text-primary ring-1 ring-primary/20">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 text-sm font-bold leading-tight">{c.title}</h3>
                <p className="mt-2 line-clamp-4 text-xs leading-relaxed text-muted-foreground">{c.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">Read more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" /></span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Edge() {
  return (
    <section className="relative py-20 lg:py-24">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionHeader number="08" eyebrow="The Strategemist Edge" title="Enterprise-scale deployment methodology" description="A proven six-step methodology for production-grade, governed, outcome-linked delivery." />
        <div className="relative mt-14">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-0.5 lg:block" style={{ background: 'var(--grad-primary)' }} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {EDGE.methodology.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-primary num-mono text-base font-bold text-primary-foreground shadow-lg ring-4 ring-background">{s.step}</span>
                <h3 className="mt-4 text-sm font-bold leading-tight">{s.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link href="/lead/the-strategemist-edge" className="group inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-400">
            Read the full Edge page <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
