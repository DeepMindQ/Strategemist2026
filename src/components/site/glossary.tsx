'use client'

import * as React from 'react'
import { GLOSSARY } from '@/lib/patents'
import { cn } from '@/lib/utils'

/* Hover tooltip for technical terms — renders the real glossary definition. */
export function Glossary({ term, children, className }: { term: string; children?: React.ReactNode; className?: string }) {
  const [show, setShow] = React.useState(false)
  const def = GLOSSARY[term.toLowerCase()] || GLOSSARY[term]
  if (!def) return <>{children || term}</>
  return (
    <span
      className={cn('relative inline-block cursor-help underline decoration-dotted decoration-primary/50 underline-offset-2', className)}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      tabIndex={0}
      role="term"
    >
      {children || term}
      {show && (
        <span className="console-surface absolute bottom-full left-1/2 z-50 mb-2 w-64 -translate-x-1/2 rounded-lg p-3 text-xs font-normal leading-relaxed text-foreground/85 normal-case">
          <span className="mb-1 block font-mono text-[9px] uppercase tracking-wider text-primary">{term}</span>
          {def}
        </span>
      )}
    </span>
  )
}
