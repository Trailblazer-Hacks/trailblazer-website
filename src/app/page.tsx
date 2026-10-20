import Link from 'next/link';
import { event } from '@/content/event';
import { LaunchScene } from '@/components/LaunchScene';
import { Enhancements } from '@/components/Enhancements';
import { Footer, Header } from '@/components/Shell';
import { Registration, Venue } from '@/components/Blocks';

const steps = [
  {
    href: '/mission/',
    number: '01',
    title: 'The mission',
    body: 'TBD. The organizers will publish the mission statement here.',
  },
  {
    href: '/flight-plan/',
    number: '02',
    title: 'The flight plan',
    body: `${event.dateLabel}, ${event.hours}. Organizer setup at ${event.setupTime}. Program: TBD.`,
  },
  {
    href: '/sponsors/',
    number: '03',
    title: 'Sponsors',
    body: 'TBD. Sponsors will be announced once they are confirmed.',
  },
  {
    href: '/faq/',
    number: '04',
    title: 'Questions',
    body: 'Answers to the questions the organizers have confirmed so far.',
  },
];

const tickerItems = [
  event.dateLabel,
  event.hours,
  `${event.venue}, Sunnyvale`,
  'Built by you',
  'Small spark. Big liftoff.',
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <p className="eyebrow">A NEW FRONTIER FOR HIGH SCHOOL BUILDERS</p>
          <h1 id="hero-title" aria-label="TRAILBLAZER HACKS">
            TRAILBLAZER
            <br />
            HACKS<span className="title-dot">.</span>
          </h1>
          <p className="hero-lede">
            One day to build something that did not exist before. Scroll to see how it unfolds.
          </p>
          <div className="hero-actions">
            <a className="button" href="#journey">
              Start the journey <span aria-hidden="true">↓</span>
            </a>
            <Link className="button button-ghost" href="/#register">
              Registration updates
            </Link>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>

        <section className="journey" id="journey" data-journey aria-labelledby="journey-title">
          <h2 id="journey-title" className="sr-only">
            How the day unfolds
          </h2>
          <div className="journey-stage">
            <div className="scenes">
              {steps.map((step, index) => (
                <article key={step.href} className="scene" data-step={index} data-active="false">
                  <p className="micro">{step.number} / STEP</p>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  <Link className="text-link" href={step.href}>
                    Open {step.title.toLowerCase()} <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
            <div className="journey-art">
              <LaunchScene />
            </div>
          </div>
        </section>

        <Venue />
        <Registration />
      </main>
      <Footer />
      <Enhancements />
    </>
  );
}
