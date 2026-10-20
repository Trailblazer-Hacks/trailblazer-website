import type { Metadata } from 'next';
import './globals.css';
import './redesign.css';
import { event } from '@/content/event';
import { publicAsset } from '@/lib/paths';

export const metadata: Metadata = {
  title: 'Trailblazer Hacks | Small spark. Big liftoff.',
  description: `A new high-school hackathon by ${event.organizer}. ${event.dateLabel}, ${event.hours}, at ${event.venue} in ${event.cityLabel}. Registration details coming soon.`,
  icons: { icon: publicAsset('/icon.svg') },
  openGraph: {
    title: 'Trailblazer Hacks',
    description: `Small spark. Big liftoff. ${event.dateLabel} · ${event.cityLabel}.`,
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
