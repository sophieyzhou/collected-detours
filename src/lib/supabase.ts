import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Loud in dev so a missing .env is obvious immediately, harmless for now
  // since no page actually calls Supabase yet. Once a section (e.g.
  // Fitness) starts using `supabase`, consider surfacing this as real UI
  // state instead of just a console warning.
  console.warn(
    '[supabase] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY are not set. ' +
      'Copy .env.example to .env and fill in your project credentials.'
  );
}

/**
 * Shared client, safe to import anywhere. The anon key is meant to be
 * public — it ships in the built JS bundle for everyone to see — the
 * actual security boundary is Row Level Security policies configured in
 * the Supabase dashboard, not secrecy of this key. Don't put a service
 * role key here; that one stays server-side only (you don't have a
 * server, so it shouldn't exist in this codebase at all).
 */
export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '');
