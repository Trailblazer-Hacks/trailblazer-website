import Link from 'next/link';
import { Spark } from './Rocket';
import { event } from '@/content/event';

export function Header() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <Link href="/" className="wordmark" aria-label="Trailblazer Hacks home">
          <Spark />
          <span>
            TRAILBLAZER
            <br />
            HACKS
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/mission/">Mission</Link>
          <Link href="/flight-plan/">Flight plan</Link>
          <Link href="/sponsors/">Sponsors</Link>
          <Link href="/faq/">FAQs</Link>
        </nav>
        <Link className="button button-small" href="/#register">
          Registration updates <span aria-hidden="true">↗</span>
        </Link>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <Link href="/" className="footer-brand">
        TRAILBLAZER HACKS <Spark />
      </Link>
      <p>
        {event.organizer}. {event.dateLabel}, {event.venue}.
        <br />
        An independent CES event.
      </p>
      <Link href="/">Back to start ↑</Link>
    </footer>
  );
}
