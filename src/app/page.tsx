import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { Stats } from '@/components/site/stats'
import { Capabilities } from '@/components/site/capabilities'
import { Approach } from '@/components/site/approach'
import { IPPortfolio } from '@/components/site/ip-portfolio'
import { AnalyticsDemo } from '@/components/site/analytics-demo'
import { CaseStudies } from '@/components/site/case-studies'
import { Industries } from '@/components/site/industries'
import { Differentiators } from '@/components/site/differentiators'
import { Insights } from '@/components/site/insights'
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
        <Stats />
        <Capabilities />
        <Approach />
        <IPPortfolio />
        <AnalyticsDemo />
        <CaseStudies />
        <Industries />
        <Differentiators />
        <Insights />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  )
}
