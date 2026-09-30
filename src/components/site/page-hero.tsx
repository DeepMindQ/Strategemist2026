'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Breadcrumbs, type Crumb } from './breadcrumbs'
import { cn } from '@/lib/utils'

export function PageHero({
  eyebrow,
  stage,
  title,
  subtitle,
  intro,
  crumbs,
  figureLabel,
  className,
}: {
  eyebrow?: string
  stage?: string
  title: string
  subtitle?: string
  intro?: string
  crumbs?: Crumb[]
  figureLabel?: string
  className?: string
}) {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const gridY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 40])
  const orbY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -20])
  const contentY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 20])

  return (
    <section className={cn('relative overflow-hidden border-b border-white/8 bg-gradient-to-b from-primary/8 via-background to-background', className)}>
      {/* parallax background layers */}
      <motion.div style={{ y: gridY }} className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-30" />
      </motion.div>
      <motion.div style={{ y: orbY, background: 'radial-gradient(circle, rgba(46,46,217,0.10) 0%, transparent 70%)' }} className="pointer-events-none absolute right-[10%] top-[10%] h-64 w-64 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute inset-0 noise" />

      {/* blueprint FIG. label */}
      {figureLabel && (
        <span className="pointer-events-none absolute left-6 top-4 font-mono text-[9px] uppercase tracking-[0.1em] text-white/20 lg:left-8">{figureLabel}</span>
      )}

      <motion.div style={{ y: contentY }} className="relative mx-auto max-w-4xl px-6 py-16 sm:px-6 lg:px-8 lg:py-20">
        {crumbs && <Breadcrumbs items={crumbs} className="mb-6" />}
        {eyebrow && (
          <div className="eyebrow">
            <span className="num-mono text-primary/50">{eyebrow}</span>
            <span className="h-px w-6 bg-primary/40" />
          </div>
        )}
        <h1 className="h-section mt-3 text-balance text-white">
          {title}
        </h1>
        {stage && (
          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Stage: {stage}
          </span>
        )}
        {subtitle && (
          <p className="t-subhead mt-5 font-medium text-primary/90">{subtitle}</p>
        )}
        {intro && (
          <div className="mt-5 max-w-3xl space-y-4 text-pretty text-base leading-relaxed text-foreground/75 sm:text-lg">
            {intro.split(/\n\n+/).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  )
}
