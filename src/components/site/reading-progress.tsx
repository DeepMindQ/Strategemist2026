'use client'

import * as React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

/* A 2px primary progress bar at the top of the viewport showing how far
   the user has scrolled through the current page. */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-primary"
      aria-hidden="true"
    />
  )
}
