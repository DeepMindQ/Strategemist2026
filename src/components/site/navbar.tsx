'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Logo } from './logo'
import { ThemeToggle } from './theme-toggle'
import { NAV_GROUPS, NAV_SIMPLE, BRAND } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [hovered, setHovered] = React.useState<string | null>(null)
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
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
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'glass border-b border-border/60 py-2.5' : 'border-b border-transparent py-4'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: logo + mega-menus */}
        <div className="flex items-center gap-1">
          <Link href="#top" className="mr-3 shrink-0" aria-label="Strategemist home">
            <Logo />
          </Link>

          {/* Mega-menu nav (desktop) */}
          <nav className="hidden items-center lg:flex" aria-label="Primary" onMouseLeave={onLeave}>
            {NAV_GROUPS.map((g) => (
              <div key={g.id} className="relative" onMouseEnter={() => onEnter(g.id)}>
                <button
                  className={cn(
                    'flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors',
                    hovered === g.id
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {g.label}
                  <ChevronDown
                    className={cn(
                      'h-3.5 w-3.5 transition-transform duration-200',
                      hovered === g.id && 'rotate-180'
                    )}
                  />
                </button>

                <AnimatePresence>
                  {hovered === g.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full z-50 pt-3"
                    >
                      <div className="glass w-[640px] rounded-2xl border border-border/70 p-4 shadow-2xl">
                        <div className={cn(
                          'grid gap-1',
                          g.items.length > 8 ? 'grid-cols-3' : g.items.length > 4 ? 'grid-cols-2' : 'grid-cols-1'
                        )}>
                          {g.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setHovered(null)}
                              className="group flex flex-col rounded-xl px-3 py-2.5 transition-colors hover:bg-primary/8"
                            >
                              <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                                {item.label}
                                <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                              </span>
                              {item.desc && (
                                <span className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                                  {item.desc}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </div>

        {/* Right: simple links + CTA + theme + mobile */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_SIMPLE.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
          <Button asChild size="sm" className="ml-1 gap-1.5 rounded-full">
            <a href={BRAND.ctaPrimaryHref} target="_blank" rel="noopener noreferrer">
              {BRAND.ctaPrimary}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] p-0 custom-scroll overflow-y-auto">
              <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
                <Logo />
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" aria-label="Close menu">
                    <X className="h-5 w-5" />
                  </Button>
                </SheetClose>
              </div>
              <div className="p-4">
                <Accordion type="multiple" className="space-y-1">
                  {NAV_GROUPS.map((g) => (
                    <AccordionItem key={g.id} value={g.id} className="border-0">
                      <AccordionTrigger className="rounded-xl px-3 py-3 text-base font-semibold hover:no-underline hover:bg-muted/50">
                        {g.label}
                      </AccordionTrigger>
                      <AccordionContent className="pb-2 pl-3">
                        <div className="grid grid-cols-1 gap-1">
                          {g.items.map((it) => (
                            <SheetClose asChild key={it.label}>
                              <Link
                                href={it.href}
                                className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-primary/8 hover:text-foreground"
                              >
                                {it.label}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="mt-2 grid grid-cols-2 gap-1 border-t border-border/60 pt-3">
                  {NAV_SIMPLE.map((l) => (
                    <SheetClose asChild key={l.label}>
                      <Link
                        href={l.href}
                        className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted/50"
                      >
                        {l.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
                <Button asChild className="mt-4 w-full gap-2 rounded-full">
                  <a href={BRAND.ctaPrimaryHref} target="_blank" rel="noopener noreferrer">
                    {BRAND.ctaPrimary}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
