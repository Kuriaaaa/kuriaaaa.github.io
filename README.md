# Chege John Brian Kuria — portfolio

Static site built with [Astro](https://astro.build), deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

```
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Where things live

| What | Where |
|------|-------|
| Name, contact links, availability line | `src/site.ts` |
| Projects (one Markdown file each) | `src/content/work/*.md` |
| Homepage | `src/pages/index.astro` |
| Styles (one file, light + dark) | `src/styles/global.css` |
| Images and PDFs | `public/` |

**Add a project:** copy an existing file in `src/content/work/`, edit the
front matter, and set `featured: true` to show it on the homepage (keep it to three).

The site ships no JavaScript, cookies or analytics. The Content-Security-Policy is
in `src/layouts/Base.astro`. Old maintenance notes are in `legacy-notes/` and are
not published.
