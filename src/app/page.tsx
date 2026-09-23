import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CreditCard,
  Gift,
  MessageSquareHeart,
  Receipt,
  Scissors,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
} from 'lucide-react';
import { AppPreview } from '@/components/app-preview';
import { Reviews } from '@/components/reviews';

/**
 * The product page.
 *
 * Written to describe what the software does, not to persuade. A salon owner
 * deciding whether to spend an hour on a trial wants to know what is in it —
 * the sales argument is the feature list being honest.
 */

const MODULES = [
  {
    icon: CalendarDays,
    title: 'The diary',
    body: 'Appointments by chair and by stylist, with the gaps visible. Online booking from your own website or a QR code at the counter. Reminders go out on their own.',
  },
  {
    icon: CreditCard,
    title: 'The till',
    body: 'Bills in a few taps, with or without GST on each one. Split payments across cash, card, UPI, wallet, package or membership. Round-off handled.',
  },
  {
    icon: Users,
    title: 'The customer book',
    body: 'Every visit, every bill, what they had and who did it. Colour formulas, allergies, before-and-after photos. Search by name or number and it is all there.',
  },
  {
    icon: Receipt,
    title: 'GST invoices',
    body: 'Proper tax invoices with HSN/SAC, CGST/SGST or IGST, and a GSTR-ready summary. Or bill without GST when that is the right answer.',
  },
  {
    icon: Scissors,
    title: 'Staff and commission',
    body: 'Attendance, leave, targets and payroll. Commission per service or per stylist, worked out on what was actually billed.',
  },
  {
    icon: Gift,
    title: 'Memberships and packages',
    body: 'Sell ten blow-dries and they redeem themselves at the counter. Memberships with their own pricing, and renewal reminders before they lapse.',
  },
  {
    icon: MessageSquareHeart,
    title: 'Feedback and reviews',
    body: 'Ask after every visit. Happy customers are offered your Google link; unhappy ones reach you privately instead, before they reach the internet.',
  },
  {
    icon: Sparkles,
    title: 'Messaging that brings people back',
    body: 'WhatsApp, SMS and email from one place. Segments like “came once, never again”. Journeys that run without anyone remembering to press send.',
  },
  {
    icon: BarChart3,
    title: 'The numbers',
    body: 'Revenue by branch, by stylist, by service. Retention, rebooking rate, average bill. Which customers are slipping away, while there is still time.',
  },
];

const STEPS = [
  {
    n: '01',
    title: 'Ask us to call',
    body: 'Six boxes on a form, no password and no card. Someone who knows the product rings you back within a working day — fifteen minutes, on how your salon actually runs.',
  },
  {
    n: '02',
    title: 'Put a real day through it',
    body: 'We set your salon up — menu, templates and automations already in place — and you take real bookings and raise real bills on it for a fortnight. The point is to see your own salon in it.',
  },
  {
    n: '03',
    title: 'Decide',
    body: 'At the end of fourteen days we tell you what it costs and ask. Nothing switches off on the day, and nothing is taken from a card you never gave us.',
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ------------------------------------------------------------ hero */}
      <section className="relative overflow-hidden">
        <div className="bloom" aria-hidden />

        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-28 pt-16 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:pt-24">
          <div>
            <p className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-white/70 px-3 py-1 backdrop-blur-sm">
              <Sparkles className="h-3 w-3 text-brand-600" />
              <span className="eyebrow">Built for Indian salons &amp; spas</span>
            </p>

            <h1 className="text-[2.4rem] font-semibold leading-[1.08] sm:text-[3.25rem]">
              The diary, the till and the customer book.{' '}
              <span className="bg-gradient-to-r from-brand-600 to-rose-500 bg-clip-text text-transparent">
                And the messages that bring them back.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              Parlon runs the front desk of a salon — or a chain of them. Appointments, billing with proper GST
              invoices, memberships, staff commission, and the WhatsApp that turns a one-time visit into a regular.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/demo" className="btn-primary h-12">
                Book a demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/pricing" className="btn-ghost h-12">
                See pricing
              </Link>
            </div>

            <p className="mt-5 flex items-center gap-2 text-sm text-ink-subtle">
              <ShieldCheck className="h-4 w-4" />
              No card. No setup fee. Your data is yours to export, always.
            </p>
          </div>

          <div className="lg:pl-4">
            <AppPreview />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ the honest bit */}
      <section className="relative border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="eyebrow">Two things we do differently</p>

          <div className="mt-8 grid gap-10 sm:grid-cols-2">
            <div className="relative">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 ring-1 ring-emerald-200/70">
                <Wallet className="h-4 w-4 text-emerald-700" />
              </span>
              <h2 className="text-lg font-semibold">Money changes hands at your counter, not here.</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                There is no payment gateway in this software and no third-party payment integration anywhere in it. Your
                customer pays you in cash, on your own card machine, or to your own UPI — and your receptionist records
                what was taken. We never touch the money, hold card details, or take a cut of a bill.
              </p>
            </div>

            <div className="relative">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-sky-100 ring-1 ring-sky-200/70">
                <ShieldCheck className="h-4 w-4 text-sky-700" />
              </span>
              <h2 className="text-lg font-semibold">Switching off never means losing your records.</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                If an account is ever switched off — a lapsed plan, a pause, a parting of ways — it becomes read-only,
                not locked. Every customer, bill and appointment stays there to read and export. Your book is yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ what it does */}
      <section id="what-it-does" className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">Everything in one place</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-semibold sm:text-4xl">What is in it</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
          One system for the whole front desk, rather than a diary here and a billing book there.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((module) => (
            <div key={module.title} className="card card-lift p-6">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 ring-1 ring-brand-200/70">
                <module.icon className="h-4 w-4 text-brand-700" />
              </span>
              <h3 className="text-base font-semibold">{module.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{module.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Reviews />

      {/* ------------------------------------------------------ how it works */}
      <section id="how-it-works" className="relative overflow-hidden border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">The trial</p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Fourteen days, the whole product</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
            Not a stripped-down version. You should run out of messages before you run out of features — that is the
            only honest way to find out whether it suits you.
          </p>

          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {STEPS.map((step, index) => (
              <div key={step.n} className="relative">
                {index < STEPS.length - 1 ? (
                  <span
                    className="absolute left-12 right-0 top-5 hidden h-px bg-gradient-to-r from-brand-200 to-transparent sm:block"
                    aria-hidden
                  />
                ) : null}
                <span className="tnum flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-xs font-semibold text-white shadow-[0_6px_16px_-6px_rgba(234,88,12,0.8)]">
                  {step.n}
                </span>
                <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.body}</p>
              </div>
            ))}
          </div>

          <Link href="/demo" className="btn-primary mt-12 h-12">
            Ask us to call you
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ---------------------------------------------------------- example */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-violet-200/50 to-transparent blur-2xl"
            aria-hidden
          />
          <p className="eyebrow">Seen from the other side</p>
          <h2 className="mt-2 max-w-xl text-2xl font-semibold sm:text-3xl">
            Your customers never see any of this.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
            Glow Studio is a salon running on Parlon. Their website is their own — their brand, their words — and the
            booking form on it writes straight into their diary. The moment someone books, it is on the screen at their
            front desk, and the customer has a confirmation.
          </p>
          {/* The example salon's own site. It has no production domain yet, so
              the link is shown only when one is configured — a dead
              "Visit the Glow Studio site" on the marketing page is worse than no
              link at all. Set NEXT_PUBLIC_DEMO_SITE_URL to bring it back. */}
          {process.env.NEXT_PUBLIC_DEMO_SITE_URL ? (
            <a
              href={process.env.NEXT_PUBLIC_DEMO_SITE_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost mt-7 h-11"
            >
              Visit the Glow Studio site
              <ArrowRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </section>
    </main>
  );
}
