# Field Log

A personal archive site: travel, cooking, fitness, books, music, style, and
writing, all under one roof. This is the **shell** — navigation, routing, and
the design system are fully built; each section is currently a placeholder
page describing what it'll eventually hold.

## Quick start

```bash
npm install
npm run dev       # http://localhost:5173
```

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## What's actually built right now

- Full routing for all 7 sections + home + 404
- The design system: one set of CSS variables (`src/styles/tokens.css`)
  that every page and component pulls from — no hard-coded colors anywhere
  in the components
- Per-section theming via a `data-theme` attribute, so each section gets
  its own accent color while sharing the same typography, spacing, and
  the recurring "stamp" motif
- A working nav, footer, home page with a section grid, and a stub page
  per section that lists what's planned for it (pulled from
  `src/config/sections.ts`, so the plan lives in the code, not just in a
  doc that goes stale)
- A GitHub Actions workflow that builds and deploys to GitHub Pages on
  every push to `main`

## What's *not* built yet (on purpose — see the conversation that produced this)

- The actual content for any section (globe, recipe grid, calendar, etc.)
- Password protection. Plan: Supabase Auth (see the Backend section below)
  rather than a pure client-side encryption gate — real login, not just
  obfuscation. `SectionMeta.lockable` in `config/sections.ts` already
  reserves a spot for this so the data model won't need to change later.
- Spotify / Garmin sync. Both need OAuth secrets that shouldn't live in
  client-side code. The plan: a scheduled GitHub Action that runs on a
  cron, pulls your data using secrets stored in the repo's encrypted
  secrets, and commits a static JSON snapshot the site reads — no live
  backend, stays entirely on GitHub Pages.
- Goodreads sync — not just unbuilt but not really possible: Goodreads
  stopped issuing new developer API keys in December 2020 and the docs are
  gone. The Books section is planned around manual entry + automatic cover
  art from the free, keyless Open Library API instead.
- Photo-album auto-sync from your phone. Google Photos and iCloud have both
  locked their APIs down for this kind of personal use. Realistic version:
  a folder you drop exports into, processed at build time.

## Design system

Everything flows from **`src/styles/tokens.css`**. Read the comment at the
top of that file — it explains the base palette (paper, ink, the "stamp"
accent used identically everywhere) and how each section layers its own
color on top via `[data-theme="..."]`. Change a hex value there and it
updates everywhere that color is used, automatically.

**Type:** Fraunces (display/headers) + Pliant (body) + IBM Plex Mono (dates,
tags, the stamp badges, anything ledger-like). Loaded via Google Fonts in
`index.html`. Pliant ships as a fairly restrained static family (regular +
italic, Swiss-grotesque in spirit), so lean on size, color, and spacing for
emphasis in body copy rather than reaching for heavy weights that don't
really exist in the family.

**Motion:** one reusable pattern, `src/components/ui/Reveal.tsx` — wraps
content that should fade and lift into place as it scrolls into view
(built on Framer Motion's `whileInView`, respects `prefers-reduced-motion`
automatically). It's already used on the home page hero, the ledger stats,
and the section grid. Reach for this same component in every new section
rather than inventing a new scroll animation each time — consistent motion
is as much a part of the design system as the colors and type are. Hover
micro-interactions (card lift, stamp un-rotating on hover) are done in
plain CSS/Tailwind since they don't need JS-driven timing.

**Signature element:** the `Stamp` component (`src/components/ui/Stamp.tsx`)
— a passport/postmark-style badge, same shape everywhere, different color
per section. It's the one motif meant to repeat across every part of the
site so it reads as one continuous archive.

## Adding a new section later

This is the part designed to make the site grow with you without becoming
a mess:

1. Add an entry to the `sections` array in `src/config/sections.ts`
   (path, label, stamp code, tagline, blueprint bullets).
2. Add a matching `[data-theme="yourtheme"]` block to `src/styles/tokens.css`
   with two hex values (`--color-section`, `--color-section-soft`).
3. Copy an existing stub page in `src/pages/` as a starting point.
4. Register the route in `src/App.tsx`.

Nav and the home page grid both read from `config/sections.ts` automatically
— you won't touch either of them.

## Archiving an old section

Set its `status` to `'archived'` in `config/sections.ts` rather than
deleting the entry — keeps the data and gives you a place to special-case
the styling (e.g. greyed out) later if you want.

## Deploying to GitHub Pages

Two things to set before your first deploy, both in `vite.config.ts`:

- `REPO_NAME` — your GitHub repo's name (only matters if you're using the
  default `username.github.io/repo-name` URL)
- `USE_CUSTOM_DOMAIN` — flip to `true` once you've bought a domain and
  pointed it at the repo (add it as a `CNAME` file in `public/` too)

Then either:
- **Automatic** — push to `main`; the included workflow
  (`.github/workflows/deploy.yml`) builds and deploys for you. In the
  repo's Settings → Pages, set the source to "GitHub Actions."
- **Manual** — `npm run deploy` (uses the `gh-pages` package to push
  `dist/` to a `gh-pages` branch).

`public/404.html` + the inline script in `index.html` are what make
client-side routes like `/travel` work correctly on GitHub Pages, which
has no server to fall back to `index.html` on its own.

## Personalizing

Start with `src/config/site.ts` — title, tagline, "established" year, and
footer note all live there. Also update the `<title>` and meta description
in `index.html` to match.

## Stack

React + TypeScript + Vite + React Router + Tailwind (configured to read
the CSS-variable tokens rather than its own default palette) + Framer
Motion for the one scroll-reveal pattern used throughout.

## Backend: Supabase

Decision: Supabase handles anything that needs real persistence — live
workout logging from the site itself, and eventually real password-protected
login (replacing the client-side-encryption stand-in mentioned above with
actual Supabase Auth). The frontend still ships from GitHub Pages; Supabase
is just an external service it talks to over HTTPS, the same way it'll talk
to Open Library or anything else.

Nothing queries Supabase yet — `src/lib/supabase.ts` is a ready client,
waiting for the first section (probably Fitness) that needs it.

**To set it up:**
1. Create a free project at [supabase.com](https://supabase.com).
2. In the dashboard, go to Project Settings → API and copy the Project URL
   and the `anon` `public` key (not the `service_role` key — that one
   should never end up in this codebase).
3. `cp .env.example .env` and paste those two values in.
4. For deploys: add the same two values as repo secrets (Settings →
   Secrets and variables → Actions) named `VITE_SUPABASE_URL` and
   `VITE_SUPABASE_ANON_KEY` — the included workflow already passes them
   into the build.

The anon key is *meant* to be public; it ends up in the built JS bundle
either way. The actual security boundary is Row Level Security policies
you set up per-table in the Supabase dashboard — worth reading Supabase's
RLS docs before the first table goes in, since that's what actually keeps
your data yours.
