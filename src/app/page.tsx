import { Hero } from '@/components/site/hero'
import { Empower } from '@/components/site/empower'
import { Domains, Patents } from '@/components/site/domains-patents'
import { Solve, Transform } from '@/components/site/solve-transform'
import { Security, Lead, Edge } from '@/components/site/security-lead-edge'
import { CaseStudies, Services, CTA } from '@/components/site/cases-services-cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Empower />
      <Domains />
      <Patents />
      <Solve />
      <Transform />
      <Security />
      <Lead />
      <Edge />
      <CaseStudies />
      <Services />
      <CTA />
    </>
  )
}
