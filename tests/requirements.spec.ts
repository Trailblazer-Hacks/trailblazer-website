import { test, expect } from '@playwright/test';

test('R1 current identity, complete confirmed logistics, and pending claims render', async ({
  page,
}) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Trailblazer Hacks | Small spark. Big liftoff.');
  await expect(page.locator('meta[name=description]')).toHaveAttribute(
    'content',
    /November 14.*Walmart/,
  );
  await expect(page.locator('#about')).toContainText('Cupertino Entrepreneurship Society');
  for (const text of ['November 14', '7 AM', '8 AM', '8 PM', 'Event year']) {
    await expect(page.locator('#schedule')).toContainText(text);
  }
  for (const text of ['Walmart', '1375 Crossman Ave', 'Sunnyvale']) {
    await expect(page.locator('#venue')).toContainText(text);
  }
  await expect(page.locator('#mission')).toContainText('not official competition tracks');
  await expect(page.locator('#mission')).toContainText('Challenges and prizes will be announced');
  await expect(page.locator('#register')).toContainText('No sign-ups are being collected yet');
  expect(await page.locator('input, form').count()).toBe(0);
});

test('R2 sticky registration is reachable after scrolling to the venue', async ({ page }) => {
  await page.goto('/');
  await page.locator('#venue').scrollIntoViewIfNeeded();
  const cta = page.locator('header').getByRole('link', { name: 'Registration updates' });
  const rect = await cta.boundingBox();
  expect(rect).not.toBeNull();
  expect(rect!.y).toBeGreaterThanOrEqual(0);
  expect(rect!.y + rect!.height).toBeLessThan(100);
  await cta.click();
  await expect(page).toHaveURL(/#register$/);
});

test('R3 every FAQ opens with keyboard and directions contain the supplied address', async ({
  page,
}) => {
  await page.goto('/');
  const summaries = page.locator('#faq summary');
  expect(await summaries.count()).toBe(7);
  for (let i = 0; i < (await summaries.count()); i++) {
    const summary = summaries.nth(i);
    await summary.focus();
    await page.keyboard.press('Enter');
    await expect(summary.locator('..')).toHaveAttribute('open', '');
    await expect(summary.locator('..').locator('p')).toBeVisible();
    await page.keyboard.press('Enter');
    await expect(summary.locator('..')).not.toHaveAttribute('open');
  }
  const directions = page.getByRole('link', { name: /Get directions/ });
  const url = new URL((await directions.getAttribute('href'))!);
  expect(url.hostname).toBe('www.google.com');
  expect(url.searchParams.get('query')).toBe('1375 Crossman Ave Sunnyvale CA');
});

test('R4 brand asset loads and dimensional artwork uses the approved palette', async ({ page }) => {
  await page.goto('/');
  const patch = page.getByRole('img', {
    name: 'Original Trailblazer Hacks pixel-rocket mission patch',
  });
  await patch.scrollIntoViewIfNeeded();
  await expect.poll(() => patch.evaluate((el: HTMLImageElement) => el.naturalWidth)).toBe(640);
  const palette = await page.evaluate(() => {
    const css = getComputedStyle(document.documentElement);
    return ['--wine', '--gold', '--cream'].map((key) => css.getPropertyValue(key).trim());
  });
  expect(palette).toEqual(['#701d30', '#edb83e', '#fff3d8']);
  expect(
    await page.locator('.launch-scene').evaluate((el) => getComputedStyle(el).perspective),
  ).not.toBe('none');
  expect(await page.locator('canvas').count()).toBe(0);
  expect((await page.request.get('/icon.svg')).status()).toBe(200);
});

test('R5 static page makes no third-party runtime requests', async ({ page }) => {
  const external: string[] = [];
  page.on('request', (request) => {
    const url = new URL(request.url());
    if (url.protocol.startsWith('http') && url.hostname !== '127.0.0.1') external.push(url.origin);
  });
  await page.goto('/');
  await page.locator('#register').scrollIntoViewIfNeeded();
  await page.waitForLoadState('networkidle');
  expect(external).toEqual([]);
});

test('R6 mobile depth and float remain static without reduced-motion preference', async ({
  page,
}, info) => {
  test.skip(info.project.name !== 'mobile', 'Mobile-specific static composition');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  expect(
    await page.locator('.rocket-float').evaluate((el) => getComputedStyle(el).animationName),
  ).toBe('none');
  expect(await page.locator('[data-depth]').evaluate((el) => getComputedStyle(el).transform)).toBe(
    'none',
  );
  await page.locator('#mission').scrollIntoViewIfNeeded();
  expect(
    await page
      .locator('.idea-art')
      .first()
      .evaluate((el) => getComputedStyle(el).animationName),
  ).toBe('none');
});
