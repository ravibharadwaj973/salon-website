# Salon OS — product website

The public site for the product: what it does, what it costs, and the trial
sign-up. Port **3002**.

```
npm install
npm run dev
```

## How the trial works

The form on `/trial` posts to `POST /public/trial` on the backend, which really
does provision a salon — a tenant on the PILOT plan, an owner login, a branch,
a seeded service menu, message templates and journeys. There is no card and no
payment step anywhere in it.

That endpoint is rate limited to **5 sign-ups per hour per IP**, because it
creates a substantial amount of data per call. If you expect legitimate bursts
(a launch, a demo day), raise `trialSignupLimiter` in
`backend/src/middleware/rateLimit.ts` rather than removing the limit.

## Configuration

| Variable | Default | What it is |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | `http://localhost:4000/api/v1` | The Salon OS API |
| `NEXT_PUBLIC_APP_URL` | `http://localhost:3000` | Where a new account signs in |

Both are `NEXT_PUBLIC_`, so they are baked in at build time and visible in the
browser. That is fine — this site only ever touches the public API and holds no
secret of any kind.

## CORS

The backend must allow this origin. Add it to `CORS_ORIGINS` in the backend's
`.env`, comma separated.
