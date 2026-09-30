import { Breadcrumbs, type Crumb } from './breadcrumbs'
import { cn } from '@/lib/utils'

export function PageHero({
  eyebrow,
  title,
  subtitle,
  intro,
  crumbs,
  className,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  intro?: string
  crumbs?: Crumb[]
  className?: string
}) {
  return (
    <section className={cn('relative border-b border-border/50 bg-gradient-to-b from-primary/10 via-background to-background', className)}>
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-20">
        {crumbs && <Breadcrumbs items={crumbs} className="mb-6" />}
        {eyebrow && (
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</div>
        )}
        <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg font-medium text-primary/90">{subtitle}</p>
        )}
        {intro && (
          <div className="mt-5 max-w-3xl space-y-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {intro.split(/\n\n+/).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
