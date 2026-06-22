/**
 * SECTION REGISTRY — the backbone of the whole site.
 *
 * Nav, the home page grid, routing, and each page's theme are all driven
 * from this one array. To add a brand-new section later (say, "Garden" or
 * "Films"):
 *   1. Add an entry here.
 *   2. Add a matching [data-theme="garden"] block in styles/tokens.css.
 *   3. Create src/pages/Garden.tsx (copy an existing stub page as a start).
 *   4. Register the route in App.tsx.
 * Nothing else needs to know about it — Nav and Home pick it up automatically.
 *
 * To retire a section later without deleting its content, set
 * `status: 'archived'` rather than removing the entry.
 */

export type SectionStatus = 'planned' | 'building' | 'live' | 'archived';

export interface SectionMeta {
  /** Matches the [data-theme] value in styles/tokens.css */
  theme: string;
  /** Route path, e.g. '/travel' */
  path: string;
  /** Full name, used in headers */
  label: string;
  /** 2-4 letter code for the passport-stamp badge, e.g. 'TRV' */
  stampCode: string;
  /** One line shown on the home page card */
  tagline: string;
  /** Current build status — shown as a small badge on stub pages */
  status: SectionStatus;
  /**
   * Whether this section will eventually sit behind the password gate.
   * Not enforced yet — the gate itself is a later build step — but kept
   * here now so the data model doesn't need to change when it lands.
   */
  lockable: boolean;
  /** What this section is planned to do, shown on its stub page */
  blueprint: string[];
}

export const sections: SectionMeta[] = [
  {
    theme: 'travel',
    path: '/travel',
    label: 'Travel',
    stampCode: 'TRV',
    tagline: 'Every place, pinned. Every flight, an arc.',
    status: 'planned',
    lockable: false,
    blueprint: [
      'Rotating 3D globe with a marker for every place visited',
      'Toggle view: glowing arcs for flights, squiggly lines for road trips & through-hikes',
      'Zoom from the whole globe down to a single city',
      'Click a pin to open a full post — history, culture, geography or flora & fauna notes, your photo gallery, itinerary, and reflections',
      'Chronological grid feed with thumbnails, filterable by date, trip type, country, and continent',
      'Caption-only entries for trips you haven\u2019t written up yet',
    ],
  },
  {
    theme: 'cooking',
    path: '/cooking',
    label: 'Cooking',
    stampCode: 'CK',
    tagline: 'Everything baked, braised, or otherwise figured out.',
    status: 'planned',
    lockable: false,
    blueprint: [
      'Grid / gallery feed of dishes, newest first',
      'Full recipe posts — photos, ingredients, method, your own tips',
      'Caption-only entries for dishes without a full writeup yet',
      'Tag filters: cuisine, meal type, season, etc.',
    ],
  },
  {
    theme: 'fitness',
    path: '/fitness',
    label: 'Fitness',
    stampCode: 'FIT',
    tagline: 'Whatever the current goal is — right now, 26.2 miles.',
    status: 'planned',
    lockable: false,
    blueprint: [
      'Live tracker for the current goal (marathon now, mountains later)',
      'Monthly calendar, color-coded by workout type, with mileage per day',
      'Weekly detail view with manual workout logging',
      'Garmin data import via a scheduled sync (not a live client-side API call)',
      'Filter by workout type',
    ],
  },
  {
    theme: 'books',
    path: '/books',
    label: 'Books',
    stampCode: 'BK',
    tagline: 'A self-hosted shelf, since Goodreads stopped playing nice.',
    status: 'planned',
    lockable: false,
    blueprint: [
      'Goodreads-style shelf — self-hosted, since Goodreads closed its API to new developers back in 2020',
      'Cover art pulled automatically from the Open Library API by ISBN',
      'Your own written reviews, ratings, and photos of the physical book',
      'Filter and sort by status, genre, rating, and year',
    ],
  },
  {
    theme: 'music',
    path: '/music',
    label: 'Music',
    stampCode: 'MUS',
    tagline: 'What\u2019s on repeat, and the stats to prove it.',
    status: 'planned',
    lockable: false,
    blueprint: [
      'Recently played, top tracks, top artists, and playlists',
      'Synced on a schedule via GitHub Actions, so your Spotify tokens never touch the browser',
    ],
  },
  {
    theme: 'style',
    path: '/style',
    label: 'Style',
    stampCode: 'STY',
    tagline: 'Outfits and rooms, the ones worth remembering.',
    status: 'planned',
    lockable: false,
    blueprint: [
      'Outfit grid / lookbook',
      'Home decor grid',
      'Same caption-only-or-full-post pattern as Travel and Cooking',
    ],
  },
  {
    theme: 'writing',
    path: '/writing',
    label: 'Writing',
    stampCode: 'WRT',
    tagline: 'Longer thoughts, kept somewhere that isn\u2019t a Notes app.',
    status: 'planned',
    lockable: false,
    blueprint: [
      'A Substack-style list of essays and reflections',
      'Simple chronological list, built for reading rather than browsing',
      'Tag filters by theme',
    ],
  },
];

/** Looks up a section by its theme key. Used by each page component. */
export function getSection(theme: string): SectionMeta {
  const found = sections.find((s) => s.theme === theme);
  if (!found) {
    throw new Error(`No section registered for theme "${theme}" — check config/sections.ts`);
  }
  return found;
}
