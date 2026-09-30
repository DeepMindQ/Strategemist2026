'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ContentSection } from '@/lib/content'
import { Glossary } from './glossary'

/* v8 ContentRenderer — bold key phrases, business impact callouts,
   module connectors, scroll-reveal, blueprint ticks, tightened spacing. */

const KEY_PHRASES = [
  'O(2ⁿ)', 'O(log n)', 'tensor', 'ZKHNE', 'QE-VE', 'homomorphic', 'federated',
  'neuro-symbolic', 'self-healing', 'zero-exposure', 'quantum-inspired',
  'reinforcement learning', 'temporal reasoning', 'knowledge liquidity',
  'cross-layer', 'self-adaptive', 'G=(V,E)', 'Hilbert', 'blockchain',
  'swarm intelligence', 'generative AI',
]

function boldKeyPhrases(text: string): React.ReactNode {
  let result: React.ReactNode = text
  for (const phrase of KEY_PHRASES) {
    const parts = String(result).split(new RegExp(`(${phrase})`, 'gi'))
    if (parts.length > 1) {
      result = parts.map((part, i) =>
        part.toLowerCase() === phrase.toLowerCase()
          ? <strong key={i} className="font-semibold text-white">{part}</strong>
          : part
      )
    }
  }
  return result
}

export function ContentRenderer({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="space-y-12">
      {sections.map((section, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
        >
          <Section section={section} index={i} />
        </motion.div>
      ))}
    </div>
  )
}

function SectionHeading({ children, index }: { children: React.ReactNode; index?: number }) {
  return (
    <h2 className="flex items-center gap-2 text-balance text-2xl font-bold tracking-tight sm:text-3xl">
      {index !== undefined && <span className="num-mono text-sm text-primary/50">§{String(index + 1).padStart(2, '0')}</span>}
      {children}
    </h2>
  )
}

function Section({ section, index }: { section: ContentSection; index?: number }) {
  if (!section.heading && !section.body && !section.items?.length && !section.columns?.length && !section.intro) {
    return null
  }

  switch (section.type) {
    case 'heading-paragraph':
      return (
        <div>
          {section.heading && <SectionHeading index={index}>{section.heading}</SectionHeading>}
          {section.intro && (
            <div className="mt-4 max-w-3xl space-y-4 text-muted-foreground">
              {section.intro.split(/\n\n+/).map((p, i) => <p key={i} className="t-body leading-[1.7]">{boldKeyPhrases(p)}</p>)}
            </div>
          )}
          {section.body && (
            <div className="mt-4 max-w-3xl space-y-4 text-pretty leading-[1.7] text-foreground/85">
              {section.body.split(/\n\n+/).map((p, i) => <p key={i} className="t-body">{boldKeyPhrases(p)}</p>)}
            </div>
          )}
        </div>
      )

    case 'cards':
      return (
        <div>
          {section.heading && <SectionHeading index={index}>{section.heading}</SectionHeading>}
          {section.intro && <p className="mt-4 max-w-3xl t-body text-muted-foreground">{section.intro}</p>}
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {(section.items as Array<{ title?: string; description?: string }>).map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl border border-white/8 bg-card/50 p-5 card-hover hover:border-primary/30">
                <span className="pointer-events-none absolute left-2 top-2 h-2 w-2 border-l border-t border-white/12" />
                <span className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b border-r border-white/12" />
                {item.title && (
                  <h3 className="flex items-start gap-2 text-base font-semibold leading-snug">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item.title}
                  </h3>
                )}
                {item.description && (
                  <p className="mt-2 t-small leading-relaxed text-muted-foreground">{boldKeyPhrases(item.description)}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )

    case 'list':
      return (
        <div>
          {section.heading && <SectionHeading index={index}>{section.heading}</SectionHeading>}
          {section.intro && <p className="mt-4 max-w-3xl t-body text-muted-foreground">{section.intro}</p>}
          <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
            {(section.items as string[]).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 rounded-lg border border-white/8 bg-card/30 p-3.5 t-small leading-relaxed">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-foreground/85">{boldKeyPhrases(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      )

    case 'comparison':
      return (
        <div>
          {section.heading && <SectionHeading index={index}>{section.heading}</SectionHeading>}
          {section.intro && <p className="mt-4 max-w-3xl t-body text-muted-foreground">{section.intro}</p>}
          <div className={cn('mt-7 grid gap-4', (section.columns?.length ?? 2) >= 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2')}>
            {section.columns?.map((col, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-xl border border-white/8 bg-card/50 p-5">
                <span className="pointer-events-none absolute left-2 top-2 h-2 w-2 border-l border-t border-white/12" />
                <span className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b border-r border-white/12" />
                <h3 className="t-mono font-semibold text-primary">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map((it, i2) => (
                    <li key={i2} className="flex items-start gap-2 t-small leading-relaxed text-foreground/85">
                      <span className={cn('mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full', idx === 0 ? 'bg-muted-foreground' : idx === section.columns!.length - 1 ? 'bg-gold' : 'bg-primary')} />
                      {boldKeyPhrases(it)}
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
          {section.heading && <SectionHeading index={index}>{section.heading}</SectionHeading>}
          {section.intro && <p className="mt-4 max-w-3xl t-body text-muted-foreground">{section.intro}</p>}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {(section.items as Array<{ step?: string; title?: string; description?: string }>).map((item, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-xl border border-white/8 bg-card/50 p-5">
                <span className="pointer-events-none absolute left-2 top-2 h-2 w-2 border-l border-t border-white/12" />
                {item.step && (
                  <span className="absolute -top-3 left-5 rounded-full bg-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">{item.step}</span>
                )}
                {item.title && <h3 className="mt-1 text-base font-semibold">{item.title}</h3>}
                {item.description && <p className="mt-2 t-small leading-relaxed text-muted-foreground">{boldKeyPhrases(item.description)}</p>}
              </div>
            ))}
          </div>
        </div>
      )

    default:
      return null
  }
}

/* Business Impact callout — translates jargon to outcome */
export function BusinessImpact({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 rounded-xl border border-gold/25 bg-gold/5 p-5">
      <div className="flex items-center gap-2">
        <span className="t-mono text-gold">Business Impact</span>
      </div>
      <p className="mt-2 text-base font-medium leading-relaxed text-foreground/90">{children}</p>
    </div>
  )
}

/* Key Takeaways — 3 bullet summary at the top of each page */
export function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <div className="console-surface relative mb-10 overflow-hidden rounded-2xl p-6">
      <div className="h-0.5 w-full" style={{ background: 'var(--grad-primary)' }} />
      <div className="pt-4">
        <span className="t-mono text-primary">Key Takeaways</span>
        <ul className="mt-4 space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/85">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {boldKeyPhrases(item)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* Module Connector — draws a line between module cards showing data flow */
export function ModuleFlow({ count }: { count: number }) {
  return (
    <svg viewBox={`0 0 ${count * 100} 20`} className="my-3 h-5 w-full" preserveAspectRatio="none">
      {Array.from({ length: count - 1 }).map((_, i) => (
        <line key={i} x1={i * 100 + 60} y1="10" x2={(i + 1) * 100 + 20} y2="10" stroke="var(--primary)" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2 2" />
      ))}
    </svg>
  )
}
