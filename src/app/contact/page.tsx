import type { Metadata } from 'next'
import { PageHero } from '@/components/site/page-hero'
import { ContactForm } from '@/components/site/contact-form'
import { OFFICES, BRAND } from '@/lib/site-data'
import { Mail, MapPin, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact — Strategemist',
  description: 'Partner with Strategemist to replace friction with flow, assumptions with evidence, and ambition with achievement—at boardroom speed.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Your Blueprint for Transformation Awaits"
        intro="Partner with Strategemist to replace friction with flow, assumptions with evidence, and ambition with achievement—at boardroom speed."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20"><Mail className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <a href={`mailto:${BRAND.email}`} className="text-sm font-medium hover:text-primary">{BRAND.email}</a>
                </div>
              </div>
              <div className="mt-8 rounded-2xl border border-border/60 bg-card/40 p-5">
                <div className="text-sm font-semibold">What you&apos;ll get</div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {['A working session with a principal', 'A point of view on your problem, not a sales pitch', 'A sketched business case with the IP we would bring'].map((t) => (
                    <li key={t} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{t}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" /> US · UK · India · KSA — 4 global hubs
              </div>
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 bg-muted/20 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Our offices</div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Global footprint, local context</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OFFICES.map((o) => (
              <div key={o.country} className="rounded-xl border border-border/60 bg-card/50 p-5">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-accent">{o.role}</div>
                <h3 className="mt-1.5 text-lg font-semibold">{o.country}</h3>
                <p className="mt-1 text-xs font-medium text-primary">{o.entity}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{o.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
