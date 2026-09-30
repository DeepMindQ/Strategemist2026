'use client'

import * as React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export const PIPELINE_STAGES = [
  { id: 'ip', label: 'IP', n: 1, anchor: 'innovate' },
  { id: 'intelligence', label: 'Intelligence', n: 2, anchor: 'empower' },
  { id: 'platforms', label: 'Platforms', n: 3, anchor: 'empower' },
  { id: 'transformation', label: 'Transformation', n: 4, anchor: 'solve' },
  { id: 'outcomes', label: 'Outcomes', n: 5, anchor: 'cases' },
] as const

/* A persistent left/right rail showing the 5-stage metaphor and your position.
   This is the spine of the site: IP → Intelligence → Platforms → Transformation → Outcomes. */
export function PipelineRail() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 })
  const [stage, setStage] = React.useState(0)

  React.useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      const i = Math.min(PIPELINE_STAGES.length - 1, Math.floor(v * PIPELINE_STAGES.length))
      setStage(i)
    })
  }, [scrollYProgress])

  return (
    <div
      className="pointer-events-none fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 lg:block"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-3">
        {PIPELINE_STAGES.map((s, i) => {
          const active = i <= stage
          return (
            <div key={s.id} className="flex items-center gap-2.5">
              <span
                className={`num-mono text-[10px] font-bold transition-colors duration-300 ${active ? 'text-primary' : 'text-muted-foreground/40'}`}
              >
                {String(s.n).padStart(2, '0')}
              </span>
              <span
                className={`text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${active ? 'text-foreground/80' : 'text-muted-foreground/30'}`}
              >
                {s.label}
              </span>
              <span
                className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${active ? 'scale-125 bg-primary shadow-[0_0_8px_var(--primary)]' : 'bg-muted-foreground/30'}`}
              />
            </div>
          )
        })}
        <div className="mt-2 h-16 w-px overflow-hidden bg-white/10">
          <motion.div className="h-full bg-primary" style={{ scaleY: progress, transformOrigin: 'top' }} />
        </div>
      </div>
    </div>
  )
}

/* Stage label that appears top-center, updating as you scroll */
export function StageLabel() {
  const [show, setShow] = React.useState(false)
  const [stage, setStage] = React.useState(0)

  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      const v = h > 0 ? window.scrollY / h : 0
      setStage(Math.min(PIPELINE_STAGES.length - 1, Math.floor(v * PIPELINE_STAGES.length)))
      setShow(window.scrollY > 200)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const s = PIPELINE_STAGES[stage]
  return (
    <div
      className={`pointer-events-none fixed left-1/2 top-[88px] z-30 hidden -translate-x-1/2 transition-opacity duration-300 xl:block ${show ? 'opacity-100' : 'opacity-0'}`}
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-card/60 px-3 py-1 backdrop-blur">
        <span className="num-mono text-[10px] font-bold text-primary">§{String(s.n).padStart(2, '0')}</span>
        <span className="h-3 w-px bg-white/15" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/70">{s.label}</span>
      </div>
    </div>
  )
}
