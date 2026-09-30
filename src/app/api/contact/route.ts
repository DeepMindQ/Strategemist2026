import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export const runtime = 'nodejs'

const INTERESTS = [
  'AI Consulting',
  'AI Proof of Concept',
  'Big Data',
  'Generative AI',
  'Data Engineering',
  'AI Agents',
  'MLOps',
  'AI Integration',
  'Cybersecurity',
  'Quantum',
  'Other',
] as const

function isStr(v: unknown): v is string {
  return typeof v === 'string'
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))
    const name = isStr(body?.name) ? body.name.trim() : ''
    const email = isStr(body?.email) ? body.email.trim().toLowerCase() : ''
    const company = isStr(body?.company) ? body.company.trim() : ''
    const interest = isStr(body?.interest) && INTERESTS.includes(body.interest as any) ? body.interest : null
    const message = isStr(body?.message) ? body.message.trim() : ''

    if (!name || name.length < 2) {
      return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 })
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!emailOk) {
      return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 })
    }
    if (!message || message.length < 10) {
      return NextResponse.json({ error: 'Tell us a bit more about your goal (min 10 characters).' }, { status: 400 })
    }
    if (message.length > 4000) {
      return NextResponse.json({ error: 'Message too long.' }, { status: 400 })
    }

    // Persist to DB if available (local dev / configured DB). On serverless
    // without a configured DB, we log so the form still succeeds.
    try {
      await db.contactInquiry.create({
        data: { name, email, company: company || null, role: null, interest, budget: null, message },
      })
    } catch (dbErr) {
      console.warn('[contact] DB write failed, logging inquiry:', {
        name, email, company, interest, messagePreview: message.slice(0, 80),
        error: dbErr instanceof Error ? dbErr.message : String(dbErr),
      })
    }

    return NextResponse.json({ ok: true })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: 'Unable to submit right now. Please try again.' }, { status: 500 })
  }
}
