import { defineConfig, devices } from '@playwright/test';

// Tests run against the production build (`npm run build` first), served by `astro preview`.
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
  use: { baseURL: 'http://127.0.0.1:4331', trace: 'retain-on-failure' },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], colorScheme: 'dark' } },
    { name: 'mobile', use: { ...devices['Pixel 7'], colorScheme: 'light' } },
  ],
  webServer: {
    command: 'npx astro preview --host 127.0.0.1 --port 4331',
    url: 'http://127.0.0.1:4331',
    reuseExistingServer: !process.env.CI,
  },
});
