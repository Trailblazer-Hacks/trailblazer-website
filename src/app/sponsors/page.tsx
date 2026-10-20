import type { Metadata } from 'next';
import { SubPage } from '@/components/SubPage';
import { Tbd } from '@/components/Blocks';

export const metadata: Metadata = { title: 'Sponsors | Trailblazer Hacks' };

export default function SponsorsPage() {
  return (
    <SubPage kicker="03 / SPONSORS" title="Sponsors">
      <Tbd
        label="Sponsor list"
        note="No sponsors have been announced. Sponsor details will appear here once confirmed."
      />
    </SubPage>
  );
}
