'use client'

import { motion } from 'framer-motion'
import { BRAND } from '@/lib/site-data'

export function Manifesto() {
  return (
    <section className="relative overflow-hidden border-y border-white/8 bg-[#0B0C14] py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute left-1/2 top-1/2 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: 'radial-gradient(circle, rgba(46,46,217,0.12) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 noise" />
      </div>
      <div className="relative mx-auto max-w-[1100px] px-6 text-center lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-balance text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl"
        >
          <span className="block text-white">8 patents.</span>
          <span className="block text-white">8 platforms.</span>
          <span className="block text-white">Zero-exposure encryption.</span>
          <span className="block text-white">Self-healing workflows.</span>
          <span className="gradient-text block">No compromises.</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-6 max-w-xl text-pretty text-base text-muted-foreground"
        >
          {BRAND.manifesto} That's the Strategemist difference — and the spine of everything we build.
        </motion.p>
      </div>
    </section>
  )
}
