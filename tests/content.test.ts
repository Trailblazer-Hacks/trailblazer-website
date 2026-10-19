import { test } from 'node:test';
import assert from 'node:assert/strict';
import { event } from '../src/content/event';

test('uses current Trailblazer identity and confirmed logistics', () => {
  assert.equal(event.name, 'Trailblazer Hacks');
  assert.equal(event.dateLabel, 'November 14');
  assert.equal(event.hours, '8 AM – 8 PM');
  assert.equal(event.venue, 'Walmart');
  assert.equal(event.address, '1375 Crossman Ave, Sunnyvale, CA');
});
test('does not invent a registration destination or event year', () => {
  assert.equal(event.registrationUrl, null);
  assert.equal(event.year, null);
});

test('schedule labels derive from the same public start and end facts', () => {
  assert.equal(event.hours, `${event.startTime} – ${event.endTime}`);
});
