import { PageShell } from '@/components/layout/PageShell';
import { ComingSoon } from '@/components/ui/ComingSoon';
import { getSection } from '@/config/sections';

const section = getSection('travel');

export default function Travel() {
  return (
    <PageShell theme="travel">
      <ComingSoon section={section} />
    </PageShell>
  );
}
