'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

/**
 * THE NAVIGATION, ON A PHONE.
 *
 * The header had `hidden sm:flex` on its links and nothing else, so below 640px
 * the site had no navigation at all — a logo, a "Book a demo" button, and no way
 * to reach pricing or anything else except by scrolling the home page and
 * guessing. Most people arriving from a phone therefore saw one page and one
 * button.
 *
 * ── One list, two renderings ──────────────────────────────────────────────
 *
 * The links live in the layout and are handed to both the desktop row and this
 * button. That is deliberate: a mobile menu maintained separately from the
 * desktop one drifts within a release or two, and the version that goes stale is
 * always the one fewer people on the team look at.
 *
 * ── Why a plain dropdown and not a full-screen sheet ──────────────────────
 *
 * Three links. A sheet that covers the whole screen for three links is theatre,
 * and it takes the header's own "Book a demo" button away at the moment somebody
 * is closest to using it. This drops a panel under the sticky header and leaves
 * the header where it is.
 *
 * ── SHORT screens, not just narrow ones ──────────────────────────────────
 *
 * A phone held sideways is about 380px tall, and the keyboard on a small phone
 * leaves less than that. So the panel is capped at the viewport height minus the
 * header and scrolls inside itself, rather than running off the bottom with no
 * way to reach the last item. `dvh` rather than `vh` because on mobile Safari
 * `vh` is the height with the browser chrome hidden, which is not the height the
 * panel actually has.
 */

export interface NavLink {
  href: string;
  label: string;
}

/**
 * The breakpoint at which the desktop row appears, as a query rather than a
 * class. It has to be stated twice — Tailwind cannot hand its `sm` to
 * JavaScript — so it is named here and used once, and the class it must agree
 * with is `sm:hidden` on the button below.
 */
const DESKTOP = '(min-width: 640px)';

export function SiteNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  /**
   * Closing returns focus to the button that opened it.
   *
   * Without this, dismissing the menu with Escape leaves focus on an element
   * that has just been removed, and the next Tab starts again from the top of
   * the document — which for somebody navigating by keyboard means being thrown
   * back to the logo every time they change their mind.
   */
  const close = useCallback((restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) trigger.current?.focus();
  }, []);

  /** Escape, from anywhere. The one shortcut every menu is expected to have. */
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close]);

  /**
   * A menu left open across a page change is a menu covering the page somebody
   * has just asked for. Each link closes it on the way out, which covers the
   * in-page `#anchor` links where the path never changes; this covers going
   * Back, and any navigation started from elsewhere.
   */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /**
   * Rotate the phone, or drag a desktop window wider, and the button this panel
   * belongs to disappears at 640px. Hiding the panel with a class would leave it
   * open behind the scenes, to reappear on the way back down.
   */
  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP);
    const onChange = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener('change', onChange);
    return () => desktop.removeEventListener('change', onChange);
  }, []);

  /** Opening moves focus into the menu, so the first Tab is inside it. */
  useEffect(() => {
    if (open) panel.current?.querySelector<HTMLAnchorElement>('a')?.focus();
  }, [open]);

  return (
    <>
      <button
        ref={trigger}
        type="button"
        onClick={() => (open ? close() : setOpen(true))}
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label={open ? 'Close menu' : 'Menu'}
        /**
         * 44px square, which is the smallest thing a thumb hits reliably, and
         * `-mr-2` so the icon sits on the page's 20px gutter rather than the
         * button's edge — optical alignment, not mathematical.
         */
        className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-stone-200/60 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:hidden"
      >
        {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
      </button>

      {open ? (
        <>
          {/**
           * Tap anywhere else to dismiss — the gesture people try first, and
           * without it the only way out is to find the same small button again.
           *
           * `absolute … top-full h-[100dvh]` rather than `fixed`, so it starts
           * exactly under the header whatever height the header turns out to be,
           * and stays put with it while the page scrolls beneath.
           */}
          <div
            className="absolute inset-x-0 top-full h-[100dvh] bg-ink/20 sm:hidden"
            onClick={() => close(false)}
            aria-hidden
          />

          <div
            id="site-menu"
            ref={panel}
            /**
             * Opaque, not the header's own frosted glass. The header is a thin
             * strip and the page reads through it as texture; a panel deep enough
             * to hold three rows reads through it as the hero headline sitting
             * behind the links, which is simply hard to read.
             */
            className="nav-drop absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-stone-200 bg-canvas shadow-[0_16px_40px_-24px_rgba(28,25,23,0.35)] sm:hidden"
          >
            {/* px-2 here plus px-3 on each row lands the text on the page's own
                20px gutter, so the links line up under the logo rather than
                four pixels inside it. */}
            <nav aria-label="Site" className="mx-auto max-w-6xl px-2 py-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => close(false)}
                  /**
                   * Full-width rows rather than a centred stack: the whole row is
                   * the target, which is what a thumb is aiming at, and a list of
                   * left-aligned labels is read faster than a centred one.
                   */
                  className="block rounded-xl px-3 py-3 text-[0.9375rem] font-medium text-ink transition-colors hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-500 active:bg-brand-100/70"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      ) : null}
    </>
  );
}
