'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { PageHero } from './page-hero'
import { Category, CATEGORY_META, getPages } from '@/lib/content'
import { EMPOWER_PRODUCTS } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function CategoryIndex({ category }: { category: Category }) {
  const meta = CATEGORY_META[category]
  const pages = getPages(category)
  const empowerItems = category === 'empower' ? EMPOWER_PRODUCTS : []

  return (
    <>
      <PageHero
        eyebrow={meta.label.toUpperCase()}
        stage={meta.label}
        title={meta.label}
        intro={meta.blurb}
        figureLabel={`FIG. ${category.slice(0, 4).toUpperCase()}`}
        crumbs={[{ label: 'Home', href: '/' }, { label: meta.label }]}
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {category === 'empower' ? (
            /* Empower: grid with gold patent-ref badges */
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {empowerItems.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
                >
                  <Link href={`/empower/${p.id}`} className="group flex flex-col rounded-2xl border border-white/8 bg-card/50 p-6 card-hover hover:border-primary/30">
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-xl text-2xl font-bold text-white shadow" style={{ background: 'var(--grad-primary)' }}>{p.symbol}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                    </div>
                    <h3 className="mt-4 text-base font-bold">{p.name}</h3>
                    <p className="mt-1 text-xs font-medium text-primary">{p.tagline}</p>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.description}</p>
                    {p.patentName && (
                      <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-gold/12 px-2 py-0.5 text-[10px] font-medium text-gold">
                        Patent: {p.patentName}
                      </span>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Bento grid: first card is the feature (col-span-2), rest are standard */
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pages.map((p, i) => {
                const feature = i === 0
                return (
                  <motion.div
                    key={p.slug}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
                    className={cn(feature && 'sm:col-span-2 lg:col-span-2 lg:row-span-2')}
                  >
                    <Link href={`/${category}/${p.slug}`} className={cn('group flex h-full flex-col overflow-hidden rounded-xl border border-white/8 bg-card/50 p-6 card-hover hover:border-primary/30', feature && 'justify-between p-8')}>
                      <span className="pointer-events-none absolute right-4 top-2 font-display text-5xl font-bold text-white/[0.03]">{String(i + 1).padStart(2, '0')}</span>
                      <div className="relative">
                        <span className={cn('grid place-items-center rounded-xl bg-primary/12 num-mono font-bold text-primary ring-1 ring-primary/20', feature ? 'h-14 w-14 text-lg' : 'h-10 w-10 text-sm')}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className={cn('mt-4 font-bold tracking-tight', feature ? 'text-2xl' : 'text-lg')}>{p.navLabel || p.hero?.title}</h3>
                        {(p.hero?.subtitle || p.hero?.intro) && (
                          <p className={cn('mt-1 text-muted-foreground line-clamp-3', feature && 'text-base')}>{p.hero?.subtitle || p.hero?.intro}</p>
                        )}
                      </div>
                      {feature && (
                        <div className="relative mt-4">
                          <ArrowRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                        </div>
                      )}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
