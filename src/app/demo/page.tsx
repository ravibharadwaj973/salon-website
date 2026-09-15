import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { EnquiryForm } from './enquiry-form';

export const metadata: Metadata = {
  title: 'Book a demo',
  description:
    'Tell us about your salon and we will call you back within a working day. No card, no password, no account until we have spoken.',
};

const STEPS = [
  {
    n: '01',
    title: 'You tell us about the salon',
    body: 'Six boxes, most of them optional. Nothing is created and you choose no password — this is a message, not a sign-up.',
  },
  {
    n: '02',
    title: 'We ring you back',
    body: 'Within one working day, and it is someone who knows the product. Fifteen minutes: how your salon runs today, and the parts of this that would actually change that.',
  },
  {
    n: '03',
    title: 'You run a real fortnight on it',
    body: 'If it looks right we set your salon up — service menu, message templates and automations already in place — and you put fourteen real days through it before deciding anything.',
  },
];

const INCLUDED = [
  'The whole product for fourteen days — nothing held back',
  'Your salon set up for you, not an empty screen to fill in',
  'Messages to try the WhatsApp, SMS and email with',
  'No card, no setup fee, and no gateway anywhere in this product',
  'Nothing switches off on day fifteen without us talking to you first',
];

export default function DemoPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="bloom" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1fr_1.05fr] lg:py-24">
        <div>
          <p className="eyebrow">We call you back</p>
          <h1 className="mt-2 text-4xl font-semibold leading-tight sm:text-5xl">Let&rsquo;s have a conversation first</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            You cannot sign yourself up for this, and that is deliberate. Changing the software a salon runs on is not
            a form — so we talk to you, set it up with you, and you try it on your own real days.
          </p>

          <ol className="mt-10 space-y-7">
            {STEPS.map((step) => (
              <li key={step.n} className="flex gap-4">
                <span className="tnum flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-xs font-semibold text-white shadow-[0_6px_16px_-6px_rgba(234,88,12,0.8)]">
                  {step.n}
                </span>
                <div>
                  <h2 className="text-base font-semibold">{step.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="card mt-10 p-6">
            <p className="text-sm font-medium text-ink">What the fortnight includes</p>
            <ul className="mt-3.5 space-y-3">
              {INCLUDED.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-50 to-brand-100 ring-1 ring-brand-200/70">
                    <Check className="h-3 w-3 text-brand-700" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:pt-2">
          <EnquiryForm />
        </div>
      </div>
    </main>
  );
}
