import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface Crumb {
  label: string
  href?: string
}

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground', className)}>
      {items.map((c, i) => {
        const last = i === items.length - 1
        return (
          <span key={i} className="inline-flex items-center gap-1.5">
            {c.href && !last ? (
              <Link href={c.href} className="hover:text-foreground transition-colors">{c.label}</Link>
            ) : (
              <span className={last ? 'text-foreground' : ''}>{c.label}</span>
            )}
            {!last && <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />}
          </span>
        )
      })}
    </nav>
  )
}
