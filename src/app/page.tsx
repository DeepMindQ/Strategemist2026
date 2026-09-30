import { Hero } from '@/components/site/hero'
import { TheSystem } from '@/components/site/the-system'
import { Manifesto } from '@/components/site/manifesto'
import { PatentVault } from '@/components/site/patent-vault'
import { AgentOrchestration } from '@/components/site/ai-interactive'
import { MaturityAssessment } from '@/components/site/maturity'
import { Solve } from '@/components/site/solve'
import { CaseStudies } from '@/components/site/cases'
import { RoiCalculator, Lead, CTA } from '@/components/site/roi-lead-cta'

/* 10 sections — each a DIFFERENT layout, none repeating content.
   A: Hero (2-col console) · B: The System (horizontal pipeline) ·
   C: Manifesto (left-aligned editorial) · D: Patent Vault (3 featured + vault) ·
   E: Agent Orchestration (console panel) · F: Maturity (slider) ·
   G: Solve (split-screen) · H: Case Studies (asymmetric 1+2) ·
   I: ROI Calculator (form+result) · J+K: Lead (principles+quote) + CTA */
export default function Home() {
  return (
    <>
      <Hero />
      <TheSystem />
      <Manifesto />
      <PatentVault />
      <AgentOrchestration />
      <MaturityAssessment />
      <Solve />
      <CaseStudies />
      <RoiCalculator />
      <Lead />
      <CTA />
    </>
  )
}
