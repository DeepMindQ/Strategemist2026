'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Loader2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { Logo } from './logo'
import { FOOTER_NAV, SOCIAL } from '@/lib/data'

export function Footer() {
  const { toast } = useToast()
  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [done, setDone] = React.useState(false)

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    if (!emailOk) {
      toast({ title: 'Enter a valid email', variant: 'destructive' })
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Failed')
      setDone(true)
      setEmail('')
      toast({ title: 'Subscribed', description: 'Field notes from the frontier, monthly-ish.' })
    } catch {
      toast({ title: 'Could not subscribe', variant: 'destructive' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="relative mt-auto border-t border-border/60 bg-muted/40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Newsletter band */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-px grid gap-6 border-b border-border/60 py-10 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Field notes from the frontier
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Practitioner perspectives on shipping deep tech to production. No spam, no fluff—unsubscribe anytime.
            </p>
          </div>
          <form onSubmit={subscribe} className="w-full">
            <div className="flex flex-col gap-2 sm:flex-row">
              <Input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading || done}
                className="h-11 flex-1 rounded-full"
              />
              <Button
                type="submit"
                size="lg"
                disabled={loading || done}
                className="h-11 shrink-0 gap-2 rounded-full"
              >
                {done ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Subscribed
                  </>
                ) : loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Subscribing
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="#top" aria-label="Strategemist home">
              <Logo />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              An IP-led technology firm turning predictive analytics, AI, automation, and
              intelligent systems into scalable business outcomes.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-9 items-center rounded-full border border-border/60 px-4 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3">
            {Object.entries(FOOTER_NAV).map(([heading, items]) => (
              <div key={heading}>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {heading}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="group inline-flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-primary"
                      >
                        {item}
                        <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Strategemist, Inc. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Responsible AI</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
