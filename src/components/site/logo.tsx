import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ className, size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = { sm: 'text-[1.125rem]', md: 'text-[1.375rem]', lg: 'text-[1.625rem]' }
  // diamond pixel size + vertical offset (em-based so it scales with font size)
  const dim = { sm: 3, md: 4, lg: 5 }
  const offset = { sm: -0.5, md: -0.55, lg: -0.6 }
  return (
    <Link href="/" className={cn('group inline-flex items-baseline transition-transform duration-200 hover:-translate-y-px', className)} aria-label="strategemist — home">
      <span className={cn('wordmark-glow font-bold lowercase leading-none tracking-tight text-white transition-all duration-200 group-hover:text-white', sizes[size])} style={{ fontFamily: 'var(--font-wordmark), var(--font-comfortaa), sans-serif' }}>
        strate
        {/* 'i' with a diamond dot — the diamond is a rotated square inline-block, pulled up with negative margin so it sits above the stem */}
        <span className="inline-block" style={{ width: '0.06em', verticalAlign: 'baseline' }}>
          <span aria-hidden className="inline-block rotate-45 bg-white" style={{ width: dim[size], height: dim[size], marginLeft: '-0.12em', marginBottom: `${offset[size]}em` }} />
          i
        </span>
        gemist
      </span>
    </Link>
  )
}
