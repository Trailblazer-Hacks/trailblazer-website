import { event } from '@/content/event';

export const faqs: ReadonlyArray<readonly [string, string]> = [
  [
    'What is a hackathon?',
    'A hackathon is a focused event where people turn ideas into projects. You explore a problem, build a first version, and share what you made. It is about creating, not breaking into computers.',
  ],
  [
    'Who is Trailblazer Hacks for?',
    'Trailblazer Hacks is being organized for high-school students. Full eligibility and registration requirements will be published when registration opens.',
  ],
  [
    'Do I need coding experience?',
    'You do not need a polished portfolio to be curious. This event is being designed with new builders in mind. Mentor and workshop details will be announced with the program.',
  ],
  [
    'When and where is it?',
    `The announced date is ${event.dateLabel}, ${event.hours}, at ${event.venue}, ${event.address}. The event year is awaiting final confirmation. Organizer setup starts at ${event.setupTime}.`,
  ],
  [
    'How do I register?',
    'Registration is coming soon. The official registration link will appear here once the organizers confirm it. This preview does not collect personal information or reserve places.',
  ],
  [
    'What about teams, prizes, and food?',
    'Team-size rules, competition tracks, prizes, meals, and other participant logistics are still being finalized. We will publish the confirmed details here, rather than make promises before they are ready.',
  ],
  [
    'Who is organizing Trailblazer Hacks?',
    'Trailblazer Hacks is an independent event run through the Cupertino Entrepreneurship Society (CES). It is a new operation, separate from Tinovation.',
  ],
];

export function FaqList() {
  return (
    <div className="faq-list">
      {faqs.map(([question, answer]) => (
        <details key={question} className="faq-item">
          <summary>
            {question}
            <span aria-hidden="true">+</span>
          </summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}

export function Tbd({ label, note }: { label: string; note: string }) {
  return (
    <section className="tbd" aria-label={label}>
      <span className="tbd-tag">TBD</span>
      <h2>{label}</h2>
      <p>{note}</p>
    </section>
  );
}

export function Venue() {
  return (
    <section id="venue" className="venue section-pad" aria-labelledby="venue-title">
      <p className="micro">VENUE</p>
      <h2 id="venue-title">{event.venue}</h2>
      <address>{event.address}</address>
      <a className="button button-dark" href={event.directionsUrl} target="_blank" rel="noreferrer">
        Get directions <span aria-hidden="true">↗</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </section>
  );
}

export function Registration() {
  return (
    <section
      id="register"
      className="registration section-pad"
      aria-labelledby="registration-title"
    >
      <p className="micro">REGISTRATION</p>
      <h2 id="registration-title">Registration</h2>
      {event.registrationUrl ? (
        <a className="button" href={event.registrationUrl}>
          Register now <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <p>
          <strong>Registration is coming soon.</strong> The official link will appear here. No
          sign-ups are being collected yet.
        </p>
      )}
    </section>
  );
}
