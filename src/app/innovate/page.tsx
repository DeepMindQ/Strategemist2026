import type { Metadata } from 'next'
import { CategoryIndex } from '@/components/site/category-index'
import { CATEGORY_META } from '@/lib/content'

export const metadata: Metadata = { title: `${CATEGORY_META.innovate.label} — Strategemist`, description: CATEGORY_META.innovate.blurb }
export default function Page() { return <CategoryIndex category="innovate" /> }
