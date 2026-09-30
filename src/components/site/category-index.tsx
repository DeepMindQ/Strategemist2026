import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from './page-hero'
import { Category, CATEGORY_META, getPages } from '@/lib/content'
import { EMPOWER_PRODUCTS } from '@/lib/site-data'

export function CategoryIndex({ category }: { category: Category }) {
  const meta = CATEGORY_META[category]
  const pages = getPages(category)
  const empowerItems = category === 'empower' ? EMPOWER_PRODUCTS : []

  return (
    <>
      <PageHero
        eyebrow={meta.label}
        title={meta.label}
        intro={meta.blurb}
        crumbs={[{ label: 'Home', href: '/' }, { label: meta.label }]}
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {category === 'empower' ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {empowerItems.map((p) => (
                <Link key={p.id} href={`/empower/${p.id}`} className="group rounded-2xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/50 hover:bg-primary/5">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-xl font-bold text-primary ring-1 ring-primary/20">{p.symbol}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{p.name}</h3>
                  <p className="mt-1 text-xs font-medium text-primary">{p.tagline}</p>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.description}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pages.map((p) => (
                <Link key={p.slug} href={`/${category}/${p.slug}`} className="group flex flex-col rounded-2xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/50 hover:bg-primary/5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold leading-tight">{p.navLabel || p.hero?.title}</h3>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  {(p.hero?.subtitle || p.hero?.intro) && (
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.hero?.subtitle || p.hero?.intro}</p>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
