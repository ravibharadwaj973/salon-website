'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { APP_URL, ApiError, postPublic } from '@/lib/api';

interface TrialResult {
  salon: { name: string; slug: string };
  owner: { email: string };
  trialEndsAt: string;
}

/**
 * The sign-up. Six fields, because every extra one is a person who does not
 * finish — the city is the only optional thing, and it is there because a
 * salon's own website later wants it.
 *
 * On success this really does create a salon: a tenant, an owner login, a
 * branch, a service menu and the default message templates. The next screen
 * sends them to the app to sign in with the password they just chose.
 */
export function TrialForm() {
  const [form, setForm] = useState({
    salonName: '',
    city: '',
    phone: '',
    ownerName: '',
    email: '',
    password: '',
  });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<TrialResult | null>(null);

  const set = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    if (form.password.length < 8) {
      setError('Please choose a password of at least 8 characters.');
      return;
    }

    setBusy(true);
    try {
      setDone(
        await postPublic<TrialResult>('trial', {
          salonName: form.salonName.trim(),
          city: form.city.trim() || undefined,
          phone: form.phone.trim(),
          ownerName: form.ownerName.trim(),
          email: form.email.trim(),
          password: form.password,
        }),
      );
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    const ends = new Date(done.trialEndsAt).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    return (
      <div className="card p-8 sm:p-10">
        <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle2 className="h-5 w-5 text-emerald-600" />
        </span>
        <h2 className="text-xl font-semibold tracking-tight">{done.salon.name} is ready</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          Sign in with <span className="font-medium text-ink">{done.owner.email}</span> and the password you just chose.
          Your trial runs until {ends}.
        </p>

        <a
          href={APP_URL}
          className="btn-primary mt-6 h-12"
        >
          Open your salon
          <ArrowRight className="h-4 w-4" />
        </a>

        <div className="mt-6 rounded-lg bg-stone-50 p-4">
          <p className="text-xs font-medium text-ink">Your booking page is live already</p>
          <p className="mt-1 text-xs leading-relaxed text-ink-muted">
            Customers can book at{' '}
            <span className="font-mono text-ink">/book/{done.salon.slug}</span> — put it on your Instagram bio, or print
            it as a QR code for the counter.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="card p-8 sm:p-10">
      <div className="space-y-4">
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
          <Field label="City">
            <input
              value={form.city}
              onChange={(event) => set('city', event.target.value)}
              placeholder="Bengaluru"
              className={inputClass}
            />
          </Field>
          <Field label="Salon phone" required>
            <input
              required
              inputMode="tel"
              value={form.phone}
              onChange={(event) => set('phone', event.target.value)}
              placeholder="98765 43210"
              className={inputClass}
            />
          </Field>
        </div>

        <Field label="Your name" required>
          <input
            required
            value={form.ownerName}
            onChange={(event) => set('ownerName', event.target.value)}
            placeholder="Priya Sharma"
            className={inputClass}
          />
        </Field>

        <Field label="Your email" required hint="This is your sign-in">
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

        <Field label="Choose a password" required hint="At least 8 characters">
          <input
            required
            type="password"
            autoComplete="new-password"
            minLength={8}
            value={form.password}
            onChange={(event) => set('password', event.target.value)}
            className={inputClass}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={busy}
        className="btn-primary mt-7 h-12 w-full disabled:opacity-60"
      >
        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {busy ? 'Setting up your salon…' : 'Start my free trial'}
      </button>

      <p className="mt-3 text-center text-xs leading-relaxed text-ink-subtle">
        No card needed. We never ask for one, because there is no payment gateway anywhere in this product.
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
