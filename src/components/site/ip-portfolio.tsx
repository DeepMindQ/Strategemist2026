'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { IP_PORTFOLIO } from '@/lib/data'
import { SectionHeading } from './section-heading'

export function IPPortfolio() {
  return (
    <section id="portfolio" className="relative scroll-mt-24 py-20 lg:py-28">
      {/* bg accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="IP Portfolio"
          title="Productized platforms, not one-off projects"
          description="Our proprietary IP is the multiplier. Each platform is battle-tested in production and tuned to your domain—so engagements start from a working baseline, not a blank page."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {IP_PORTFOLIO.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="group relative h-full overflow-hidden border-border/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110">
                    <p.icon className="h-5.5 w-5.5" />
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {p.category}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border/60 pt-4">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-sm font-semibold text-primary">{m.value}</div>
                      <div className="text-[11px] text-muted-foreground">{m.label}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
