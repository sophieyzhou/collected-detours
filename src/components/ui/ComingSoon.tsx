import { SectionMeta } from '@/config/sections';
import { Stamp } from '@/components/ui/Stamp';

export function ComingSoon({ section }: { section: SectionMeta }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-5">
        <Stamp code={section.stampCode} label={section.status} />
        <div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold">{section.label}</h1>
          <p className="mt-2 text-ink-soft max-w-prose">{section.tagline}</p>
        </div>
      </div>

      <div className="mt-10 rounded-[var(--radius-card)] border border-dashed border-line bg-paper-raised p-6 md:p-8">
        <p className="font-mono text-[11px] uppercase tracking-widest text-section mb-4">
          Planned for this section
        </p>
        <ul className="space-y-3">
          {section.blueprint.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-section" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-sm text-ink-soft">
        Nothing here yet — this page is reserving its place in the nav and its
        spot in the design system so the real build can drop straight in.
      </p>
    </div>
  );
}
