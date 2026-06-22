import { Link } from 'react-router-dom';
import { SectionMeta } from '@/config/sections';
import { Stamp } from '@/components/ui/Stamp';

export function SectionCard({ section, index }: { section: SectionMeta; index: number }) {
  // Alternating tilt keeps the grid from feeling too uniform — a small nod
  // to "stamped by hand" rather than stamped-out-of-a-template.
  const tilt: 'left' | 'right' = index % 2 === 0 ? 'left' : 'right';

  return (
    <Link
      to={section.path}
      data-theme={section.theme}
      className="group relative flex flex-col justify-between gap-6 rounded-[var(--radius-card)] border border-line bg-paper-raised p-6 transition-transform hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-semibold">{section.label}</h3>
          <p className="mt-1 text-sm text-ink-soft">{section.tagline}</p>
        </div>
        <Stamp
          code={section.stampCode}
          tilt={tilt}
          interactive
          className="shrink-0 h-16 w-16 text-xs"
        />
      </div>

      <span className="font-mono text-[11px] uppercase tracking-widest text-section">
        {statusLabel(section.status)} →
      </span>
    </Link>
  );
}

function statusLabel(status: SectionMeta['status']) {
  switch (status) {
    case 'live':
      return 'Open';
    case 'building':
      return 'Under construction';
    case 'archived':
      return 'Archived';
    default:
      return 'Coming together';
  }
}
