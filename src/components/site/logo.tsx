import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ className, size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'text-[1.125rem]',
    md: 'text-[1.375rem]',
    lg: 'text-[1.625rem]',
  }
  return (
    <Link
      href="/"
      className={cn('group inline-flex items-baseline transition-transform duration-200 hover:-translate-y-px', className)}
      aria-label="strategemist — home"
    >
      <span
        className={cn('wordmark-glow font-bold lowercase leading-none tracking-tight text-white transition-all duration-200 group-hover:text-white', sizes[size])}
        style={{ fontFamily: 'var(--font-wordmark), var(--font-comfortaa), sans-serif' }}
      >
        strategemist
      </span>
    </Link>
  )
}
