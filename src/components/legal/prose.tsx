import Link from 'next/link';
import { LEGAL } from '@/content/legal';

/**
 * THE SHELL AND THE TYPOGRAPHY FOR A DOCUMENT SOMEBODY HAS TO READ.
 *
 * This site has no typography plugin, so the few elements a legal page needs
 * are built here rather than reached for ad hoc in two files that would drift.
 *
 * ── Why it is set the way it is ──────────────────────────────────────────
 *
 * A privacy policy is read in two completely different ways and has to survive
 * both. A salon owner skims it for one answer — "do you sell my customers'
 * numbers" — and a reviewer at Google reads it end to end looking for specific
 * disclosures. So: a narrow measure, real headings with ids so a section can be
 * linked to directly, and generous spacing. No grey-on-grey small print, which
 * is the visual language of a document written not to be read.
 */

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16 sm:py-24">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-ink">{title}</h1>
        <p className="mt-2 text-xs text-ink-subtle">Last updated {LEGAL.updated}</p>
        <div className="mt-5 text-base leading-relaxed text-ink-muted">{intro}</div>
      </header>

      <div className="mt-10 space-y-10">{children}</div>

      <footer className="mt-16 border-t border-stone-200 pt-6 text-sm text-ink-muted">
        <p>
          Questions about any of this?{' '}
          <a href={`mailto:${LEGAL.contactEmail}`} className="font-medium text-brand-700 underline underline-offset-2">
            {LEGAL.contactEmail}
          </a>
        </p>
        <p className="mt-3">
          <Link href="/" className="underline underline-offset-2 hover:text-ink">
            Back to Parlon
          </Link>
        </p>
      </footer>
    </main>
  );
}

/**
 * A numbered section with an anchor.
 *
 * The id matters more than it looks: support replies and Google's own review
 * correspondence quote a section, and "see the third heading down" is not a
 * reference. `scroll-mt` so a linked heading does not land under the sticky
 * header.
 */
export function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-lg font-semibold tracking-tight text-ink">
        <a href={`#${id}`} className="hover:text-brand-700">
          {title}
        </a>
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-muted">{children}</div>
    </section>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

/** A plain list. Disc markers rather than custom glyphs — this is a document. */
export function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

/**
 * The one-sentence answer, pulled out of the paragraph that explains it.
 *
 * Used sparingly and only for the things people actually arrive worried about:
 * whether their data is sold, whether card details are stored. Somebody who
 * reads nothing else should still leave with those two answers.
 */
export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-xl border border-stone-200 bg-white/70 px-4 py-3 text-sm font-medium leading-relaxed text-ink">
      {children}
    </p>
  );
}
