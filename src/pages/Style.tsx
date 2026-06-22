import { PageShell } from '@/components/layout/PageShell';
import { ComingSoon } from '@/components/ui/ComingSoon';
import { getSection } from '@/config/sections';

const section = getSection('style');

export default function Style() {
  return (
    <PageShell theme="style">
      <ComingSoon section={section} />
    </PageShell>
  );
}
