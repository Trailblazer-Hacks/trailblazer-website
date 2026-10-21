import type { Metadata } from 'next';
import { SubPage } from '@/components/SubPage';
import { FaqList } from '@/components/Blocks';

export const metadata: Metadata = { title: 'FAQs | Trailblazer Hacks' };

export default function FaqPage() {
  return (
    <SubPage kicker="04 / QUESTIONS" title="FAQs">
      <FaqList />
    </SubPage>
  );
}
