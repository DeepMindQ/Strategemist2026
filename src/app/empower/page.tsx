import type { Metadata } from 'next'
import { CategoryIndex } from '@/components/site/category-index'
import { CATEGORY_META } from '@/lib/content'

export const metadata: Metadata = { title: `${CATEGORY_META.empower.label} — Strategemist`, description: CATEGORY_META.empower.blurb }
export default function Page() { return <CategoryIndex category="empower" /> }
