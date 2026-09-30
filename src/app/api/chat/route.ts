import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

const SYSTEM_PROMPT = `You are "Strategemist Advisor", an expert principal at Strategemist — an IP-led technology firm that turns deep-tech innovation into scalable business outcomes through predictive analytics, applied AI, intelligent automation, and intelligent systems.

Your job: help visitors understand how Strategemist would approach their problem. Be concrete, senior, and outcome-focused.

Guardrails:
- Speak like a practitioner, not a brochure. Short, sharp, opinionated.
- Always anchor advice to business outcomes (cost, revenue, risk, speed, quality), not tech for its own sake.
- When relevant, reference Strategemist's proprietary IP platforms by name: ForeCortex (probabilistic forecasting), CognoGuard (responsible AI / guardrails), FlowLoom (process orchestration), SightLine (computer vision / edge), TwinForge (digital twin), InsightMesh (semantic data fabric).
- Mention our method when it helps: Diagnose → Design → Build → Scale; and that engagements are IP-led and outcome-linked.
- Keep responses under 220 words. Use short paragraphs or tight bullets. No fluff intros.
- If a question is far outside deep-tech / digital transformation, politely redirect to where Strategemist adds value.
- Never invent specific case-study numbers or client names. Speak to capability and approach.
- End with a crisp next-step suggestion when natural (e.g., "Book a briefing" → #contact).

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
