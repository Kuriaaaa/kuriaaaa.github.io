import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Custom domain from is-a.dev (is-a-dev/register#56844).
export default defineConfig({
  site: 'https://chege.is-a.dev',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  // Never inline assets as data: URIs; the CSP only allows files from this site.
  vite: { build: { assetsInlineLimit: 0 } },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  build: {
    // Keep every stylesheet external so the strict CSP (style-src 'self') holds.
    inlineStylesheets: 'never',
  },
});
