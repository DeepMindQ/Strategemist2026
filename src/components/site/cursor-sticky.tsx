'use client'

import * as React from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowUp, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BRAND } from '@/lib/site-data'

/* Custom cursor — 16px ring + 4px dot, grows on interactive hover. Desktop only. */
export function CustomCursor() {
  const reduce = useReducedMotion()
  const [pos, setPos] = React.useState({ x: -100, y: -100 })
  const [ring, setRing] = React.useState({ x: -100, y: -100 })
  const [hover, setHover] = React.useState(false)
  const [enabled, setEnabled] = React.useState(false)

  React.useEffect(() => {
    if (reduce) return
    if (window.matchMedia('(pointer: fine)').matches) setEnabled(true)
  }, [reduce])

  React.useEffect(() => {
    if (!enabled) return
    let raf = 0
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      const el = e.target as HTMLElement
      const interactive = el.closest('a, button, input, select, textarea, [role="button"], [data-cursor="hover"]')
      setHover(!!interactive)
      raf = requestAnimationFrame(() => {
        setRing((r) => ({ x: r.x + (e.clientX - r.x) * 0.18, y: r.y + (e.clientY - r.y) * 0.18 }))
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [enabled])

  if (!enabled) return null
  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden lg:block" aria-hidden="true">
      <div className="absolute h-1 w-1 rounded-full bg-primary" style={{ transform: `translate(${pos.x - 2}px, ${pos.y - 2}px)` }} />
      <div
        className="absolute rounded-full border border-primary/60 transition-[width,height,opacity] duration-200"
        style={{
          width: hover ? 40 : 16, height: hover ? 40 : 16,
          transform: `translate(${ring.x - (hover ? 20 : 8)}px, ${ring.y - (hover ? 20 : 8)}px)`,
          opacity: hover ? 0.9 : 0.5,
        }}
      />
    </div>
  )
}

/* Sticky CTA + back-to-top — appear after scrolling past hero */
export function StickyCta() {
  const [show, setShow] = React.useState(false)
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 left-6 z-40 flex flex-col gap-2"
        >
          <Button asChild size="sm" className="h-10 gap-2 rounded-full shadow-2xl">
            <a href={BRAND.ctaPrimaryHref} target="_blank" rel="noopener noreferrer">
              <Sparkles className="h-3.5 w-3.5" /> {BRAND.ctaPrimary}
            </a>
          </Button>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-card/70 text-muted-foreground backdrop-blur transition-colors hover:text-primary"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
