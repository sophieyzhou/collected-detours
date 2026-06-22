import { PageShell } from '@/components/layout/PageShell';
import { ComingSoon } from '@/components/ui/ComingSoon';
import { getSection } from '@/config/sections';

const section = getSection('music');

export default function Music() {
  return (
    <PageShell theme="music">
      <ComingSoon section={section} />
    </PageShell>
  );
}
