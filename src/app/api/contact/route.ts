import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export const runtime = 'nodejs'

const INTERESTS = [
  'Predictive Analytics',
  'Applied AI',
  'Intelligent Automation',
  'Intelligent Systems',
  'Not sure yet',
] as const

const BUDGETS = [
  '< $100k',
  '$100k – $500k',
  '$500k – $1M',
  '$1M+',
  'Exploring',
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
    const role = isStr(body?.role) ? body.role.trim() : ''
    const interest = isStr(body?.interest) && INTERESTS.includes(body.interest as any) ? body.interest : null
    const budget = isStr(body?.budget) && BUDGETS.includes(body.budget as any) ? body.budget : null
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

    await db.contactInquiry.create({
      data: { name, email, company: company || null, role: role || null, interest, budget, message },
    })

    return NextResponse.json({ ok: true })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: 'Unable to submit right now. Please try again.' }, { status: 500 })
  }
}
