# Portfolio maintenance record

Last full review: 13 October 2026 (v2 rebuild)
Planned next review: August 2027
Production: https://kuriaaaa.github.io/

## Architecture

- Astro static site, built and deployed by `.github/workflows/deploy.yml` to GitHub Pages.
  Repository setting required: **Settings → Pages → Source: GitHub Actions**.
- Every push and pull request runs format check, type check, build and Playwright tests; only `main` deploys.
- Contact delivery depends on FormSubmit activation for `johnkuria6996@gmail.com`.
- No analytics, cookies or third-party scripts. A Content-Security-Policy is generated at build time.
- Public files must never include `.env`, passwords, API tokens, private reports,
  production databases or real client or GymFlow member data.

## Annual review checklist

1. Run `npm run verify` and fix anything it reports.
2. Send one contact-form test and confirm delivery.
3. Update graduation, availability, project status and screenshots.
4. Check every social link in `src/site.ts` still points to an active account.
5. Review the privacy notice and provider links; check Kenya ODPC guidance.
6. Update `npm` dependencies one major version at a time and rerun `npm run verify`.
7. Run a secret scan before every public push.

## Safe publishing

```text
git status
npm run verify
git add <reviewed files only>
git commit -m "Describe the portfolio update"
git push origin main
```

Wait for the GitHub Actions run to pass, then check the live URL in a private window.
