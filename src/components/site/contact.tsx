'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowRight, CheckCircle2, Loader2, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { SectionHeading } from './section-heading'

const schema = z.object({
  name: z.string().min(2, 'Enter your name'),
  email: z.string().email('Enter a valid email'),
  company: z.string().optional(),
  role: z.string().optional(),
  interest: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, 'Tell us a bit more (min 10 chars)'),
})

type FormValues = z.infer<typeof schema>

const INTERESTS = [
  'Predictive Analytics',
  'Applied AI',
  'Intelligent Automation',
  'Intelligent Systems',
  'Not sure yet',
]
const BUDGETS = ['< $100k', '$100k – $500k', '$500k – $1M', '$1M+', 'Exploring']

export function Contact() {
  const { toast } = useToast()
  const [submitted, setSubmitted] = React.useState(false)
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      role: '',
      interest: '',
      budget: '',
      message: '',
    },
  })

  const interest = watch('interest')
  const budget = watch('budget')

  const onSubmit = async (values: FormValues) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data?.error || 'Submission failed')
      }
      setSubmitted(true)
      reset()
      toast({
        title: 'Briefing request received',
        description: 'A principal will reach out within one business day.',
      })
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Submission failed'
      toast({
        title: 'Something went wrong',
        description: msg,
        variant: 'destructive',
      })
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: pitch */}
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="Contact"
              title="Let's size the prize together"
              description="Tell us the outcome you want to move. We'll come back with a point of view, the IP we'd bring, and the business case we'd sign our name to."
            />

            <div className="mt-8 space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'hello@strategemist.com', href: 'mailto:hello@strategemist.com' },
                { icon: Phone, label: 'Phone', value: '+1 (415) 555-0148', href: 'tel:+14155550148' },
                { icon: MapPin, label: 'HQ', value: 'San Francisco · London · Singapore' },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs text-muted-foreground">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-medium hover:text-primary">
                        {c.value}
                      </a>
                    ) : (
                      <div className="text-sm font-medium">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-border/60 bg-card/40 p-5">
              <div className="text-sm font-semibold">What you'll get</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {[
                  'A 30-min working session with a principal',
                  'A point of view on your problem, not a sales pitch',
                  'A sketched business case with the IP we would bring',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
            >
              <Card className="relative overflow-hidden border-border/60 p-6 sm:p-8">
                {submitted ? (
                  <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                      className="grid h-16 w-16 place-items-center rounded-full bg-primary/12 text-primary ring-1 ring-primary/30"
                    >
                      <CheckCircle2 className="h-8 w-8" />
                    </motion.div>
                    <h3 className="mt-5 text-xl font-semibold">Request received</h3>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                      Thanks—we'll be in touch within one business day with a point of view and a
                      proposed next step.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6 rounded-full"
                      onClick={() => setSubmitted(false)}
                    >
                      Send another request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Name" error={errors.name?.message}>
                        <Input placeholder="Ada Lovelace" {...register('name')} />
                      </Field>
                      <Field label="Work email" error={errors.email?.message}>
                        <Input type="email" placeholder="ada@company.com" {...register('email')} />
                      </Field>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Company" error={errors.company?.message}>
                        <Input placeholder="Acme Corp" {...register('company')} />
                      </Field>
                      <Field label="Role" error={errors.role?.message}>
                        <Input placeholder="VP, Operations" {...register('role')} />
                      </Field>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Area of interest">
                        <Select
                          value={interest}
                          onValueChange={(v) => setValue('interest', v)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a capability" />
                          </SelectTrigger>
                          <SelectContent>
                            {INTERESTS.map((i) => (
                              <SelectItem key={i} value={i}>
                                {i}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </Field>
                      <Field label="Engagement size">
                        <Select
                          value={budget}
                          onValueChange={(v) => setValue('budget', v)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a range" />
                          </SelectTrigger>
                          <SelectContent>
                            {BUDGETS.map((b) => (
                              <SelectItem key={b} value={b}>
                                {b}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </Field>
                    </div>

                    <Field label="What outcome are you trying to move?" error={errors.message?.message}>
                      <Textarea
                        rows={5}
                        placeholder="e.g. We want to cut customer churn by 20% this year without burning margin on discounts."
                        {...register('message')}
                      />
                    </Field>

                    <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs text-muted-foreground">
                        By submitting, you agree to be contacted about your inquiry.
                      </p>
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="gap-2 rounded-full sm:w-auto"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            Book a briefing
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}
