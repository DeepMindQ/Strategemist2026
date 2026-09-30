import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ className, size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = { sm: 'text-[1.125rem]', md: 'text-[1.375rem]', lg: 'text-[1.625rem]' }
  const dot = { sm: 5, md: 6, lg: 7 }
  return (
    <Link href="/" className={cn('group inline-flex items-baseline transition-transform duration-200 hover:-translate-y-px', className)} aria-label="strategemist — home">
      <span className="relative inline-flex items-baseline">
        <span className={cn('wordmark-glow font-bold lowercase leading-none tracking-tight text-white transition-all duration-200 group-hover:text-white', sizes[size])} style={{ fontFamily: 'var(--font-wordmark), var(--font-comfortaa), sans-serif' }}>
          strate
        </span>
        {/* i with diamond dot — the custom mark */}
        <span className="relative inline-flex flex-col items-center" style={{ margin: '0 0.02em' }}>
          <span aria-hidden className="block rotate-45 bg-white" style={{ width: dot[size], height: dot[size], marginBottom: dot[size] * 0.4, marginTop: dot[size] * -0.2 }} />
          <span className={cn('font-bold lowercase leading-none text-white', sizes[size])} style={{ fontFamily: 'var(--font-wordmark), var(--font-comfortaa), sans-serif' }}>i</span>
        </span>
        <span className={cn('wordmark-glow font-bold lowercase leading-none tracking-tight text-white transition-all duration-200 group-hover:text-white', sizes[size])} style={{ fontFamily: 'var(--font-wordmark), var(--font-comfortaa), sans-serif' }}>
          gemist
        </span>
      </span>
    </Link>
  )
}
