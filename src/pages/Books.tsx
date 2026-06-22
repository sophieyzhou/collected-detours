import { PageShell } from '@/components/layout/PageShell';
import { ComingSoon } from '@/components/ui/ComingSoon';
import { getSection } from '@/config/sections';

const section = getSection('books');

export default function Books() {
  return (
    <PageShell theme="books">
      <ComingSoon section={section} />
    </PageShell>
  );
}
