'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowRight, Mail, Globe, CheckCircle2, Loader2, Send, Youtube, Twitter, Linkedin, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { Logo } from './logo'
import { OFFICES, BRAND, SOCIAL, NAV_SIMPLE } from '@/lib/site-data'

const socialIcon: Record<string, typeof Youtube> = { YouTube: Youtube, X: Twitter, LinkedIn: Linkedin }

const COLS = [
  { title: 'Capabilities', items: ['Innovate', 'Empower', 'Solve', 'Transform', 'Lead', 'Services'] },
  { title: 'Company', items: ['About', 'Case Studies', 'Contact', 'Career'] },
  { title: 'Resources', items: ['The Patent Vault', 'The System', 'Manifesto', 'Terms', 'Privacy'] },
]

const SECURITY_BADGES = ['SOC 2 (in process)', 'ISO 27001', 'GDPR', 'HIPAA-ready']

/* Dotted world map — generates a grid of dots shaped like real continents */
function WorldMap() {
  const W = 36, H = 18
  const land: boolean[][] = Array.from({ length: H }, () => Array(W).fill(false))
  // North America
  for (let r = 3; r <= 9; r++) for (let c = 3; c <= 12; c++) {
    if (r === 3 && c < 5) continue; if (r === 3 && c > 10) continue
    if (r === 9 && c < 4) continue; if (r === 9 && c > 10) continue
    if (r === 8 && c > 11) continue
    land[r][c] = true
  }
  // Central America
  for (let r = 8; r <= 10; r++) for (let c = 7; c <= 10; c++) { if (r === 10 && c > 9) continue; land[r][c] = true }
  // South America
  for (let r = 10; r <= 16; r++) for (let c = 8; c <= 13; c++) {
    if (r === 10 && c < 9) continue; if (r === 15 && c < 9) continue
    if (r === 16 && c < 10) continue; if (r === 16 && c > 11) continue
    if (r === 14 && c > 12) continue
    land[r][c] = true
  }
  // Greenland
  for (let r = 2; r <= 5; r++) for (let c = 13; c <= 15; c++) { land[r][c] = true }
  // Europe
  for (let r = 3; r <= 7; r++) for (let c = 15; c <= 20; c++) {
    if (r === 3 && c > 19) continue; if (r === 7 && c < 16) continue
    land[r][c] = true
  }
  // Africa
  for (let r = 7; r <= 14; r++) for (let c = 16; c <= 21; c++) {
    if (r === 7 && c > 20) continue; if (r === 14 && c < 17) continue
    if (r === 14 && c > 19) continue; if (r === 13 && c > 20) continue
    land[r][c] = true
  }
  // Middle East
  for (let r = 6; r <= 9; r++) for (let c = 20; c <= 23; c++) {
    if (r === 6 && c > 22) continue; if (r === 9 && c < 21) continue
    land[r][c] = true
  }
  // India
  for (let r = 7; r <= 11; r++) for (let c = 22; c <= 25; c++) {
    if (r === 7 && c > 24) continue; if (r === 11 && c < 23) continue
    land[r][c] = true
  }
  // SE Asia
  for (let r = 9; r <= 12; r++) for (let c = 25; c <= 29; c++) {
    if (r === 12 && c > 28) continue
    land[r][c] = true
  }
  // Asia (Russia/China)
  for (let r = 3; r <= 9; r++) for (let c = 24; c <= 33; c++) {
    if (r === 3 && c < 26) continue; if (r === 3 && c > 31) continue
    if (r === 9 && c < 25) continue; if (r === 9 && c > 32) continue
    if (r === 8 && c > 32) continue
    land[r][c] = true
  }
  // Japan
  for (let r = 5; r <= 8; r++) for (let c = 32; c <= 34; c++) { land[r][c] = true }
  // Australia
  for (let r = 12; r <= 15; r++) for (let c = 28; c <= 33; c++) {
    if (r === 12 && c < 29) continue; if (r === 15 && c < 29) continue
    if (r === 15 && c > 32) continue
    land[r][c] = true
  }

  const offices = [
    { cx: 75, cy: 55, label: 'US' },
    { cx: 175, cy: 45, label: 'UK' },
    { cx: 235, cy: 85, label: 'IN' },
    { cx: 215, cy: 75, label: 'KSA' },
  ]

  return (
    <svg viewBox="0 0 360 180" className="w-full" style={{ filter: 'drop-shadow(0 0 20px rgba(46,46,217,0.1))' }}>
      {/* Dotted continents */}
      {Array.from({ length: H }).map((_, r) =>
        Array.from({ length: W }).map((_, c) => {
          if (!land[r][c]) return null
          const x = c * 10 + 5, y = r * 10 + 5
          return <circle key={`${r}-${c}`} cx={x} cy={y} r="2" fill="rgba(255,255,255,0.20)" />
        })
      )}
      {/* Office nodes */}
      {offices.map((o, i) => (
        <g key={i}>
          <circle cx={o.cx} cy={o.cy} r="3" fill="var(--primary)" />
          <circle cx={o.cx} cy={o.cy} r="3" fill="none" stroke="var(--primary)" strokeWidth="1">
            <animate attributeName="r" values="3;8;3" dur="2.4s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0;0.8" dur="2.4s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
          </circle>
          <text x={o.cx} y={o.cy - 6} textAnchor="middle" fontSize="5" fill="var(--primary)" fontWeight="600" fontFamily="var(--font-mono)">{o.label}</text>
        </g>
      ))}
      {/* connecting lines */}
      <line x1="75" y1="55" x2="175" y2="45" stroke="var(--primary)" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2 3" />
      <line x1="175" y1="45" x2="235" y2="85" stroke="var(--primary)" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2 3" />
      <line x1="215" y1="75" x2="235" y2="85" stroke="var(--primary)" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2 3" />
    </svg>
  )
}

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
        {/* Global footprint with world map */}
        <div className="py-10">
          <div className="mb-6 flex items-center gap-2">
            <Globe className="h-4 w-4 text-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">Global Footprint</span>
          </div>
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-5"><WorldMap /></div>
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

        {/* Link columns */}
        <div className="pb-10">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <Logo size="md" />
              <p className="mt-3 max-w-xs text-sm text-muted-foreground">{BRAND.tagline}</p>
              <a href={`mailto:${BRAND.email}`} className="mt-4 inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary"><Mail className="h-4 w-4" /> {BRAND.email}</a>
              <div className="mt-4 flex items-center gap-2">
                {SOCIAL.map((s) => { const Icon = socialIcon[s.label] || Youtube; return <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"><Icon className="h-3.5 w-3.5" /></a> })}
              </div>
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
