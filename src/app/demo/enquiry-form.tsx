'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2, Phone } from 'lucide-react';
import { ApiError, postPublic } from '@/lib/api';

/**
 * The only form on this site.
 *
 * It takes a name and a number and stops. No password, no account, nothing
 * created — because a salon owner deciding whether to change the software their
 * business runs on wants a conversation, not a sign-up screen. What it does is
 * put them on a list that a person works through with the phone in their hand.
 *
 * Six fields, two of them optional, and the message box last so nobody feels
 * they have to write an essay to be taken seriously.
 */

const SIZES = ['Just me', '2–5 chairs', '6–15 chairs', 'More than 15', 'Several branches'];

export function EnquiryForm() {
  const [form, setForm] = useState({
    salonName: '',
    city: '',
    contactName: '',
    phone: '',
    email: '',
    size: '',
    message: '',
  });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const set = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setBusy(true);

    try {
      await postPublic<{ received: boolean }>('enquiry', {
        salonName: form.salonName.trim(),
        contactName: form.contactName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        city: form.city.trim() || undefined,
        size: form.size || undefined,
        message: form.message.trim() || undefined,
        source: 'website',
      });
      setDone(true);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Something went wrong. Please try again, or just call us.');
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <div className="card p-8 sm:p-10">
        <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle2 className="h-5 w-5 text-emerald-600" />
        </span>
        <h2 className="text-xl font-semibold tracking-tight">Thank you, {form.contactName.split(' ')[0]}</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          We have your details for {form.salonName}. Someone will ring you on{' '}
          <span className="font-medium text-ink">{form.phone}</span> within one working day — and it will be a person
          who knows the product, not a call centre.
        </p>

        <div className="mt-6 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100/60 p-4 ring-1 ring-brand-200/60">
          <p className="text-xs font-medium text-brand-900">What that call is</p>
          <p className="mt-1 text-xs leading-relaxed text-brand-900/80">
            Fifteen minutes. We ask how your salon runs today, show you the parts that matter to you, and if it looks
            right we set your salon up and you run a real fortnight on it. Nothing is charged, and we never ask for a
            card.
          </p>
        </div>

        <p className="mt-6 flex items-center gap-2 text-xs text-ink-subtle">
          <Phone className="h-3.5 w-3.5" />
          In a hurry? Call us on 080 4718 2200.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="card p-8 sm:p-10">
      <h2 className="text-xl font-semibold tracking-tight">Tell us about your salon</h2>
      <p className="mt-1.5 text-sm text-ink-muted">We will call you back within one working day.</p>

      <div className="mt-7 space-y-4">
        {error ? <p className="rounded-lg bg-rose-50 p-3 text-sm text-rose-700">{error}</p> : null}

        <Field label="Salon name" required>
          <input
            required
            value={form.salonName}
            onChange={(event) => set('salonName', event.target.value)}
            placeholder="Glow Studio"
            className={inputClass}
          />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Your name" required>
            <input
              required
              value={form.contactName}
              onChange={(event) => set('contactName', event.target.value)}
              placeholder="Priya Sharma"
              className={inputClass}
            />
          </Field>
          <Field label="City">
            <input
              value={form.city}
              onChange={(event) => set('city', event.target.value)}
              placeholder="Bengaluru"
              className={inputClass}
            />
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Phone" required hint="we will call this">
            <input
              required
              inputMode="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(event) => set('phone', event.target.value)}
              placeholder="98765 43210"
              className={inputClass}
            />
          </Field>
          <Field label="Email" required>
            <input
              required
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(event) => set('email', event.target.value)}
              placeholder="priya@glowstudio.in"
              className={inputClass}
            />
          </Field>
        </div>

        <Field label="How big is the salon?">
          <select value={form.size} onChange={(event) => set('size', event.target.value)} className={inputClass}>
            <option value="">Rather not say</option>
            {SIZES.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Anything you want us to know?" hint="optional">
          <textarea
            rows={3}
            value={form.message}
            onChange={(event) => set('message', event.target.value)}
            placeholder="We run two branches and keep everything in a notebook. Mostly want the WhatsApp reminders."
            className={`${inputClass} h-auto resize-y py-3 leading-relaxed`}
          />
        </Field>
      </div>

      <button type="submit" disabled={busy} className="btn-primary mt-7 h-12 w-full disabled:opacity-60">
        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {busy ? 'Sending…' : 'Ask us to call'}
      </button>

      <p className="mt-3 text-center text-xs leading-relaxed text-ink-subtle">
        No card, no password, no account created. We use your number to ring you about this and nothing else.
      </p>
    </form>
  );
}

const inputClass =
  'h-11 w-full rounded-xl border border-stone-300 bg-white/90 px-3.5 text-sm shadow-sm outline-none transition-colors placeholder:text-ink-subtle focus:border-brand-400 focus:ring-4 focus:ring-brand-100/70';

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-ink">
        {label}
        {required ? <span className="ml-0.5 text-brand-600">*</span> : null}
        {hint ? <span className="ml-1.5 font-normal text-ink-subtle">{hint}</span> : null}
      </span>
      {children}
    </label>
  );
}
