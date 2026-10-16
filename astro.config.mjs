import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change `site` when the custom domain (briankuria.me / *.is-a.dev) is live.
export default defineConfig({
  site: 'https://kuriaaaa.github.io',
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
