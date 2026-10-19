import { event } from '@/content/event';
import { LaunchScene } from '@/components/LaunchScene';
import { Spark } from '@/components/Rocket';
import { Enhancements } from '@/components/Enhancements';
import { About, Mission, Schedule, Venue, FAQ, Registration } from '@/components/Sections';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Trailblazer Hacks home">
          <Spark />
          <span>
            TRAILBLAZER
            <br />
            HACKS
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">The mission</a>
          <a href="#schedule">Flight plan</a>
          <a href="#faq">FAQs</a>
        </nav>
        <a className="button button-small" href="#register">
          Registration updates <span aria-hidden="true">↗</span>
        </a>
      </header>
      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="tiny-cross" aria-hidden="true">
                +
              </span>{' '}
              A NEW FRONTIER FOR HIGH SCHOOL BUILDERS
            </p>
            <h1 id="hero-title" aria-label="TRAILBLAZER HACKS">
              TRAIL
              <span className="title-spark" aria-hidden="true">
                ✳
              </span>
              <br />
              BLAZER
              <br />
              <span className="outlined">HACKS</span>
              <span className="title-dot" aria-hidden="true">
                .
              </span>
            </h1>
            <div className="hero-intro">
              <p>
                Small spark. <strong>Big liftoff.</strong>
                <br />
                One day to make something that didn’t exist before.
              </p>
              <a href="#about" className="round-link" aria-label="Explore the mission">
                ↓
              </a>
            </div>
          </div>
          <LaunchScene />
          <div className="hero-footer">
            <span className="micro">YOUR NEXT ADVENTURE STARTS HERE</span>
            <span className="micro">SCROLL TO EXPLORE ↓</span>
          </div>
        </section>
        <div className="event-strip" aria-label="Event essentials">
          <div>
            <span className="micro">SAVE THE DATE</span>
            <strong>{event.dateLabel}</strong>
          </div>
          <div>
            <span className="micro">THE LAUNCH WINDOW</span>
            <strong>{event.hours}</strong>
          </div>
          <div>
            <span className="micro">OUR LAUNCH SITE</span>
            <strong>
              Sunnyvale, CA <span aria-hidden="true">↗</span>
            </strong>
          </div>
          <a href="#venue">
            Hosted at {event.venue}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <About />
        <Mission />
        <Schedule />
        <Venue />
        <FAQ />
        <Registration />
      </main>
      <footer className="site-footer">
        <a href="#top" className="footer-brand">
          TRAILBLAZER HACKS <Spark />
        </a>
        <p>
          Student-run. Curiosity-powered.
          <br />
          An independent CES event.
        </p>
        <a href="#top">Back to launch ↑</a>
      </footer>
      <Enhancements />
    </>
  );
}
