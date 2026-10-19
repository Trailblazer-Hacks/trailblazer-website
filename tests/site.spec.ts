import { test, expect } from '@playwright/test';

test('confirmed event information and honest registration state', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'TRAILBLAZER HACKS', exact: true })).toBeVisible();
  await expect(page.locator('#register')).toContainText('Registration is coming soon');
  await expect(page.locator('#venue')).toContainText('1375 Crossman Ave');
  await expect(page.locator('#schedule')).toContainText('8 AM');
  expect(errors).toEqual([]);
});

test('navigation reaches registration and FAQ works with native controls', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Registration updates', exact: true }).first().click();
  await expect(page).toHaveURL(/#register$/);
  await page.locator('summary').filter({ hasText: 'Who is organizing Trailblazer Hacks?' }).click();
  await expect(page.locator('details[open]')).toContainText('Cupertino Entrepreneurship Society');
});

test('all hash links resolve and layouts stay within viewport', async ({ page }) => {
  await page.goto('/');
  const missing = await page
    .locator('a[href^="#"]')
    .evaluateAll((links) =>
      links
        .map((a) => a.getAttribute('href')!)
        .filter((href) => !document.getElementById(href.slice(1))),
    );
  expect(missing).toEqual([]);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true,
  );
});

test('reduced motion keeps content and keyboard skip link usable', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#main$/);
  await expect(page.locator('#about')).toBeVisible();
  expect(
    await page.locator('.rocket-float').evaluate((el) => getComputedStyle(el).animationName),
  ).toBe('none');
});

test('essential content and FAQ work without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4173');
  await expect(page.getByRole('heading', { name: 'TRAILBLAZER HACKS', exact: true })).toBeVisible();
  await page.locator('summary').filter({ hasText: 'Who is organizing Trailblazer Hacks?' }).click();
  await expect(page.locator('details[open]')).toContainText('Cupertino Entrepreneurship Society');
  await context.close();
});

test('page has no automatically detectable WCAG A/AA violations', async ({ page }) => {
  const { default: AxeBuilder } = await import('@axe-core/playwright');
  await page.goto('/');
  const result = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  expect(result.violations).toEqual([]);
});

test('scene motion stops offscreen and respects changed motion preferences', async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name === 'mobile', 'Pointer depth is desktop-only');
  await page.goto('/');
  const scene = page.locator('[data-scene]');
  await expect(scene).toHaveAttribute('data-visible', 'true');
  const box = await scene.boundingBox();
  await page.mouse.move(box!.x + box!.width * 0.7, box!.y + box!.height * 0.3);
  await expect(page.locator('[data-depth]')).toHaveAttribute('style', /rotateX/);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  expect(await page.locator('[data-depth]').evaluate((el) => getComputedStyle(el).transform)).toBe(
    'none',
  );
  await page.locator('#faq').scrollIntoViewIfNeeded();
  await expect(scene).toHaveAttribute('data-visible', 'false');
});
