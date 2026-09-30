import { Hero } from '@/components/site/hero'
import { TheSystem } from '@/components/site/the-system'
import { Manifesto } from '@/components/site/manifesto'
import { PatentVault } from '@/components/site/patent-vault'
import { AgentOrchestration } from '@/components/site/ai-interactive'
import { MaturityAssessment, RoiCalculator } from '@/components/site/ai-interactive'
import { Solve } from '@/components/site/solve-transform'
import { Lead } from '@/components/site/security-lead-edge'
import { CaseStudies } from '@/components/site/cases-services-cta'
import { CTA } from '@/components/site/cases-services-cta'

/* The homepage is intentionally 10 sections — each a DIFFERENT layout,
   none repeating content. Empower (8 platform cards) was removed because
   PatentVault already shows the same 8 patents with their platform
   mappings — keeping both was the duplication the user flagged.
   Transform moved to /transform inner page (it was a twin of Solve).
   Manifesto is the full-bleed visual-variety break between the dense
   diagram (TheSystem) and the dense grid (PatentVault). */
export default function Home() {
  return (
    <>
      {/* 1. Hero — two-column living dashboard (parallax bg) */}
      <Hero />
      {/* 2. The System — full-bleed 5-stage pipeline diagram */}
      <TheSystem />
      {/* 3. Manifesto — full-bleed editorial break (parallax, no cards) */}
      <Manifesto />
      {/* 4. Patent Vault — the 8 patents + platform mappings (single grid, not duplicated) */}
      <PatentVault />
      {/* 5. Agent Orchestration — centered single visual (4 agents) */}
      <AgentOrchestration />
      {/* 6. Maturity Assessment — interactive slider */}
      <MaturityAssessment />
      {/* 7. Solve — ONE tabbed section (not two) */}
      <Solve />
      {/* 8. Case Studies — 3 big outcomes with count-up */}
      <CaseStudies />
      {/* 9. ROI Calculator — interactive tool */}
      <RoiCalculator />
      {/* 10. Lead + CTA — thought leadership + final action */}
      <Lead />
      <CTA />
    </>
  )
}
