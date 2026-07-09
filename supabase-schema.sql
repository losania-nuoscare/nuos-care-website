-- NUOS Care — waitlist table
-- Run this once in the Supabase dashboard: SQL Editor → New query → paste → Run.

create table if not exists public.waitlist (
  id         bigint generated always as identity primary key,
  email      text        not null unique,
  source     text,
  lang       text,
  created_at timestamptz not null default now()
);

-- Enable Row Level Security. With RLS on and NO policies, the public "anon" key
-- can neither read nor write this table — only the server-side service-role key
-- (used by api/waitlist.js) can insert, because service_role bypasses RLS.
alter table public.waitlist enable row level security;
