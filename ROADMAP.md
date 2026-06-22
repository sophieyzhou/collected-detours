# Roadmap

A working order for building this out, phase by phase. Each phase is scoped
to be a complete, useful chunk of work — nothing requires finishing a later
phase to be worth shipping. Check things off as you go.

---

## Phase 0 — Foundation ✅ done

- [x] Project scaffolding (Vite + React + TypeScript + Tailwind)
- [x] Design tokens (`tokens.css`) and the per-section theming pattern
- [x] Nav, Footer, PageShell, routing for all 7 sections
- [x] Signature `Stamp` component
- [x] `Reveal` scroll-animation pattern (Framer Motion)
- [x] GitHub Pages deploy workflow + SPA routing fix
- [x] Supabase client wired up, env vars flowing through CI

---

## Phase 1 — Backend foundations

**Goal:** a real Supabase project with auth and a schema, before any section UI gets built against it.

- [ ] Create the Supabase project, fill in `.env`
- [ ] Design a **shared schema** for anything grid-feed-shaped — Travel,
      Cooking, and Style all want the same underlying shape (title, date,
      cover photo, body content, tags, "caption-only vs full post" flag).
      One `entries` table with a `section` column, rather than three
      near-identical tables, will save real time later. Sketch this before
      writing any section UI.
- [ ] Separate schema for `workouts` (date, type, distance, duration, notes)
      and `books` (ISBN, title, your rating, your review, status)
- [ ] Turn on Row Level Security on every table from day one — write the
      "only I can write, anyone can read" policy once and reuse the pattern
- [ ] Set up a Storage bucket for photos, with its own RLS policy
- [ ] Enable Supabase Auth (email/password is enough to start)

---

## Phase 2 — The shared content pattern

**Goal:** build the grid-feed + post-detail pattern *once*, well, since three sections reuse it.

- [ ] `PostGrid` — square-thumbnail grid, Instagram-style
- [ ] `PostCard` — full post vs. caption-only variants
- [ ] `PostDetail` — header image, body content, photo carousel, tags
- [ ] `TagFilterBar` — generic filter UI (date, type, country/continent for
      Travel; cuisine/meal type for Cooking; whatever Style ends up needing)
- [ ] Wire all of the above to the `entries` table from Phase 1

This is the highest-leverage phase — get it right once and Travel, Cooking,
and Style all become "plug content into a pattern" rather than three
separate builds.

---

## Phase 3 — Travel (the flagship)

**Goal:** the centerpiece feature.

- [ ] Globe view with `react-globe.gl` — markers for visited places
- [ ] Toggle: arcs (flights) vs. squiggly paths (road trips / through-hikes)
- [ ] Zoom from globe → region → city
- [ ] Click a pin → `PostDetail` (history/culture/geography notes,
      itinerary, reflections, photo carousel)
- [ ] Grid feed view using the Phase 2 components, with date / trip type /
      country / continent filters
- [ ] Toggle between globe view and grid view

This is the biggest single phase — consider it its own multi-step project.

---

## Phase 4 — Cooking

**Goal:** apply the Phase 2 pattern to recipes.

- [ ] Recipe-specific fields on top of `entries`: ingredients, method, tips
- [ ] Tag filters: cuisine, meal type, season
- [ ] Grid + post detail, reusing Phase 2 components directly

---

## Phase 5 — Style

**Goal:** same pattern again, for outfits and home decor.

- [ ] Decide: one grid with a type filter (outfit / decor), or two separate
      grids
- [ ] Reuse Phase 2 components

---

## Phase 6 — Books

**Goal:** the self-hosted Goodreads replacement.

- [ ] `books` table CRUD (your review, your rating, status: reading /
      finished / want-to-read)
- [ ] Open Library API integration — auto-fetch cover art by ISBN
- [ ] Shelf view with sort/filter by status, genre, rating, year

---

## Phase 7 — Writing

**Goal:** the Substack-style section — deliberately the simplest layout in
the whole site, built for reading rather than browsing.

- [ ] Chronological list (no grid)
- [ ] Tag filters by theme
- [ ] Long-form post detail view, minimal chrome

---

## Phase 8 — Fitness

**Goal:** the most interactive remaining piece.

- [ ] `workouts` CRUD against Supabase — the live logging form
- [ ] Monthly calendar, color-coded by workout type, mileage per day
- [ ] Weekly detail view
- [ ] Current-goal tracker (marathon now, configurable later)
- [ ] Filter by workout type
- [ ] *Later:* Garmin sync — scheduled GitHub Action or a Supabase Edge
      Function pulling from Garmin, written into the same `workouts` table

---

## Phase 9 — Music

**Goal:** Spotify stats page.

- [ ] Scheduled sync (GitHub Action or Supabase Edge Function) refreshing a
      Spotify token and writing recent plays / top tracks into Supabase
- [ ] Stats page reading from that table — recently played, top artists,
      playlists

---

## Phase 10 — Real password protection

**Goal:** replace the "nothing's locked yet" state with actual gating.

- [ ] Supabase Auth login flow (you, logging into your own site)
- [ ] Per-section lock, driven by the `lockable` flag already in
      `config/sections.ts`
- [ ] RLS policies that actually enforce the lock server-side, not just a
      UI check

---

## Phase 11 — Polish

- [ ] Real domain name, pointed at GitHub Pages
- [ ] Revisit phone-photo-album sync (realistically: a folder-drop
      workflow, per the README's notes)
- [ ] Accessibility pass: keyboard nav, focus states, alt text on every photo
- [ ] Performance pass on the globe view especially (it's the heaviest page)
- [ ] Update the home page ledger stats to pull real counts instead of "—"

---

## Suggested order of attack

Phases 0–2 are sequential — don't skip the shared pattern in Phase 2, it's
what keeps Travel/Cooking/Style from becoming three separate codebases.
After that, Phases 3–9 can happen in **any order** based on what sounds fun
that week — Travel is the most ambitious, Writing is the easiest win if you
want a quick sense of progress. Phase 10 (real password protection) is
worth doing as soon as there's anything on the site you'd rather keep
private, not necessarily last.
