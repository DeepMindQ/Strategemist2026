'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, X } from 'lucide-react'
import { TEAM, type TeamMember } from '@/lib/site-data'
import { SectionHeading } from './section-heading'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Team() {
  const [active, setActive] = React.useState<TeamMember | null>(null)
  const leadership = TEAM.filter((m) => m.group === 'Leadership')
  const advisory = TEAM.filter((m) => m.group === 'Advisory')

  return (
    <section id="team" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Team"
          title="Leadership that has built and run the systems we deploy"
          description="Practitioners from Cognizant, TCS, JPMorgan Chase, IBM, Verizon, and the IETF—united by one execution system."
        />

        {/* Leadership grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {leadership.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              onClick={() => setActive(m)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
            >
              {/* avatar */}
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 text-2xl font-bold text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110">
                {m.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
              </div>
              <h3 className="mt-4 font-semibold leading-tight">{m.name}</h3>
              <p className="mt-0.5 text-xs font-medium text-primary">{m.title}</p>
              <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">{m.bio}</p>
              <div className="mt-3 flex items-center justify-between">
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`${m.name} on LinkedIn`}
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                    LinkedIn
                  </a>
                )}
                <span className="text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisory */}
        <div className="mt-16">
          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-border/60" />
            <h3 className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Advisory Board
            </h3>
            <span className="h-px flex-1 bg-border/60" />
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {advisory.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                onClick={() => setActive(m)}
                className="group cursor-pointer rounded-2xl border border-border/60 bg-card/50 p-5 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-accent/15 text-xl font-bold text-accent ring-1 ring-accent/25">
                  {m.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                </div>
                <h3 className="mt-4 font-semibold leading-tight">{m.name}</h3>
                <p className="mt-0.5 text-xs font-medium text-accent">{m.title}</p>
                <p className="mt-2 line-clamp-3 text-xs text-muted-foreground">{m.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-border/70 bg-card shadow-2xl"
          >
            <div className="relative bg-gradient-to-br from-primary/12 to-accent/12 p-6">
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-background/60 text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-3xl font-bold text-primary-foreground shadow-lg">
                {active.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{active.name}</h3>
              <p className="text-sm font-medium text-primary">{active.title}</p>
              <span className="mt-1 inline-block text-xs font-semibold uppercase tracking-wider text-accent">
                {active.group}
              </span>
            </div>
            <div className="custom-scroll max-h-[40vh] overflow-y-auto p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">{active.bio}</p>
              {active.linkedin && (
                <Button asChild variant="outline" size="sm" className="mt-5 gap-2 rounded-full">
                  <a href={active.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    View on LinkedIn
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
