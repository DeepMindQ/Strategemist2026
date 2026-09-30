'use client'

import { motion } from 'framer-motion'

/* Custom SVG system-architecture diagrams per patent (items 26-37).
   Each renders as a thin-line schematic with connected modules. */

function ModuleNode({ x, y, label, moduleRef, active = false }: { x: number; y: number; label: string; moduleRef: string; active?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width="80" height="30" rx="3" fill={active ? 'rgba(46,46,217,0.15)' : 'rgba(255,255,255,0.03)'} stroke={active ? 'var(--primary)' : 'rgba(255,255,255,0.12)'} strokeWidth="0.5" />
      <text x={x + 6} y={y + 12} fontSize="5" fill="var(--primary)" fontFamily="var(--font-mono)">{moduleRef}</text>
      <text x={x + 6} y={y + 22} fontSize="5" fill="var(--foreground)" opacity="0.8">{label}</text>
    </g>
  )
}

function Connector({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <motion.line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--primary)" strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="2 2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} />
}

export function PatentDiagram({ patentId }: { patentId: string }) {
  const diagrams: Record<string, React.ReactNode> = {
    'quantum-computing': (
      <svg viewBox="0 0 400 120" className="w-full">
        <ModuleNode x={10} y={45} label="Tensor encode" moduleRef="100" active />
        <ModuleNode x={110} y={45} label="Tensor contract" moduleRef="101" />
        <ModuleNode x={210} y={20} label="Probabilistic" moduleRef="102" />
        <ModuleNode x={210} y={70} label="Self-adaptive" moduleRef="103" />
        <ModuleNode x={310} y={45} label="Output" moduleRef="104" />
        <Connector x1={90} y1={60} x2={110} y2={60} />
        <Connector x1={190} y1={55} x2={210} y2={35} />
        <Connector x1={190} y1={65} x2={210} y2={85} />
        <Connector x1={290} y1={35} x2={310} y2={55} />
        <Connector x1={290} y1={85} x2={310} y2={65} />
        <text x={210} y={110} textAnchor="middle" fontSize="6" fill="var(--gold)" fontFamily="var(--font-mono)">O(2ⁿ) → O(log n)</text>
      </svg>
    ),
    'contextual-intelligence': (
      <svg viewBox="0 0 400 120" className="w-full">
        {[[80, 30], [150, 60], [220, 40], [290, 70], [120, 80], [200, 100]].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="6" fill="rgba(46,46,217,0.15)" stroke="var(--primary)" strokeWidth="0.5" />
            <text x={cx - 3} y={cy + 2} fontSize="4" fill="var(--primary)" fontFamily="var(--font-mono)">V{i + 1}</text>
          </g>
        ))}
        <Connector x1={86} y1={32} x2={144} y2={58} />
        <Connector x1={156} y1={58} x2={214} y2={42} />
        <Connector x1={226} y1={42} x2={284} y2={68} />
        <Connector x1={126} y1={78} x2={194} y2={98} />
        <text x={200} y={118} textAnchor="middle" fontSize="6" fill="var(--gold)" fontFamily="var(--font-mono)">G=(V,E) → QE-VE → Hilbert space</text>
      </svg>
    ),
    'federated-intelligence-grid': (
      <svg viewBox="0 0 400 120" className="w-full">
        <ModuleNode x={10} y={20} label="Node A (ZKHNE)" moduleRef="500" active />
        <ModuleNode x={10} y={70} label="Node B (ZKHNE)" moduleRef="501" active />
        <ModuleNode x={310} y={20} label="Node C (ZKHNE)" moduleRef="502" active />
        <ModuleNode x={310} y={70} label="Aggregator" moduleRef="503" />
        <Connector x1={90} y1={35} x2={160} y2={55} />
        <Connector x1={90} y1={85} x2={160} y2={65} />
        <Connector x1={310} y1={35} x2={240} y2={55} />
        <text x={200} y={115} textAnchor="middle" fontSize="6" fill="var(--gold)" fontFamily="var(--font-mono)">Zero-exposure · encrypted end-to-end</text>
      </svg>
    ),
    'autonomous-knowledge-core': (
      <svg viewBox="0 0 400 140" className="w-full">
        {[
          [10, 55, 'Input (100)'], [90, 55, 'Gen AI Core (101)'], [170, 25, 'Temporal (102)'], [170, 85, 'Resource Opt (103)'],
          [250, 55, 'Orchestration (105)'], [330, 25, 'Feedback (106)'], [330, 85, 'Output (108)'],
        ].map(([x, y, label], i) => <ModuleNode key={i} x={x as number} y={y as number} label={label as string} moduleRef={String(i + 1).padStart(3, '0')} active={i === 1} />)}
        <Connector x1={70} y1={70} x2={90} y2={70} />
        <Connector x1={150} y1={65} x2={170} y2={40} />
        <Connector x1={150} y1={75} x2={170} y2={100} />
        <Connector x1={230} y1={40} x2={250} y2={65} />
        <Connector x1={230} y1={100} x2={250} y2={75} />
        <Connector x1={310} y1={70} x2={330} y2={40} />
        <text x={200} y={135} textAnchor="middle" fontSize="6" fill="var(--gold)" fontFamily="var(--font-mono)">9 modules · self-healing · knowledge liquidity</text>
      </svg>
    ),
    'algorithmic-ethics-trust': (
      <svg viewBox="0 0 400 120" className="w-full">
        <ModuleNode x={10} y={45} label="Ingest" moduleRef="600" active />
        <ModuleNode x={110} y={45} label="Neuro-symbolic" moduleRef="601" />
        <ModuleNode x={210} y={15} label="Rule-based" moduleRef="602" />
        <ModuleNode x={210} y={45} label="Probabilistic" moduleRef="603" />
        <ModuleNode x={210} y={75} label="Predictive" moduleRef="604" />
        <ModuleNode x={310} y={45} label="Decision" moduleRef="605" />
        <Connector x1={90} y1={60} x2={110} y2={60} />
        <Connector x1={190} y1={55} x2={210} y2={30} />
        <Connector x1={190} y1={60} x2={210} y2={60} />
        <Connector x1={190} y1={65} x2={210} y2={90} />
        <Connector x1={290} y1={60} x2={310} y2={60} />
        <text x={200} y={115} textAnchor="middle" fontSize="6" fill="var(--gold)" fontFamily="var(--font-mono)">Multi-layer validation · explainable</text>
      </svg>
    ),
  }

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-white/8 bg-card/30 p-6">
      <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.1em] text-primary">System Architecture Diagram</div>
      {diagrams[patentId] || (
        <svg viewBox="0 0 400 80" className="w-full">
          <text x="200" y="40" textAnchor="middle" fontSize="6" fill="var(--muted-foreground)" fontFamily="var(--font-mono)">Architecture diagram — see modules below</text>
        </svg>
      )}
    </div>
  )
}
