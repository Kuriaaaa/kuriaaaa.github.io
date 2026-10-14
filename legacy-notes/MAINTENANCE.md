# Portfolio maintenance record

Last full review: 24 August 2026
Planned next review: August 2027
Production: https://kuriaaaa.github.io/

## Stable architecture

- Static HTML, CSS and JavaScript hosted through GitHub Pages.
- No package manager, build command, server runtime or database is required.
- HTTPS is provided by GitHub Pages.
- Contact delivery depends on FormSubmit activation for `johnkuria6996@gmail.com`.
- Optional analytics uses Microsoft Clarity project `y6bwcb8vh1` after consent.
- Public files must never include `.env`, passwords, API tokens, private reports,
  production databases or real GymFlow member information.

## August 2027 review checklist

1. Confirm the home page, privacy page, GymFlow demo, GitHub and LinkedIn links.
2. Send one contact-form test and confirm delivery; do not batch automated tests.
3. Review the public email address and telephone number.
4. Update graduation, availability, project status and screenshots.
5. Review the privacy notice, retention periods and third-party provider links.
6. Verify analytics remains consent-gated and contact fields remain masked.
7. Check Kenya ODPC guidance and whether controller registration is required.
8. Inspect GitHub Pages HTTPS, browser console errors, broken images and mobile overflow.
9. Run a secret scan before every public push.
10. Update `sitemap.xml`, review dates and this record.

## Safe publishing

```text
git status
git diff --check
git add <reviewed files only>
git commit -m "Describe the portfolio update"
git push origin main
```

Never use broad staging before checking untracked files. Wait for GitHub Pages
to deploy, then verify the live URL in a private browser window.
