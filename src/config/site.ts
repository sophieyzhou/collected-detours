/**
 * SITE IDENTITY — edit this file first.
 *
 * Nothing else in the codebase should need the site name, subtitle, or
 * tagline hard-coded into it. Pull from here instead.
 */
export const site = {
  /** Shows in the nav wordmark and the browser tab */
  title: 'Collected Detours',

  /**
   * Primary subtitle — shown large on the home page hero.
   * Poetic, makes you pause, implies intentionality.
   */
  subtitle: 'the roads I didn\u2019t have to take',

  /**
   * Secondary tagline — shorter, more explanatory.
   * Used in the footer, meta description, social share image.
   */
  tagline: 'the things worth going out of the way for',

  /** Full meta description — shown in search results and link previews */
  description:
    'A personal archive of travel, cooking, fitness, books, music, style, and writing \u2014 the roads, projects, places, and passions that were worth going out of the way for.',

  establishedYear: 2026,

  /**
   * Your domain once you've bought it — update vite.config.ts too
   * (flip USE_CUSTOM_DOMAIN to true and add a CNAME file to public/).
   * Placeholder for now.
   */
  domain: 'collecteddetours.com',
} as const;
