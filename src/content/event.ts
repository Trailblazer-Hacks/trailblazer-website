/** Public, organizer-supplied facts. Null means not yet confirmed. */
const startTime = '8 AM';
const endTime = '8 PM';

export const event = {
  name: 'Trailblazer Hacks',
  dateLabel: 'November 14',
  year: null as number | null,
  startTime,
  endTime,
  hours: `${startTime} – ${endTime}`,
  durationHours: 12,
  cityLabel: 'Sunnyvale, CA',
  setupTime: '7 AM',
  venue: 'Walmart',
  address: '1375 Crossman Ave, Sunnyvale, CA',
  organizer: 'Cupertino Entrepreneurship Society',
  registrationUrl: null as string | null,
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=1375+Crossman+Ave+Sunnyvale+CA',
} as const;
