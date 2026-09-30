'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Line,
  ComposedChart,
} from 'recharts'
import { TrendingUp, TrendingDown, Activity, Sparkles, RotateCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

type ScenarioId = 'demand' | 'churn' | 'revenue'

interface Scenario {
  id: ScenarioId
  label: string
  icon: typeof Activity
  unit: string
  baseline: number
  forecastDelta: number
  mape: number
  confidence: number
  trend: 'up' | 'down'
  gen: (i: number) => number
}

function rng(seed: number) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

function buildSeries(scenario: Scenario) {
  const rand = rng(scenario.id.length * 31 + 7)
  const points = []
  // 16 weeks history (actual), 8 weeks forecast
  for (let i = 0; i < 24; i++) {
    const isForecast = i >= 16
    const t = i
    const seasonal = Math.sin(t / 3.2) * (scenario.baseline * 0.12)
    const drift = (scenario.forecastDelta / 8) * Math.max(0, t - 15)
    const noise = (rand() - 0.5) * (scenario.baseline * 0.08)
    const actual = isForecast ? null : Math.max(0, scenario.baseline + seasonal + noise)
    const forecast = isForecast
      ? scenario.baseline + seasonal + drift + noise * 0.4
      : scenario.baseline + seasonal
    const band = scenario.baseline * 0.08 + (isForecast ? (t - 15) * scenario.baseline * 0.012 : 0)
    points.push({
      week: `W${i + 1}`,
      actual,
      forecast: Math.round(Math.max(0, forecast) * 10) / 10,
      upper: Math.round((forecast + band) * 10) / 10,
      lower: Math.round(Math.max(0, forecast - band) * 10) / 10,
    })
  }
  return points
}

const SCENARIOS: Scenario[] = [
  {
    id: 'demand',
    label: 'Demand',
    icon: Activity,
    unit: 'units',
    baseline: 4200,
    forecastDelta: 1280,
    mape: 3.1,
    confidence: 92,
    trend: 'up',
    gen: (i) => 4200 + Math.sin(i / 3.2) * 500,
  },
  {
    id: 'churn',
    label: 'Churn risk',
    icon: TrendingDown,
    unit: '%',
    baseline: 6.4,
    forecastDelta: -1.9,
    mape: 4.8,
    confidence: 88,
    trend: 'down',
    gen: (i) => 6.4 + Math.sin(i / 4) * 0.7,
  },
  {
    id: 'revenue',
    label: 'Revenue',
    icon: TrendingUp,
    unit: '$K',
    baseline: 1850,
    forecastDelta: 640,
    mape: 2.6,
    confidence: 94,
    trend: 'up',
    gen: (i) => 1850 + Math.sin(i / 3.6) * 220,
  },
]

function ChartTooltip({ active, payload, label, unit }: any) {
  if (!active || !payload?.length) return null
  const actual = payload.find((p: any) => p.dataKey === 'actual')?.value
  const forecast = payload.find((p: any) => p.dataKey === 'forecast')?.value
  return (
    <div className="glass rounded-lg border border-border/70 px-3 py-2 text-xs shadow-lg">
      <div className="mb-1 font-medium">{label}</div>
      {actual != null && (
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-accent" /> Actual <span className="ml-auto font-medium text-foreground">{actual.toLocaleString()} {unit}</span>
        </div>
      )}
      {forecast != null && (
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary" /> Forecast <span className="ml-auto font-medium text-foreground">{forecast.toLocaleString()} {unit}</span>
        </div>
      )}
    </div>
  )
}

export function AnalyticsDemo() {
  const [active, setActive] = React.useState<ScenarioId>('demand')
  const scenario = SCENARIOS.find((s) => s.id === active)!
  const [data, setData] = React.useState(() => buildSeries(scenario))
  const [running, setRunning] = React.useState(false)

  React.useEffect(() => {
    setData(buildSeries(scenario))
  }, [scenario])

  const rerun = () => {
    setRunning(true)
    setData(buildSeries({ ...scenario, id: (scenario.id + Math.random().toString()) as ScenarioId }))
    setTimeout(() => setRunning(false), 600)
  }

  const last = data[data.length - 1].forecast
  const first = data[0].forecast
  const delta = (((last - first) / first) * 100).toFixed(1)

  return (
    <section className="relative scroll-mt-24 border-y border-border/50 bg-muted/35 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Live demo"
          title="Predictive analytics, in your hands"
          description="Toggle a scenario and watch ForeCortex produce an explainable forecast with a confidence band. This is a working demo—not a screenshot."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {/* Controls + metrics */}
          <div className="lg:col-span-4 space-y-4">
            <Card className="border-border/60 p-5">
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Scenario
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {SCENARIOS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    className={cn(
                      'flex flex-col items-center gap-1.5 rounded-xl border px-2 py-3 text-xs font-medium transition-all',
                      active === s.id
                        ? 'border-primary bg-primary/12 text-primary'
                        : 'border-border/60 text-muted-foreground hover:border-primary/40 hover:text-foreground'
                    )}
                  >
                    <s.icon className="h-4.5 w-4.5" />
                    {s.label}
                  </button>
                ))}
              </div>
            </Card>

            <Card className="border-border/60 p-5">
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Model health
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={rerun}
                  disabled={running}
                  className="h-7 gap-1.5 text-xs"
                >
                  <RotateCw className={cn('h-3.5 w-3.5', running && 'animate-spin')} />
                  Retrain
                </Button>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  { l: 'MAPE', v: `${scenario.mape}%`, tone: 'primary' as const },
                  { l: 'Confidence', v: `${scenario.confidence}%`, tone: 'accent' as const },
                  { l: 'Drift', v: 'Stable', tone: 'primary' as const },
                ].map((m) => (
                  <div key={m.l} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{m.l}</span>
                    <span className={cn('text-sm font-semibold', m.tone === 'primary' ? 'text-primary' : 'text-accent')}>
                      {m.v}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg bg-muted/40 p-3 text-xs text-muted-foreground">
                <Sparkles className="mb-1.5 h-3.5 w-3.5 text-accent" />
                Champion model auto-selected from a 14-model ensemble via rolling-window backtest.
              </div>
            </Card>
          </div>

          {/* Chart */}
          <div className="lg:col-span-8">
            <Card className="relative overflow-hidden border-border/60 p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {scenario.label} · 24-week horizon
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-semibold tracking-tight">
                      {last.toLocaleString()} {scenario.unit}
                    </span>
                    <span
                      className={cn(
                        'inline-flex items-center gap-1 text-sm font-medium',
                        scenario.trend === 'up' ? 'text-primary' : 'text-accent'
                      )}
                    >
                      {scenario.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      {delta}% vs baseline
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2 w-4 rounded-full bg-accent" /> Actual
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2 w-4 rounded-full bg-primary" /> Forecast
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2 w-4 rounded-full bg-primary/30" /> Confidence band
                  </span>
                </div>
              </div>

              <div className="mt-5 h-[280px] w-full sm:h-[320px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active + (data[0]?.week ?? '')}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-full w-full"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={data} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
                        <defs>
                          <linearGradient id="bandFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.28} />
                            <stop offset="100%" stopColor="var(--primary)" stopOpacity={0.02} />
                          </linearGradient>
                          <linearGradient id="fcFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.32} />
                            <stop offset="100%" stopColor="var(--primary)" stopOpacity={0.04} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} opacity={0.5} />
                        <XAxis
                          dataKey="week"
                          tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }}
                          tickLine={false}
                          axisLine={{ stroke: 'var(--border)' }}
                          interval={3}
                        />
                        <YAxis
                          tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }}
                          tickLine={false}
                          axisLine={false}
                          width={48}
                        />
                        <Tooltip content={<ChartTooltip unit={scenario.unit} />} />
                        <Area
                          type="monotone"
                          dataKey="upper"
                          stroke="none"
                          fill="url(#bandFill)"
                          stackId="band"
                          animationDuration={700}
                        />
                        <Area
                          type="monotone"
                          dataKey="lower"
                          stroke="none"
                          fill="var(--background)"
                          stackId="band"
                          animationDuration={700}
                        />
                        <Area
                          type="monotone"
                          dataKey="actual"
                          stroke="var(--accent)"
                          strokeWidth={2.5}
                          fill="none"
                          dot={false}
                          animationDuration={700}
                          connectNulls={false}
                        />
                        <Area
                          type="monotone"
                          dataKey="forecast"
                          stroke="var(--primary)"
                          strokeWidth={2.5}
                          fill="url(#fcFill)"
                          strokeDasharray="5 4"
                          dot={false}
                          animationDuration={700}
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                <span>Champion: <span className="font-medium text-foreground">Trend-Seasonal Ensemble</span></span>
                <span>Backtest: <span className="font-medium text-foreground">14 windows</span></span>
                <span>Explainability: <span className="font-medium text-foreground">SHAP + counterfactuals</span></span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
