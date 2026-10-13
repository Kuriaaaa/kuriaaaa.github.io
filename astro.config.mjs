import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kuriaaaa.github.io',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/thanks/') })],
  build: { inlineStylesheets: 'never' },
  markdown: { syntaxHighlight: false },
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "base-uri 'self'",
        "object-src 'none'",
        "img-src 'self' data:",
        "font-src 'self'",
        'form-action https://formsubmit.co',
        'upgrade-insecure-requests',
      ],
    },
  },
});
