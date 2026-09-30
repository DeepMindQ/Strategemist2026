'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { ABOUT, CORPORATE_STRUCTURE, OFFICES } from '@/lib/site-data'
import { SectionHeading } from './section-heading'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 border-y border-border/50 bg-muted/35 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <SectionHeading eyebrow={ABOUT.eyebrow} title={ABOUT.headline} description={ABOUT.intro1} />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-6 max-w-3xl text-center text-muted-foreground"
        >
          {ABOUT.intro2}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-8 max-w-md rounded-full bg-gradient-to-r from-primary/12 to-accent/12 px-6 py-3 text-center text-lg font-semibold tracking-tight"
        >
          <span className="gradient-text">{ABOUT.mission}</span>
        </motion.div>

        {/* 3 Pillars */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            The Three Pillars of Our Execution System
          </h3>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {ABOUT.pillars.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-7 transition-all hover:border-primary/50 hover:shadow-xl"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110">
                  <p.icon className="h-7 w-7" />
                </span>
                <h4 className="mt-5 text-lg font-semibold tracking-tight">{p.name}</h4>
                <p className="mt-1 text-sm font-medium text-accent">{p.sub}</p>
                <p className="mt-3 text-sm text-muted-foreground">{p.intro}</p>
                <ul className="mt-4 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-xs text-foreground/80">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 rounded-lg border border-primary/20 bg-primary/8 p-3 text-xs text-primary">
                  <span className="font-semibold">Outcome: </span>{p.outcome}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Differential */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            The Strategemist Differential — Why Our Programs Succeed
          </h3>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {ABOUT.differential.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl border border-border/60 bg-card/50 p-5 transition-all hover:border-accent/50 hover:shadow-md"
              >
                <h4 className="text-sm font-semibold leading-tight">{d.name}</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{d.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Corporate Structure */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            Corporate Architecture Built for Global Assurance
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-muted-foreground">
            Strategemist operates as a unified global enterprise anchored in Delaware, integrating strategy, governance, and delivery through one coherent control spine.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CORPORATE_STRUCTURE.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
                className="group rounded-2xl border border-border/60 bg-card/50 p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                    {c.role}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h4 className="mt-2 text-sm font-semibold leading-tight">{c.name}</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.description}</p>
              </motion.div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm font-medium text-foreground">
            Together, these entities operate as <span className="gradient-text">One Strategemist</span> — a harmonized architecture balancing regional independence with centralized control.
          </p>
        </div>

        {/* Governance */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-20 rounded-3xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/8 p-8 text-center sm:p-12"
        >
          <h3 className="text-2xl font-semibold tracking-tight">Governance: The Non-Negotiable Core</h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">{ABOUT.governance}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {['ISO/IEC 42001', 'NIST AI RMF', 'Privacy by Design', 'Least-Privilege', 'Full Provenance'].map((b) => (
              <span key={b} className="rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-xs font-medium">
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Global footprint + offices */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            Global Footprint, Local Context
          </h3>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {OFFICES.map((o, i) => (
              <motion.div
                key={o.country}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl border border-border/60 bg-card/50 p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
              >
                <div className="text-[10px] font-semibold uppercase tracking-wider text-accent">{o.role}</div>
                <h4 className="mt-1.5 text-lg font-semibold">{o.country}</h4>
                <p className="mt-1 text-xs font-medium text-primary">{o.entity}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{o.address}</p>
                <p className="mt-3 text-xs text-foreground/80">{o.blurb}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="gap-2 rounded-full">
              <Link href="#contact">
                Partner with Strategemist
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
