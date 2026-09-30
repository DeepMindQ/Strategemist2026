import type { LucideIcon } from 'lucide-react'
import {
  Atom,
  Brain,
  Network,
  ShieldCheck,
  Cpu,
  Boxes,
  Sparkles,
  Layers,
  Database,
  Workflow,
  Lock,
  Gauge,
  Radar,
  LineChart,
  GitBranch,
  Globe,
  Users,
  Building2,
  Landmark,
  Plane,
  Scale,
  Lightbulb,
  Rocket,
  Eye,
  Bot,
  CircuitBoard,
  Waves,
  Boxes as BoxesIcon,
  Fingerprint,
  Server,
  Cloud,
  Activity,
  TrendingUp,
  Target,
  Recycle,
  Zap,
  Microscope,
  Sigma,
  Infinity as InfinityIcon,
  Hexagon,
  Aperture,
  Fingerprint as Fp,
} from 'lucide-react'

/* ============================================================
   COMPANY & BRAND
============================================================ */
export const BRAND = {
  name: 'Strategemist',
  tagline: 'Beyond Consulting. Engineering the Future.',
  manifesto: 'IP. Platforms. Outcomes. No Compromises.',
  metaphor: 'IP → Intelligence → Platforms → Transformation → Outcomes',
  patents: '11',
  email: 'info@strategemist.com',
  ctaPrimary: 'Let’s Build Together',
  ctaPrimaryHref: 'https://deepmindq.com/',
  heroEyebrow: '11 patents. 8 platforms. 1 system.',
  heroHeadline: 'Beyond Consulting. Engineering the Future.',
  heroSub:
    'A transformation intelligence platform built on filed IP — quantum-inspired compute, zero-exposure federated learning, self-healing workflows. We ship to the metric on your scorecard, not the hours on our timesheet.',
  heroCta: 'Try our AI model',
}

export const SOCIAL = [
  { label: 'YouTube', href: 'https://www.youtube.com/@Strategemist' },
  { label: 'X', href: 'https://x.com/strategemist' },
  { label: 'LinkedIn', href: ' ' },
]

export const OFFICES = [
  {
    country: 'United States',
    entity: 'Strategemist Corporation',
    address: '16192 Coastal Highway, Lewes, Delaware 19958',
    role: 'Strategic Leadership',
    blurb: 'Headquarters for governance, platforms, and global program direction.',
  },
  {
    country: 'United Kingdom',
    entity: 'Strategemist Limited',
    address: '71-75 Shelton Street, Covent Garden, London, WC2H 9JQ',
    role: 'European Hub',
    blurb: 'Regional base for commercial operations, partnerships, and GDPR compliance.',
  },
  {
    country: 'India',
    entity: 'Strategemist Global Private Limited',
    address: 'Cyber Towers 1st Floor, Q3-A2, Hitech City Rd, Madhapur, Telangana 500081, India',
    role: 'Execution Core',
    blurb: 'Home to Strategemist Global and GCC Entra—driving PMO, delivery, and Capability Center enablement.',
  },
  {
    country: 'KSA',
    entity: 'Strategemist – EIITC',
    address: 'Building No. 44, Ibn Katheer St, King Abdul Aziz, Unit A11, Riyadh 13334, Saudi Arabia',
    role: 'Growth Engine',
    blurb: 'Partnership-led presence advancing Vision 2030 priorities with in-kingdom execution under U.S. oversight.',
  },
]

export const CORPORATE_STRUCTURE = [
  {
    name: 'Strategemist Corporation (Delaware, USA)',
    role: 'Ultimate Parent & Command Center',
    description:
      'The ultimate parent and command center of the group. It governs brand stewardship, corporate policy, and strategic decision-making across all regions. As the custodian of proprietary platforms and governance frameworks, it oversees alliance structures, licensing models, and global financial consolidation under U.S. law.',
  },
  {
    name: 'Strategemist Limited (United Kingdom)',
    role: 'European Holding & Governance',
    description:
      'Wholly owned by Strategemist Corporation (Delaware, USA). Serves as the European holding and governance layer, managing UK/EU operations, GDPR compliance, and acting as the supervisory bridge for international business and royalty management.',
  },
  {
    name: 'Strategemist Global Private Limited (India)',
    role: 'PMO & Vendor Orchestration',
    description:
      'Operates under the strategic governance of Strategemist Corporation (Delaware, USA). Functions as the hub for program management, vendor orchestration, and global solutioning support—anchoring PMO discipline, VMO operations, and pre-sales enablement to ensure standardized delivery practices and transparent execution oversight.',
  },
  {
    name: 'Strategemist GCC Entra Private Limited (India)',
    role: 'Global Delivery Center',
    description:
      'Wholly owned by Strategemist Corporation (Delaware, USA). Operates as the Global Delivery Center (GDC) driving scaled execution, engineering excellence, and alliance delivery. It also supports foreign enterprises establishing India-based Global Capability Centers (GCCs) under Strategemist’s governance and brand systems.',
  },
  {
    name: 'Strategemist Arabia (KSA)',
    role: 'In-Kingdom Execution',
    description:
      'Operates in strategic partnership with a locally registered enterprise under the governance of Strategemist Corporation (Delaware, USA). Leads in-kingdom execution, localization, and Vision 2030–aligned delivery, with commercial and financial oversight retained within the U.S. parent.',
  },
  {
    name: 'Strategemist IBC (Seychelles)',
    role: 'Capital-Market Readiness',
    description:
      'Wholly owned by Strategemist Limited (United Kingdom). Structured for capital-market readiness, royalty management, and prospective MERJ VCAP participation under UK-supervised governance and international audit standards.',
  },
]

/* ============================================================
   NAVIGATION — 6 mega-menus
============================================================ */
export interface NavMegaItem {
  label: string
  href: string
  desc?: string
}
export interface NavGroup {
  id: string
  label: string
  stage?: string
  items: NavMegaItem[]
}

export const NAV_GROUPS: NavGroup[] = [
  {
    id: 'innovate',
    label: 'Innovate',
    stage: 'IP',
    items: [
      { label: 'The Patent Vault', href: '/innovate/the-patent-value', desc: '11 patents, one platform' },
      { label: 'Quantum Computing', href: '/innovate/quantum-computing', desc: 'Quantum-inspired computation' },
      { label: 'Contextual Intelligence', href: '/innovate/contextual-intelligence', desc: 'Graph neural networks' },
      { label: 'Self-Learning Frameworks', href: '/innovate/self-learning-frameworks', desc: 'Adaptive reinforcement systems' },
      { label: 'Cognitive Pattern Engines', href: '/innovate/cognitive-pattern-engines', desc: 'Quantum-enhanced pattern AI' },
      { label: 'Federated Intelligence Grid', href: '/innovate/federated-intelligence-grid', desc: 'Decentralized, privacy-first AI' },
      { label: 'Algorithmic Ethics & Trust', href: '/innovate/algorithmic-ethics-trust', desc: 'Transparent, accountable AI' },
      { label: 'Autonomous Knowledge Core', href: '/innovate/autonomous-knowledge-core', desc: 'Generative knowledge automation' },
      { label: 'Sustainable Compute Models', href: '/innovate/sustainable-compute-models', desc: 'Energy-efficient compute' },
      { label: 'Real-Time Optimization Hub', href: '/innovate/real-time-optimization-hub', desc: 'Quantum + AI orchestration' },
      { label: 'Genomic Data Intelligence', href: '/innovate/genomic-data-intelligence', desc: 'Bio-inspired data synthesis' },
      { label: 'Blockchain Trust Systems', href: '/innovate/blockchain-trust-systems', desc: 'Distributed trust' },
    ],
  },
  {
    id: 'empower',
    label: 'Empower',
    stage: 'Platforms',
    items: [
      { label: 'QµPrix™', href: '/empower/qprux', desc: 'Computational power' },
      { label: 'Σ-Graphion™', href: '/empower/graphion', desc: 'Graph intelligence' },
      { label: 'ReinQlynix™', href: '/empower/reinqlynix', desc: 'Continuous learning' },
      { label: 'Neuro-Quantus™', href: '/empower/neuro-quantus', desc: 'Compact efficient models' },
      { label: 'Φ-Federis™', href: '/empower/federis', desc: 'Privacy-preserving federated AI' },
      { label: 'EthicSense™', href: '/empower/ethicsense', desc: 'Explainable, ethical AI' },
      { label: 'G(π)-Forma™', href: '/empower/g-forma', desc: 'Generative intelligence' },
      { label: 'HoloSense™', href: '/empower/holosense', desc: 'Spatial perception' },
    ],
  },
  {
    id: 'solve',
    label: 'Solve',
    stage: 'Transformation',
    items: [
      { label: 'Intelligent Decision Hubs', href: '/solve/intelligent-decision-hubs' },
      { label: 'Enterprise Process Control', href: '/solve/enterprise-process-control' },
      { label: 'Smart Automation Systems', href: '/solve/smart-automation-systems' },
      { label: 'Scalable Security Frameworks', href: '/solve/scalable-security-frameworks' },
      { label: 'Advanced Risk Analytics', href: '/solve/advanced-risk-analytics' },
      { label: 'High-Performance Systems', href: '/solve/high-performance-systems' },
      { label: 'Predictive Supply Chains', href: '/solve/predictive-supply-chains' },
      { label: 'Compliance & Digital Trust', href: '/solve/compliance-digital-trust' },
      { label: 'Real-Time Intelligence Hub', href: '/solve/real-time-intelligence-hub' },
      { label: 'Blockchain Audit Models', href: '/solve/blockchain-audit-models' },
      { label: 'Hybrid Cloud Computing', href: '/solve/hybrid-cloud-computing' },
      { label: 'Autonomous Digital Core', href: '/solve/autonomous-digital-core' },
    ],
  },
  {
    id: 'transform',
    label: 'Transform',
    stage: 'Transformation',
    items: [
      { label: 'Digital Business Models', href: '/transform/digital-business-models' },
      { label: 'Autonomous Enterprise Grid', href: '/transform/autonomous-enterprise-grid' },
      { label: 'Human-Tech Synergy Hub', href: '/transform/human-tech-synergy-hub' },
      { label: 'Quantum-Driven Acceleration', href: '/transform/quantum-driven-acceleration' },
      { label: 'Zero-Trust Digital Security', href: '/transform/zero-trust-digital-security' },
      { label: 'Predictive Enterprise Strategy', href: '/transform/predictive-enterprise-strategy' },
      { label: 'ESG & Sustainable Systems', href: '/transform/esg-sustainable-systems' },
      { label: 'Cloud-Edge Convergence', href: '/transform/cloud-edge-convergence' },
      { label: 'Cyber-Resilient Networks', href: '/transform/cyber-resilient-networks' },
      { label: 'Self-Optimizing Ecosystems', href: '/transform/self-optimizing-ecosystems' },
      { label: 'Future Innovation Lab', href: '/transform/future-innovation-lab' },
      { label: 'Scalable Tech Frameworks', href: '/transform/scalable-tech-frameworks' },
    ],
  },
  {
    id: 'lead',
    label: 'Lead',
    stage: 'Outcomes',
    items: [
      { label: 'The Strategemist Edge', href: '/lead/the-strategemist-edge' },
      { label: 'Deep Tech Market Disruption', href: '/lead/deep-tech-market-disruption' },
      { label: 'Scaling & Growth Strategy', href: '/lead/scaling-growth-strategy' },
      { label: 'AI Governance & Compliance', href: '/lead/ai-governance-compliance' },
      { label: 'Future of Digital Systems', href: '/lead/future-of-digital-systems' },
      { label: 'Human-Centric Innovations', href: '/lead/human-centric-innovations' },
      { label: 'Resilient & Secure Networks', href: '/lead/resilient-secure-networks' },
      { label: 'Enterprise Evolution Hub', href: '/lead/enterprise-evolution-hub' },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    stage: 'Intelligence',
    items: [
      { label: 'AI Consulting', href: '/services/ai-consulting' },
      { label: 'AI Proof of Concept (PoC)', href: '/services/ai-proof-of-concept' },
      { label: 'Big Data Consulting', href: '/services/big-data-consulting' },
      { label: 'Generative AI Consulting', href: '/services/generative-ai-consulting' },
      { label: 'Business Intelligence Services', href: '/services/business-intelligence-services' },
      { label: 'Data Engineering Services', href: '/services/data-engineering-services' },
      { label: 'Databricks Deployment Services', href: '/services/databricks-deployment-services' },
      { label: 'AI Agents Development', href: '/services/ai-agents-development' },
      { label: 'Generative AI Development', href: '/services/generative-ai-development-company' },
      { label: 'LLMs Development', href: '/services/llm-development' },
      { label: 'Machine Learning Consulting', href: '/services/machine-learning-consulting' },
      { label: 'AI Integration Services', href: '/services/ai-integration-services' },
      { label: 'MLOps Consulting', href: '/services/mlops-consulting' },
    ],
  },
]

export const NAV_SIMPLE = [
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
]

/* ============================================================
   EMPOWER — 8 IP-platform products (homepage hero cards)
============================================================ */
export interface EmpowerProduct {
  id: string
  name: string
  tagline: string
  description: string
  icon: LucideIcon
  symbol: string
  patentRef?: string  // maps to a real patent id
  patentName?: string // the real patent short name
}

export const EMPOWER_PRODUCTS: EmpowerProduct[] = [
  {
    id: 'qprux',
    name: 'QµPrix™',
    symbol: 'Qµ',
    tagline: 'Quantum-inspired tensor compute',
    description:
      'Hyper-dimensional tensor encoding with logarithmic-scale traversal — reducing state-space complexity from O(2ⁿ) to O(log n) for enterprise data processing.',
    icon: Cpu,
    patentRef: 'quantum-computing',
    patentName: 'Quantum Computing',
  },
  {
    id: 'graphion',
    name: 'Σ-Graphion™',
    symbol: 'Σ',
    tagline: 'Quantum-enhanced graph intelligence',
    description:
      'A self-adaptive dynamic graph G=(V,E) embedded in a Hilbert space via quantum-enhanced variational embeddings (QE-VE) for fraud detection, precision medicine, and supply-chain optimization.',
    icon: Network,
    patentRef: 'contextual-intelligence',
    patentName: 'Contextual Intelligence',
  },
  {
    id: 'reinqlynix',
    name: 'ReinQlynix™',
    symbol: 'Q',
    tagline: 'Self-evolving reinforcement',
    description:
      'A self-evolving RL system with temporal-spatial learning and federated adaptation — dynamically adjusting to non-deterministic enterprise conditions without human intervention.',
    icon: InfinityIcon,
    patentRef: 'self-learning-frameworks',
    patentName: 'Self-Learning Frameworks',
  },
  {
    id: 'neuroquanus',
    name: 'Neuro-Quantus™',
    symbol: 'Ψ',
    tagline: 'Quantum-enhanced pattern recognition',
    description:
      'Quantum-enhanced neural networks with RL-driven refinement for adaptive pattern recognition — predicting complex, evolving patterns in high-dimensional data.',
    icon: Brain,
    patentRef: 'cognitive-pattern-engines',
    patentName: 'Cognitive Pattern Engines',
  },
  {
    id: 'federis',
    name: 'Φ-Federis™',
    symbol: 'Φ',
    tagline: 'Zero-exposure federated learning',
    description:
      'Zero-Knowledge Homomorphic Neural Encryption (ZKHNE) with zero-exposure secure enclaves — train across networks on encrypted data, never decrypted.',
    icon: ShieldCheck,
    patentRef: 'federated-intelligence-grid',
    patentName: 'Federated Intelligence Grid',
  },
  {
    id: 'ethicsense',
    name: 'EthicSense™',
    symbol: 'Ξ',
    tagline: 'Neuro-symbolic ethical validation',
    description:
      'Neuro-symbolic reasoning with multi-layer validation (rule-based + probabilistic + predictive simulation) — explainable, ethical, accountable decisions for regulated industries.',
    icon: Scale,
    patentRef: 'algorithmic-ethics-trust',
    patentName: 'Algorithmic Ethics & Trust',
  },
  {
    id: 'gforma',
    name: 'G(π)-Forma™',
    symbol: 'π',
    tagline: 'Generative workflow orchestration',
    description:
      'The Generative AI Core (101) that synthesizes orchestration blueprints with temporal reasoning and self-healing workflows — automating knowledge work end-to-end.',
    icon: Sparkles,
    patentRef: 'autonomous-knowledge-core',
    patentName: 'Autonomous Knowledge Core',
  },
  {
    id: 'holosense',
    name: 'HoloSense™',
    symbol: 'Δ',
    tagline: 'Spatial Perception Like Never Before',
    description:
      'Real-time awareness. Seamless interaction. A new dimension of AI-driven reality unlocked.',
    icon: Aperture,
  },
]

/* ============================================================
   INNOVATE — Visionary Innovators (10 cards) + 12 patents
============================================================ */
export const VISIONARY_INNOVATORS = [
  'Quantum Computing',
  'Genomic Data Intelligence',
  'Contextual Intelligence',
  'Sustainable Compute Models',
  'Self-Learning Frameworks',
  'Cognitive Pattern Engines',
  'Algorithmic Ethics & Trust',
  'Real-Time Optimization Hub',
  'Autonomous Knowledge Core',
  'Federated Intelligence Grid',
]

export interface Patent {
  name: string
  description: string
  icon: LucideIcon
}

export const PATENTS: Patent[] = [
  { name: 'Quantum Computing', description: 'Harness quantum-inspired algorithms to break computational barriers and unlock unprecedented performance.', icon: Atom },
  { name: 'Contextual Intelligence', description: 'Transform scattered data into deep, context-aware intelligence for smarter automation and real-time decisions.', icon: Eye },
  { name: 'Self-Learning Frameworks', description: 'Build AI systems that continuously evolve, self-optimize, and adapt to dynamic challenges without human intervention.', icon: Brain },
  { name: 'Cognitive Pattern Engines', description: 'Detect, analyze, and predict complex patterns with quantum-enhanced AI, revolutionizing data-driven decision-making.', icon: Sigma },
  { name: 'Federated Intelligence Grid', description: 'Empower secure, decentralized intelligence across networks with privacy-first AI collaboration at scale.', icon: Network },
  { name: 'Algorithmic Ethics & Trust', description: 'Set new ethical standards with AI-driven decision systems that ensure transparency, accountability, and trust.', icon: Scale },
  { name: 'Autonomous Knowledge Core', description: 'Automate complex workflows with generative AI, driving knowledge acceleration and intelligent operations.', icon: Database },
  { name: 'Sustainable Compute Models', description: 'Optimize energy efficiency in computing with AI-powered sustainability, reducing costs while boosting performance.', icon: Recycle },
  { name: 'Real-Time Optimization Hub', description: 'Enhance real-time process efficiency with integrated AI and quantum computing for superior operational intelligence.', icon: Gauge },
  { name: 'Genomic Data Intelligence', description: 'Decode biological data with AI to unlock breakthroughs in healthcare, agriculture, and life sciences.', icon: Microscope },
  { name: 'Blockchain Trust Systems', description: 'Establish immutable, decentralized trust systems that secure transactions and verify authenticity at scale.', icon: Fingerprint },
  { name: 'Cognitive Pattern AI', description: 'Detect anomalies and forecast complex behaviors with quantum-enhanced pattern recognition engines.', icon: Waves },
]

/* ============================================================
   SOLVE — 4 tabs
============================================================ */
export interface SolveTab {
  id: string
  name: string
  headline: string
  description: string
  services: { name: string; desc: string; icon: LucideIcon }[]
}

export const SOLVE_TABS: SolveTab[] = [
  {
    id: 'intelligence',
    name: 'Intelligence',
    headline: 'Decisions in milliseconds, not weeks.',
    description:
      'Real-time intelligence and adaptive automation that compress the time between signal and action. One Fortune 100 client cut strategic-execution latency 5X using this stack — from weeks to hours.',
    services: [
      { name: 'Intelligent Decision Hubs', desc: 'Decision systems that ingest, model, and act in under 40ms p99.', icon: Brain },
      { name: 'Real-Time Intelligence Hub', desc: 'Streaming pipelines with sub-second operational awareness.', icon: Activity },
      { name: 'Smart Automation Systems', desc: 'Self-healing automation that adapts when upstream changes.', icon: Workflow },
    ],
  },
  {
    id: 'security',
    name: 'Security',
    headline: 'Zero-trust, mathematically — not marketing.',
    description:
      'Zero-Knowledge Homomorphic Neural Encryption (ZKHNE) lets models train on encrypted data, never decrypted. One global tech leader cut threat vulnerabilities 80% with this stack.',
    services: [
      { name: 'Scalable Security Frameworks', desc: 'Zero-trust architectures mapped to NIST 800-207 + ISO 27001.', icon: Lock },
      { name: 'Compliance & Digital Trust', desc: 'Policy-as-code with auto-generated audit evidence packs.', icon: ShieldCheck },
      { name: 'Blockchain Audit Models', desc: 'Tamper-proof, immutable execution trails via cryptographic verification.', icon: Fingerprint },
    ],
  },
  {
    id: 'performance',
    name: 'Performance',
    headline: 'Scales to 10M+ transactions without breaking.',
    description:
      'High-performance systems and predictive intelligence that hold throughput when demand spikes. A multinational 3PL cut supply-chain disruptions 65% using our predictive-intelligence stack.',
    services: [
      { name: 'High-Performance Systems', desc: 'Engineered for throughput, latency, and SLO-grade reliability.', icon: Gauge },
      { name: 'Predictive Supply Chains', desc: 'Forecast disruptions days ahead — reroute before they happen.', icon: TrendingUp },
      { name: 'Enterprise Process Control', desc: 'End-to-end orchestration with bounded, governed workflows.', icon: GitBranch },
    ],
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    headline: 'Self-optimizing core. Compounding efficiency.',
    description:
      'Hybrid cloud, advanced risk analytics, and a self-healing digital core that tunes itself to demand. Energy-efficient workload optimization (Patent 8) cuts compute cost without sacrificing latency.',
    services: [
      { name: 'Hybrid Cloud Computing', desc: 'Multi-cloud + on-prem orchestration with environment parity.', icon: Cloud },
      { name: 'Advanced Risk Analytics', desc: 'Quantify, predict, and mitigate enterprise risk in real time.', icon: LineChart },
      { name: 'Autonomous Digital Core', desc: 'Self-healing core infrastructure that detects + corrects.', icon: Server },
    ],
  },
]

/* ============================================================
   TRANSFORM — 4 tabs
============================================================ */
export interface TransformTab {
  id: string
  name: string
  headline: string
  description: string
  services: { name: string; desc: string; icon: LucideIcon }[]
}

export const TRANSFORM_TABS: TransformTab[] = [
  {
    id: 'evolution',
    name: 'Evolution',
    headline: 'Reimagine Business. Redefine Possibilities.',
    description:
      'The future belongs to enterprises that adapt and evolve. Strategemist empowers organizations with digital business models, autonomous enterprise grids, and human-tech synergy, creating new frontiers for growth and transformation.',
    services: [
      { name: 'Digital Business Models', desc: 'New operating models for the digital era.', icon: Boxes },
      { name: 'Human-Tech Synergy Hub', desc: 'Amplify human capability with intelligent systems.', icon: Users },
      { name: 'Autonomous Enterprise Grid', desc: 'Self-orchestrating enterprise operations.', icon: Network },
    ],
  },
  {
    id: 'acceleration',
    name: 'Acceleration',
    headline: 'Break Barriers. Drive Exponential Growth.',
    description:
      'Speed and innovation fuel competitive advantage. With quantum-driven acceleration, future innovation labs, and scalable tech frameworks, Strategemist enables enterprises to move faster, scale smarter, and lead markets.',
    services: [
      { name: 'Quantum-Driven Acceleration', desc: 'Quantum-inspired compute for breakthrough speed.', icon: Atom },
      { name: 'Future Innovation Lab', desc: 'A sandbox for next-gen deep-tech experiments.', icon: Lightbulb },
      { name: 'Scalable Tech Frameworks', desc: 'Modular architectures that scale with you.', icon: Layers },
    ],
  },
  {
    id: 'resilience',
    name: 'Resilience',
    headline: 'Secure. Sustainable. Future-Proof.',
    description:
      'In a world of cyber threats and evolving risks, resilience is non-negotiable. Strategemist builds zero-trust security, cyber-resilient networks, and ESG-driven sustainable systems to protect and strengthen enterprises for the long run.',
    services: [
      { name: 'Zero-Trust Digital Security', desc: 'Never trust, always verify—by design.', icon: Lock },
      { name: 'Cyber-Resilient Networks', desc: 'Networks that withstand and recover fast.', icon: ShieldCheck },
      { name: 'ESG & Sustainable Systems', desc: 'Sustainable, measurable, reportable impact.', icon: Recycle },
    ],
  },
  {
    id: 'optimization',
    name: 'Optimization',
    headline: 'Intelligent Infrastructure for Limitless Potential',
    description:
      'Enterprise success lies in precision and adaptability. Strategemist delivers predictive enterprise strategies, cloud-edge convergence, and self-optimizing ecosystems, ensuring businesses operate smarter, faster, and more efficiently.',
    services: [
      { name: 'Predictive Enterprise Strategy', desc: 'Strategy informed by forward-looking models.', icon: Target },
      { name: 'Cloud-Edge Convergence', desc: 'Compute where the data lives—edge to cloud.', icon: Cloud },
      { name: 'Self-Optimizing Ecosystems', desc: 'Systems that tune themselves to demand.', icon: Activity },
    ],
  },
]

/* ============================================================
   SECURITY GRID — 9 cards
============================================================ */
export interface SecurityCard {
  title: string
  standards: string
  description: string
}

export const SECURITY_GRID: SecurityCard[] = [
  { title: 'Cybersecurity Governance & Risk Management', standards: 'ISO 27001 · ISO 27701 · ISO 22301', description: 'AI-driven risk governance, quantum-resilient encryption, and automated compliance.' },
  { title: 'AI, Industrial & OT Cyber Resilience', standards: 'IEC 62443 · NIST 800-82 · Autonomous SOC', description: 'Zero-trust ICS/SCADA protection, cryptographic segmentation, and AI-native anomaly detection.' },
  { title: 'Cloud, Edge & Confidential Computing', standards: 'CSA STAR · FedRAMP · Confidential AI', description: 'End-to-end encrypted cloud workloads, confidential AI processing, and sovereign cloud security.' },
  { title: 'Financial & Digital Asset Security', standards: 'PCI DSS · FIPS 140-3 · Blockchain Security', description: 'Post-quantum encryption, AI-driven fraud analytics, and privacy-preserving transactions.' },
  { title: 'Threat Intelligence & Adversarial Defense', standards: 'NIST 800-53 · MITRE ATT&CK · ATT&CK for ICS', description: 'AI-powered cyber threat intelligence, adversarial emulation, and real-time attack disruption.' },
  { title: 'Government & Defense-Grade Cybersecurity', standards: 'CMMC · SOC 2 Type II · NIST 800-171 · NATO NIAP', description: 'Military-grade security, supply-chain hardening, and continuous authorization frameworks.' },
  { title: 'Data Privacy & AI Security', standards: 'GDPR · HIPAA · ISO 42001', description: 'Federated privacy controls, AI/ML risk management, and zero-trust data protection.' },
  { title: 'Zero Trust & Next-Gen Security Architectures', standards: 'NIST 800-207 · CIS Controls · PQAuth', description: 'Post-quantum authentication, decentralized identity, and multi-domain cyber deception.' },
  { title: 'Quantum & Future-Ready Security', standards: 'CSA STAR · FedRAMP · Confidential AI', description: 'Quantum-safe encryption, secure multiparty computation, and AI-powered cryptographic resilience.' },
]

/* ============================================================
   LEAD — 8 cards
============================================================ */
export const LEAD_CARDS = [
  { title: 'The Strategemist Edge', description: '11 patents, 8 platforms, one execution system. We don\'t sell hours — we ship outcomes, with skin in the game.' },
  { title: 'Deep Tech Market Disruption', description: 'Quantum-inspired compute (O(2ⁿ)→O(log n)), zero-exposure federated learning, self-healing workflows. The IP competitors don\'t have.' },
  { title: 'Scaling & Growth Strategy', description: 'From pilot to platform in months, not years. Reference architectures + a Prime PMO compress time-to-value by 40–60%.' },
  { title: 'AI Governance & Compliance', description: 'Policy-as-code, audit-ready evidence generated by the system itself. ISO/IEC 42001 + NIST AI RMF aligned — not bolted on.' },
  { title: 'Future of Digital Systems', description: 'AI-native, quantum-powered, self-optimizing infrastructure. We architect the rails your next decade runs on.' },
  { title: 'Human-Centric Innovation', description: 'Human-in-the-loop where judgment matters; autonomous where it doesn\'t. Technology that augments people, not replaces them.' },
  { title: 'Resilient & Secure Networks', description: 'Zero-trust by design, ZKHNE-encrypted, defense-grade. One client cut threat vulnerabilities 80% with this stack.' },
  { title: 'Enterprise Evolution Hub', description: 'Productized delivery lanes retire ad-hoc projects. Your capability compounds — and stays yours, no vendor lock-in.' },
]

/* ============================================================
   ABOUT — narrative, 3 pillars, differential, governance
============================================================ */
export const ABOUT = {
  eyebrow: 'About Strategemist',
  headline: 'Orchestrated Intelligence → Measurable Outcomes',
  intro1:
    'Strategemist unites data, AI, and delivery excellence to help enterprises move from insight to impact at boardroom speed. We operate a unified execution system—codified patterns, policy-enforced pipelines, and measurable value streams—to close the gap between strategy and shipped results.',
  intro2:
    'The world doesn’t lack AI platforms or digital programs—it lacks disciplined systems that convert strategy into measurable progress. Strategemist was founded to restore that discipline: to bring engineering precision, ethical governance, and quantifiable performance to every enterprise transformation. We exist to make technology accountable—to business, to people, and to outcomes that endure.',
  mission: 'insight → implementation → impact',
  pillars: [
    {
      name: 'Data Foundations',
      sub: 'The Architecture of Trust',
      icon: Database,
      intro: 'Before intelligence, there must be integrity. We design lakehouse-centric data estates that treat data as a product and governance as code.',
      points: [
        'Medallion architecture (Bronze/Silver/Gold) on Databricks or cloud-native analogs',
        'Data contracts & quality: schema contracts at ingress, anomaly detection on freshness/volume',
        'Catalog & lineage: column-level lineage, purpose-based access, per-use audit trails',
        'Privacy & security: fine-grained ABAC/RBAC, tokenization, differential privacy',
        'Interoperability: semantic layers with metric definitions under version control',
      ],
      outcome: 'A single, defensible source of truth with provable data reliability and accelerated analytics re-use.',
    },
    {
      name: 'Applied AI & Automation',
      sub: 'Intelligence in Motion',
      icon: Bot,
      intro: 'We move AI from the lab to the line. Solutions are embedded into workflows with explicit guardrails, observability, and financial accountability.',
      points: [
        'RAG with vector stores, document provenance, and policy filters',
        'Task-specific AI Agents with bounded autonomy and human-in-the-loop checkpoints',
        'Classical ML for prediction, optimization, and forecasting with feature stores',
        'MLOps at scale: CI/CD for models and prompts, shadow/canary/blue-green releases',
        'Evaluation & safety: benchmark harnesses, red-teaming, prompt firewalls',
        'ROI discipline: every AI artifact ships with a benefit hypothesis and value dashboards',
      ],
      outcome: 'AI that is auditable, governable, and economically positive—measured in throughput gained and cycle time reduced.',
    },
    {
      name: 'Secure, Reliable Delivery',
      sub: 'The Engine of Confidence',
      icon: ShieldCheck,
      intro: 'Innovation must sit on resilient rails. We embed Cloud, SRE, and DevSecOps as first principles.',
      points: [
        'Reliability engineering: SLO/SLI definitions, error budgets, chaos testing',
        'Security by design: zero-trust networking, SBOM/attestation, SAST/DAST/SCA in CI',
        'Platform engineering: golden paths, paved-road IaC (Terraform/Crossplane), env parity',
        'Compliance & auditability: auto-generated evidence packs, immutable logs, data residency',
      ],
      outcome: 'Systems that are shipping-ready, regulator-ready, and board-ready—without sacrificing velocity.',
    },
  ],
  differential: [
    {
      name: 'Platform-Led Execution',
      description: 'Reusable reference architectures, telemetry-rich pipelines, and a Prime PMO with stage-gate rigor. We retire ad-hoc projects in favor of productized delivery lanes.',
    },
    {
      name: 'Patented AI Frameworks & Accelerators',
      description: 'Proprietary patterns that de-risk integration, compress time-to-value, and formalize guardrails—codified as blueprints, not slides.',
    },
    {
      name: 'Governance by Design, Trust by Default',
      description: 'Policy-as-code, data lineage, and audit-ready evidence packs are produced by the system itself, not assembled after the fact.',
    },
    {
      name: 'Unified Alliance Model',
      description: 'A curated network of deep specialists under a single quality bar—one accountability spine, zero vendor lock-in.',
    },
  ],
  governance:
    'Trust is engineered, not asserted. Our operating model aligns to ISO/IEC 42001 for AI management and the NIST AI Risk Management Framework, with privacy-by-design, least-privilege access, and full provenance across data, prompts, models, and decisions. Evidence is generated automatically by pipelines; compliance is continuous, not periodic.',
}

/* ============================================================
   TEAM — 16 members
============================================================ */
export interface TeamMember {
  id: number
  name: string
  title: string
  bio: string
  linkedin?: string
  group: 'Leadership' | 'Advisory'
}

export const TEAM: TeamMember[] = [
  { id: 1, name: 'Ravi Shanker', title: 'Founder & CEO', group: 'Leadership', bio: 'Founder & CEO of Strategemist, Certified Independent Director, and holder of a Master’s in International Business—architects platform-led execution systems for global enterprises.', linkedin: 'https://www.linkedin.com/in/strategemist/' },
  { id: 2, name: 'Ali Faraj', title: 'Chairman of the Board', group: 'Leadership', bio: 'Former Global CTO of Cognizant, leading a division that drove over 30% revenue growth and spearheaded the Cognizant Neuro Generative AI platform. 25+ years at IBM, Verizon, Thomson Reuters, and DXC.', linkedin: 'https://www.linkedin.com/in/alifaraj' },
  { id: 3, name: 'Dr. Ausaf Sayeed', title: 'Chief Business Officer', group: 'Leadership', bio: 'Seasoned diplomat and former Secretary in India’s Ministry of External Affairs with a distinguished 34-year career across international markets.', linkedin: 'https://www.linkedin.com/in/ambassador-dr-ausaf-sayeed/' },
  { id: 4, name: 'Dr. Supriya Kummamuru', title: 'Global Chief Technology Officer', group: 'Leadership', bio: 'Former CTO for TCS Middle East & Africa. Awarded a US Patent for context-understanding systems. 25-year TCS veteran and Principal Innovation Evangelist.', linkedin: 'https://www.linkedin.com/in/supriyakum' },
  { id: 5, name: 'Dr. Partha Majumdar', title: 'Chief Innovation Officer', group: 'Leadership', bio: 'Former VP of Software Engineering at JPMorgan Chase & Co., leading architectural transformations and embedded machine learning systems.', linkedin: 'https://www.linkedin.com/in/parthamajumdar6369' },
  { id: 6, name: 'Ratnakar Basavaraju', title: 'President & Growth Leader', group: 'Leadership', bio: 'Senior Technology President with 16+ years architecting enterprise-grade Oracle solutions and driving large-scale transformation programs.', linkedin: 'https://www.linkedin.com/in/ratnakar-basavaraju-132593b' },
  { id: 7, name: 'Etibar Aliyev', title: 'Chief AI Officer', group: 'Leadership', bio: 'Chief AI Officer at Strategemist and PhD in Computer Science with specialized expertise in neural networks and pattern recognition.', linkedin: 'https://www.linkedin.com/in/e-aliev' },
  { id: 8, name: 'Mojeed Abisiga', title: 'Chief Data Officer', group: 'Leadership', bio: 'CEO/Co-Founder of DataGlobal Hub, an award-winning AI media & EdTech platform recognized as “Technology News Platform of the Year.”', linkedin: 'https://www.linkedin.com/in/mojeed-abisiga' },
  { id: 9, name: 'Srinivas Babu', title: 'Chief Solutions Officer', group: 'Leadership', bio: 'CTO at Nordic Gulf Partners specializing in building B2B self-service AI agent platforms for enterprise clients.', linkedin: 'https://www.linkedin.com/in/srinivas-achyutuni-59569737' },
  { id: 10, name: 'Dr. Laggani Srinivas', title: 'Chief Strategy Officer', group: 'Leadership', bio: 'Global business leader with 20+ years conducting business across 24 countries in Africa, Europe, APAC, and the USA.', linkedin: 'https://www.linkedin.com/in/lagganisrinivas' },
  { id: 11, name: 'Pranay Siddharth', title: 'GCC Growth Leader', group: 'Leadership', bio: 'IIM Bangalore MBA with 12+ years in government liaison, investment, and GCC growth strategy.', linkedin: 'https://www.linkedin.com/in/pranaysk' },
  { id: 12, name: 'Naveen Kumar', title: 'Chief Product Innovation Leader', group: 'Leadership', bio: 'Co-Founder of Gloify with 17+ years turning product ideas into scalable, market-leading products.', linkedin: 'https://www.linkedin.com/in/naveenkr59' },
  { id: 13, name: 'Gary Cokins', title: 'Chief Advisor for EPM', group: 'Advisory', bio: 'Internationally recognized expert in performance management and advanced analytics with 40+ years of experience.', linkedin: 'https://www.linkedin.com/in/garycokins' },
  { id: 14, name: 'Gregory Wilson', title: 'Advisory — AI Governance', group: 'Advisory', bio: 'Seasoned cybersecurity executive and board director with 25+ years, including CISO roles at Fortune 500 companies.', linkedin: 'https://www.linkedin.com/in/gregorykeithwilson' },
  { id: 15, name: 'Kathleen Moriarty', title: 'Advisory — Cyber Security', group: 'Advisory', bio: 'Internationally recognized cybersecurity expert who served two terms as IETF Security Area Director, shaping global internet security standards.', linkedin: 'https://www.linkedin.com/in/kathleen-moriarty-022a062' },
  { id: 16, name: 'Raj Kapoor', title: 'Advisory — Blockchain', group: 'Advisory', bio: 'Founder & CEO of India Blockchain Alliance (IBA), the largest Indian emerging technology think tank.', linkedin: 'https://www.linkedin.com/in/indieblock' },
]

/* ============================================================
   CASE STUDIES — 3
============================================================ */
export interface CaseStudy {
  id: string
  title: string
  industry: string
  narrative: string
  challenge: string
  solution: string
  results: string[]
  metric: string
  icon: LucideIcon
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    title: '5X Faster Strategic Execution at a Fortune 100 Enterprise',
    industry: 'Fortune 100 Enterprise',
    narrative:
      'A Fortune 100 company revolutionized its decision-making process with Strategemist, achieving 5X faster strategic execution. Before Strategemist, siloed data and slow workflows hampered progress. By leveraging AI-driven insights, automated workflows, and predictive analytics, the company streamlined operations, ensuring agility and efficiency.',
    challenge: 'Siloed data and slow workflows hampered progress before Strategemist.',
    solution: 'AI-driven insights, automated workflows, and predictive analytics that streamlined operations for agility and efficiency.',
    results: ['5X faster strategic execution', '30% higher efficiency', 'Seamless cross-functional collaboration', 'Rapid execution of strategic initiatives'],
    metric: '5X',
    icon: Rocket,
  },
  {
    id: 'cs2',
    title: '80% Threat Vulnerability Reduction for a Global Tech Leader',
    industry: 'Global Tech Leader',
    narrative:
      'A global tech leader transformed its cybersecurity strategy with Strategemist, reducing 80% of threat vulnerabilities. Previously hindered by fragmented security protocols and slow threat detection, the company adopted AI-driven threat intelligence, automated risk management, and predictive analytics.',
    challenge: 'Fragmented security protocols and slow threat detection.',
    solution: 'AI-driven threat intelligence, automated risk management, and predictive analytics—a proactive approach that streamlined security operations.',
    results: ['80% reduction in threat vulnerabilities', 'Faster response times', 'Enhanced protection', 'Seamless compliance with global security standards'],
    metric: '80%',
    icon: ShieldCheck,
  },
  {
    id: 'cs3',
    title: '65% Fewer Supply-Chain Disruptions for a Multinational',
    industry: 'Multinational Supply Chain',
    narrative:
      'A multinational supply chain leader minimized disruptions by 65% with Strategemist’s predictive intelligence. Previously challenged by unforeseen delays and inefficiencies, the company leveraged AI-driven forecasting, real-time risk assessment, and automated workflow optimizations.',
    challenge: 'Unforeseen delays and inefficiencies in the supply chain.',
    solution: 'AI-driven forecasting, real-time risk assessment, and automated workflow optimizations—enabling proactive issue resolution and seamless global coordination.',
    results: ['65% reduction in disruptions', 'Greater supply chain resilience', 'Improved operational efficiency', 'Ability to anticipate challenges and act decisively'],
    metric: '65%',
    icon: TrendingUp,
  },
]

/* ============================================================
   THE STRATEGEMIST EDGE — methodology
============================================================ */
export const EDGE = {
  hero: 'The Strategemist Edge: Engineering Intelligence, Performance & Security for Enterprise Transformation',
  sub: 'Building the Future of Enterprises with Proven Deep-Tech Innovation',
  intro:
    'The real edge in enterprise transformation lies in intelligent system design, secure architectures, and scalable execution frameworks. Strategemist integrates AI, cloud, security, and automation to optimize operations, accelerate decision-making, and ensure enterprise-wide resilience.',
  cards: [
    { title: 'AI-Augmented Decision Support', description: 'Real-time data intelligence optimizes strategic choices and risk assessments.' },
    { title: 'Adaptive, Scalable Cloud & Infrastructure', description: 'Optimized cloud-native solutions improve flexibility, security, and cost efficiency.' },
    { title: 'Secure, High-Performance IT Systems', description: 'Zero-trust security, encryption, and compliance-driven architectures protect business-critical operations.' },
    { title: 'Intelligent Process Automation', description: 'Task orchestration and workflow intelligence enhance efficiency without disrupting existing IT.' },
    { title: 'Data-Driven Scalability & Performance Tuning', description: 'Resource optimization frameworks align IT performance with business goals.' },
    { title: 'Practical Innovation Models', description: 'Integrated, modular solutions designed for real-world enterprise transformation.' },
  ],
  methodology: [
    { step: '01', title: 'IT & Business Performance Assessment', description: 'AI-driven analytics evaluate IT infrastructure gaps, inefficiencies, and risks.' },
    { step: '02', title: 'Scalable Cloud & Infrastructure Roadmap', description: 'Hybrid cloud models align with business growth plans.' },
    { step: '03', title: 'Intelligent Security & Compliance Integration', description: 'Zero-trust security frameworks mitigate cyber risks and enforce compliance.' },
    { step: '04', title: 'AI-Optimized Automation & Process Efficiency', description: 'Workflow intelligence eliminates bottlenecks and accelerates execution.' },
    { step: '05', title: 'Performance Tuning & Cost Optimization', description: 'AI-driven infrastructure optimization reduces cloud and IT overhead.' },
    { step: '06', title: 'Continuous Monitoring & IT Evolution', description: 'Strategemist ensures long-term business agility with adaptable IT frameworks.' },
  ],
}

/* ============================================================
   SERVICES — 13 services in 4 groups
============================================================ */
export interface Service {
  name: string
  desc: string
  icon: LucideIcon
}
export interface ServiceGroup {
  group: string
  services: Service[]
}

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    group: 'AI Strategy',
    services: [
      { name: 'AI Consulting', desc: 'End-to-end AI strategy, roadmap, and operating model design for measurable ROI.', icon: Brain },
      { name: 'AI Proof of Concept (PoC)', desc: 'De-risked, eval-driven pilots that prove value before you scale.', icon: Lightbulb },
      { name: 'Big Data Consulting', desc: 'Lakehouse architectures, governance, and analytics at enterprise scale.', icon: Database },
      { name: 'Generative AI Consulting', desc: 'Responsible GenAI strategy with guardrails, evaluation, and ROI discipline.', icon: Sparkles },
    ],
  },
  {
    group: 'Data & BI',
    services: [
      { name: 'Business Intelligence Services', desc: 'Executive-grade dashboards, semantic layers, and metric governance.', icon: LineChart },
      { name: 'Data Engineering Services', desc: 'Medallion data pipelines, contracts, and lineage at production grade.', icon: GitBranch },
      { name: 'Databricks Deployment Services', desc: 'Databricks landing zones, Unity Catalog, and Delta Live Tables.', icon: Server },
    ],
  },
  {
    group: 'Applied AI',
    services: [
      { name: 'AI Agents Development', desc: 'Bounded, tool-using agents with human-in-the-loop and policy guardrails.', icon: Bot },
      { name: 'Generative AI Development', desc: 'RAG, fine-tuning, and agentic systems shipped to production.', icon: Sparkles },
      { name: 'LLMs Development', desc: 'Domain-tuned foundation models with evals and rollback.', icon: Brain },
      { name: 'Machine Learning Consulting', desc: 'Classical ML for prediction, optimization, and forecasting.', icon: Activity },
    ],
  },
  {
    group: 'Delivery & Ops',
    services: [
      { name: 'AI Integration Services', desc: 'Wire AI into your systems—APIs, event streams, and workflows.', icon: CircuitBoard },
      { name: 'MLOps Consulting', desc: 'CI/CD for models and prompts, registries, shadow/canary releases.', icon: Workflow },
    ],
  },
]

/* ============================================================
   FOOTER — 5 nav columns
============================================================ */
export const FOOTER_COLUMNS: { title: string; items: string[] }[] = [
  { title: 'Innovate', items: ['The Patent Vault', 'Quantum Computing', 'Contextual Intelligence', 'Self-Learning Frameworks', 'Cognitive Pattern Engines', 'Federated Intelligence Grid', 'Algorithmic Ethics & Trust', 'Autonomous Knowledge Core', 'Sustainable Compute Models', 'Real-Time Optimization Hub', 'Genomic Data Intelligence', 'Blockchain Trust Systems'] },
  { title: 'Solve', items: ['Intelligent Decision Hubs', 'Enterprise Process Control', 'Smart Automation Systems', 'Scalable Security Frameworks', 'Advanced Risk Analytics', 'High-Performance Systems', 'Predictive Supply Chains', 'Compliance & Digital Trust', 'Real-Time Intelligence Hub', 'Blockchain Audit Models', 'Hybrid Cloud Computing', 'Autonomous Digital Core'] },
  { title: 'Transform', items: ['Digital Business Models', 'Autonomous Enterprise Grid', 'Human-Tech Synergy Hub', 'Quantum-Driven Acceleration', 'Zero-Trust Digital Security', 'Predictive Enterprise Strategy', 'ESG & Sustainable Systems', 'Cloud-Edge Convergence', 'Cyber-Resilient Networks', 'Self-Optimizing Ecosystems', 'Future Innovation Lab', 'Scalable Tech Frameworks'] },
  { title: 'Lead', items: ['The Strategemist Edge', 'Deep Tech Market Disruption', 'Scaling & Growth Strategy', 'AI Governance & Compliance', 'Future of Digital Systems', 'Human-Centric Innovations', 'Resilient & Secure Networks', 'Enterprise Evolution Hub'] },
  { title: 'Empower', items: ['QµPrix™', 'Σ-Graphion™', 'ReinQlynix™', 'Neuro-Quantus™', 'Φ-Federis™', 'EthicSense™', 'G(π)-Forma™', 'HoloSense™'] },
]
