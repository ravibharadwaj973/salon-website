/**
 * The public API this site talks to.
 *
 * Only the unauthenticated surface is used here — `/public/enquiry` and nothing
 * else — so there is no token, no cookie and no session to manage. Set
 * NEXT_PUBLIC_API_URL to wherever the backend is; it falls back to the local
 * port the backend dev server uses.
 */
export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'https://api.jharavi.in/api/v1';

/** Where a new trial account signs in afterwards. */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://salon-frontend-dusky.vercel.app';

export class ApiError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
    message: string,
    readonly details?: unknown,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

interface Envelope<T> {
  success: boolean;
  data?: T;
  error?: { code: string; message: string; details?: unknown };
}

export async function postPublic<T>(path: string, body: unknown): Promise<T> {
  const response = await fetch(`${API_URL}/public/${path.replace(/^\//, '')}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const payload = (await response.json().catch(() => null)) as Envelope<T> | null;

  if (!response.ok || !payload?.success) {
    throw new ApiError(
      response.status,
      payload?.error?.code ?? 'UNKNOWN',
      payload?.error?.message ?? 'Something went wrong. Please try again.',
      payload?.error?.details,
    );
  }

  return payload.data as T;
}
