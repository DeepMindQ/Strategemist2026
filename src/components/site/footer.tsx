'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowRight, Mail, Globe, CheckCircle2, Loader2, Send, Youtube, Twitter, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { Logo } from './logo'
import { OFFICES, FOOTER_COLUMNS, BRAND, SOCIAL, NAV_SIMPLE } from '@/lib/site-data'
import { FOOTER_ROUTE_MAP } from '@/lib/route-map'

const socialIcon: Record<string, typeof Youtube> = { YouTube: Youtube, X: Twitter, LinkedIn: Linkedin }

export function Footer() {
  const { toast } = useToast()
  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [done, setDone] = React.useState(false)

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    if (!ok) { toast({ title: 'Enter a valid email', variant: 'destructive' }); return }
    setLoading(true)
    try {
      const res = await fetch('/api/newsletter', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: email.trim().toLowerCase() }) })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Failed')
      setDone(true); setEmail('')
      toast({ title: 'Subscribed', description: 'Deep-tech insights, straight to your inbox.' })
    } catch { toast({ title: 'Could not subscribe', variant: 'destructive' }) }
    finally { setLoading(false) }
  }

  return (
    <footer className="relative mt-auto border-t border-white/10 bg-[#0D0E18]">
      <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, var(--primary), transparent)' }} />
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-5" />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* newsletter */}
        <div className="grid gap-6 border-b border-white/10 py-12 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight">Field notes from the frontier</h3>
            <p className="mt-2 text-sm text-muted-foreground">Unlock exclusive deep-tech insights, industry trends, and strategic foresight — straight to your inbox.</p>
          </div>
          <form onSubmit={subscribe} className="w-full">
            <div className="flex overflow-hidden rounded-full border border-white/15 bg-card/50 focus-within:border-primary/60">
              <Input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading || done} className="h-12 flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0" />
              <Button type="submit" size="lg" disabled={loading || done} className="m-1 h-10 shrink-0 gap-2 rounded-full px-6">
                {done ? <><CheckCircle2 className="h-4 w-4" /> Subscribed</> : loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Subscribing</> : <>Subscribe <Send className="h-4 w-4" /></>}
              </Button>
            </div>
          </form>
        </div>

        {/* offices */}
        <div className="py-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OFFICES.map((o) => (
              <div key={o.country} className="rounded-2xl border border-white/8 bg-card/40 p-5">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-bold">{o.country}</h4>
                  <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-accent">{o.role}</span>
                </div>
                <p className="mt-2 text-xs font-medium text-primary">{o.entity}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{o.address}</p>
              </div>
            ))}
          </div>
        </div>

        {/* columns */}
        <div className="pb-12">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Logo size="md" />
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">{BRAND.tagline}</p>
              <a href={`mailto:${BRAND.email}`} className="mt-5 inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary">
                <Mail className="h-4 w-4" /> {BRAND.email}
              </a>
              <div className="mt-5 flex items-center gap-2">
                {SOCIAL.map((s) => {
                  const Icon = socialIcon[s.label] || Youtube
                  return (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                      <Icon className="h-4 w-4" />
                    </a>
                  )
                })}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 md:col-span-8 sm:grid-cols-3 lg:grid-cols-5">
              {FOOTER_COLUMNS.map((col) => (
                <div key={col.title}>
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{col.title}</div>
                  <ul className="mt-3 space-y-1.5">
                    {col.items.map((it) => (
                      <li key={it}><FooterColLink item={it} column={col.title} /></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-10 text-center text-sm font-medium text-foreground/70">
            IP → Intelligence → Platforms → Transformation → <span className="gradient-text-primary font-semibold">Outcomes</span>
          </p>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} Strategemist Corporation. All rights reserved.</p>
            <div className="flex items-center gap-5">
              {NAV_SIMPLE.map((l) => (<Link key={l.label} href={l.href} className="hover:text-foreground">{l.label}</Link>))}
              <a href="https://in.linkedin.com/company/strategemist" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Career</a>
              <a href="#" className="hover:text-foreground">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColLink({ item, column }: { item: string; column: string }) {
  const empowerSlugMap: Record<string, string> = {
    'QµPrix™': 'qprux', 'Σ-Graphion™': 'graphion', 'ReinQlynix™': 'reinqlynix', 'Neuro-Quantus™': 'neuro-quantus',
    'Φ-Federis™': 'federis', 'EthicSense™': 'ethicsense', 'G(π)-Forma™': 'g-forma', 'HoloSense™': 'holosense',
  }
  let href = '#'
  const catKey = column.toLowerCase()
  if (column === 'Empower' && empowerSlugMap[item]) href = `/empower/${empowerSlugMap[item]}`
  else if (FOOTER_ROUTE_MAP[catKey]?.[item]) href = FOOTER_ROUTE_MAP[catKey][item]
  return (
    <Link href={href} className="group inline-flex items-center gap-1 text-xs text-foreground/70 transition-colors hover:text-primary">
      {item}
      <ArrowRight className="h-2.5 w-2.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
    </Link>
  )
}
