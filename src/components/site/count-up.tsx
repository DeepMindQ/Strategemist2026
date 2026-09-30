'use client'

import * as React from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

export function CountUp({ value, suffix = '', className }: { value: number; suffix?: string; className?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { duration: 1200, bounce: 0 })
  const [display, setDisplay] = React.useState('0')

  React.useEffect(() => {
    if (inView) mv.set(value)
  }, [inView, value, mv])

  React.useEffect(() => {
    return spring.on('change', (v) => {
      setDisplay(Math.round(v).toString())
    })
  }, [spring])

  return <span ref={ref} className={className}>{display}{suffix}</span>
}
