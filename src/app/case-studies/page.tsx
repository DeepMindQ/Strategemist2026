import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { getCaseStudies } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Case Studies — Strategemist',
  description: 'We don\'t sell case studies—we build success stories. 5X faster execution, 80% threat reduction, 65% fewer supply-chain disruptions.',
}

export default function CaseStudiesPage() {
  const cases = getCaseStudies()
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="We don't sell case studies—we build success stories"
        intro="Your journey with us is unique, powered by innovation, precision, and transformation. Here's a sample of measurable outcomes."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Case Studies' }]}
      />
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {cases.map((c) => (
              <Link key={c.slug} href={`/case-studies/${c.slug}`} className="group flex flex-col rounded-2xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/50 hover:bg-primary/5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/12 px-3 py-1 text-xs font-medium text-primary">{c.industry}</span>
                  <span className="text-3xl font-bold text-primary">{c.metric}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-4">{c.narrative}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read full story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
