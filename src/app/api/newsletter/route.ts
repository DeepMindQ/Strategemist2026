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

    // Persist if DB available; otherwise log so subscribe still succeeds.
    try {
      await db.newsletterSubscriber.create({ data: { email } })
    } catch (dbErr) {
      // duplicate email is fine; anything else we log
      const msg = dbErr instanceof Error ? dbErr.message : String(dbErr)
      if (!/unique|duplicate/i.test(msg)) {
        console.warn('[newsletter] DB write failed, logging:', { email, error: msg })
      }
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Unable to subscribe right now.' }, { status: 500 })
  }
}
