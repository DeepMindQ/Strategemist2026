import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { Empower } from '@/components/site/empower'
import { Innovate } from '@/components/site/innovate'
import { Solve, Transform } from '@/components/site/solve-transform'
import { SecurityGrid, Lead, Edge } from '@/components/site/lead-security'
import { About } from '@/components/site/about'
import { Team } from '@/components/site/team'
import { CaseStudies } from '@/components/site/case-studies'
import { Services } from '@/components/site/services'
import { CTA } from '@/components/site/cta'
import { Contact } from '@/components/site/contact'
import { Footer } from '@/components/site/footer'
import { AIAssistant } from '@/components/site/ai-assistant'

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Empower />
        <Innovate />
        <Solve />
        <Transform />
        <SecurityGrid />
        <Lead />
        <Edge />
        <About />
        <Team />
        <CaseStudies />
        <Services />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  )
}
