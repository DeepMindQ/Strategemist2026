import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ className, size = 40, withWordmark = true }: { className?: string; size?: number; withWordmark?: boolean }) {
  return (
    <Link
      href="/"
      className={cn('group inline-flex items-center gap-2.5', className)}
      aria-label="Strategemist — home"
    >
      <span
        className="relative inline-block shrink-0 overflow-hidden rounded-[6px] ring-1 ring-white/20 transition-transform duration-200 group-hover:-translate-y-0.5"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo.jpeg"
          alt="Strategemist"
          width={size * 2}
          height={size * 2}
          priority
          className="h-full w-full object-cover"
        />
      </span>
      {withWordmark && (
        <span className="font-display text-[1.15rem] font-bold leading-none tracking-tight text-white">
          Strate<span className="text-primary">gemist</span>
        </span>
      )}
    </Link>
  )
}
