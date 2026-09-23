/**
 * WHAT SALONS SAY ABOUT PARLON.
 *
 * Empty on purpose, and it must stay that way until there is something true to
 * put in it. Every entry here is a real person's words, published with their
 * permission — a quote nobody said, attributed to a salon that does not exist,
 * is a fabricated endorsement whatever the intention behind it. It is also the
 * easiest thing in the world for a prospective customer to check: they will
 * search the salon name.
 *
 * The section renders nothing while this list is empty, so the site simply does
 * not have a reviews section yet rather than having an awkward one. Add the
 * first real quote and it appears.
 *
 * Asking for one: after a salon has been running a month or two, ask the owner
 * for a sentence about what changed, and for permission to use their name and
 * their salon's. Keep the wording theirs, including the unpolished bits — a
 * testimonial that reads like marketing copy persuades nobody.
 */
export interface Review {
  /** Their words. Lightly trimmed at most, never rewritten. */
  quote: string;
  /** The person who said it. */
  name: string;
  /** Their role, if it helps — "Owner", "Front desk". */
  role?: string;
  salon: string;
  city?: string;
  /** Out of 5. Omit rather than guess. */
  rating?: number;
  /** A photo in /public. Optional; initials are shown otherwise. */
  photo?: string;
}

export const REVIEWS: Review[] = [
  // Nothing here yet. See the note above before adding anything.
];
