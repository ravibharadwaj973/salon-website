/**
 * THE DETAILS ONLY YOU CAN FILL IN.
 *
 * The policy and the terms are written and specific; these five values are not
 * things a developer should invent. They go in one file rather than scattered
 * through two long documents, because a legal name that appears in nine places
 * and gets changed in eight is worse than one that was never filled in.
 *
 * Google's OAuth review reads the privacy policy. A policy that names no legal
 * entity and gives no contact address is a common reason for a rejection, so
 * these are not optional before you submit.
 *
 * ── Before this goes live ────────────────────────────────────────────────
 *
 * Replace every value marked TODO. `legalName` must match the name on the
 * registration document you verify the business with — the same exactness Meta
 * asks for, and for the same reason.
 */
export const LEGAL = {
  /** TODO: exactly as on your GST certificate / incorporation document. */
  entity: 'TODO — your registered legal name',

  /** TODO: the registered address. A real postal address, not a PO box. */
  address: 'TODO — registered address',

  /**
   * Where privacy questions and deletion requests arrive.
   *
   * On your own domain rather than a personal Gmail: Google's reviewers check
   * that the contact address belongs to the same domain as the policy, and a
   * salon owner reading it should see a company, not a person.
   */
  contactEmail: 'privacy@parlon.jharavi.in',

  /** TODO: the city whose courts have jurisdiction. */
  jurisdiction: 'TODO — city, India',

  /**
   * Shown on both documents. Change it whenever the text changes materially —
   * a policy with a stale date reads as one nobody maintains.
   */
  updated: '1 October 2026',
} as const;

/** The product name, so the two documents cannot disagree about it. */
export const PRODUCT = 'Parlon';
