'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowRight, Mail, Globe, CheckCircle2, Loader2, Send, Youtube, Twitter, Linkedin, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { Logo } from './logo'
import { OFFICES, BRAND, SOCIAL, NAV_SIMPLE, FOOTER_COLUMNS } from '@/lib/site-data'
import { FOOTER_ROUTE_MAP } from '@/lib/route-map'

const socialIcon: Record<string, typeof Youtube> = { YouTube: Youtube, X: Twitter, LinkedIn: Linkedin }

/* Collapse 5 columns -> 3: Capabilities / Company / Resources */
const COLS = [
  { title: 'Capabilities', items: ['Innovate', 'Empower', 'Solve', 'Transform', 'Lead', 'Services'] },
  { title: 'Company', items: ['About', 'Case Studies', 'Contact', 'Career'] },
  { title: 'Resources', items: ['The Patent Vault', 'The System', 'Manifesto', 'Terms', 'Privacy'] },
]

const SECURITY_BADGES = ['SOC 2 (in process)', 'ISO 27001', 'GDPR', 'HIPAA-ready']

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
    <footer className="relative mt-auto border-t border-white/10 bg-[#0B0C14]">
      <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, var(--primary), transparent)' }} />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* mini-map SVG with pulsing offices (item 205) */}
        <div className="py-10">
          <div className="mb-6 flex items-center gap-2">
            <Globe className="h-4 w-4 text-primary" />
            <span className="t-mono text-primary">Global Footprint</span>
          </div>
          <div className="grid gap-6 md:grid-cols-12">
            {/* left: the map */}
            <div className="md:col-span-5">
              <svg viewBox="0 0 200 100" className="w-full opacity-40">
                {/* simplified world map dots */}
                {Array.from({ length: 200 }).map((_, i) => {
                  const x = (i % 20) * 10 + 5; const y = Math.floor(i / 20) * 10 + 5
                  return <circle key={i} cx={x} cy={y} r="0.5" fill="white" opacity="0.3" />
                })}
                {/* office nodes: US, UK, India, KSA */}
                {[[30, 40], [50, 35], [75, 50], [70, 45]].map(([cx, cy], i) => (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="2" fill="var(--primary)" />
                    <circle cx={cx} cy={cy} r="2" fill="none" stroke="var(--primary)" strokeWidth="0.5">
                      <animate attributeName="r" values="2;6;2" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}
                {/* connecting lines */}
                <line x1="30" y1="40" x2="50" y2="35" stroke="var(--primary)" strokeWidth="0.3" opacity="0.5" />
                <line x1="50" y1="35" x2="75" y2="50" stroke="var(--primary)" strokeWidth="0.3" opacity="0.5" />
                <line x1="75" y1="50" x2="70" y2="45" stroke="var(--primary)" strokeWidth="0.3" opacity="0.5" />
              </svg>
            </div>
            {/* right: the office cards */}
            <div className="md:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {OFFICES.map((o) => (
                  <div key={o.country} className="rounded-lg border border-white/8 bg-card/40 p-4">
                    <div className="flex items-center gap-2"><Globe className="h-3.5 w-3.5 text-primary" /><h4 className="text-xs font-bold">{o.country}</h4><span className="ml-auto text-[9px] font-semibold uppercase tracking-wider text-gold">{o.role}</span></div>
                    <p className="mt-1.5 text-[11px] font-medium text-primary">{o.entity}</p>
                    <p className="mt-0.5 text-[10px] leading-relaxed text-muted-foreground">{o.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* link columns (collapsed to 3) */}
        <div className="pb-10">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <Logo size="md" />
              <p className="mt-3 max-w-xs text-sm text-muted-foreground">{BRAND.tagline}</p>
              <a href={`mailto:${BRAND.email}`} className="mt-4 inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary"><Mail className="h-4 w-4" /> {BRAND.email}</a>
              <div className="mt-4 flex items-center gap-2">
                {SOCIAL.map((s) => { const Icon = socialIcon[s.label] || Youtube; return <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"><Icon className="h-3.5 w-3.5" /></a> })}
              </div>
              {/* security badges */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {SECURITY_BADGES.map((b) => <span key={b} className="inline-flex items-center gap-1 rounded border border-white/10 bg-white/[0.02] px-1.5 py-0.5 text-[9px] font-medium text-muted-foreground"><Shield className="h-2.5 w-2.5 text-gold" /> {b}</span>)}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 md:col-span-8 sm:grid-cols-3">
              {COLS.map((col) => (
                <div key={col.title}>
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{col.title}</div>
                  <ul className="mt-3 space-y-1.5">
                    {col.items.map((it) => <li key={it}><FooterColLink item={it} /></li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* status + sitemap */}
          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row">
            <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> All systems operational</span>
            <div className="flex items-center gap-4">
              <a href="/sitemap.xml" className="hover:text-foreground">Sitemap</a>
              <a href="/status" className="hover:text-foreground">Status</a>
              {NAV_SIMPLE.map((l) => <Link key={l.label} href={l.href} className="hover:text-foreground">{l.label}</Link>)}
            </div>
          </div>

          <div className="mt-4 text-center text-[11px] text-muted-foreground/60">
            © {new Date().getFullYear()} Strategemist Corporation. All rights reserved. · Last updated: Q3 2026
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColLink({ item }: { item: string }) {
  // map common items to routes
  const map: Record<string, string> = {
    About: '/about', 'Case Studies': '/case-studies', Contact: '/contact', Career: 'https://in.linkedin.com/company/strategemist',
    'The Patent Vault': '/innovate/the-patent-value', 'The System': '/#system', Manifesto: '/#top', Terms: '#', Privacy: '#',
    Innovate: '/innovate', Empower: '/empower', Solve: '/solve', Transform: '/transform', Lead: '/lead', Services: '/services',
  }
  const href = map[item] || '#'
  return (
    <Link href={href} className="group inline-flex items-center gap-1 text-xs text-foreground/70 transition-colors hover:text-primary">
      {item}
      <ArrowRight className="h-2.5 w-2.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
    </Link>
  )
}
