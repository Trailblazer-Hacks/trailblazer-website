import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Trailblazer Hacks | Small spark. Big liftoff.',
  description:
    'A new high-school hackathon by the Cupertino Entrepreneurship Society. November 14, 8 AM–8 PM, at Walmart in Sunnyvale. Registration details coming soon.',
  icons: { icon: '/icon.svg' },
  openGraph: {
    title: 'Trailblazer Hacks',
    description: 'Small spark. Big liftoff. November 14 · Sunnyvale.',
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
