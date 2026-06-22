import { PageShell } from '@/components/layout/PageShell';
import { ComingSoon } from '@/components/ui/ComingSoon';
import { getSection } from '@/config/sections';

const section = getSection('fitness');

export default function Fitness() {
  return (
    <PageShell theme="fitness">
      <ComingSoon section={section} />
    </PageShell>
  );
}
