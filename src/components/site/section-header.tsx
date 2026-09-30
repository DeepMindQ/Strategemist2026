'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function SectionHeader({
  number, eyebrow, stage, title, description, align = 'left', className,
}: {
  number?: string
  eyebrow?: string
  stage?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('max-w-2xl', align === 'center' ? 'mx-auto text-center' : '', className)}
    >
      {eyebrow && (
        <div className={cn('eyebrow', align === 'center' && 'justify-center')}>
          {number && <span className="num-mono text-primary/50">{number}</span>}
          <span className="h-px w-6 bg-primary/40" />
          {eyebrow}
          {stage && <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">Stage: {stage}</span>}
        </div>
      )}
      <h2 className="mt-3 text-balance text-4xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>}
    </motion.div>
  )
}

export function SectionDivider() {
  return <div className="pointer-events-none mx-auto h-px max-w-[1200px]" style={{ background: 'linear-gradient(to right, transparent, rgba(46,46,217,0.25), transparent)' }} />
}

export function ViewAllLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="group hidden shrink-0 items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-400 sm:inline-flex">
      {label}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  )
}
