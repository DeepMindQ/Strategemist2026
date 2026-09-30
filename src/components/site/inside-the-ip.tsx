'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, FileText } from 'lucide-react'
import { REAL_PATENTS } from '@/lib/patents'
import { SectionHeader, SectionDivider } from './section-header'
import { Glossary } from './glossary'
import { cn } from '@/lib/utils'

/* "Inside the IP" — expandable patent deep-dives showing the real
   problem, innovation, and modules. Genuine technical depth. */
export function InsideTheIP() {
  const [open, setOpen] = React.useState<string | null>(REAL_PATENTS[0].id)
  return (
    <section className="relative bg-[#0B0C14] py-24 lg:py-32">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionHeader
          number="§05"
          eyebrow="Inside the IP"
          stage="IP"
          title="Read the actual specifications"
          description="Not marketing copy — the real problem, the real innovation, the real numbered modules from each patent. Click any patent to dive in."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {/* left: patent list */}
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-2">
              {REAL_PATENTS.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setOpen(p.id)}
                  className={cn(
                    'group flex items-center gap-3 rounded-lg border p-3 text-left transition-colors',
                    open === p.id ? 'border-primary/40 bg-primary/5' : 'border-white/8 hover:border-primary/30'
                  )}
                >
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-2 py-0.5 font-mono text-[9px] font-bold text-gold">#{String(i + 1).padStart(2, '0')}</span>
                  <span className={cn('flex-1 text-sm font-semibold', open === p.id ? 'text-primary' : 'text-foreground')}>{p.shortName}</span>
                  <ChevronDown className={cn('h-4 w-4 text-muted-foreground transition-transform', open === p.id && 'rotate-180')} />
                </button>
              ))}
            </div>
          </div>
          {/* right: detail */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {(() => {
                const p = REAL_PATENTS.find((x) => x.id === open)!
                return (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="schematic-corner console-surface relative rounded-2xl p-8"
                    data-schematic={`FIG. ${REAL_PATENTS.findIndex((x) => x.id === p.id) + 1} — ${p.shortName.toUpperCase()}`}
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gold" />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-gold">Patent {REAL_PATENTS.findIndex((x) => x.id === p.id) + 1} of {REAL_PATENTS.length}</span>
                    </div>
                    <h3 className="mt-3 text-balance text-xl font-bold leading-tight">{p.title}</h3>

                    <div className="mt-6 space-y-5">
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Problem</div>
                        <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">{p.problem}</p>
                      </div>
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-wider text-primary">Innovation</div>
                        <p className="mt-1.5 text-sm leading-relaxed text-foreground/85">{p.innovation}</p>
                      </div>
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-wider text-primary">System architecture — {p.modules.length} modules</div>
                        <div className="mt-3 grid gap-2 sm:grid-cols-2">
                          {p.modules.map((m) => (
                            <div key={m.ref} className="flex items-center gap-2.5 rounded-lg border border-white/8 bg-white/[0.02] p-2.5">
                              <span className="grid h-7 w-10 shrink-0 place-items-center rounded bg-primary/12 font-mono text-[10px] font-bold text-primary">{m.ref}</span>
                              <span className="text-xs text-foreground/80">{m.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-wider text-primary">Technical vocabulary</div>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {p.keyTerms.map((t) => <Glossary key={t} term={t} className="rounded bg-white/5 px-2 py-1 font-mono text-[10px] text-foreground/75">{t}</Glossary>)}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })()}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
