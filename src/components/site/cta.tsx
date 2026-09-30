'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/8 p-8 sm:p-12 lg:p-16"
        >
          {/* Background flourishes */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              IP-led · Outcome-linked · Production-grade
            </span>
            <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Stop buying hours.
              <br className="hidden sm:block" /> Start buying{' '}
              <span className="gradient-text">outcomes</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
              Bring us your hardest deep-tech problem. We'll bring the IP, the method, and skin in
              the game—and we'll measure ourselves by the metric on your scorecard.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full gap-2 rounded-full sm:w-auto">
                <Link href="#contact">
                  Book a briefing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full rounded-full sm:w-auto"
              >
                <Link href="#capabilities">Explore capabilities</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
