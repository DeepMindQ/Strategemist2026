'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { CAPABILITIES } from '@/lib/data'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

export function Capabilities() {
  return (
    <section id="capabilities" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Four pillars. One outcome engine."
          description="We are deep-tech generalists with production discipline. Each capability is backed by proprietary IP—and they compose into outcome-bearing systems."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card
                className={cn(
                  'group relative h-full overflow-hidden border-border/60 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl sm:p-7'
                )}
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110">
                    <cap.icon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full border border-border/60 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    {cap.tagline}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight">{cap.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{cap.description}</p>

                <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {cap.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-foreground/85">{f}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
