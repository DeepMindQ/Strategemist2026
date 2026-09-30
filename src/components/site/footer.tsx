'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowRight, Mail, MapPin, CheckCircle2, Loader2, Send, Youtube, Twitter, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { Logo } from './logo'
import { OFFICES, FOOTER_COLUMNS, BRAND, SOCIAL, NAV_SIMPLE } from '@/lib/site-data'
import { FOOTER_ROUTE_MAP } from '@/lib/route-map'

const socialIcon: Record<string, typeof Youtube> = {
  YouTube: Youtube,
  X: Twitter,
  LinkedIn: Linkedin,
}

export function Footer() {
  const { toast } = useToast()
  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [done, setDone] = React.useState(false)

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    if (!emailOk) { toast({ title: 'Enter a valid email', variant: 'destructive' }); return }
    setLoading(true)
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Failed')
      setDone(true); setEmail('')
      toast({ title: 'Subscribed', description: 'Deep-tech insights, straight to your inbox.' })
    } catch {
      toast({ title: 'Could not subscribe', variant: 'destructive' })
    } finally { setLoading(false) }
  }

  return (
    <footer className="mt-auto border-t border-border/60 bg-muted/20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Newsletter */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 border-b border-border/60 py-10 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Field notes from the frontier</h3>
            <p className="mt-2 text-sm text-muted-foreground">Unlock exclusive deep-tech insights, industry trends, and strategic foresight—straight to your inbox.</p>
          </div>
          <form onSubmit={subscribe} className="w-full">
            <div className="flex flex-col gap-2 sm:flex-row">
              <Input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading || done} className="h-11 flex-1 rounded-full" />
              <Button type="submit" size="lg" disabled={loading || done} className="h-11 shrink-0 gap-2 rounded-full">
                {done ? <><CheckCircle2 className="h-4 w-4" /> Subscribed</> : loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Subscribing</> : <>Subscribe <Send className="h-4 w-4" /></>}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Offices */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {OFFICES.map((o) => (
            <div key={o.country} className="rounded-xl border border-border/50 bg-card/40 p-5">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <h4 className="text-sm font-semibold">{o.country}</h4>
                <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-accent">{o.role}</span>
              </div>
              <p className="mt-2 text-xs font-medium text-primary">{o.entity}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{o.address}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Link columns */}
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo size={36} />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">{BRAND.tagline}</p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIAL.map((s) => {
                const Icon = socialIcon[s.label] || Youtube
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="grid h-9 w-9 place-items-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
            <a href={`mailto:${BRAND.email}`} className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
              <Mail className="h-4 w-4" /> {BRAND.email}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6 md:col-span-8 sm:grid-cols-3 lg:grid-cols-5">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{col.title}</div>
                <ul className="mt-3 space-y-1.5">
                  {col.items.map((it) => (
                    <li key={it}>
                      <FooterColLink item={it} column={col.title} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Strategemist Corporation. One Strategemist — Orchestrated Intelligence → Measurable Outcomes.</p>
          <div className="flex items-center gap-5">
            {NAV_SIMPLE.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-foreground">{l.label}</Link>
            ))}
            <a href="https://in.linkedin.com/company/strategemist" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Career</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* Map a footer column item to the correct inner-page route (client-safe tiny map) */
function FooterColLink({ item, column }: { item: string; column: string }) {
  const empowerSlugMap: Record<string, string> = {
    'QµPrix™': 'qprux', 'Σ-Graphion™': 'graphion', 'ReinQlynix™': 'reinqlynix', 'Neuro-Quantus™': 'neuro-quantus',
    'Φ-Federis™': 'federis', 'EthicSense™': 'ethicsense', 'G(π)-Forma™': 'g-forma', 'HoloSense™': 'holosense',
  }
  let href = '#'
  const catKey = column.toLowerCase()
  if (column === 'Empower' && empowerSlugMap[item]) {
    href = `/empower/${empowerSlugMap[item]}`
  } else if (FOOTER_ROUTE_MAP[catKey]?.[item]) {
    href = FOOTER_ROUTE_MAP[catKey][item]
  }
  return (
    <Link href={href} className="group inline-flex items-center gap-1 text-xs text-foreground/75 transition-colors hover:text-primary">
      {item}
      <ArrowRight className="h-2.5 w-2.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
    </Link>
  )
}
