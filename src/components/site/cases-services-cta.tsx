'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SERVICE_GROUPS } from '@/lib/site-data'
import { getCaseStudies, routeForLabel } from '@/lib/content'
import { SectionHeader, SectionDivider } from './section-header'
import { BRAND } from '@/lib/site-data'

export function CaseStudies() {
  const cases = getCaseStudies()
  return (
    <section className="relative bg-muted/20 py-20 lg:py-24">
      <SectionDivider />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            number="09"
            eyebrow="Case Studies"
            title="Measurable outcomes"
            description="We don't sell case studies — we build success stories. Here's a sample of measurable outcomes."
          />
          <Link href="/case-studies" className="group hidden shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline sm:inline-flex">
            All case studies <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/case-studies/${c.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/50 p-6 card-hover hover:border-primary/50 hover:shadow-[0_0_40px_-12px_var(--primary)]"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/12 px-3 py-1 text-xs font-medium text-primary">{c.industry}</span>
                </div>
                <div className="mt-5 gradient-text text-6xl font-bold tracking-tight">{c.metric}</div>
                <h3 className="mt-4 text-lg font-bold leading-snug">{c.title}</h3>
                <p className="mt-3 flex-1 line-clamp-4 text-sm leading-relaxed text-muted-foreground">{c.narrative}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read full story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section className="relative py-20 lg:py-24">
      <SectionDivider />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            number="10"
            eyebrow="Services"
            title="Consulting & delivery, across the stack"
            description="From AI strategy to MLOps in production — our services span the four lanes of a modern data & AI organization."
          />
          <Link href="/services" className="group hidden shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline sm:inline-flex">
            Explore all services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {SERVICE_GROUPS.map((g, gi) => (
            <motion.div
              key={g.group}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="rounded-2xl border border-white/10 bg-card/50 p-6 sm:p-7"
            >
              <h3 className="text-lg font-bold">{g.group}</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {g.services.map((s) => (
                  <Link
                    key={s.name}
                    href={routeForLabel('services', s.name)}
                    className="group flex items-start gap-3 rounded-xl border border-white/10 bg-background/40 p-4 transition-all hover:border-primary/50 hover:bg-primary/5"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold leading-tight">{s.name}</h4>
                      <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl px-8 py-16 sm:px-12 lg:px-16 lg:py-20"
          style={{ background: 'linear-gradient(135deg, var(--primary), color-mix(in oklch, var(--primary) 70%, var(--accent)))' }}
        >
          {/* overlay patterns */}
          <div className="pointer-events-none absolute inset-0 bg-dots opacity-15" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {BRAND.tagline}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-white/85 sm:text-lg">
              Bring us your hardest deep-tech problem. We&apos;ll bring the IP, the method, and measurable outcomes.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 gap-2 rounded-full bg-white px-7 text-base text-primary hover:bg-white/90">
                <a href={BRAND.ctaPrimaryHref} target="_blank" rel="noopener noreferrer">
                  {BRAND.ctaPrimary} <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 gap-2 rounded-full border-white/60 px-7 text-base text-white hover:bg-white/10 hover:text-white">
                <Link href="/contact">Book a briefing</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
