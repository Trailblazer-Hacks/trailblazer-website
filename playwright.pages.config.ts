import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  testMatch: 'pages-smoke.ts',
  reporter: 'list',
  use: { channel: process.env.CI ? undefined : 'chrome', trace: 'retain-on-failure' },
  projects: [
    { name: 'pages-desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'pages-mobile', use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium' } },
  ],
  webServer: process.env.PAGES_URL
    ? undefined
    : {
        command: 'npx serve .pages-preview -l 4174',
        url: 'http://127.0.0.1:4174/trailblazer-website/',
        reuseExistingServer: false,
      },
});
