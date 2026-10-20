import { test, expect } from '@playwright/test';

test('published Pages URL serves the frontend with working styles, scripts and artwork', async ({
  page,
}) => {
  const failed: string[] = [];
  const errors: string[] = [];
  page.on('response', (response) => {
    if (response.status() >= 400) failed.push(`${response.status()} ${response.url()}`);
  });
  page.on('requestfailed', (request) => failed.push(request.url()));
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(process.env.PAGES_URL || 'http://127.0.0.1:4174/trailblazer-website/');
  await expect(page.getByRole('heading', { name: 'TRAILBLAZER HACKS', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Run locally', exact: true })).toHaveCount(0);
  expect(await page.locator('.hero').evaluate((el) => getComputedStyle(el).backgroundColor)).toBe(
    'rgb(112, 29, 48)',
  );
  const patch = page.getByRole('img', {
    name: 'Original Trailblazer Hacks pixel-rocket mission patch',
  });
  await patch.scrollIntoViewIfNeeded();
  await expect.poll(() => patch.evaluate((el: HTMLImageElement) => el.naturalWidth)).toBe(640);
  await page.locator('summary').filter({ hasText: 'Who is organizing Trailblazer Hacks?' }).click();
  await expect(page.locator('details[open]')).toContainText('Cupertino Entrepreneurship Society');
  const icon = await page.locator('link[rel=icon]').getAttribute('href');
  expect(icon).toBe('/trailblazer-website/icon.svg');
  expect((await page.request.get(new URL(icon!, page.url()).href)).status()).toBe(200);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  expect(failed).toEqual([]);
  expect(errors).toEqual([]);
});
