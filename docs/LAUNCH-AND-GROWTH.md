# Launch & growth playbook — John Kuria

How to ship the Field Dossier redesign, and how to turn it into a steady flow of clients and collaborators.

---

## 1. Ship the site

The site deploys automatically: every push to `main` runs format, type-check, build and Playwright tests, then
publishes to GitHub Pages (`.github/workflows/deploy.yml`).

Branches today:

| Branch          | What's on it                                            | Pushed? |
| --------------- | ------------------------------------------------------- | ------- |
| `main`          | The site live now                                       | yes     |
| `redesign`      | Astro rebuild + deeper case studies (1 commit unpushed) | partly  |
| `field-dossier` | This redesign, built on top of `redesign`               | no      |

Steps:

1. Commit on `field-dossier`, push, and open a pull request into `main`.
2. CI runs `npm run verify` on the PR — merge only when it's green.
3. Merging deploys to https://kuriaaaa.github.io within a few minutes.
4. Check the live site on your phone: home, one dossier, services, contact form (send yourself a test message).

### Custom domain (recommended)

A personal domain reads better on a business card and survives a GitHub username change.

- **Free:** `johnkuria.is-a.dev` — you already forked `is-a/register`. Add a `domains/johnkuria.json` file pointing a
  CNAME at `kuriaaaa.github.io`, open the PR to is-a.dev, then set the custom domain in the repo's Pages settings.
- **Paid:** `johnkuria.dev` or `johnkuria.co.ke` from any registrar (check current prices before buying).

After switching, update `site` in `astro.config.mjs` and `url` in `src/site.ts`.

---

## 2. Social accounts

Claude can't create accounts for you — sign-ups need your own email, phone verification and acceptance of each
platform's terms. Create them yourself using the same handle everywhere: **@johnkuriadev**.

When each exists, paste its URL into `src/site.ts` → `socials`. It then appears in the header, footer, contact page,
`/links/` and the search-engine profile automatically.

| Platform                | Why                                    | Priority              |
| ----------------------- | -------------------------------------- | --------------------- |
| LinkedIn                | Clients, recruiters, Kenyan businesses | ✅ exists — polish it |
| X                       | Developers, founders, build-in-public  | 1                     |
| YouTube                 | Build videos — proof that compounds    | 2                     |
| TikTok                  | Reach Nairobi business owners          | 2                     |
| Instagram               | Same clips as TikTok, local businesses | 3                     |
| Upwork / Contra         | Paid freelance leads, global           | 1                     |
| Google Business Profile | "software developer Nairobi" searches  | 3                     |

### Bios, ready to paste

**Short (X, TikTok, Instagram — ≤160 chars)**

> Full-stack developer in Nairobi. I build the systems businesses run on — gyms, showrooms, ERPs, M-Pesa. Building in
> public. 👇 kuriaaaa.github.io/links

**LinkedIn headline**

> Full-stack developer · Business systems, M-Pesa payments & ERP data · TypeScript, React, Next.js, Python, PostgreSQL ·
> Nairobi / remote

**LinkedIn About / Upwork overview**

> I build software that businesses run on every day: membership and booking systems, showroom platforms with M-Pesa
> deposits, Odoo ERP clean-ups and consent-compliant messaging.
>
> Recent work: GymFlow (a four-role gym system with a live demo), Brimotors (a car-showroom platform with M-Pesa and an
> encrypted document vault), and an ERP audit that cut 427 duplicate customer records to zero.
>
> I work in small, tested steps with weekly demos, and I use Claude Code as part of a workflow where tests and review
> decide what ships. Open to freelance projects, build partnerships and developer roles.
>
> Portfolio and case studies: kuriaaaa.github.io

Always link to **`/links/`** in bios — it's built as a link-in-bio page.

---

## 3. What to post

Four content pillars, each backed by a real project:

1. **Build clips** — 30–60 s screen recordings: "I built a gym check-in that…", "How M-Pesa STK push works in 45 s".
2. **Decision posts** — one ADR from a dossier as a thread or carousel: "Why I never trust the M-Pesa callback alone."
3. **Before / after** — "427 duplicate customers → 0", "1,013 products without a category → 13".
4. **How I build with AI** — honest Claude Code sessions: the prompt, the diff, the test that caught a mistake.

### First 10 posts

1. Intro: who you are + the systems map from the homepage (screenshot).
2. GymFlow demo walkthrough — four roles in 60 s (link the live demo).
3. Thread: "Hiding a button isn't security" — server-side role checks in GymFlow.
4. M-Pesa result codes explained (the `outcomeFor` snippet from Brimotors).
5. Brimat before/after numbers, with the "archive, never delete" rule.
6. Fanovo: "Postgres is my queue" — `FOR UPDATE SKIP LOCKED` in one diagram.
7. Kenya Data Protection Act for SMS marketing — what Fanovo enforces (STOP / ACHA / SITISHA).
8. DevControl: Claude explaining a real stack trace (redact anything private).
9. "My verify command" — the four checks that gate every release.
10. Open slot: "I'm taking 2 projects this month — here's what I build" → link `/services/`.

Cadence that's sustainable: **3 posts a week + 1 longer video a fortnight.** Each video gets a write-up in
`src/content/builds/` (it appears on `/builds/` and in the RSS feed automatically).

Scheduling: once accounts exist, the Postiz or Metricool connectors in this workspace can queue posts — ask Claude to
draft a week of posts and schedule them for your review.

---

## 4. Finding clients and collaborators

**Warm first (highest close rate)**

- Brimat and Brimotors contacts — ask for an introduction or a short testimonial for the site.
- KCA classmates and lecturers — many will be hiring or freelancing within a year.
- Gyms near you — offer a two-week GymFlow pilot; one real gym is worth more than any post.

**Marketplaces**

- **Upwork** — search "M-Pesa", "Daraja", "Odoo", "Next.js dashboard"; propose with a link to the matching dossier.
- **Contra** — commission-free, good for a services page that mirrors `/services/`.

**Communities (help first, sell later)**

- Kenyan dev communities (e.g. Nairobi tech meetups, Python/JS Kenya groups) — answer M-Pesa and Odoo questions.
- Indie-hacker and build-in-public circles on X — collaborations and referrals come from here.

**Outreach message (adapt, don't spam)**

> Hi {name} — I noticed {business} takes bookings by {WhatsApp / phone}. I build systems for businesses like yours —
> for example a gym system that handles memberships, check-ins and payments in one place (live demo:
> kuriaaaa.github.io/work/gymflow). Would a 20-minute call to see if something similar would save your team time be
> useful? — John

Send 5 personalised messages a week. Track them in a simple sheet: who, date, reply, next step.

---

## 5. What to measure (monthly)

- Enquiries from the contact form / WhatsApp, and where they came from (ask every enquiry).
- Calls booked → proposals sent → projects won.
- Followers matter less than **profile visits → `/links/` clicks**.

---

## 6. Next site improvements

- Real screenshots for Fanovo and DevControl (run each locally with demo data and capture the dashboards).
- Testimonials section once two clients agree.
- A refreshed `og.jpg` share image in the new paper-and-ink style.
- Publish the first build video and its write-up in `src/content/builds/`.
