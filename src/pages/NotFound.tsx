import { Link } from 'react-router-dom';
import { PageShell } from '@/components/layout/PageShell';
import { Stamp } from '@/components/ui/Stamp';

export default function NotFound() {
  return (
    <PageShell>
      <div className="flex flex-col items-start gap-6">
        <Stamp code="404" label="not found" tilt="left" />
        <h1 className="font-display text-4xl font-semibold">
          Nothing logged here.
        </h1>
        <p className="text-ink-soft max-w-prose">
          This page doesn&rsquo;t exist yet, or it moved. Head back to the index.
        </p>
        <Link
          to="/"
          className="font-mono text-xs uppercase tracking-widest text-stamp hover:underline"
        >
          ← Back home
        </Link>
      </div>
    </PageShell>
  );
}
