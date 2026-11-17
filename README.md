# Full-Stack Developer Portfolio

Premium Next.js portfolio with an editable data layer, theme switching, responsive sections, contact delivery, and a Supabase-authenticated admin area.

## Start locally

1. Copy `.env.example` to `.env.local` and fill in every value.
2. In Supabase SQL Editor, run `supabase/migrations/001_contact_submissions.sql`.
3. Create an email/password user in Supabase Auth. Add that exact email to `ADMIN_EMAILS`.
4. Run `npm install`, then `npm run dev`.

## Contact delivery

The contact endpoint validates, sanitizes, rate-limits per server instance, persists to Supabase with the service-role key, then sends notification email using Resend. Use a verified Resend sender domain in `app/api/contact/route.ts` before production; `onboarding@resend.dev` is only suitable for Resend test setups.

## Personalizing

Edit `lib/site-data.ts` for name, social links, location, skills, projects, and experience. Project URLs are deliberately omitted until you supply verified links. Put a public downloadable resume at `public/resume.pdf`.

## Admin dashboard

`/admin` requires a real Supabase Auth email/password user and checks it against the comma-separated `ADMIN_EMAILS` server variable. It has no default credentials. The API routes also use the Supabase server key and reject unauthorized requests. Do not expose `SUPABASE_SERVICE_ROLE_KEY`.

## Deploy to Vercel

Import the repository, set all `.env.example` values in Vercel Project Settings, run the SQL migration, configure a verified Resend sending domain, then deploy. Set `metadataBase`, sitemap, robots URL, profile links, and contact email to your production domain/identity before launch.
