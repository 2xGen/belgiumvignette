# BelgiumVignette.be

Independent information site about Belgium's planned digital road vignette (from 1 May 2027). Sister site to [Tolls.be](https://tolls.be) — separate brand, design, and content.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Supabase (newsletter)
- Vercel Analytics (consent-gated)

## Languages

- Dutch (`/nl`) — default
- French (`/fr`)
- English (`/en`)
- German (`/de`)

## Getting started

```bash
npm install
cp .env.example .env.local
# Fill in Supabase credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/nl`.

## Environment variables

| Variable | Description |
|---|---|
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key (server-side only) |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, e.g. `https://belgiumvignette.be` |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console HTML tag (content value) |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Bing Webmaster Tools meta tag (content value) |

## Analytics & GDPR cookies

- **Vercel Analytics** (`@vercel/analytics/next`) loads only after explicit consent.
- Cookie banner: Accept all / Reject all / granular settings (equal choice).
- Users can change preferences anytime via **Cookie settings** in the footer.
- Privacy policy documents legal bases (GDPR Art. 6) for essential storage and analytics.

## Search Console & Bing

1. Add the site in [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Choose the **HTML meta tag** verification method.
3. Copy each **content** value into `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and `NEXT_PUBLIC_BING_SITE_VERIFICATION` in Vercel.
4. Redeploy and verify in each dashboard.
5. Submit `https://belgiumvignette.be/sitemap.xml` in both tools.

## Supabase setup

1. Create a Supabase project (or reuse an existing one).
2. Run `supabase/schema.sql` in the SQL editor.
3. Add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` to `.env.local` and Vercel.

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Set environment variables (same as above).
4. Deploy — Vercel detects Next.js automatically.

Custom domain: point `belgiumvignette.be` to Vercel and set `NEXT_PUBLIC_SITE_URL=https://belgiumvignette.be`.

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Contact

info@tolls.be

## Disclaimer

This is an independent information site, not affiliated with Belgian authorities. Content is based on published plans (March 2026) and may change.
