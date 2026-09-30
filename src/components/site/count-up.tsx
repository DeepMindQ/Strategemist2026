'use client'

import * as React from 'react'
import { useInView } from 'framer-motion'

export function CountUp({ value, suffix = '', prefix = '', className, duration = 1200 }: { value: number; suffix?: string; prefix?: string; className?: string; duration?: number }) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = React.useState('0')

  React.useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(eased * value).toString())
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return <span ref={ref} className={className}>{prefix}{display}{suffix}</span>
}
