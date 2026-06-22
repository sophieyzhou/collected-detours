interface StampProps {
  /** Short code, e.g. 'TRV', 'CK' — keep it to 2-4 characters */
  code: string;
  /** Small text under the code, e.g. a date or section name */
  label?: string;
  /** Which way the stamp tilts — kept to two presets rather than arbitrary
      degrees so every stamp on the site shares the same hand-stamped feel */
  tilt?: 'left' | 'right' | 'none';
  /** When true, the stamp straightens out on hover of its parent `.group` */
  interactive?: boolean;
  className?: string;
}

const TILT_CLASS: Record<NonNullable<StampProps['tilt']>, string> = {
  left: '-rotate-6',
  right: 'rotate-6',
  none: 'rotate-0',
};

/**
 * The one recurring visual motif of the site: every section gets its own
 * color (via --color-section, set by PageShell) but the *shape* of the
 * stamp is identical everywhere — that repetition is what makes the site
 * feel like one continuous archive instead of seven different sites.
 */
export function Stamp({
  code,
  label,
  tilt = 'left',
  interactive = false,
  className = '',
}: StampProps) {
  return (
    <div
      className={[
        'inline-flex flex-col items-center justify-center rounded-stamp border-[3px] border-dashed px-4 py-3 font-mono uppercase leading-tight',
        TILT_CLASS[tilt],
        interactive ? 'transition-transform duration-300 ease-out group-hover:rotate-0' : '',
        className,
      ].join(' ')}
      style={{ borderColor: 'var(--color-section)', color: 'var(--color-section)' }}
    >
      <span className="text-lg font-medium tracking-widest">{code}</span>
      {label && <span className="text-[10px] tracking-wide opacity-80">{label}</span>}
    </div>
  );
}
