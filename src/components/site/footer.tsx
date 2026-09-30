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
            {/* left: a real simplified world map with office nodes */}
            <div className="md:col-span-5">
              <svg viewBox="0 0 200 100" className="w-full">
                {/* Simplified continental outlines (dotted landmasses) — recognizable world map */}
                {/* North America */}
                <path d="M20 28 Q30 22 40 24 L48 30 L52 38 L48 46 L40 50 L32 48 L24 42 Z" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.3" />
                {/* South America */}
                <path d="M52 52 L56 50 L60 56 L58 64 L54 70 L50 66 Z" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.3" />
                {/* Europe / UK */}
                <path d="M88 26 L100 24 L104 30 L100 36 L92 36 L86 32 Z" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.3" />
                {/* Africa */}
                <path d="M94 40 L104 40 L108 48 L106 58 L102 64 L98 62 L94 54 Z" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.3" />
                {/* Middle East / KSA */}
                <path d="M106 38 L114 36 L118 42 L116 46 L110 46 Z" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.3" />
                {/* India */}
                <path d="M118 44 L124 42 L128 48 L126 54 L122 52 Z" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.3" />
                {/* Asia / SE */}
                <path d="M126 30 L150 28 L160 34 L158 42 L140 44 L128 40 Z" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.3" />
                {/* Australia */}
                <path d="M150 60 L164 58 L168 64 L164 70 L154 68 Z" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.3" />

                {/* Office nodes positioned on the right continents: US (Delaware), UK (London), India (Hyderabad), KSA (Riyadh) */}
                {([
                  { cx: 38, cy: 34, label: 'US' },
                  { cx: 95, cy: 28, label: 'UK' },
                  { cx: 122, cy: 48, label: 'IN' },
                  { cx: 112, cy: 42, label: 'KSA' },
                ]).map((o, i) => (
                  <g key={i}>
                    <circle cx={o.cx} cy={o.cy} r="1.8" fill="var(--primary)" />
                    <circle cx={o.cx} cy={o.cy} r="1.8" fill="none" stroke="var(--primary)" strokeWidth="0.5">
                      <animate attributeName="r" values="1.8;5;1.8" dur="2.4s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.9;0;0.9" dur="2.4s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
                    </circle>
                    <text x={o.cx} y={o.cy - 3} textAnchor="middle" fontSize="3" fill="var(--primary)" opacity="0.8">{o.label}</text>
                  </g>
                ))}
                {/* connecting delivery lines: US-UK, UK-India, India-KSA */}
                <line x1="38" y1="34" x2="95" y2="28" stroke="var(--primary)" strokeWidth="0.25" strokeOpacity="0.4" strokeDasharray="1 1" />
                <line x1="95" y1="28" x2="122" y2="48" stroke="var(--primary)" strokeWidth="0.25" strokeOpacity="0.4" strokeDasharray="1 1" />
                <line x1="112" y1="42" x2="122" y2="48" stroke="var(--primary)" strokeWidth="0.25" strokeOpacity="0.4" strokeDasharray="1 1" />
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
