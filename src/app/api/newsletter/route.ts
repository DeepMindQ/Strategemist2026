import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if (!emailOk) {
      return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 })
    }

    // Upsert: ignore duplicate email errors
    try {
      await db.newsletterSubscriber.create({ data: { email } })
    } catch {
      // already subscribed — treat as success
    }

    return NextResponse.json({ ok: true })
  } catch (err: unknown) {
    return NextResponse.json({ error: 'Unable to subscribe right now.' }, { status: 500 })
  }
}
