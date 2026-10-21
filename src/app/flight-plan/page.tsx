import type { Metadata } from 'next';
import { SubPage } from '@/components/SubPage';
import { Tbd } from '@/components/Blocks';
import { event } from '@/content/event';

export const metadata: Metadata = { title: 'Flight plan | Trailblazer Hacks' };

export default function FlightPlanPage() {
  return (
    <SubPage kicker="02 / FLIGHT PLAN" title="Flight plan">
      <ul className="facts">
        <li>
          <span>Date</span>
          <strong>{event.dateLabel} (year to be confirmed)</strong>
        </li>
        <li>
          <span>Organizer setup</span>
          <strong>{event.setupTime}</strong>
        </li>
        <li>
          <span>Event</span>
          <strong>{event.hours}</strong>
        </li>
        <li>
          <span>Venue</span>
          <strong>
            {event.venue}, {event.address}
          </strong>
        </li>
      </ul>
      <Tbd label="Program" note="Workshops, judging, and submission times are TBD." />
    </SubPage>
  );
}
