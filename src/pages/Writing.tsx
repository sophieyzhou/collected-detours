import { PageShell } from '@/components/layout/PageShell';
import { ComingSoon } from '@/components/ui/ComingSoon';
import { getSection } from '@/config/sections';

const section = getSection('writing');

export default function Writing() {
  return (
    <PageShell theme="writing">
      <ComingSoon section={section} />
    </PageShell>
  );
}
