import type { Metadata } from 'next';
import { SubPage } from '@/components/SubPage';
import { Tbd } from '@/components/Blocks';

export const metadata: Metadata = { title: 'Mission | Trailblazer Hacks' };

export default function MissionPage() {
  return (
    <SubPage kicker="01 / MISSION" title="Mission">
      <Tbd label="Mission statement" note="The organizers are finalizing the mission statement." />
    </SubPage>
  );
}
