'use client'

import Link from 'next/link'
import { ArrowRight, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-destructive/15 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-xl px-6 text-center">
        <span className="font-display text-[6rem] font-bold leading-none text-destructive">500</span>
        <h1 className="mt-2 text-balance text-3xl font-bold tracking-[-0.04em] sm:text-4xl">System fault</h1>
        <p className="mx-auto mt-4 max-w-md text-pretty text-muted-foreground">Something broke on our end. Our system is designed to recover — try again, or head back to the pipeline.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" onClick={() => reset()} className="h-14 gap-2 rounded-full px-10 text-base font-semibold">
            <RefreshCw className="h-4 w-4" /> Retry
          </Button>
          <Button asChild size="lg" variant="outline" className="h-14 gap-2 rounded-full border-primary/40 px-10 text-base font-semibold text-primary hover:bg-primary/10 hover:text-primary">
            <Link href="/">Back home <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
