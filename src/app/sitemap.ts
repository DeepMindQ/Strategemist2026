import type { MetadataRoute } from 'next'
import { getPages, getCaseStudies, CATEGORIES } from '@/lib/content'
import { EMPOWER_PRODUCTS } from '@/lib/site-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://strategemist.com'
  const routes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), priority: 1, changeFrequency: 'weekly' },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/case-studies`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
  ]
  for (const cat of CATEGORIES) {
    routes.push({ url: `${base}/${cat}`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' })
    for (const p of getPages(cat)) {
      routes.push({ url: `${base}/${cat}/${p.slug}`, lastModified: new Date(), priority: 0.6, changeFrequency: 'monthly' })
    }
  }
  for (const p of EMPOWER_PRODUCTS) {
    routes.push({ url: `${base}/empower/${p.id}`, lastModified: new Date(), priority: 0.6, changeFrequency: 'monthly' })
  }
  for (const c of getCaseStudies()) {
    routes.push({ url: `${base}/case-studies/${c.slug}`, lastModified: new Date(), priority: 0.6, changeFrequency: 'monthly' })
  }
  return routes
}
