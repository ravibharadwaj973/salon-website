import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Salon Grow — software for Indian salon chains', template: '%s · Salon Grow' },
  description:
    'The diary, the till and the customer book for a salon — with the messaging that brings people back. Built for Indian salons, GST invoices included.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-canvas/70 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 text-sm font-bold text-white shadow-[0_4px_12px_-4px_rgba(234,88,12,0.8)]">
                S
              </span>
              <span className="text-base font-semibold tracking-tight">Salon Grow</span>
            </Link>

            <nav className="ml-auto hidden items-center gap-6 text-sm text-ink-muted sm:flex">
              <Link href="/#what-it-does" className="hover:text-ink">What it does</Link>
              <Link href="/#how-it-works" className="hover:text-ink">How it works</Link>
              <Link href="/pricing" className="hover:text-ink">Pricing</Link>
            </nav>

            <Link
              href="/demo"
              className="btn-primary ml-auto h-9 px-5 sm:ml-0"
            >
              Book a demo
            </Link>
          </div>
        </header>

        {children}

        <footer className="mt-24 border-t border-stone-200 bg-white">
          <div className="mx-auto max-w-6xl px-5 py-12 text-sm text-ink-muted">
            <p className="flex items-center gap-2.5 font-medium text-ink">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-700 text-xs font-bold text-white">
                S
              </span>
              Salon Grow
            </p>
            <p className="mt-1 max-w-xl leading-relaxed">
              Made for Indian salons and spas. GST invoices, WhatsApp that actually reaches people, and payments
              recorded the way they really happen — by hand, at the counter.
            </p>
            <p className="mt-4 text-xs text-ink-subtle">
              © {new Date().getFullYear()} Salon Grow. No payment gateway, no card details, ever.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
