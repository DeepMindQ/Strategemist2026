import { Hero } from '@/components/site/hero'
import { TheSystem } from '@/components/site/the-system'
import { Manifesto } from '@/components/site/manifesto'
import { Empower } from '@/components/site/empower'
import { PatentVault } from '@/components/site/patent-vault'
import { InsideTheIP } from '@/components/site/inside-the-ip'
import { Domains } from '@/components/site/domains-patents'
import { DataPipeline, AgentOrchestration, MaturityAssessment, RoiCalculator, ArchitectureExplorer } from '@/components/site/ai-interactive'
import { Solve, Transform } from '@/components/site/solve-transform'
import { Security, Lead, Edge } from '@/components/site/security-lead-edge'
import { CaseStudies, Services, CTA } from '@/components/site/cases-services-cta'

export default function Home() {
  return (
    <>
      <Hero />
      <TheSystem />
      <Manifesto />
      <Empower />
      <PatentVault />
      <InsideTheIP />
      <Domains />
      <DataPipeline />
      <AgentOrchestration />
      <ArchitectureExplorer />
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
