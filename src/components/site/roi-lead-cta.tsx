'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Calculator, Target, Copy, Check, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeader, SectionDivider } from './section-header'
import { LEAD_CARDS, BRAND } from '@/lib/site-data'
import { routeForLabel } from '@/lib/content'
import { CountUp } from './count-up'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { LEAD_ICONS } from './custom-icons'
import { cn } from '@/lib/utils'

const MATURITY = ['Ad-hoc', 'Pilots', 'Reference architectures', 'Production MLOps', 'Compounding IP']
const INDUSTRY_NOTE: Record<string, string> = {
  Tech: 'Tech estimates assume cloud-native deployment.',
  'Financial Services': 'Financial estimates assume regulatory-grade governance.',
  Manufacturing: 'Manufacturing estimates assume OT/ICS integration.',
  Healthcare: 'Healthcare estimates assume HIPAA-compliant deployment.',
  Logistics: 'Logistics estimates assume real-time telemetry.',
  Retail: 'Retail estimates assume demand forecasting at SKU level.',
}

export function RoiCalculator() {
  const [industry, setIndustry] = React.useState('Tech')
  const [employees, setEmployees] = React.useState(5000)
  const [spend, setSpend] = React.useState(2)
  const [maturity, setMaturity] = React.useState(2)
  const [showMath, setShowMath] = React.useState(false)
  const [copied, setCopied] = React.useState(false)
  const [mode, setMode] = React.useState<'low' | 'mid' | 'high'>('mid')
  const [computing, setComputing] = React.useState(false)
  const mult = [1.2, 1.8, 2.5, 3.2, 4.0][maturity]
  const base = employees * 2500 + spend * 1000000 * 3.2
  const modeMult = mode === 'low' ? 0.7 : mode === 'high' ? 1.3 : 1
  const impact = Math.round((base * mult * modeMult) / 1000000)

  const compute = (fn: () => void) => { setComputing(true); setTimeout(() => { fn(); setComputing(false) }, 250) }

  const copy = () => { navigator.clipboard.writeText(`$${impact}M estimated annual impact — strategemist.com`); setCopied(true); setTimeout(() => setCopied(false), 2000) }

  return (
    <section className="relative bg-[#0B0C14] py-24 lg:py-32">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionHeader number="§09" eyebrow="AI ROI" stage="Outcomes" title="Run the full simulation" description="A heuristic, not a commitment — but directionally right. Based on verified outcomes (5X / 80% / 65%)." align="center" />
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 rounded-2xl border border-white/8 bg-card/50 p-6 sm:p-8 md:grid-cols-2">
          <div className="space-y-5">
            <div>
              <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Industry</label>
              <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="mt-2 w-full rounded-lg border border-white/10 bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none">
                {['Tech', 'Financial Services', 'Manufacturing', 'Healthcare', 'Logistics', 'Retail'].map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Employees: <span className="num-mono text-primary">{employees.toLocaleString()}</span></label>
              <input type="range" min={500} max={200000} step={500} value={employees} onChange={(e) => compute(() => setEmployees(parseInt(e.target.value)))} className="mt-2 w-full accent-[var(--primary)]" />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Current AI spend: <span className="num-mono text-primary">${spend}M/yr</span></label>
              <input type="range" min={0} max={20} step={1} value={spend} onChange={(e) => compute(() => setSpend(parseInt(e.target.value)))} className="mt-2 w-full accent-[var(--primary)]" />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">AI maturity: <span className="text-primary">{MATURITY[maturity]}</span></label>
              <input type="range" min={0} max={4} value={maturity} onChange={(e) => compute(() => setMaturity(parseInt(e.target.value)))} className="mt-2 w-full accent-[var(--primary)]" />
            </div>
            {/* low/mid/high toggle (item 166) */}
            <div className="flex gap-1.5">
              {(['low', 'mid', 'high'] as const).map((m) => (
                <button key={m} onClick={() => compute(() => setMode(m))} className={cn('flex-1 rounded-lg px-3 py-1.5 text-xs font-medium transition-all', mode === m ? 'bg-primary text-primary-foreground' : 'border border-white/10 text-foreground/70 hover:border-primary/40')}>{m === 'low' ? 'Low' : m === 'mid' ? 'Mid' : 'High'}</button>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
            <Calculator className="h-6 w-6 text-primary" />
            <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Estimated annual impact ({mode})</p>
            {/* loading shimmer (item 163) */}
            {computing ? (
              <div className="mt-2 h-12 w-32 animate-pulse rounded-lg bg-white/10" />
            ) : (
              <motion.p key={impact} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="gradient-text mt-2 text-5xl font-bold tracking-tight num-mono"><CountUp value={impact} suffix="M" prefix="$" /></motion.p>
            )}
            <p className="mt-1 text-[11px] text-muted-foreground">{industry} · {employees.toLocaleString()} employees · {MATURITY[maturity]}</p>
            <p className="mt-2 font-mono text-[10px] text-muted-foreground/70">{INDUSTRY_NOTE[industry]}</p>
            <Button asChild size="sm" className="mt-5 gap-1.5 rounded-lg"><a href="#contact"><Target className="h-3.5 w-3.5" /> Book a real assessment</a></Button>
            <button onClick={copy} className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary">{copied ? <><Check className="h-3 w-3 text-emerald-400" /> Copied</> : <><Copy className="h-3 w-3" /> Save result</>}</button>
          </div>
        </div>
        {/* methodology */}
        <div className="mx-auto mt-3 max-w-3xl text-center">
          <button onClick={() => setShowMath((s) => !s)} className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary"><Info className="h-3 w-3" /> {showMath ? 'Hide' : 'Show'} methodology</button>
          {showMath && <p className="mt-2 rounded-lg border border-white/8 bg-card/30 p-3 font-mono text-[11px] leading-relaxed text-muted-foreground">$impact = (employees × $2.5k efficiency + AI_spend × $1M × 3.2 ROI) × maturity_multiplier (1.2–4.0). Heuristic only; real estimates vary.</p>}
          <p className="mt-2 font-mono text-[10px] text-muted-foreground/60">Based on verified outcomes: 5X execution · 80% threat reduction · 65% fewer disruptions</p>
        </div>
      </div>
    </section>
  )
}

/* J. Lead — manifesto + proof (left list, right quote), 6 cards max */
export function Lead() {
  const cards = LEAD_CARDS.slice(0, 6)
  return (
    <section className="relative py-24 lg:py-32">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <SectionHeader number="§10" eyebrow="Lead" stage="Outcomes" title="The Strategemist Edge" description="Six principles. Each one backed by real IP, not buzzwords." />
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* left: numbered principles */}
          <div className="lg:col-span-7">
            <div className="space-y-3">
              {cards.map((c, i) => (
                <motion.div key={c.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                  <Link href={routeForLabel('lead', c.title)} className="group flex items-start gap-4 rounded-xl border border-white/8 bg-card/50 p-5 transition-all hover:border-primary/30 hover:bg-primary/5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110">
                      {(() => { const I = LEAD_ICONS[c.title]; return I ? <I /> : <span className="num-mono text-sm font-bold">{String(i + 1).padStart(2, '0')}</span> })()}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="flex items-center gap-2 font-semibold">{c.title}<ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" /></h3>
                      <p className="t-small mt-1 text-foreground/80">{c.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          {/* right: large pull-quote */}
          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="sticky top-24 rounded-2xl border border-gold/20 bg-gold/5 p-8">
              <span className="font-mono text-[10px] uppercase tracking-wider text-gold">Principle</span>
              <p className="mt-3 text-balance text-2xl font-bold leading-tight text-white">"11 patents. 8 platforms. Zero-exposure encryption. Self-healing workflows. No compromises."</p>
              <p className="mt-4 text-sm text-muted-foreground">The Strategemist difference — the spine of everything we build.</p>
              <Link href="/lead/the-strategemist-edge" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-400">Read the full Edge →</Link>
            </motion.div>
          </div>
        </div>

        {/* edge mini-timeline (item 188) — the 6-step methodology below the grid */}
        <div className="relative mt-16">
          <svg viewBox="0 0 1100 40" className="pointer-events-none absolute left-0 right-0 top-6 hidden lg:block" preserveAspectRatio="none">
            <motion.line x1="80" y1="20" x2="1020" y2="20" stroke="var(--primary)" strokeWidth="1" strokeOpacity="0.3" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeInOut' }} />
          </svg>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {['Assess', 'Roadmap', 'Secure & comply', 'Automate', 'Optimize', 'Monitor & evolve'].map((s, i) => (
              <motion.div key={s} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative">
                <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-primary num-mono text-base font-bold text-primary-foreground shadow-lg ring-4 ring-background">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 text-sm font-bold leading-tight">{s}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* K. CTA — full-bleed gradient, count-up, what-you-get list */
export function CTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-3xl px-8 py-16 sm:px-12 lg:px-16 lg:py-20" style={{ background: 'var(--grad-primary)' }}>
          <div className="pointer-events-none absolute inset-0 bg-dots opacity-15" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/15 blur-3xl animate-orb-1" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl animate-orb-2" />
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">From IP to Outcomes · No Compromises</span>
            <h2 className="mt-6 text-balance text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">{BRAND.manifesto}</h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-white/85 sm:text-lg"><CountUp value={11} /> patents. <CountUp value={8} /> platforms. 3 verified outcomes.</p>
            <div className="mx-auto mt-6 flex max-w-md flex-col gap-2 text-left text-sm text-white/85">
              {['A 30-min working session with a principal', 'A point of view on your problem, not a sales pitch', 'A sketched business case with the IP we would bring'].map((t) => (
                <span key={t} className="flex items-start gap-2"><Check className="h-4 w-4 shrink-0 text-white" /> {t}</span>
              ))}
            </div>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-14 gap-2 rounded-lg bg-white px-10 text-base font-semibold text-primary hover:bg-white/90"><a href={BRAND.ctaPrimaryHref} target="_blank" rel="noopener noreferrer">{BRAND.ctaPrimary}<ArrowRight className="h-4 w-4" /></a></Button>
              <Button asChild size="lg" variant="outline" className="h-14 gap-2 rounded-lg border-white/50 px-10 text-base font-semibold text-white hover:bg-white/10 hover:text-white"><Link href="/contact">Book a briefing</Link></Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
