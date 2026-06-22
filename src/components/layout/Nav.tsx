import { NavLink } from 'react-router-dom';
import { site } from '@/config/site';
import { sections } from '@/config/sections';

export function Nav() {
  return (
    <header className="border-b border-line bg-paper/95 backdrop-blur sticky top-0 z-20">
      <div className="max-w-[var(--content-width)] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 gap-6">
          <NavLink
            to="/"
            className="font-display text-xl font-semibold tracking-tight shrink-0"
          >
            {site.title}
          </NavLink>

          <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {sections.map((s) => (
              // data-theme here (rather than on a page-level wrapper) is what
              // lets each tab preview its own section color even though the
              // nav bar itself sits outside any single section's page.
              <span key={s.path} data-theme={s.theme}>
                <NavLink
                  to={s.path}
                  className={({ isActive }) =>
                    [
                      'px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors',
                      isActive
                        ? 'bg-section-soft text-section'
                        : 'text-ink-soft hover:text-ink',
                    ].join(' ')
                  }
                >
                  {s.label}
                </NavLink>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
