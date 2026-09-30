import { cn } from '@/lib/utils'
import type { ContentSection } from '@/lib/content'
import { CheckCircle2 } from 'lucide-react'

/* Renders structured content sections extracted from the original site. */
export function ContentRenderer({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="space-y-14">
      {sections.map((section, i) => (
        <Section key={i} section={section} />
      ))}
    </div>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">{children}</h2>
}

function Section({ section }: { section: ContentSection }) {
  if (!section.heading && !section.body && !section.items?.length && !section.columns?.length && !section.intro) {
    return null
  }

  switch (section.type) {
    case 'heading-paragraph':
      return (
        <div>
          {section.heading && <SectionHeading>{section.heading}</SectionHeading>}
          {section.intro && (
            <div className="mt-4 max-w-3xl space-y-4 text-muted-foreground">
              {section.intro.split(/\n\n+/).map((p, i) => <p key={i}>{p}</p>)}
            </div>
          )}
          {section.body && (
            <div className="mt-4 max-w-3xl space-y-4 text-pretty leading-relaxed text-foreground/85">
              {section.body.split(/\n\n+/).map((p, i) => <p key={i}>{p}</p>)}
            </div>
          )}
        </div>
      )

    case 'cards':
      return (
        <div>
          {section.heading && <SectionHeading>{section.heading}</SectionHeading>}
          {section.intro && <p className="mt-4 max-w-3xl text-muted-foreground">{section.intro}</p>}
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(section.items as Array<{ title?: string; description?: string }>).map((item, idx) => (
              <div
                key={idx}
                className="group rounded-xl border border-border/60 bg-card/50 p-5 transition-colors hover:border-primary/50"
              >
                {item.title && (
                  <h3 className="flex items-start gap-2 text-base font-semibold leading-snug">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item.title}
                  </h3>
                )}
                {item.description && (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )

    case 'list':
      return (
        <div>
          {section.heading && <SectionHeading>{section.heading}</SectionHeading>}
          {section.intro && <p className="mt-4 max-w-3xl text-muted-foreground">{section.intro}</p>}
          <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
            {(section.items as string[]).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 rounded-lg border border-border/40 bg-card/30 p-3.5 text-sm leading-relaxed">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )

    case 'comparison':
      return (
        <div>
          {section.heading && <SectionHeading>{section.heading}</SectionHeading>}
          {section.intro && <p className="mt-4 max-w-3xl text-muted-foreground">{section.intro}</p>}
          <div className={cn('mt-7 grid gap-4', (section.columns?.length ?? 2) >= 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2')}>
            {section.columns?.map((col, idx) => (
              <div key={idx} className="rounded-xl border border-border/60 bg-card/50 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map((it, i2) => (
                    <li key={i2} className="flex items-start gap-2 text-sm leading-relaxed text-foreground/85">
                      <span className={cn('mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full', idx === 0 ? 'bg-muted-foreground' : 'bg-primary')} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )

    case 'timeline':
      return (
        <div>
          {section.heading && <SectionHeading>{section.heading}</SectionHeading>}
          {section.intro && <p className="mt-4 max-w-3xl text-muted-foreground">{section.intro}</p>}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {(section.items as Array<{ step?: string; title?: string; description?: string }>).map((item, idx) => (
              <div key={idx} className="relative rounded-xl border border-border/60 bg-card/50 p-5">
                {item.step && (
                  <span className="absolute -top-3 left-5 rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
                    {item.step}
                  </span>
                )}
                {item.title && <h3 className="mt-1 text-base font-semibold">{item.title}</h3>}
                {item.description && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )

    default:
      return null
  }
}
