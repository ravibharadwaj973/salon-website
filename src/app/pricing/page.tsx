import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Minus } from 'lucide-react';

export const metadata: Metadata = { title: 'Pricing' };

/**
 * Three plans, and an honest line about what Starter deliberately leaves out.
 *
 * Starter runs the salon; it does not market for it. Saying so plainly on the
 * pricing page is better than letting someone buy it, try to send an offer,
 * and find out then.
 */
const PLANS = [
  {
    code: 'starter',
    name: 'Starter',
    price: '₹999',
    line: 'One shop, running properly.',
    for: 'A single salon that wants the diary, the till and the customer book in one place.',
    highlight: false,
    limits: ['1 branch', 'Up to 5 staff logins', '1,000 customers'],
    messages: ['500 WhatsApp utility', '1,000 SMS', '1,000 email'],
    includes: [
      'Appointments and online booking',
      'Billing with GST invoices',
      'Customer book and visit history',
      'Appointment reminders and confirmations',
      'Feedback and Google reviews',
      'Staff attendance and commission',
    ],
    excludes: ['Marketing campaigns', 'Customer segments', 'Offers, win-backs and birthday messages'],
  },
  {
    code: 'grow',
    name: 'Grow',
    price: '₹2,499',
    line: 'When you want them to come back.',
    for: 'A salon ready to market to the customers it already has.',
    highlight: true,
    limits: ['1 branch', 'Up to 20 staff logins', '5,000 customers'],
    messages: ['1,000 WhatsApp utility', '500 WhatsApp marketing', '3,000 SMS', '3,000 email'],
    includes: [
      'Everything in Starter',
      'Campaigns on WhatsApp, SMS and email',
      'Segments — “came once, never again”, lapsed regulars, big spenders',
      'Automated journeys and win-backs',
      'Memberships, packages and loyalty points',
      'Advanced reports',
    ],
    excludes: ['Multiple branches', 'Inventory and suppliers'],
  },
  {
    code: 'run',
    name: 'Run',
    price: '₹4,999',
    line: 'More than one shop.',
    for: 'A chain that needs to see every branch, and the money, in one view.',
    highlight: false,
    limits: ['3 branches (₹999 each beyond)', 'Up to 200 staff logins', 'Unlimited customers'],
    messages: ['2,000 WhatsApp utility', '1,000 WhatsApp marketing', '5,000 SMS', '5,000 email'],
    includes: [
      'Everything in Grow',
      'Multiple branches with regional roles',
      'Inventory, suppliers and expenses',
      'Unit economics and marketing ROI',
      'Role-based permissions you control',
      'Priority support',
    ],
    excludes: [],
  },
];

export default function PricingPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="bloom" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-16 lg:py-24">
      <p className="eyebrow">Per salon, per month</p>
      <h1 className="mt-2 text-4xl font-semibold leading-tight sm:text-5xl">Pricing</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
        Every plan starts the same way — a call, then the same fourteen real days on your own salon. No plan asks for a
        card; you pay us by bank transfer or UPI once you decide, the same way your customers pay you.
      </p>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.code}
            className={`card card-lift relative flex flex-col overflow-hidden p-7 ${
              plan.highlight ? 'border-brand-300/80 ring-2 ring-brand-200/60' : ''
            }`}
          >
            <div className="mb-3 h-5">
              {plan.highlight ? (
                <>
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-brand-200/60 to-transparent blur-2xl"
                    aria-hidden
                  />
                  <p className="relative inline-block rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-2.5 py-0.5 text-2xs font-semibold uppercase tracking-[0.1em] text-white shadow-[0_4px_12px_-4px_rgba(234,88,12,0.9)]">
                    Most chosen
                  </p>
                </>
              ) : null}
            </div>

            <h2 className="text-lg font-semibold">{plan.name}</h2>
            <p className="mt-0.5 text-sm text-ink-muted">{plan.line}</p>

            <p className="mt-5 text-4xl font-semibold tracking-tight">
              {plan.price}
              <span className="ml-1 text-sm font-normal text-ink-muted">/month</span>
            </p>

            <p className="mt-3 min-h-[3rem] text-xs leading-relaxed text-ink-muted">{plan.for}</p>

            <dl className="mt-5 min-h-[5.5rem] space-y-1 border-t border-stone-100 pt-4 text-xs">
              {plan.limits.map((limit) => (
                <dd key={limit} className="text-ink-muted">
                  {limit}
                </dd>
              ))}
            </dl>

            <div className="mt-4 min-h-[7.5rem] rounded-xl bg-gradient-to-br from-brand-50 to-brand-100/60 p-3.5 ring-1 ring-brand-200/60">
              <p className="mb-1 text-2xs font-semibold uppercase tracking-wide text-brand-700">Messages a month</p>
              <ul className="space-y-0.5 text-xs text-brand-900">
                {plan.messages.map((message) => (
                  <li key={message}>{message}</li>
                ))}
              </ul>
            </div>

            <ul className="mt-5 flex-1 space-y-2">
              {plan.includes.map((item) => (
                <li key={item} className="flex gap-2 text-xs leading-relaxed text-ink-muted">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  {item}
                </li>
              ))}
              {plan.excludes.map((item) => (
                <li key={item} className="flex gap-2 text-xs leading-relaxed text-ink-subtle">
                  <Minus className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/demo"
              className={`${plan.highlight ? 'btn-primary' : 'btn-ghost'} mt-7 h-11 w-full`}
            >
              Talk to us
            </Link>
          </div>
        ))}
      </div>

      <div className="card mt-10 p-7">
        <h2 className="text-sm font-semibold">A note on Starter</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted">
          Starter deliberately sends no marketing. Confirmations, reminders, bills and the &ldquo;how was it?&rdquo; ask
          all go out — those are messages your customer asked for by booking. Offers, win-backs and birthday wishes do
          not. If sending those is why you are here, Grow is the plan, and we would rather tell you now than let you
          find out the first time you try.
        </p>
      </div>
      </div>
    </main>
  );
}
