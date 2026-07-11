-- =============================================================================
-- Belgium Vignette — email subscribers (Supabase)
-- Site: belgiumvignette.be | Contact: info@tolls.be
-- Run this entire file in the Supabase SQL Editor (safe to re-run).
-- =============================================================================

-- -----------------------------------------------------------------------------
-- Table: belgium_vignette_subscribers
-- Newsletter sign-ups from the Belgium Vignette website.
-- Access: service role only (Next.js API route). No public RLS policies.
-- -----------------------------------------------------------------------------

create table if not exists public.belgium_vignette_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  locale text not null default 'nl'
    check (locale in ('nl', 'fr', 'en', 'de')),
  source text not null default 'belgiumvignette.be',
  consent_given_at timestamptz not null,
  consent_version text not null default '2026-07-11',
  unsubscribed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint belgium_vignette_subscribers_email_key unique (email)
);

comment on table public.belgium_vignette_subscribers is
  'Newsletter subscribers for BelgiumVignette.be (sister site of Tolls.be)';

comment on column public.belgium_vignette_subscribers.email is
  'Subscriber email address (lowercase, trimmed by API)';

comment on column public.belgium_vignette_subscribers.locale is
  'Language preference at sign-up: nl, fr, en, de';

comment on column public.belgium_vignette_subscribers.source is
  'Sign-up source identifier, default belgiumvignette.be';

comment on column public.belgium_vignette_subscribers.consent_given_at is
  'Timestamp when explicit newsletter consent was given (GDPR)';

comment on column public.belgium_vignette_subscribers.consent_version is
  'Privacy policy / consent text version at time of sign-up';

comment on column public.belgium_vignette_subscribers.unsubscribed_at is
  'Set when user unsubscribes; null = active subscriber';

-- Migrate older installs (add columns if missing)
alter table public.belgium_vignette_subscribers
  add column if not exists source text not null default 'belgiumvignette.be';

alter table public.belgium_vignette_subscribers
  add column if not exists consent_version text not null default '2026-07-11';

alter table public.belgium_vignette_subscribers
  add column if not exists unsubscribed_at timestamptz;

alter table public.belgium_vignette_subscribers
  add column if not exists updated_at timestamptz not null default now();

-- Indexes
create index if not exists idx_bv_subscribers_locale
  on public.belgium_vignette_subscribers (locale);

create index if not exists idx_bv_subscribers_active
  on public.belgium_vignette_subscribers (created_at desc)
  where unsubscribed_at is null;

-- Auto-update updated_at
create or replace function public.belgium_vignette_set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists belgium_vignette_subscribers_updated_at
  on public.belgium_vignette_subscribers;

create trigger belgium_vignette_subscribers_updated_at
  before update on public.belgium_vignette_subscribers
  for each row
  execute function public.belgium_vignette_set_updated_at();

-- Row Level Security: enabled, no public policies (API uses service role)
alter table public.belgium_vignette_subscribers enable row level security;

-- Optional: view for active subscribers only (service role / dashboard)
create or replace view public.belgium_vignette_subscribers_active as
  select id, email, locale, source, consent_given_at, consent_version, created_at
  from public.belgium_vignette_subscribers
  where unsubscribed_at is null;

comment on view public.belgium_vignette_subscribers_active is
  'Active newsletter subscribers (not unsubscribed)';

-- Example unsubscribe (run manually or via future admin tool):
-- update public.belgium_vignette_subscribers
-- set unsubscribed_at = now()
-- where email = 'user@example.com';
