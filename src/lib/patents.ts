/* ============================================================
   Real Strategemist patent data — extracted from the uploaded
   Form 2 complete specifications (applicant: Strategemist Global
   Private Limited, Hyderabad). 8 patents, real titles, real
   technical vocabulary, real module architectures (from the
   Figure descriptions in the specs).
   ============================================================ */

export interface RealPatent {
  id: string
  shortName: string        // the Empower/Innovate page it maps to
  title: string            // real patent title
  field: string            // field of invention (1 line)
  problem: string          // the problem it solves (from background)
  innovation: string       // the key innovation (1 paragraph)
  modules: { ref: string; name: string }[]  // real numbered modules from Figure 1
  keyTerms: string[]       // real technical vocabulary
  category: 'Compute' | 'Intelligence' | 'Trust' | 'Automation'
}

export const REAL_PATENTS: RealPatent[] = [
  {
    id: 'quantum-computing',
    shortName: 'Quantum Computing',
    title: 'A System and Method for Optimizing Computational Workflows Using Quantum-Inspired Algorithms in Enterprise Data Processing',
    field: 'Quantum-inspired computation for enterprise data processing.',
    problem:
      'Classical workflows struggle with high-dimensional data — state-space exploration grows as O(2ⁿ), making complex decision-making computationally prohibitive at enterprise scale.',
    innovation:
      'A quantum-inspired computational system that encodes multi-source data into hyper-dimensional tensor representations, preserving interrelationships. A computational core performs multi-dimensional tensor contraction with logarithmic-scale probabilistic traversal — reducing state-space exploration complexity from O(2ⁿ) to O(log n). Self-adaptive computational architectures deploy dynamically reconfigurable neural processing, adjusting computational pathways in response to changing enterprise workloads.',
    modules: [
      { ref: '100', name: 'Tensor encoding module' },
      { ref: '101', name: 'Computational core (tensor contraction)' },
      { ref: '102', name: 'Logarithmic-scale probabilistic explorer' },
      { ref: '103', name: 'Self-adaptive reconfiguration engine' },
      { ref: '104', name: 'Output decoder' },
    ],
    keyTerms: ['tensor encoding', 'hyper-dimensional representations', 'tensor contraction', 'O(2ⁿ) → O(log n)', 'self-adaptive architecture', 'quantum-inspired'],
    category: 'Compute',
  },
  {
    id: 'contextual-intelligence',
    shortName: 'Contextual Intelligence',
    title: 'A Method for Contextual Intelligence Processing Using Graph Neural Networks',
    field: 'Contextual intelligence via hybrid quantum-classical graph neural networks.',
    problem:
      'Scattered, heterogeneous data lacks relational context — traditional systems process data points in isolation, missing the connections that drive real-world decisions.',
    innovation:
      'A method that constructs a self-adaptive dynamic graph G=(V,E) where each node V and edge E stores multi-dimensional contextual attributes encoded as tensors. The graph is embedded into a hybrid quantum-classical high-dimensional Hilbert space using quantum-enhanced variational embeddings (QE-VE). Graph neural networks with quantum-enhanced attention process the embedding to deliver scalable, deterministic, adaptive contextual intelligence for fraud detection, precision medicine, supply-chain optimization, and smart infrastructure.',
    modules: [
      { ref: '200', name: 'Self-adaptive dynamic graph constructor' },
      { ref: '201', name: 'Tensor attribute encoder' },
      { ref: '202', name: 'QE-VE Hilbert space embedder' },
      { ref: '203', name: 'Quantum-enhanced GNN with attention' },
      { ref: '204', name: 'Contextual output layer' },
    ],
    keyTerms: ['self-adaptive dynamic graph G=(V,E)', 'QE-VE (quantum-enhanced variational embeddings)', 'Hilbert space', 'graph neural networks', 'tensor attributes', 'quantum-enhanced attention'],
    category: 'Intelligence',
  },
  {
    id: 'self-learning-frameworks',
    shortName: 'Self-Learning Frameworks',
    title: 'System for Adaptive Learning Using Reinforcement Optimization and Self-Evolving Frameworks in Enterprises',
    field: 'Adaptive learning via reinforcement optimization and self-evolving frameworks.',
    problem:
      'Static AI systems cannot adapt to changing enterprise conditions — they degrade as the environment drifts, requiring costly manual retraining.',
    innovation:
      'A self-evolving reinforcement learning system enabling real-time decision-making, workflow optimization, and intelligent resource orchestration across distributed enterprise architectures. Leveraging probabilistic models, temporal-spatial learning, and federated AI, the system dynamically adapts to changing environments, high-dimensional datasets, and non-deterministic enterprise conditions — ensuring scalability, efficiency, and computational integrity without human intervention.',
    modules: [
      { ref: '300', name: 'Reinforcement learning core' },
      { ref: '301', name: 'Temporal-spatial learning module' },
      { ref: '302', name: 'Probabilistic model engine' },
      { ref: '303', name: 'Federated adaptation layer' },
      { ref: '304', name: 'Self-evolution controller' },
    ],
    keyTerms: ['reinforcement optimization', 'self-evolving', 'temporal-spatial learning', 'federated AI', 'probabilistic models', 'non-deterministic adaptation'],
    category: 'Intelligence',
  },
  {
    id: 'cognitive-pattern-engines',
    shortName: 'Cognitive Pattern Engines',
    title: 'A Method for Adaptive Pattern Recognition Using Quantum-Enhanced Neural Networks and Reinforcement Learning',
    field: 'Quantum-enhanced adaptive pattern recognition.',
    problem:
      'Conventional pattern recognition fails on complex, evolving patterns in high-dimensional data — it can detect but cannot predict reliably.',
    innovation:
      'A quantum-enhanced neural network with reinforcement learning for adaptive pattern recognition. The system combines quantum-enhanced feature extraction with RL-driven refinement, enabling it to detect, analyze, and predict complex patterns with quantum-enhanced accuracy — revolutionizing data-driven decision-making in fraud, anomaly detection, and behavioral forecasting.',
    modules: [
      { ref: '400', name: 'Quantum-enhanced feature extractor' },
      { ref: '401', name: 'Adaptive neural network' },
      { ref: '402', name: 'RL refinement module' },
      { ref: '403', name: 'Pattern prediction engine' },
    ],
    keyTerms: ['quantum-enhanced neural networks', 'reinforcement learning', 'adaptive pattern recognition', 'feature extraction', 'behavioral forecasting'],
    category: 'Intelligence',
  },
  {
    id: 'federated-intelligence-grid',
    shortName: 'Federated Intelligence Grid',
    title: 'A System for Distributed Intelligence Using Federated Learning in Enterprise Networks',
    field: 'Federated learning with zero-exposure secure enclaves for distributed intelligence.',
    problem:
      'Training AI across enterprise silos requires centralizing sensitive data — violating privacy, sovereignty, and compliance constraints.',
    innovation:
      'A quantum-enhanced federated learning system for secure, scalable, autonomous distributed intelligence. A plurality of computational nodes, each equipped with zero-exposure secure enclaves, enables direct training on encrypted data without decryption. A Zero-Knowledge Homomorphic Neural Encryption (ZKHNE) module processes encrypted model parameters directly within secure enclaves — intelligence without boundaries, privacy without compromise.',
    modules: [
      { ref: '500', name: 'Zero-exposure secure enclaves' },
      { ref: '501', name: 'ZKHNE (Zero-Knowledge Homomorphic Neural Encryption)' },
      { ref: '502', name: 'Federated aggregation layer' },
      { ref: '503', name: 'Autonomous coordination engine' },
    ],
    keyTerms: ['ZKHNE (Zero-Knowledge Homomorphic Neural Encryption)', 'zero-exposure secure enclaves', 'federated learning', 'homomorphic encryption', 'encrypted-data training', 'distributed intelligence'],
    category: 'Intelligence',
  },
  {
    id: 'algorithmic-ethics-trust',
    shortName: 'Algorithmic Ethics & Trust',
    title: 'Method for Ethical Decision Processing Using Neural Networks and Multi-Layer Algorithmic Validation Mechanisms',
    field: 'Ethical AI via neural networks + multi-layer validation.',
    problem:
      'AI decisions lack explainability and ethical grounding — biased, opaque models create risk in regulated and high-stakes environments.',
    innovation:
      'A neural network with attention mechanisms and neuro-symbolic reasoning processes high-dimensional input vectors with contextual relevance. Multi-layer validation frameworks — rule-based, probabilistic, and predictive simulation layers — refine decision vectors to align with encoded ethical principles. Federated learning and meta-learning feedback improve adaptability while maintaining confidentiality. Applicable across healthcare, finance, autonomous systems, and resource allocation.',
    modules: [
      { ref: '600', name: 'Modular data ingestion pipeline' },
      { ref: '601', name: 'Neuro-symbolic reasoning network' },
      { ref: '602', name: 'Rule-based validation layer' },
      { ref: '603', name: 'Probabilistic validation layer' },
      { ref: '604', name: 'Predictive simulation layer' },
      { ref: '605', name: 'Federated feedback module' },
    ],
    keyTerms: ['neuro-symbolic reasoning', 'multi-layer validation', 'rule-based + probabilistic + predictive', 'attention mechanisms', 'meta-learning', 'ethical principles encoding'],
    category: 'Trust',
  },
  {
    id: 'autonomous-knowledge-core',
    shortName: 'Autonomous Knowledge Core',
    title: 'System and Method for Automating Knowledge Workflows Using Generative Artificial Intelligence',
    field: 'AI-driven workflow automation with self-improving agents and temporal reasoning.',
    problem:
      'Knowledge workflows are dynamic, interdependent, and time-sensitive — static rule-based automation cannot adapt, lacks temporal reasoning, and operates in isolation from infrastructure.',
    innovation:
      'An AI-driven workflow automation system using generative AI, reinforcement learning, federated learning, and decentralized execution. A temporal reasoning module incorporates probabilistic scheduling solvers for time-sensitive execution. A workflow orchestration engine deploys and iteratively optimizes tasks. A knowledge liquidity protocol enables seamless sharing and reconfiguration across platforms. A self-healing framework autonomously detects anomalies, identifies root causes, and applies corrective adjustments. Blockchain-integrated validation ensures tamper-proof execution.',
    modules: [
      { ref: '100', name: 'Input interface' },
      { ref: '101', name: 'Generative AI core' },
      { ref: '102', name: 'Temporal reasoning module' },
      { ref: '103', name: 'Resource optimization engine' },
      { ref: '104', name: 'Knowledge liquidity protocol layer' },
      { ref: '105', name: 'Workflow orchestration engine' },
      { ref: '106', name: 'Feedback loop framework' },
      { ref: '107', name: 'Interoperability layer' },
      { ref: '108', name: 'Output interface' },
    ],
    keyTerms: ['generative AI', 'self-improving autonomous agents', 'temporal reasoning', 'cross-layer optimization', 'knowledge liquidity', 'self-healing workflows', 'blockchain validation', 'swarm intelligence'],
    category: 'Automation',
  },
  {
    id: 'sustainable-compute-models',
    shortName: 'Sustainable Compute Models',
    title: 'System and Method for AI-Driven Energy-Efficient Workload Optimization in Distributed Computing Systems',
    field: 'AI-driven, energy-efficient workload optimization.',
    problem:
      'Distributed computing workloads waste energy — static scheduling ignores processing intensity, memory access patterns, and I/O bandwidth, leading to over-provisioning and high carbon cost.',
    innovation:
      'An AI-governed workload management system with a neural-network-based execution classifier analyzing workload characteristics (processing intensity, memory access, I/O bandwidth). A reinforcement-learning-driven task scheduler optimizes for energy efficiency. Cross-layer optimization aligns workflow execution with available computational resources in real time — reducing energy consumption while maintaining performance.',
    modules: [
      { ref: '700', name: 'Execution classifier (neural network)' },
      { ref: '701', name: 'RL-driven task scheduler' },
      { ref: '702', name: 'Resource monitoring module' },
      { ref: '703', name: 'Cross-layer optimization engine' },
      { ref: '704', name: 'Energy-efficiency output' },
    ],
    keyTerms: ['AI-governed workload management', 'execution classifier', 'RL-driven scheduler', 'cross-layer optimization', 'tensor-based workload classification', 'energy efficiency'],
    category: 'Compute',
  },
]

/* Glossary — real technical terms with 1-line definitions */
export const GLOSSARY: Record<string, string> = {
  'tensor encoding': 'Transforming multi-source data into hyper-dimensional tensor representations that preserve interrelationships.',
  'tensor contraction': 'Multi-dimensional generalization of matrix multiplication — the core compute operation for high-dimensional data.',
  'O(2ⁿ) → O(log n)': 'Reducing exponential state-space exploration to logarithmic — the quantum-inspired complexity gain.',
  'ZKHNE': 'Zero-Knowledge Homomorphic Neural Encryption — processes encrypted model parameters without decryption.',
  'QE-VE': 'Quantum-Enhanced Variational Embeddings — embeds graphs into a high-dimensional Hilbert space.',
  'Hilbert space': 'A complete vector space allowing infinite-dimensional quantum representations of data.',
  'GNN': 'Graph Neural Network — learns from graph-structured data via message passing between nodes.',
  'homomorphic encryption': 'Computation on encrypted data without decrypting it — privacy-preserving compute.',
  'federated learning': 'Training across decentralized data sources without centralizing the data.',
  'neuro-symbolic reasoning': 'Combining neural networks (perception) with symbolic logic (rules) for explainable reasoning.',
  'self-adaptive graph G=(V,E)': 'A graph of nodes V and edges E that reconfigures itself as context changes.',
  'cross-layer optimization': 'Joint optimization of workflow-level decisions and infrastructure-level resources.',
  'knowledge liquidity': 'The ability to seamlessly share and reconfigure workflows across heterogeneous platforms.',
  'temporal reasoning': 'Predicting and managing time-sensitive constraints: deadlines, dependencies, scheduling.',
  'self-healing workflows': 'Autonomous anomaly detection, root-cause identification, and corrective re-execution.',
  'swarm intelligence': 'Multi-agent coordination inspired by decentralized natural systems.',
  'variational quantum eigensolver': 'VQE — a hybrid quantum-classical algorithm for finding ground-state energies.',
  'quantum-inspired': 'Classical algorithms that borrow quantum-mechanical principles (superposition, entanglement) for compute gains.',
  'zero-exposure enclave': 'A secure compute region where data is processed encrypted and never exposed in plaintext.',
  'RL-driven scheduler': 'A scheduler that learns optimal task placement via reinforcement learning on execution feedback.',
}

/* Helper: get a patent by shortName slug */
export function getRealPatent(slug: string): RealPatent | undefined {
  return REAL_PATENTS.find((p) => p.id === slug)
}
