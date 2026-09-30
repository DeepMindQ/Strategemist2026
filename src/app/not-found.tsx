import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-xl px-6 text-center">
        <span className="gradient-text font-display text-[10rem] font-bold leading-none tracking-tighter">404</span>
        <h1 className="mt-2 text-balance text-3xl font-bold tracking-[-0.035em] sm:text-4xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-pretty text-muted-foreground">The page you're looking for doesn't exist or has been moved. Let's get you back on track.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-12 gap-2 rounded-full px-8 text-[15px] font-semibold">
            <Link href="/">Back home <ArrowRight className="h-4 w-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 gap-2 rounded-full border-primary/40 px-8 text-[15px] font-semibold text-primary hover:bg-primary/10 hover:text-primary">
            <Link href="/empower">Explore IP platforms</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
