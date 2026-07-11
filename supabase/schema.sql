-- Belgium Vignette newsletter subscribers
-- Run in your Supabase SQL editor

create table if not exists public.belgium_vignette_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  locale text not null default 'nl' check (locale in ('nl', 'fr', 'en', 'de')),
  consent_given_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create index if not exists idx_bv_subscribers_locale
  on public.belgium_vignette_subscribers (locale);

alter table public.belgium_vignette_subscribers enable row level security;

-- No public read/write policies — access via service role only (API route)
