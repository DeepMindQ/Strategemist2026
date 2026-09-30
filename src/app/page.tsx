import { Hero } from '@/components/site/hero'
import { TheSystem } from '@/components/site/the-system'
import { Manifesto } from '@/components/site/manifesto'
import { Empower } from '@/components/site/empower'
import { Domains, Patents } from '@/components/site/domains-patents'
import { Solve, Transform } from '@/components/site/solve-transform'
import { Security, Lead, Edge } from '@/components/site/security-lead-edge'
import { CaseStudies, Services, CTA } from '@/components/site/cases-services-cta'
import { DataPipeline, AgentOrchestration, MaturityAssessment, RoiCalculator } from '@/components/site/ai-interactive'

export default function Home() {
  return (
    <>
      <Hero />
      <TheSystem />
      <Manifesto />
      <Empower />
      <Domains />
      <Patents />
      <DataPipeline />
      <AgentOrchestration />
      <MaturityAssessment />
      <RoiCalculator />
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
