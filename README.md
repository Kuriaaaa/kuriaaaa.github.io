# John Kuria — portfolio

Personal site of John Kuria (@johnkuriadev), software developer in Nairobi.
Built with [Astro](https://astro.build), deployed to GitHub Pages by GitHub Actions.

## Everyday tasks

| I want to…            | Do this                                                                                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Add a social account  | Fill in its `url` in `src/site.ts` — it appears in the header, footer, contact and `/links` pages.                                                                 |
| Add a case study      | Add `src/content/work/<slug>.md` (copy `gymflow.md`), put screenshots in `src/assets/work/<slug>/`. Set `theme` to `emerald`, `amber`, `violet`, `cyan` or `rose`. |
| Hide a case study     | Set `draft: true` in its frontmatter.                                                                                                                              |
| Publish a build video | Add `src/content/builds/<slug>.md` with `title`, `summary`, `date` and `video`. It appears on the home page, `/builds`, `/links` and the RSS feed.                 |

## Commands

```bash
npm install
npm run dev        # http://localhost:4321
npm run verify     # format check, type check, build and browser tests
```

`npm test` runs Playwright on desktop (dark) and mobile (light): every page must load with no
console or Content-Security-Policy errors, no horizontal scroll, valid internal links and a concise home page.

## Structure

```
src/site.ts              brand, contact details and social links
src/content/work/        case studies (Markdown)
src/content/builds/      build log entries (Markdown)
src/pages/               routes: /, /work, /work/[slug], /about, /contact, /links, /builds, /privacy
src/styles/global.css    design tokens and all styles
tests/                   Playwright tests
```

No analytics, cookies or third-party scripts. Fonts are self-hosted and a strict CSP is generated at build time.
