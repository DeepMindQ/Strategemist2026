'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, FileText } from 'lucide-react'
import { EMPOWER_PRODUCTS } from '@/lib/site-data'
import { SectionHeader, SectionDivider, ViewAllLink } from './section-header'
import { Glossary } from './glossary'
import { cn } from '@/lib/utils'

/* 3D rotatable platform prism (CSS 3D, no WebGL — fast). Drag to rotate. */
function PlatformPrism() {
  const reduce = useReducedMotion()
  const [rotX, setRotX] = React.useState(-12)
  const [rotY, setRotY] = React.useState(20)
  const drag = React.useRef<{ x: number; y: number; rx: number; ry: number } | null>(null)
  const faces = EMPOWER_PRODUCTS.slice(0, 6)

  const onDown = (e: React.PointerEvent) => { drag.current = { x: e.clientX, y: e.clientY, rx: rotX, ry: rotY }; (e.target as HTMLElement).setPointerCapture(e.pointerId) }
  const onMove = (e: React.PointerEvent) => {
    if (!drag.current) return
    setRotY(drag.current.ry + (e.clientX - drag.current.x) * 0.5)
    setRotX(drag.current.rx - (e.clientY - drag.current.y) * 0.5)
  }
  const onUp = () => { drag.current = null }
  React.useEffect(() => {
    if (reduce) return
    const id = setInterval(() => { if (!drag.current) setRotY((y) => y + 0.3) }, 50)
    return () => clearInterval(id)
  }, [reduce])

  const transforms = ['translateZ(100px)', 'rotateY(90deg) translateZ(100px)', 'rotateY(180deg) translateZ(100px)', 'rotateY(-90deg) translateZ(100px)', 'rotateX(90deg) translateZ(100px)', 'rotateX(-90deg) translateZ(100px)']
  return (
    <div className="flex items-center justify-center py-8" style={{ perspective: '900px' }}>
      <div onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} className="relative h-[200px] w-[200px] cursor-grab touch-none select-none" style={{ transformStyle: 'preserve-3d', transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)` }}>
        {faces.map((f, i) => (
          <Link key={f.id} href={`/empower/${f.id}`} className="console-surface absolute inset-0 flex flex-col items-center justify-center rounded-xl p-4 text-center">
            <span className="text-3xl font-bold text-primary">{f.symbol}</span>
            <span className="mt-1 text-xs font-semibold">{f.name}</span>
          </Link>
        )).map((el, i) => React.cloneElement(el, { key: faces[i].id, style: { ...el.props.style, transform: transforms[i] } }))}
      </div>
    </div>
  )
}

export function Empower() {
  const [expanded, setExpanded] = React.useState<string | null>(null)
  return (
    <section id="empower" className="relative scroll-mt-20 py-24 lg:py-32">
      <SectionDivider />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeader number="§02" eyebrow="Empower" stage="Platforms" title="8 platforms, each backed by a patent" description="The productized rails in our pipeline. Each Empower platform maps to a real Strategemist patent — not generic AI, but specific, named, filed IP." />
            <PlatformPrism />
            <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Drag the prism · 8 platforms, 6 faces</p>
            <div className="mt-6 text-center"><ViewAllLink href="/empower" label="View all platforms" /></div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {EMPOWER_PRODUCTS.map((p, i) => {
                const isOpen = expanded === p.id
                return (
                  <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}>
                    <Link href={`/empower/${p.id}`} onMouseEnter={() => setExpanded(p.id)} onMouseLeave={() => setExpanded(null)} className={cn('group relative block overflow-hidden rounded-xl border bg-card/50 p-5 card-hover', isOpen ? 'border-primary/40' : 'border-white/8 hover:border-primary/30')}>
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ background: 'var(--grad-primary)' }} />
                      <span className="num-mono absolute right-4 top-4 text-[10px] text-muted-foreground/50">{String(i + 1).padStart(2, '0')}</span>
                      <div className="flex items-center gap-3">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg text-lg font-bold text-white shadow" style={{ background: 'var(--grad-primary)' }}>{p.symbol}</span>
                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-bold">{p.name}</h3>
                          <p className="truncate text-xs font-medium text-primary">{p.tagline}</p>
                        </div>
                      </div>
                      {p.patentName && (
                        <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-gold/12 px-2 py-0.5 text-[10px] font-medium text-gold">
                          <FileText className="h-2.5 w-2.5" /> {p.patentName}
                        </div>
                      )}
                      <div className={cn('grid transition-all duration-300', isOpen ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}>
                        <div className="overflow-hidden">
                          <p className="text-xs leading-relaxed text-muted-foreground">{p.description}</p>
                          <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary">Learn more <ArrowRight className="h-3 w-3" /></span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
