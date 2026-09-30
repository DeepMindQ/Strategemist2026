'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SERVICE_GROUPS, BRAND } from '@/lib/site-data'
import { getCaseStudies, routeForLabel } from '@/lib/content'
import { SectionHeader, SectionDivider, ViewAllLink } from './section-header'
import { CountUp } from './count-up'

export function CaseStudies() {
  const cases = getCaseStudies()
  return (
    <section className="relative bg-[#0D0E18] py-20 lg:py-24">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader number="09" eyebrow="Case Studies" title="Measurable outcomes" description="We don't sell case studies — we build success stories. Here's a sample of measurable outcomes." />
          <ViewAllLink href="/case-studies" label="All case studies" />
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cases.map((c, i) => {
            const [num, suf] = (c.metric || '').match(/^(\d+)(\D*)/)?.slice(1) ?? ['0', '']
            return (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link href={`/case-studies/${c.slug}`} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-card/40 p-8 card-hover hover:border-primary/30">
                  <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ background: 'var(--grad-primary)' }} />
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/12 px-3 py-1 text-xs font-medium text-primary">{c.industry}</span>
                  <div className="mt-6 gradient-text text-6xl font-bold tracking-[-0.04em] num-mono">
                    <CountUp value={parseInt(num) || 0} suffix={suf} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-snug">{c.title}</h3>
                  <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-muted-foreground">{c.narrative}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">Read full story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section className="relative py-20 lg:py-24">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader number="10" eyebrow="Services" title="Consulting & delivery, across the stack" description="From AI strategy to MLOps in production — our services span the four lanes of a modern data & AI organization." />
          <ViewAllLink href="/services" label="Explore all services" />
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {SERVICE_GROUPS.map((g, gi) => (
            <motion.div
              key={g.group}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="rounded-2xl border border-white/8 bg-card/40 p-8"
            >
              <h3 className="text-lg font-bold">{g.group}</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {g.services.map((s) => (
                  <Link key={s.name} href={routeForLabel('services', s.name)} className="group flex items-start gap-3 rounded-xl border border-white/10 bg-background/40 p-4 transition-all hover:border-primary/30 hover:bg-primary/5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110"><s.icon className="h-5 w-5" /></span>
                    <div>
                      <h4 className="text-sm font-semibold leading-tight">{s.name}</h4>
                      <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">{s.desc}</p>
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
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl px-8 py-16 sm:px-12 lg:px-16 lg:py-20"
          style={{ background: 'var(--grad-primary)' }}
        >
          <div className="pointer-events-none absolute inset-0 bg-dots opacity-15" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">{BRAND.tagline}</h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-white/85 sm:text-lg">Bring us your hardest deep-tech problem. We&apos;ll bring the IP, the method, and measurable outcomes.</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 gap-2 rounded-full bg-white px-8 text-[15px] font-semibold text-primary hover:bg-white/90">
                <a href={BRAND.ctaPrimaryHref} target="_blank" rel="noopener noreferrer">{BRAND.ctaPrimary}<ArrowRight className="h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 gap-2 rounded-full border-white/50 px-8 text-[15px] font-semibold text-white hover:bg-white/10 hover:text-white">
                <Link href="/contact">Book a briefing</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
