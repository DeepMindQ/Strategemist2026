'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function SectionHeader({
  number,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  number?: string
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('max-w-3xl', align === 'center' ? 'mx-auto text-center' : '', className)}
    >
      {eyebrow && (
        <div className={cn('flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary', align === 'center' && 'justify-center')}>
          {number && <span className="font-mono text-primary/60">{number}</span>}
          <span className="h-px w-6 bg-primary/40" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  )
}

export function SectionDivider() {
  return (
    <div className="pointer-events-none mx-auto h-px max-w-7xl" style={{ background: 'linear-gradient(to right, transparent, color-mix(in oklch, var(--primary) 30%, transparent), transparent)' }} />
  )
}
