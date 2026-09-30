import { cn } from '@/lib/utils'

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={cn('h-8 w-8', className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sgm-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--primary)" />
          <stop offset="1" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
      {/* Hexagon gem */}
      <path
        d="M24 2.5 L42.5 13 V35 L24 45.5 L5.5 35 V13 Z"
        stroke="url(#sgm-grad)"
        strokeWidth="2.2"
        strokeLinejoin="round"
        fill="color-mix(in oklch, var(--primary) 10%, transparent)"
      />
      {/* Inner strategic node cluster */}
      <circle cx="24" cy="24" r="4.4" fill="url(#sgm-grad)" />
      <circle cx="14" cy="18.5" r="2.2" fill="var(--primary)" />
      <circle cx="34" cy="18.5" r="2.2" fill="var(--accent)" />
      <circle cx="14" cy="29.5" r="2.2" fill="var(--accent)" />
      <circle cx="34" cy="29.5" r="2.2" fill="var(--primary)" />
      <path
        d="M14 18.5 L24 24 L34 18.5 M14 29.5 L24 24 L34 29.5"
        stroke="url(#sgm-grad)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <LogoMark />
      <span className="font-semibold tracking-tight text-[1.05rem] leading-none">
        Strate<span className="text-primary">gemist</span>
      </span>
    </span>
  )
}
