import type { LucideIcon } from 'lucide-react'
import {
  BrainCircuit,
  LineChart,
  Workflow,
  Cpu,
  ShieldCheck,
  Gauge,
  Network,
  Sparkles,
  Database,
  Bot,
  Radar,
  Layers,
  ArrowUpRight,
  Activity,
  Target,
  Boxes,
  Atom,
  Building2,
  HeartPulse,
  Factory,
  Banknote,
  Truck,
  Leaf,
  ShoppingBag,
} from 'lucide-react'

export const NAV_LINKS = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Approach', href: '#approach' },
  { label: 'IP Portfolio', href: '#portfolio' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

export const STATS = [
  { value: '180+', label: 'Enterprise systems deployed', sub: 'across 4 continents' },
  { value: '3.2x', label: 'Average ROI within year one', sub: 'IP-led engagements' },
  { value: '42%', label: 'Median cost-to-serve reduction', sub: 'via intelligent automation' },
  { value: '11', label: 'Proprietary IP platforms', sub: 'productized & repeatable' },
]

export interface Capability {
  id: string
  icon: LucideIcon
  title: string
  tagline: string
  description: string
  features: string[]
}

export const CAPABILITIES: Capability[] = [
  {
    id: 'predictive',
    icon: LineChart,
    title: 'Predictive Analytics',
    tagline: 'See around corners',
    description:
      'Forecast demand, churn, risk, and failure with models engineered for production—explainable, monitored, and governable from day one.',
    features: [
      'Time-series & probabilistic forecasting',
      'Explainable ML with SHAP / counterfactuals',
      'Drift detection & continuous retraining',
      'Decision-grade model governance',
    ],
  },
  {
    id: 'ai',
    icon: BrainCircuit,
    title: 'Applied AI',
    tagline: 'Intelligence, operationalized',
    description:
      'Generative and discriminative AI woven into the fabric of your workflows—with guardrails, retrieval, and human-in-the-loop control by design.',
    features: [
      'RAG & agentic systems with tool use',
      'Domain-tuned foundation models',
      'Eval-driven development & red-teaming',
      'Responsible AI guardrails & audit trails',
    ],
  },
  {
    id: 'automation',
    icon: Workflow,
    title: 'Intelligent Automation',
    tagline: 'From busywork to baseline',
    description:
      'Automate the repetitive, orchestrate the complex, and let your people focus on judgment. End-to-end pipelines that heal themselves.',
    features: [
      'Hyperautomation & RPA orchestration',
      'Event-driven process fabrics',
      'Self-healing data pipelines',
      'Human-in-the-loop exception handling',
    ],
  },
  {
    id: 'systems',
    icon: Cpu,
    title: 'Intelligent Systems',
    tagline: 'Software that thinks',
    description:
      'Edge-to-cloud systems that perceive, decide, and act in real time—from computer vision to autonomous control loops.',
    features: [
      'Real-time decisioning engines',
      'Computer vision & sensor fusion',
      'Edge ML & low-latency inference',
      'Digital twin & closed-loop control',
    ],
  },
]

export interface ApproachStep {
  step: string
  icon: LucideIcon
  title: string
  description: string
}

export const APPROACH: ApproachStep[] = [
  {
    step: '01',
    icon: Radar,
    title: 'Diagnose',
    description:
      'We map the value chain, quantify where deep tech moves the needle, and size the prize before a single line of code is written.',
  },
  {
    step: '02',
    icon: Atom,
    title: 'Design',
    description:
      'We architect IP-led solutions as reusable platforms—not one-off projects—so every engagement compounds into lasting capability.',
  },
  {
    step: '03',
    icon: Boxes,
    title: 'Build',
    description:
      'Eval-driven, iterative delivery with production-grade engineering: observability, governance, and reliability baked in.',
  },
  {
    step: '04',
    icon: Gauge,
    title: 'Scale',
    description:
      'We industrialize the win—productize the IP, transfer the playbook, and measure outcomes against the original business case.',
  },
]

export interface IPPlatform {
  id: string
  icon: LucideIcon
  name: string
  category: string
  description: string
  metrics: { label: string; value: string }[]
}

export const IP_PORTFOLIO: IPPlatform[] = [
  {
    id: 'forecortex',
    icon: Activity,
    name: 'ForeCortex',
    category: 'Forecasting Engine',
    description:
      'A probabilistic forecasting platform for demand, revenue, and risk—ensemble models with automatic champion/challenger selection.',
    metrics: [
      { label: 'Forecast accuracy', value: '+27%' },
      { label: 'Inventory carrying', value: '−18%' },
    ],
  },
  {
    id: 'cognoguard',
    icon: ShieldCheck,
    name: 'CognoGuard',
    category: 'Responsible AI',
    description:
      'Policy-aware guardrails, red-teaming, and audit trails that keep generative AI on-leash across regulated environments.',
    metrics: [
      { label: 'Policy violations blocked', value: '99.4%' },
      { label: 'Audit trace coverage', value: '100%' },
    ],
  },
  {
    id: 'flowloom',
    icon: Workflow,
    name: 'FlowLoom',
    category: 'Process Orchestration',
    description:
      'An event-driven fabric that stitches automation, humans, and AI into resilient end-to-end processes that heal themselves.',
    metrics: [
      { label: 'Straight-through processing', value: '+63%' },
      { label: 'Mean time to resolve', value: '−54%' },
    ],
  },
  {
    id: 'sightline',
    icon: Network,
    name: 'SightLine',
    category: 'Computer Vision',
    description:
      'Edge-to-cloud vision systems for quality, safety, and situational awareness with millisecond inference at the edge.',
    metrics: [
      { label: 'Defect detection rate', value: '99.1%' },
      { label: 'Edge inference latency', value: '< 40ms' },
    ],
  },
  {
    id: 'twinforge',
    icon: Layers,
    name: 'TwinForge',
    category: 'Digital Twin',
    description:
      'High-fidelity digital twins for scenario simulation, what-if optimization, and closed-loop control of physical assets.',
    metrics: [
      { label: 'Scenario run-time', value: '8x faster' },
      { label: 'Unplanned downtime', value: '−31%' },
    ],
  },
  {
    id: 'insightmesh',
    icon: Database,
    name: 'InsightMesh',
    category: 'Data Fabric',
    description:
      'A semantic data fabric unifying fragmented sources with governed, lineage-tracked, model-ready features on tap.',
    metrics: [
      { label: 'Data prep time', value: '−70%' },
      { label: 'Feature reuse rate', value: '84%' },
    ],
  },
]

export interface CaseStudy {
  id: string
  industry: string
  title: string
  challenge: string
  outcome: string
  metrics: { value: string; label: string }[]
  tags: string[]
  icon: LucideIcon
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    industry: 'Manufacturing',
    title: 'Predictive maintenance that paid for itself in a quarter',
    challenge:
      'A Tier-1 manufacturer was flying blind on asset health—reactive maintenance drove unplanned downtime and margin erosion.',
    outcome:
      'We deployed SightLine + TwinForge to fuse sensor streams into a live risk score and a self-healing work-order loop.',
    metrics: [
      { value: '−31%', label: 'Unplanned downtime' },
      { value: '4.1mo', label: 'Payback period' },
      { value: '$11M', label: 'Annualized savings' },
    ],
    tags: ['Intelligent Systems', 'Predictive Analytics'],
    icon: Factory,
  },
  {
    id: 'cs2',
    industry: 'Financial Services',
    title: 'A credit decision engine that thinks in real time',
    challenge:
      'A lender needed to say yes faster without saying yes recklessly—manual underwriting throttled growth and consistency.',
    outcome:
      'ForeCortex + CognoGuard delivered explainable, regulator-ready decisions at sub-second latency with full audit trails.',
    metrics: [
      { value: '−72%', label: 'Decision latency' },
      { value: '+19%', label: 'Approval precision' },
      { value: '0', label: 'Compliance findings' },
    ],
    tags: ['Applied AI', 'Predictive Analytics'],
    icon: Banknote,
  },
  {
    id: 'cs3',
    industry: 'Healthcare',
    title: 'From bedlam to baseline in patient operations',
    challenge:
      'A health system bled capacity to manual scheduling, no-shows, and reactive triage across 40 facilities.',
    outcome:
      'FlowLoom orchestrated intake, capacity, and follow-up—predicting demand and acting on it before bottlenecks formed.',
    metrics: [
      { value: '+34%', label: 'Throughput' },
      { value: '−28%', label: 'No-show rate' },
      { value: '62k hrs', label: 'Staff capacity freed' },
    ],
    tags: ['Intelligent Automation', 'Applied AI'],
    icon: HeartPulse,
  },
  {
    id: 'cs4',
    industry: 'Logistics',
    title: 'A network that routes around its own chaos',
    challenge:
      'A 3PL’s network planning was daily firefighting—static routes, deadhead miles, and service-level breaches.',
    outcome:
      'InsightMesh + ForeCortex turned live telematics into dynamic routing that re-optimizes every five minutes.',
    metrics: [
      { value: '−22%', label: 'Cost per shipment' },
      { value: '+14%', label: 'On-time delivery' },
      { value: '−1.8M', label: 'Annual deadhead miles' },
    ],
    tags: ['Predictive Analytics', 'Intelligent Systems'],
    icon: Truck,
  },
]

export interface Industry {
  name: string
  icon: LucideIcon
  blurb: string
}

export const INDUSTRIES: Industry[] = [
  { name: 'Financial Services', icon: Banknote, blurb: 'Risk, fraud, credit, and advice automation' },
  { name: 'Manufacturing', icon: Factory, blurb: 'Quality, yield, and asset intelligence' },
  { name: 'Healthcare & Life Sciences', icon: HeartPulse, blurb: 'Capacity, diagnostics, and operations' },
  { name: 'Logistics & Supply Chain', icon: Truck, blurb: 'Network optimization and resilience' },
  { name: 'Retail & CPG', icon: ShoppingBag, blurb: 'Demand, pricing, and personalization' },
  { name: 'Energy & Sustainability', icon: Leaf, blurb: 'Grid intelligence and decarbonization' },
]

export interface Differentiator {
  icon: LucideIcon
  title: string
  description: string
}

export const DIFFERENTIATORS: Differentiator[] = [
  {
    icon: Sparkles,
    title: 'IP-led, not billable-hour-led',
    description:
      'Every engagement is underpinned by productized IP—so you buy outcomes that compound, not hours that evaporate.',
  },
  {
    icon: Target,
    title: 'Business-case first',
    description:
      'We size the prize and instrument the metrics before we build. If it won’t move the P&L, we’ll tell you so.',
  },
  {
    icon: ShieldCheck,
    title: 'Production-grade by default',
    description:
      'Observability, governance, and reliability aren’t add-ons. They ship with the first commit.',
  },
  {
    icon: Bot,
    title: 'Deep-tech fluency',
    description:
      'From foundation models to edge inference, we speak the whole stack—so nothing gets lost in translation.',
  },
  {
    icon: Network,
    title: 'Transfer, not dependency',
    description:
      'We productize the playbook and hand over the keys. Your capability stays yours.',
  },
  {
    icon: Gauge,
    title: 'Outcome-linked engagements',
    description:
      'We put skin in the game. A meaningful share of our fees is tied to the business outcomes we promised.',
  },
]

export interface Insight {
  id: string
  type: 'Brief' | 'Playbook' | 'Perspective'
  title: string
  excerpt: string
  readTime: string
  date: string
}

export const INSIGHTS: Insight[] = [
  {
    id: 'i1',
    type: 'Perspective',
    title: 'Why most AI pilots die in the demo-to-production gap',
    excerpt:
      'The chasm between a notebook and a decision system isn’t a model problem. It’s an engineering and governance problem—and it’s solvable.',
    readTime: '6 min',
    date: 'May 2025',
  },
  {
    id: 'i2',
    type: 'Playbook',
    title: 'The eval-driven roadmap: building AI you can trust in production',
    excerpt:
      'A field-tested framework for shipping generative AI with confidence—benchmarks, red-teams, and rollback from day one.',
    readTime: '9 min',
    date: 'Apr 2025',
  },
  {
    id: 'i3',
    type: 'Brief',
    title: 'Forecasting under volatility: probabilistic beats precise',
    excerpt:
      'When the world stops behaving like the past, point forecasts lie. Ensemble, probabilistic models tell you how much to trust them.',
    readTime: '4 min',
    date: 'Mar 2025',
  },
]

export interface Principle {
  icon: LucideIcon
  title: string
  body: string
}

export const PRINCIPLES: Principle[] = [
  {
    icon: Target,
    title: 'Outcomes over output',
    body: 'We measure ourselves by the metric on your scorecard, not the lines of code on ours.',
  },
  {
    icon: Boxes,
    title: 'IP that compounds',
    body: 'Reusable platforms beat bespoke one-offs—every engagement leaves you more capable.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust is the feature',
    body: 'Explainability, governance, and auditability are not line items. They are the product.',
  },
]

// Marquee logos (text-based, no external assets)
export const CLIENTS = [
  'NORTHWIND',
  'VELOCITY CAP',
  'MERIDIAN HEALTH',
  'ATLAS LOGISTICS',
  'PRIMEFIELD',
  'ORBITAL INDUSTRIES',
  'SENTINEL BANK',
  'GREENLINE',
]

export const SOCIAL = [
  { label: 'LinkedIn', href: '#' },
  { label: 'X', href: '#' },
  { label: 'GitHub', href: '#' },
]

export const FOOTER_NAV = {
  Capabilities: [
    'Predictive Analytics',
    'Applied AI',
    'Intelligent Automation',
    'Intelligent Systems',
  ],
  Company: ['About', 'IP Portfolio', 'Careers', 'Contact'],
  Resources: ['Insights', 'Case Studies', 'Playbooks', 'Glossary'],
}
