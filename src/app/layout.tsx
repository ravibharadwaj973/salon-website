import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import './globals.css';
import { ParlonLogo } from '@/components/brand/parlon-logo';

const DESCRIPTION =
  'The diary, the till and the customer book for a salon — with the messaging that brings people back. Built for Indian salons, GST invoices included.';

export const metadata: Metadata = {
  title: { default: 'Parlon — software for Indian salon chains', template: '%s · Parlon' },
  description: DESCRIPTION,
  applicationName: 'Parlon',
  // The mark and the card image come from the files beside this one —
  // icon.svg, apple-icon.png, opengraph-image.png, twitter-image.png — so a
  // link pasted into WhatsApp or Slack unfurls with the logo on it.
  openGraph: {
    type: 'website',
    siteName: 'Parlon',
    title: 'Parlon — software for Indian salon chains',
    description: DESCRIPTION,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parlon — software for Indian salon chains',
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: '#EA580C',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-canvas/70 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5">
            <Link href="/" className="flex items-center gap-2.5">
              <ParlonLogo className="h-8 w-8 shadow-[0_4px_12px_-4px_rgba(234,88,12,0.8)] rounded-xl" />
              <span className="text-base font-semibold tracking-tight">Parlon</span>
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
              <ParlonLogo className="h-7 w-7" />
              Parlon
            </p>
            <p className="mt-1 max-w-xl leading-relaxed">
              Made for Indian salons and spas. GST invoices, WhatsApp that actually reaches people, and payments
              recorded the way they really happen — by hand, at the counter.
            </p>
            <p className="mt-4 text-xs text-ink-subtle">
              © {new Date().getFullYear()} Parlon. No payment gateway, no card details, ever.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
