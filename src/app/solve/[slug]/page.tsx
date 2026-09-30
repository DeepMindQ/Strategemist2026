import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { InnerPage } from '@/components/site/inner-page'
import { getPage, getAllSlugs, CATEGORY_META } from '@/lib/content'

export const dynamicParams = false

export function generateStaticParams() {
  return getAllSlugs('solve').map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = getPage('solve', slug)
  return {
    title: page?.metaTitle ? `${page.metaTitle} — Strategemist` : `${page?.navLabel ?? 'Solve'} — Strategemist`,
    description: page?.hero?.intro || page?.hero?.subtitle || CATEGORY_META.solve.blurb,
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = getPage('solve', slug)
  if (!page) notFound()
  return <InnerPage page={page} category="solve" />
}
