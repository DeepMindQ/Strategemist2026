import Link from 'next/link'
import { ArrowRight, Sparkles, ShieldCheck, Atom, Activity, Zap, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { EMPOWER_PRODUCTS, PATENTS, BRAND, SOLVE_TABS, TRANSFORM_TABS, LEAD_CARDS, SECURITY_GRID, EDGE, SERVICE_GROUPS } from '@/lib/site-data'
import { getCaseStudies, CATEGORY_META, routeForLabel } from '@/lib/content'

export default function Home() {
  const caseStudies = getCaseStudies()

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute left-1/2 top-0 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Backed by 11 patents
            </span>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Beyond Consulting.<br />Engineering the Future.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
              Strategemist is an IP-led technology firm. We engineer the future through quantum-inspired AI, intelligent systems, and enterprise transformation — delivering measurable outcomes, not slideware.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="gap-2 rounded-full">
                <a href={BRAND.ctaPrimaryHref} target="_blank" rel="noopener noreferrer">{BRAND.heroCta} <ArrowRight className="h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="/empower">Explore our IP platforms</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-primary" /> Zero-Trust Security</span>
              <span className="inline-flex items-center gap-1.5"><Atom className="h-3.5 w-3.5 text-primary" /> Quantum-Inspired</span>
              <span className="inline-flex items-center gap-1.5"><Activity className="h-3.5 w-3.5 text-primary" /> Real-Time Intelligence</span>
              <span className="inline-flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-primary" /> Production-Grade</span>
            </div>
          </div>
        </div>
      </section>

      {/* Empower — 8 IP platforms */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Empower</div>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Eight proprietary IP platforms</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Redefining intelligent systems — each platform a distinct frontier of intelligence. Backed by our 11 patents.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EMPOWER_PRODUCTS.map((p) => (
              <Link key={p.id} href={`/empower/${p.id}`} className="group flex flex-col rounded-2xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/50 hover:bg-primary/5">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-xl font-bold text-primary ring-1 ring-primary/20">{p.symbol}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{p.name}</h3>
                <p className="mt-1 text-xs font-medium text-primary">{p.tagline}</p>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Six capability domains */}
      <section className="border-y border-border/50 bg-muted/20 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Capabilities</div>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Six domains. One execution system.</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Explore our full capability portfolio across Innovate, Solve, Transform, Lead, Empower, and Services.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {([
              ['innovate', '12 patent-backed deep-tech capabilities'],
              ['solve', '12 solutions across intelligence, security, performance, infrastructure'],
              ['transform', '12 transformation plays across evolution, acceleration, resilience, optimization'],
              ['lead', '8 strategy and thought-leadership plays'],
              ['empower', '8 proprietary IP-platform products'],
              ['services', '13 consulting and delivery services'],
            ] as const).map(([cat, blurb]) => (
              <Link key={cat} href={`/${cat}`} className="group flex items-center justify-between rounded-2xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/50 hover:bg-primary/5">
                <div>
                  <h3 className="text-lg font-semibold">{CATEGORY_META[cat].label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{blurb}</p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Innovate — patents grid */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Innovate</div>
              <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">11 patents, one vault</h2>
            </div>
            <Link href="/innovate/the-patent-value" className="hidden shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline sm:inline-flex">
              Explore the Patent Vault <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PATENTS.slice(0, 8).map((p) => (
              <Link key={p.name} href="/innovate/the-patent-value" className="group rounded-2xl border border-border/60 bg-card/50 p-5 transition-colors hover:border-primary/50 hover:bg-primary/5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20"><p.icon className="h-5 w-5" /></span>
                <h3 className="mt-4 text-sm font-semibold leading-tight">{p.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Solve tabs summary */}
      <section className="border-y border-border/50 bg-muted/20 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Solve</div>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Smart. Secure. Scalable. Future-Ready.</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Intelligent decision-making, robust security, high-performance systems, and scalable infrastructure.</p>
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {SOLVE_TABS.map((t) => (
              <div key={t.id} className="rounded-2xl border border-border/60 bg-card/50 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">{t.name}</h3>
                <p className="mt-2 text-sm font-medium">{t.headline}</p>
                <ul className="mt-4 space-y-2">
                  {t.services.map((s) => (
                    <li key={s.name}>
                      <Link href={routeForLabel('solve', s.name)} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary/60" /> {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transform tabs summary */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Transform</div>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Redefine the Future. Build What&apos;s Next.</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {TRANSFORM_TABS.map((t) => (
              <div key={t.id} className="rounded-2xl border border-border/60 bg-card/50 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">{t.name}</h3>
                <p className="mt-2 text-sm font-medium">{t.headline}</p>
                <ul className="mt-4 space-y-2">
                  {t.services.map((s) => (
                    <li key={s.name}>
                      <Link href={routeForLabel('transform', s.name)} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary/60" /> {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security grid */}
      <section className="border-y border-border/50 bg-muted/20 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Security</div>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Scale Innovation with Precision</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">AI-driven, quantum-secure, and zero-trust architectures engineered to outpace evolving threats.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SECURITY_GRID.slice(0, 6).map((c, i) => (
              <div key={i} className="rounded-2xl border border-border/60 bg-card/50 p-5">
                <h3 className="text-sm font-semibold leading-tight">{c.title}</h3>
                <p className="mt-1 text-xs text-primary">{c.standards}</p>
                <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Lead</div>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Lead the Change. Shape the Future.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LEAD_CARDS.map((c) => (
              <Link key={c.title} href={routeForLabel('lead', c.title)} className="group rounded-2xl border border-border/60 bg-card/50 p-5 transition-colors hover:border-primary/50 hover:bg-primary/5">
                <h3 className="text-sm font-semibold leading-tight">{c.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-4">{c.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">Read more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Strategemist Edge methodology */}
      <section className="border-y border-border/50 bg-muted/20 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">The Strategemist Edge</div>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Enterprise-scale deployment methodology</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {EDGE.methodology.map((s) => (
              <div key={s.step} className="relative rounded-2xl border border-border/60 bg-card/50 p-5">
                <span className="absolute -top-3 left-5 rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">{s.step}</span>
                <h3 className="mt-1 text-sm font-semibold">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Case Studies</div>
              <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Measurable outcomes</h2>
            </div>
            <Link href="/case-studies" className="hidden shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline sm:inline-flex">
              All case studies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((c) => (
              <Link key={c.slug} href={`/case-studies/${c.slug}`} className="group flex flex-col rounded-2xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/50 hover:bg-primary/5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/12 px-3 py-1 text-xs font-medium text-primary">{c.industry}</span>
                  <span className="text-3xl font-bold text-primary">{c.metric}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-4">{c.narrative}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">Read full story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-border/50 bg-muted/20 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Services</div>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Consulting & delivery, across the stack</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {SERVICE_GROUPS.map((g) => (
              <div key={g.group} className="rounded-2xl border border-border/60 bg-card/50 p-6">
                <h3 className="text-lg font-semibold">{g.group}</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {g.services.map((s) => (
                    <Link key={s.name} href={routeForLabel('services', s.name)} className="group flex items-start gap-3 rounded-xl border border-border/50 bg-background/40 p-4 transition-colors hover:border-primary/50 hover:bg-primary/5">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary ring-1 ring-primary/20"><s.icon className="h-5 w-5" /></span>
                      <div>
                        <h4 className="text-sm font-semibold leading-tight">{s.name}</h4>
                        <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">{BRAND.tagline}</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Bring us your hardest deep-tech problem. We&apos;ll bring the IP, the method, and measurable outcomes.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2 rounded-full">
              <a href={BRAND.ctaPrimaryHref} target="_blank" rel="noopener noreferrer">{BRAND.ctaPrimary} <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/contact">Book a briefing</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
