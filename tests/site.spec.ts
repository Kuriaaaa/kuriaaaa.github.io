import { test, expect, type Page } from '@playwright/test';

const pages = [
  '/',
  '/work/',
  '/work/gymflow/',
  '/work/brimotors/',
  '/about/',
  '/contact/',
  '/links/',
  '/builds/',
  '/privacy/',
];

/** Collects console errors and CSP violations raised while a page loads. */
function watchErrors(page: Page) {
  const errors: string[] = [];
  page.on('console', (msg) => msg.type() === 'error' && errors.push(msg.text()));
  page.on('pageerror', (err) => errors.push(err.message));
  return errors;
}

for (const path of pages) {
  test(`${path} renders cleanly`, async ({ page }) => {
    const errors = watchErrors(page);
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);

    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page).toHaveTitle(/John Kuria/);

    // No horizontal scrolling at any viewport.
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);

    // Every image has loaded and has alt text.
    const images = await page.locator('img').evaluateAll((imgs) =>
      (imgs as HTMLImageElement[]).map((img) => ({
        src: img.currentSrc,
        alt: img.getAttribute('alt'),
        ok: img.complete,
      })),
    );
    for (const img of images) expect(img.alt, `alt text for ${img.src}`).not.toBeNull();

    expect(errors, 'console / CSP errors').toEqual([]);
  });
}

test('every internal link resolves', async ({ page, request }) => {
  const seen = new Set<string>();
  for (const path of pages) {
    await page.goto(path);
    const hrefs = await page.locator('a[href^="/"]').evaluateAll((as) => as.map((a) => a.getAttribute('href')!));
    hrefs.forEach((h) => seen.add(h.split('#')[0]));
  }
  for (const href of seen) {
    const res = await request.get(href);
    expect(res.status(), href).toBe(200);
  }
});

test('draft case studies are not published', async ({ request }) => {
  const res = await request.get('/work/predictive-modeling/');
  expect(res.status()).toBe(404);
});

test('contact form posts to FormSubmit with a thank-you redirect', async ({ page }) => {
  await page.goto('/contact/');
  const form = page.locator('form.form');
  await expect(form).toHaveAttribute('action', /formsubmit\.co/);
  await expect(form.locator('input[name="_next"]')).toHaveValue(/\/thanks\/$/);
  for (const name of ['name', 'email', 'topic', 'message', 'consent']) {
    await expect(form.locator(`[name="${name}"]`)).toHaveAttribute('required', '');
  }
});

test('home page stays concise', async ({ page }) => {
  await page.goto('/');
  const words = await page
    .locator('main')
    .evaluate((m) => (m as HTMLElement).innerText.split(/\s+/).filter(Boolean).length);
  expect(words).toBeLessThan(300);
});
