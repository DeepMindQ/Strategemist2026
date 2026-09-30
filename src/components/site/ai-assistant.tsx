'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Sparkles, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface Msg {
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTIONS = [
  'How can Strategemist reduce our supply-chain disruptions?',
  'Which of your 8 IP platforms fits a regulated bank?',
  'How do you keep generative AI safe and explainable?',
  'What does "insight → implementation → impact" mean in practice?',
]

const SEED: Msg = {
  role: 'assistant',
  content:
    "I'm the Strategemist Advisor. We go BEYOND CONSULTING — engineering the future with 11 patents and 8 IP platforms. Tell me the business outcome you want to move, and I'll sketch how we'd approach it, which IP we'd bring (QµPrix, Σ-Graphion, Φ-Federis, EthicSense, and more), and the measurable result we'd target.",
}

export function AIAssistant() {
  const [open, setOpen] = React.useState(false)
  const [messages, setMessages] = React.useState<Msg[]>([SEED])
  const [input, setInput] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLTextAreaElement>(null)

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading])

  React.useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 200)
    }
  }, [open])

  const send = async (text?: string) => {
    const content = (text ?? input).trim()
    if (!content || loading) return

    setError(null)
    setInput('')
    const history = messages.slice(1) // drop seed
    const next: Msg[] = [...messages, { role: 'user', content }]
    setMessages(next)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: content, history }),
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data?.error || 'Something went wrong')
      }
      setMessages((m) => [...m, { role: 'assistant', content: data.reply }])
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Request failed'
      setError(msg)
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content:
            "I couldn't reach our reasoning service just now. Try again in a moment, or book a briefing and a principal will respond directly.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setMessages([SEED])
    setError(null)
    setInput('')
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      {/* Launcher */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(true)}
            className="group fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full border border-white/10 bg-primary px-4 py-3 shadow-2xl shadow-primary/30 transition-all hover:shadow-primary/50 sm:bottom-6 sm:right-6"
            aria-label="Open Strategemist Advisor"
          >
            <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full ring-2 ring-white/20">
              <Image src="/logo.jpeg" alt="Strategemist" width={40} height={40} className="h-full w-full object-cover" />
              <span className="pointer-events-none absolute inset-0 rounded-full animate-pulse-ring ring-2 ring-primary" />
            </span>
            <span className="text-sm font-semibold text-white">
              Ask Strategemist
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-4 right-4 z-50 flex h-[min(620px,80vh)] w-[calc(100vw-2rem)] max-w-[400px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl sm:bottom-6 sm:right-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3" style={{ background: 'linear-gradient(to right, color-mix(in oklch, var(--primary) 15%, var(--card)), var(--card))' }}>
              <div className="flex items-center gap-2.5">
                <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-lg ring-1 ring-white/20">
                  <Image src="/logo.jpeg" alt="Strategemist" width={36} height={36} className="h-full w-full object-cover" />
                </span>
                <div>
                  <div className="text-sm font-semibold leading-none">Strategemist Advisor</div>
                  <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Online · deep-tech guidance
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={reset} aria-label="Reset conversation">
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setOpen(false)} aria-label="Close">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="custom-scroll flex-1 space-y-3 overflow-y-auto p-4"
            >
            {messages.map((m, i) => (
              <MessageBubble key={i} msg={m} />
            ))}
            {loading && <TypingBubble />}
            {error && (
              <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs text-destructive">
                {error}
              </div>
            )}

            {/* Suggestions (only after seed) */}
            {messages.length === 1 && !loading && (
              <div className="pt-2">
                <div className="mb-2 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  <Sparkles className="h-3 w-3 text-accent" />
                  Try asking
                </div>
                <div className="grid gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-xl border border-border/60 px-3 py-2.5 text-left text-xs text-foreground/85 transition-all hover:border-primary/50 hover:bg-primary/8"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
            </div>

            {/* Input */}
            <div className="border-t border-border/60 p-3">
              <div className="flex items-end gap-2 rounded-xl border border-border/60 bg-background/60 p-2 focus-within:border-primary/60">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  rows={1}
                  placeholder="Describe the outcome you want to move…"
                  className="max-h-28 min-h-[40px] flex-1 resize-none bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-muted-foreground"
                />
                <Button
                  size="icon"
                  className="h-9 w-9 shrink-0 rounded-lg"
                  onClick={() => send()}
                  disabled={loading || !input.trim()}
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-1.5 px-1 text-[10px] text-muted-foreground">
                Powered by Strategemist applied AI. Responses are guidance, not advice.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function MessageBubble({ msg }: { msg: Msg }) {
  const isUser = msg.role === 'user'
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={cn('flex gap-2.5', isUser ? 'flex-row-reverse' : 'flex-row')}
    >
      <span
        className={cn(
          'grid h-7 w-7 shrink-0 place-items-center rounded-full',
          isUser ? 'bg-accent/15 text-accent' : 'bg-primary/15 text-primary'
        )}
      >
        {isUser ? <span className="text-[10px] font-bold">YOU</span> : <Image src="/logo.jpeg" alt="Strategemist" width={20} height={20} className="rounded-[3px]" />}
      </span>
      <div
        className={cn(
          'max-w-[80%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed',
          isUser
            ? 'rounded-tr-sm bg-primary text-primary-foreground'
            : 'rounded-tl-sm bg-muted/60 text-foreground'
        )}
      >
        {msg.content}
      </div>
    </motion.div>
  )
}

function TypingBubble() {
  return (
    <div className="flex gap-2.5">
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
        <Image src="/logo.jpeg" alt="Strategemist" width={20} height={20} className="rounded-[3px]" />
      </span>
      <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-muted/60 px-4 py-3">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
            transition={{ duration: 1, delay: i * 0.18, repeat: Infinity }}
          />
        ))}
      </div>
    </div>
  )
}
