import type { Metadata } from 'next'
import { CategoryIndex } from '@/components/site/category-index'
import { CATEGORY_META } from '@/lib/content'

export const metadata: Metadata = { title: `${CATEGORY_META.services.label} — Strategemist`, description: CATEGORY_META.services.blurb }
export default function Page() { return <CategoryIndex category="services" /> }
