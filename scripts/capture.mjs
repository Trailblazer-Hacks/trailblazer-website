import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

// Run `npm run build && npm run preview` in another terminal first.
const browser = await chromium.launch({ channel: process.env.CI ? undefined : 'chrome' });
try {
  await mkdir('docs/screenshots', { recursive: true });
  for (const [name, width, height] of [
    ['desktop', 1440, 900],
    ['mobile', 390, 844],
  ]) {
    const context = await browser.newContext({
      viewport: { width, height },
      reducedMotion: 'reduce',
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    await page.goto('http://127.0.0.1:4173');
    await page.screenshot({ path: `docs/screenshots/${name}.png`, fullPage: true });
    await page.screenshot({ path: `docs/screenshots/${name}-hero.png` });
    await context.close();
    console.log(`Captured ${name} at ${width} × ${height}`);
  }
} finally {
  await browser.close();
}
