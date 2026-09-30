'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'

const schema = z.object({
  name: z.string().min(2, 'Enter your name'),
  email: z.string().email('Enter a valid email'),
  company: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().min(10, 'Tell us a bit more (min 10 chars)'),
})
type FormValues = z.infer<typeof schema>

const INTERESTS = ['AI Consulting', 'AI Proof of Concept', 'Big Data', 'Generative AI', 'Data Engineering', 'AI Agents', 'MLOps', 'AI Integration', 'Cybersecurity', 'Quantum', 'Other']

export function ContactForm() {
  const { toast } = useToast()
  const [submitted, setSubmitted] = React.useState(false)
  const { register, handleSubmit, setValue, reset, watch, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', company: '', interest: '', message: '' },
  })
  const interest = watch('interest')

  const onSubmit = async (values: FormValues) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Submission failed')
      setSubmitted(true)
      reset()
      toast({ title: 'Briefing request received', description: 'A principal will reach out within one business day.' })
    } catch (e) {
      toast({ title: 'Something went wrong', description: e instanceof Error ? e.message : 'Submission failed', variant: 'destructive' })
    }
  }

  if (submitted) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-border/60 bg-card/50 p-8 text-center">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-primary/12 text-primary ring-1 ring-primary/30">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-5 text-xl font-semibold">Request received</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">Thanks—we&apos;ll be in touch within one business day with a point of view and a proposed next step.</p>
        <Button variant="outline" className="mt-6 rounded-full" onClick={() => setSubmitted(false)}>Send another request</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border border-border/60 bg-card/50 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label className="text-sm font-medium">Name</Label>
          <Input placeholder="Ada Lovelace" {...register('name')} />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label className="text-sm font-medium">Work email</Label>
          <Input type="email" placeholder="ada@company.com" {...register('email')} />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label className="text-sm font-medium">Company</Label>
          <Input placeholder="Acme Corp" {...register('company')} />
        </div>
        <div className="space-y-1.5">
          <Label className="text-sm font-medium">Area of interest</Label>
          <Select value={interest} onValueChange={(v) => setValue('interest', v)}>
            <SelectTrigger><SelectValue placeholder="Select a focus area" /></SelectTrigger>
            <SelectContent>
              {INTERESTS.map((i) => <SelectItem key={i} value={i}>{i}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-1.5">
        <Label className="text-sm font-medium">What outcome are you trying to move?</Label>
        <Textarea rows={5} placeholder="Tell us the business problem you want to solve..." {...register('message')} />
        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
      </div>
      <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">By submitting, you agree to be contacted about your inquiry.</p>
        <Button type="submit" size="lg" disabled={isSubmitting} className="gap-2 rounded-full sm:w-auto">
          {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <>Contact us <ArrowRight className="h-4 w-4" /></>}
        </Button>
      </div>
    </form>
  )
}
