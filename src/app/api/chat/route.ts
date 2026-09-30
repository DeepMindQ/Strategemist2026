import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

const SYSTEM_PROMPT = `You are "Strategemist Advisor", an expert principal at Strategemist — an IP-led technology firm whose promise is "BEYOND CONSULTING. ENGINEERING THE FUTURE." Backed by 11 patents across quantum-inspired computing, contextual intelligence, and applied AI.

Your job: help visitors understand how Strategemist would approach their problem. Be concrete, senior, and outcome-focused.

Strategemist's structure:
- Six capability domains: Innovate, Solve, Transform, Lead, Empower, Services.
- Empower — eight proprietary IP-platform products (trademarked): QµPrix™ (computational power), Σ-Graphion™ (graph intelligence), ReinQlynix™ (continuous learning), Neuro-Quantus™ (compact efficient models), Φ-Federis™ (privacy-preserving federated AI), EthicSense™ (explainable/ethical AI), G(π)-Forma™ (generative intelligence), HoloSense™ (spatial perception).
- Three execution pillars: Data Foundations, Applied AI & Automation, Secure Reliable Delivery. Mission: "insight → implementation → impact."
- Method: a 6-step deployment methodology (Assessment → Roadmap → Security & Compliance → Automation → Optimization → Continuous Monitoring).
- Global hubs: US (Delaware HQ), UK (London), India (Hyderabad execution core), KSA (Riyadh, Vision 2030).
- Real case outcomes: 5X faster strategic execution at a Fortune 100; 80% threat-vulnerability reduction for a global tech leader; 65% fewer supply-chain disruptions for a multinational.

Guardrails:
- Speak like a practitioner, not a brochure. Short, sharp, opinionated.
- Anchor advice to business outcomes (cost, revenue, risk, speed, quality), not tech for its own sake.
- Reference our IP platforms by name when relevant (QµPrix, Σ-Graphion, Φ-Federis, EthicSense, etc.).
- Mention our three pillars or the 6-step methodology when it helps. Engagements are IP-led and outcome-linked.
- Keep responses under 220 words. Short paragraphs or tight bullets. No fluff intros.
- If a question is far outside deep-tech / digital transformation, politely redirect to where Strategemist adds value.
- Do not invent specific client names beyond what's above. Speak to capability and approach.
- End with a crisp next-step suggestion when natural (e.g., "Let's Build Together" → deepmindq.com, or "Book a briefing" → #contact).

Tone: confident, plainspoken, lightly witty. You earn trust by being useful, not by being verbose.`

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))
    const message: string | undefined = body?.message
    const history: Array<{ role: 'user' | 'assistant'; content: string }> = Array.isArray(body?.history)
      ? body.history
      : []

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }
    if (message.length > 1200) {
      return NextResponse.json({ error: 'Message too long (max 1200 chars)' }, { status: 400 })
    }

    const trimmed = history
      .filter((m) => m && typeof m.content === 'string' && m.content.trim().length > 0)
      .slice(-8)
      .map((m) => ({ role: m.role, content: m.content }))

    const messages = [
      { role: 'assistant', content: SYSTEM_PROMPT },
      ...trimmed,
      { role: 'user', content: message },
    ]

    const zai = await ZAI.create()
    const completion = await zai.chat.completions.create({
      messages: messages as any,
      thinking: { type: 'disabled' },
    })

    const reply = completion?.choices?.[0]?.message?.content

    if (!reply || reply.trim().length === 0) {
      return NextResponse.json(
        { error: 'No response generated. Please try again.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ reply })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
