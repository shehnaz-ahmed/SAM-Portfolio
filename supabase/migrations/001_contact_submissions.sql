create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null, email text not null, subject text not null,
  project_type text, message text not null,
  status text not null default 'unread' check (status in ('unread','read','replied')),
  created_at timestamptz not null default now()
);
alter table public.contact_submissions enable row level security;
-- The browser has no table policies: all writes and administration occur server-side.
