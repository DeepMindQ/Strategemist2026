import type { Metadata } from 'next'
import { CategoryIndex } from '@/components/site/category-index'
import { CATEGORY_META } from '@/lib/content'

export const metadata: Metadata = { title: `${CATEGORY_META.solve.label} — Strategemist`, description: CATEGORY_META.solve.blurb }
export default function Page() { return <CategoryIndex category="solve" /> }
