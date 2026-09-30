import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ className, size = 38 }: { className?: string; size?: number }) {
  return (
    <Link href="/" className={cn('inline-flex items-center', className)} aria-label="Strategemist home">
      <Image
        src="/logo.jpeg"
        alt="Strategemist"
        width={size}
        height={size}
        priority
        className="rounded-[4px]"
      />
    </Link>
  )
}
