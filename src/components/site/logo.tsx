import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ className, size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = { sm: 'text-[1rem]', md: 'text-[1.25rem]', lg: 'text-[1.5rem]' }
  return (
    <Link
      href="/"
      className={cn('group inline-flex items-center whitespace-nowrap transition-transform duration-200 hover:-translate-y-px', className)}
      aria-label="strategemist — home"
    >
      {/* Single non-wrapping wordmark. The diamond dot is a CSS
          pseudo-element on the 'i' via a wrapper span, positioned
          absolutely so it never breaks the text flow. */}
      <span
        className={cn('wordmark-glow font-bold lowercase leading-none tracking-tight text-white transition-all duration-200 group-hover:text-white', sizes[size])}
        style={{ fontFamily: 'var(--font-wordmark), var(--font-comfortaa), sans-serif' }}
      >
        strategem<span className="relative inline-block">i<span className="absolute -top-[0.15em] left-1/2 h-[0.18em] w-[0.18em] -translate-x-1/2 rotate-45 bg-white" aria-hidden />st</span>
      </span>
    </Link>
  )
}
