'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Logo } from './logo'
import { NAV_GROUPS, NAV_SIMPLE, BRAND } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [hovered, setHovered] = React.useState<string | null>(null)
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onEnter = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setHovered(id)
  }
  const onLeave = () => {
    closeTimer.current = setTimeout(() => setHovered(null), 120)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-200',
        scrolled ? 'glass border-b border-border/60' : 'border-b border-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Logo size={36} />
          <nav className="hidden items-center lg:flex" aria-label="Primary" onMouseLeave={onLeave}>
            {NAV_GROUPS.map((g) => (
              <div key={g.id} className="relative" onMouseEnter={() => onEnter(g.id)}>
                <button
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors',
                    hovered === g.id ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
                  )}
                >
                  {g.label}
                  <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', hovered === g.id && 'rotate-180')} />
                </button>
                {hovered === g.id && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="glass w-[600px] rounded-xl border border-border/70 p-4 shadow-2xl">
                      <div className={cn('grid gap-0.5', g.items.length > 8 ? 'grid-cols-3' : g.items.length > 4 ? 'grid-cols-2' : 'grid-cols-1')}>
                        {g.items.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setHovered(null)}
                            className="group flex flex-col rounded-lg px-3 py-2 transition-colors hover:bg-primary/10"
                          >
                            <span className="flex items-center gap-1.5 text-sm font-medium">
                              {item.label}
                              <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                            </span>
                            {item.desc && <span className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">{item.desc}</span>}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_SIMPLE.map((l) => (
            <Link key={l.label} href={l.href} className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              {l.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-2 gap-1.5 rounded-full">
            <a href={BRAND.ctaPrimaryHref} target="_blank" rel="noopener noreferrer">
              {BRAND.ctaPrimary}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button asChild size="sm" className="gap-1.5 rounded-full">
            <a href={BRAND.ctaPrimaryHref} target="_blank" rel="noopener noreferrer">
              <span className="hidden sm:inline">{BRAND.ctaPrimary}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] p-0 custom-scroll overflow-y-auto">
              <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
                <Logo size={32} />
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" aria-label="Close menu"><X className="h-5 w-5" /></Button>
                </SheetClose>
              </div>
              <div className="p-4">
                <Accordion type="multiple" className="space-y-1">
                  {NAV_GROUPS.map((g) => (
                    <AccordionItem key={g.id} value={g.id} className="border-0">
                      <AccordionTrigger className="rounded-lg px-3 py-2.5 text-base font-semibold hover:no-underline hover:bg-muted/50">{g.label}</AccordionTrigger>
                      <AccordionContent className="pb-1 pl-2">
                        <div className="grid grid-cols-1 gap-0.5">
                          {g.items.map((it) => (
                            <SheetClose asChild key={it.label}>
                              <Link href={it.href} className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-primary/10 hover:text-foreground">{it.label}</Link>
                            </SheetClose>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="mt-2 grid grid-cols-1 gap-0.5 border-t border-border/60 pt-3">
                  {NAV_SIMPLE.map((l) => (
                    <SheetClose asChild key={l.label}>
                      <Link href={l.href} className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-muted/50">{l.label}</Link>
                    </SheetClose>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
