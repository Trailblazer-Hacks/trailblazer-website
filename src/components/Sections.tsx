import { publicAsset } from '@/lib/paths';
import { event } from '@/content/event';
import { Spark } from './Rocket';

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <p className="section-label">
      <span>{number} /</span> {children}
    </p>
  );
}

export function About() {
  return (
    <section className="about section-pad" id="about" aria-labelledby="about-title">
      <SectionLabel number="01">THE MISSION</SectionLabel>
      <div className="about-layout">
        <h2 id="about-title">
          You bring
          <br />
          the <span className="serif-word">what if.</span>
          <br />
          We bring
          <br />
          the liftoff
          <Spark />{' '}
        </h2>
        <div className="about-copy">
          <p className="lead">
            Great things start with
            <br />
            “what if we tried this?”
          </p>
          <p>
            Trailblazer Hacks is a new high-school hackathon by the Cupertino Entrepreneurship
            Society. A day for curious minds, ambitious ideas, and making that first version real.
          </p>
          <p>
            Never built something before? Start here. Already have a project idea? Take it somewhere
            unexpected.
          </p>
          <a href="#mission" className="text-link">
            Find your spark <span aria-hidden="true">↗</span>
          </a>
          <div className="about-stamp">
            <img
              src={publicAsset('/brand-patch.webp')}
              width="94"
              height="94"
              alt="Original Trailblazer Hacks pixel-rocket mission patch"
              loading="lazy"
            />
            <div>
              <span>LESS “SOMEDAY.”</span>
              <strong>MORE DAY ONE.</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Mission() {
  return (
    <section className="mission section-pad" id="mission" aria-labelledby="mission-title">
      <div className="section-top">
        <SectionLabel number="02">POSSIBLE TRAJECTORIES</SectionLabel>
        <span className="micro">BIG IDEAS START SMALL</span>
      </div>
      <div className="mission-heading">
        <h2 id="mission-title">
          No blueprint.
          <br />
          <span className="serif-word">Just possibility.</span>
        </h2>
        <p>
          A few places to start. These are idea prompts, not official competition tracks. Challenges
          and prizes will be announced.
        </p>
      </div>
      <div className="idea-grid">
        <article>
          <div className="idea-art art-code" aria-hidden="true">
            <span className="code-back" />
            <span className="code-front">
              &lt; / &gt;<i>HELLO, POSSIBILITY_</i>
            </span>
          </div>
          <span className="micro">01 / MAKE SOMETHING USEFUL</span>
          <h3>Solve a real problem.</h3>
          <p>The little frustration in your day could be the start of your next great app.</p>
        </article>
        <article>
          <div className="idea-art art-world" aria-hidden="true">
            <div className="pixel-planet">
              <span />
              <i />
            </div>
            <Spark />
          </div>
          <span className="micro">02 / THINK BEYOND YOURSELF</span>
          <h3>Build for your world.</h3>
          <p>Your school. Your neighborhood. A community you care about. Start there.</p>
        </article>
        <article>
          <div className="idea-art art-experiment" aria-hidden="true">
            <span className="block block-one" />
            <span className="block block-two" />
            <span className="block block-three" />
            <Spark />
          </div>
          <span className="micro">03 / FOLLOW YOUR CURIOSITY</span>
          <h3>Try the unexpected.</h3>
          <p>A game, a strange little tool, an experiment. Make the thing you want to exist.</p>
        </article>
      </div>
    </section>
  );
}

const flightPlan = [
  {
    time: event.setupTime,
    label: 'Before the countdown',
    description: 'Organizer setup. This early arrival is for the event team.',
    tag: 'ORGANIZERS',
  },
  {
    time: event.startTime,
    label: 'The day begins.',
    description: 'The event opens. Bring your curiosity and get ready to build.',
    tag: 'EVENT START',
  },
  {
    time: 'During the day',
    label: 'Make something happen.',
    description:
      'The detailed program, workshop times, and submission schedule will be shared before the event.',
    tag: 'PROGRAM TO COME',
  },
  {
    time: event.endTime,
    label: 'One day. A new beginning.',
    description: 'The event closes. Take your ideas beyond the launch pad.',
    tag: 'EVENT CLOSE',
  },
];

export function Schedule() {
  return (
    <section className="schedule section-pad" id="schedule" aria-labelledby="schedule-title">
      <div className="schedule-intro">
        <SectionLabel number="03">THE FLIGHT PLAN</SectionLabel>
        <h2 id="schedule-title">
          One day.
          <br />
          <span className="serif-word">All in.</span>
        </h2>
        <p>
          {event.dateLabel} · {event.hours}
          <br />
          Sunnyvale, California
        </p>
        <span className="schedule-note">
          Event year and detailed program
          <br />
          await organizer confirmation.
        </span>
        <div className="schedule-orbit" aria-hidden="true">
          <Spark />
          <span>
            {event.durationHours}
            <span>HOUR EVENT</span>
          </span>
        </div>
      </div>
      <ol className="timeline">
        {flightPlan.map((item) => (
          <li key={item.time}>
            <div className="timeline-time">{item.time}</div>
            <div>
              <span className="micro">{item.tag}</span>
              <h3>{item.label}</h3>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Venue() {
  return (
    <section className="venue" id="venue" aria-labelledby="venue-title">
      <div
        className="venue-map"
        role="img"
        aria-label="Decorative street-grid illustration, not a navigational map"
      >
        <div className="map-grid" />
        <span className="map-street street-one">CROSSMAN AVE</span>
        <span className="map-street street-two">SUNNYVALE / CALIFORNIA</span>
        <div className="map-block map-block-one" />
        <div className="map-block map-block-two" />
        <div className="map-block map-block-three" />
        <div className="map-pin">
          <Spark />
          <span>MEET YOU HERE.</span>
        </div>
        <span className="map-caption">ILLUSTRATED LOCATION · NOT TO SCALE</span>
      </div>
      <div className="venue-copy">
        <SectionLabel number="04">THE LAUNCH SITE</SectionLabel>
        <h2 id="venue-title">
          Big ideas.
          <br />
          <span className="serif-word">Real place.</span>
        </h2>
        <p className="venue-host">Hosted at {event.venue}</p>
        <address>{event.address}</address>
        <p>
          A day of building, right here in the Bay Area. Entrance, parking, and check-in details
          will be shared before the event.
        </p>
        <a
          className="button button-dark"
          href={event.directionsUrl}
          target="_blank"
          rel="noreferrer"
        >
          Get directions <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </section>
  );
}

const questions = [
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

export function FAQ() {
  return (
    <section className="faq section-pad" id="faq" aria-labelledby="faq-title">
      <div>
        <SectionLabel number="05">PRE-FLIGHT CHECK</SectionLabel>
        <h2 id="faq-title">
          Good
          <br />
          <span className="serif-word">questions.</span>
        </h2>
        <p>
          A little clarity before
          <br />a big adventure.
        </p>
      </div>
      <div className="faq-list">
        {questions.map(([question, answer]) => (
          <details key={question}>
            <summary>
              {question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Registration() {
  return (
    <section
      className="registration section-pad"
      id="register"
      aria-labelledby="registration-title"
    >
      <div className="registration-top">
        <SectionLabel number="06">YOUR NEXT CHAPTER</SectionLabel>
        <Spark />
      </div>
      <p className="eyebrow">
        {event.dateLabel.toUpperCase()} · {event.cityLabel.toUpperCase()}
      </p>
      <h2 id="registration-title">
        EVERY GREAT IDEA
        <br />
        STARTS <span className="serif-word">somewhere.</span>
      </h2>
      <div className="registration-bottom">
        <p>
          Make this your somewhere.
          <br />
          Bring a little curiosity. Leave with something real.
        </p>
        <div className="registration-status">
          {event.registrationUrl ? (
            <a className="button" href={event.registrationUrl}>
              Register now <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <>
              <strong>Registration is coming soon</strong>
              <span>
                The official link will appear here.
                <br />
                No sign-ups are being collected yet.
              </span>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
