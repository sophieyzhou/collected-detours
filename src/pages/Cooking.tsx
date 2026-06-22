import { PageShell } from '@/components/layout/PageShell';
import { ComingSoon } from '@/components/ui/ComingSoon';
import { getSection } from '@/config/sections';

const section = getSection('cooking');

export default function Cooking() {
  return (
    <PageShell theme="cooking">
      <ComingSoon section={section} />
    </PageShell>
  );
}
