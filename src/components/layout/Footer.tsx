import { site } from '@/config/site';

export function Footer() {
  return (
    <footer className="border-t border-line mt-16">
      <div className="max-w-[var(--content-width)] mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="font-mono text-xs text-ink-soft tracking-wide">
          {site.title.toUpperCase()} · EST. {site.establishedYear}
        </p>
        <p className="text-sm text-ink-soft italic">{site.tagline}</p>
      </div>
    </footer>
  );
}
