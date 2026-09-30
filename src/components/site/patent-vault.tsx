'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, FileText, Lock } from 'lucide-react'
import { REAL_PATENTS, type RealPatent } from '@/lib/patents'
import { SectionHeader, SectionDivider } from './section-header'
import { Glossary } from './glossary'
import { cn } from '@/lib/utils'

const CATS = ['All', 'Compute', 'Intelligence', 'Trust', 'Automation'] as const

export function PatentVault() {
  const [cat, setCat] = React.useState<(typeof CATS)[number]>('All')
  const [openId, setOpenId] = React.useState<string | null>(null)
  const filtered = REAL_PATENTS.filter((p) => cat === 'All' || p.category === cat)

  return (
    <section className="relative py-24 lg:py-32">
      <SectionDivider />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionHeader
          number="§04"
          eyebrow="Innovate"
          stage="IP"
          title="8 patents, one vault"
          description="The IP our pipeline starts from. Filed by Strategemist Global Pvt Ltd — real specifications, real modules, real vocabulary. Filter by category, open any patent for its architecture."
        />

        {/* category filter */}
        <div className="mt-10 flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={cn('rounded-full px-4 py-1.5 text-xs font-medium transition-all', cat === c ? 'bg-primary text-primary-foreground' : 'border border-white/10 text-foreground/70 hover:border-primary/40 hover:text-foreground')}>
              {c}
            </button>
          ))}
        </div>

        {/* vault grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <PatentCard key={p.id} patent={p} index={i} open={openId === p.id} onToggle={() => setOpenId((cur) => (cur === p.id ? null : p.id))} />
          ))}
        </div>

        <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          Last updated: Q3 2026 · 8 specifications detailed · applicant: Strategemist Global Pvt Ltd
        </p>
      </div>
    </section>
  )
}

function PatentCard({ patent, index, open, onToggle }: { patent: RealPatent; index: number; open: boolean; onToggle: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: (index % 3) * 0.07 }}>
      <div className={cn('relative overflow-hidden rounded-xl border bg-card/50 transition-colors', open ? 'border-primary/40' : 'border-white/8 hover:border-primary/30')}>
        {/* gold patent badge */}
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold">
          <FileText className="h-3 w-3" /> PATENT #{String(index + 1).padStart(2, '0')}
        </span>

        <button onClick={onToggle} className="w-full p-6 text-left" aria-expanded={open}>
          <div className="flex items-start gap-3 pr-20">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary ring-1 ring-primary/20">
              {open ? <Lock className="h-5 w-5" /> : <FileText className="h-5 w-5" />}
            </span>
            <div className="min-w-0">
              <h3 className="text-sm font-bold leading-tight">{patent.shortName}</h3>
              <p className="mt-0.5 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground">{patent.title}</p>
            </div>
          </div>

          {/* key terms as chips */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {patent.keyTerms.slice(0, 3).map((t) => (
              <span key={t} className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-[9px] text-foreground/70">{t}</span>
            ))}
          </div>
        </button>

        {/* expand: vault opens to reveal the spec */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden border-t border-white/8">
              <div className="schematic-corner space-y-4 p-6" data-schematic={`FIG. ${index + 1} — ${patent.shortName.toUpperCase()}`}>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-primary">Field</div>
                  <p className="mt-1 text-xs text-foreground/80">{patent.field}</p>
                </div>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-gold">Key innovation</div>
                  <p className="mt-1 text-xs leading-relaxed text-foreground/80">{patent.innovation}</p>
                </div>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-primary">System architecture — {patent.modules.length} modules</div>
                  <ul className="mt-2 space-y-1">
                    {patent.modules.map((m) => (
                      <li key={m.ref} className="flex items-center gap-2 font-mono text-[10px] text-foreground/75">
                        <span className="grid h-5 w-8 shrink-0 place-items-center rounded bg-primary/12 text-[9px] font-bold text-primary">{m.ref}</span>
                        <span className="font-sans text-xs">{m.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-primary">Technical vocabulary</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {patent.keyTerms.map((t) => <Glossary key={t} term={t} className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-[9px] text-foreground/70">{t}</Glossary>)}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
