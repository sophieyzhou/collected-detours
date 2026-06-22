import { PageShell } from '@/components/layout/PageShell';
import { SectionCard } from '@/components/ui/SectionCard';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/config/site';
import { sections } from '@/config/sections';

export default function Home() {
  return (
    <PageShell>
      <section className="border-b border-line pb-10 mb-12">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stamp mb-4">
            Personal archive · est. {site.establishedYear}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] max-w-3xl">
            {site.title}
          </h1>
          {/* The subtitle sits close to the title — same thought, second breath */}
          <p className="mt-3 font-display text-xl md:text-2xl font-light italic text-ink-soft max-w-2xl">
            {site.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-[var(--radius-card)] border border-line overflow-hidden bg-line max-w-2xl">
            {[
              ['Countries', '—'],
              ['Miles logged', '—'],
              ['Recipes', '—'],
              ['Books read', '—'],
            ].map(([label, value]) => (
              <div key={label} className="bg-paper-raised px-4 py-3">
                <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                  {label}
                </dt>
                <dd className="font-display text-2xl font-semibold mt-1">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft mb-5">
            The detours
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((section, i) => (
            <Reveal key={section.path} delay={(i % 3) * 0.08}>
              <SectionCard section={section} index={i} />
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
