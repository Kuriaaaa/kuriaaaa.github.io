# Portfolio: notes for Claude

Personal portfolio of Chege John Brian Kuria (GitHub `Kuriaaaa`). **This repo is public.**

- Live at https://chege.is-a.dev (GitHub Pages, custom domain via is-a.dev). `kuriaaaa.github.io` redirects there.
- Astro static site. `.github/workflows/deploy.yml` publishes on every push to `main`, so a push is a live deploy.
- Work on branch `rebuild-2026` and push it to both branches:
  `git -c credential.helper= -c "credential.helper=!gh auth git-credential" push origin rebuild-2026:main rebuild-2026`
- Content: `src/site.ts` and `src/content/work/*.md`. The CV page is `src/pages/cv.astro`; the PDF is `public/cv.pdf`
  (regenerate with headless Edge, see README).
- Zero JavaScript. The Content-Security-Policy applies to the production build only. Keep `assetsInlineLimit: 0`
  (inlined fonts break the CSP `font-src 'self'`). Keep the CV phone-layout media query scoped to `screen`.
- Public name: "Chege John Brian Kuria". Documents are signed "Brian Kuria Chege".
- Never publish employer or client figures, customer or staff names, or system screenshots. The car dealership client
  stays anonymous ("Nairobi-area car dealership") until its MD agrees. The private CV with referees is never published.
- Still open: Enforce HTTPS in the Pages settings (if not already ticked), FormSubmit hashed alias, optional GoatCounter.
