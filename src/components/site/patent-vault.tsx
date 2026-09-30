'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, FileText, Search, Lock, ChevronDown, Download } from 'lucide-react'
import { REAL_PATENTS, type RealPatent } from '@/lib/patents'
import { SectionHeader, SectionDivider } from './section-header'
import { Glossary } from './glossary'
import { cn } from '@/lib/utils'

const CATS = ['All', 'Compute', 'Intelligence', 'Trust', 'Automation'] as const
const FEATURED_IDS = ['quantum-computing', 'federated-intelligence-grid', 'autonomous-knowledge-core']
const PLAIN_SUBTITLE: Record<string, string> = {
  'Quantum Computing': 'Quantum-inspired compute that solves infeasible problems',
  'Contextual Intelligence': 'AI that understands relationships across your data',
  'Self-Learning Frameworks': 'Systems that adapt as your business changes',
  'Cognitive Pattern Engines': 'Recognizes strategic patterns in real time',
  'Federated Intelligence Grid': 'Train across silos — data never leaves your perimeter',
  'Algorithmic Ethics & Trust': 'Explainable, audited decisions for regulated industries',
  'Autonomous Knowledge Core': 'Self-healing workflows that run themselves',
  'Sustainable Compute Models': 'AI-governed workload optimization that cuts energy cost',
}

export function PatentVault() {
  const [cat, setCat] = React.useState<(typeof CATS)[number]>('All')
  const [openId, setOpenId] = React.useState<string | null>(null)
  const [showAll, setShowAll] = React.useState(false)
  const [query, setQuery] = React.useState('')

  const featured = REAL_PATENTS.filter((p) => FEATURED_IDS.includes(p.id))
  const rest = REAL_PATENTS.filter((p) => !FEATURED_IDS.includes(p.id))
  const restFiltered = rest.filter((p) => (cat === 'All' || p.category === cat) && (query === '' || p.title.toLowerCase().includes(query.toLowerCase()) || p.shortName.toLowerCase().includes(query.toLowerCase())))

  return (
    <section id="vault" className="relative py-24 lg:py-32">
      <SectionDivider />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      {/* vault-door SVG motif behind the heading */}
      <svg className="pointer-events-none absolute left-1/2 top-12 -z-0 hidden h-32 w-32 -translate-x-1/2 opacity-[0.06] lg:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="10" y="10" width="80" height="80" rx="4" />
        <circle cx="50" cy="50" r="28" />
        <circle cx="50" cy="50" r="6" fill="currentColor" />
        <line x1="50" y1="22" x2="50" y2="38" /><line x1="50" y1="62" x2="50" y2="78" /><line x1="22" y1="50" x2="38" y2="50" /><line x1="62" y1="50" x2="78" y2="50" />
        <line x1="30" y1="30" x2="40" y2="40" /><line x1="60" y1="60" x2="70" y2="70" /><line x1="70" y1="30" x2="60" y2="40" /><line x1="40" y1="60" x2="30" y2="70" />
      </svg>
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionHeader number="§04" eyebrow="Innovate" stage="IP" title="8 patents. Each one a filed specification." description="The IP our pipeline starts from — filed by Strategemist Global Pvt Ltd. Three featured below; open any for its real architecture." />

        {/* 3 featured patents */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {featured.map((p, i) => (
            <FeaturedPatentCard key={p.id} patent={p} index={REAL_PATENTS.findIndex((x) => x.id === p.id) + 1} open={openId === p.id} onToggle={() => setOpenId((cur) => (cur === p.id ? null : p.id))} />
          ))}
        </div>

        {/* view-all toggle */}
        <div className="mt-8 text-center">
          <button onClick={() => setShowAll((s) => !s)} className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-card/50 px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/40">
            {showAll ? 'Hide the vault' : `View all 8 in the vault`} <ChevronDown className={cn('h-4 w-4 transition-transform', showAll && 'rotate-180')} />
          </button>
        </div>

        <AnimatePresence initial={false}>
          {showAll && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
              <div className="mt-8 rounded-2xl border border-white/8 bg-card/30 p-6">
                {/* search + filter */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="relative w-full sm:max-w-xs">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search patents…" className="w-full rounded-lg border border-white/10 bg-background/60 py-2 pl-9 pr-3 text-sm focus:border-primary focus:outline-none" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {CATS.map((c) => (
                      <button key={c} onClick={() => setCat(c)} className={cn('rounded-full px-3 py-1.5 text-xs font-medium transition-all', cat === c ? 'bg-primary text-primary-foreground' : 'border border-white/10 text-foreground/70 hover:border-primary/40')}>{c}</button>
                    ))}
                  </div>
                </div>

                {/* rest of the patents — horizontal scroll */}
                <div className="custom-scroll mt-5 flex gap-3 overflow-x-auto pb-2">
                  {restFiltered.map((p) => {
                    const idx = REAL_PATENTS.findIndex((x) => x.id === p.id) + 1
                    return (
                      <Link key={p.id} href={`/innovate/${p.id}`} className="group relative w-72 shrink-0 overflow-hidden rounded-xl border border-white/8 bg-card/50 p-5 transition-all hover:border-primary/40">
                        <span className="num-mono absolute right-3 top-3 inline-flex items-center gap-1 rounded bg-gold/12 px-2 py-0.5 text-[10px] font-bold text-gold">{String(idx).padStart(2, '0')}</span>
                        <h3 className="pr-12 text-sm font-bold">{p.shortName}</h3>
                        <p className="mt-0.5 text-[11px] text-muted-foreground">{PLAIN_SUBTITLE[p.shortName]}</p>
                        <div className="mt-3 flex flex-wrap gap-1">
                          {p.keyTerms.slice(0, 2).map((t) => <span key={t} className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-[9px] text-foreground/70">{t}</span>)}
                        </div>
                        <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">View spec <ArrowRight className="h-3 w-3" /></span>
                      </Link>
                    )
                  })}
                </div>
                <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Last updated: Q3 2026 · 8 specifications · applicant: Strategemist Global Pvt Ltd</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function FeaturedPatentCard({ patent, index, open, onToggle }: { patent: RealPatent; index: number; open: boolean; onToggle: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: (index - 1) * 0.07 }}>
      <div className={cn('relative overflow-hidden rounded-2xl border bg-card/50 transition-colors min-h-[220px]', open ? 'border-primary/40' : 'border-white/8 hover:border-primary/30')}>
        {/* gold patent badge with backing chip (fixes vibration) */}
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-md bg-gold/15 px-2 py-0.5 text-[10px] font-bold text-gold ring-1 ring-gold/20">
          <FileText className="h-3 w-3" /> {String(index).padStart(2, '0')}
        </span>

        <button onClick={onToggle} aria-expanded={open} className="w-full p-6 text-left">
          <div className="flex items-start gap-3 pr-20">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary ring-1 ring-primary/20">{open ? <Lock className="h-5 w-5" /> : <FileText className="h-5 w-5" />}</span>
            <div className="min-w-0">
              <h3 className="text-sm font-bold leading-tight">{patent.shortName}</h3>
              <p className="mt-0.5 text-xs text-muted-foreground">{PLAIN_SUBTITLE[patent.shortName]}</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {patent.keyTerms.slice(0, 3).map((t) => <span key={t} className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-foreground/70">{t}</span>)}
          </div>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Filed: Q3 2026 · Strategemist Global Pvt Ltd</p>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden border-t border-white/8">
              <div className="schematic-corner space-y-3 p-6" data-schematic={`FIG. ${index} — ${patent.shortName.toUpperCase()}`}>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-primary">Key innovation</div>
                  <p className="mt-1 text-xs leading-relaxed text-foreground/80">{patent.innovation}</p>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-primary">System architecture — {patent.modules.length} modules</div>
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
                  <div className="font-mono text-[10px] uppercase tracking-wider text-primary">Technical vocabulary</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {patent.keyTerms.map((t) => <Glossary key={t} term={t} className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-foreground/70">{t}</Glossary>)}
                  </div>
                </div>
                <Link href={`/innovate/${patent.id}`} className="inline-flex items-center gap-1 text-xs font-medium text-primary">View full specification <ArrowRight className="h-3 w-3" /></Link>
                <a href={`/innovate/${patent.id}#spec`} className="ml-3 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary"><Download className="h-3 w-3" /> Spec</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
