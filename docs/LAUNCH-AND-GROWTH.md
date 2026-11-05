# Launch & growth playbook

How the site ships, and how to turn it into a steady flow of clients and collaborators. Not published on the site.

Everything here follows the rules in `CLAUDE.md`: no employer or client figures, no customer or staff names, no
system screenshots, and the car dealership stays anonymous until its MD agrees.

---

## 1. Shipping

- Live at **https://chege.is-a.dev** (GitHub Pages, custom domain via is-a.dev).
- Work on `rebuild-2026`, then push it to `main` and to itself. A push to `main` is a live deploy.
- Before pushing: `npm run check` (0 errors) and `npm run build`, then `npm run preview` to see the production build
  with the Content-Security-Policy switched on.

---

## 2. Social accounts

Create these yourself — sign-ups need your own email, phone verification and acceptance of each platform's terms. Use
one handle everywhere if it's free (for example **@chegebuilds** or **@chegejohnkuria**).

| Platform                 | Why                                     | Priority                |
| ------------------------ | --------------------------------------- | ----------------------- |
| LinkedIn                 | Clients, recruiters, Kenyan businesses  | Exists — polish it      |
| Upwork or Contra         | Paid freelance leads, worldwide         | 1                       |
| X                        | Developers, founders, build-in-public   | 1                       |
| YouTube                  | Build videos — proof that compounds     | 2                       |
| TikTok / Instagram       | Reach local business owners             | 2                       |
| Google Business Profile  | "software developer Kiambu/Nairobi"     | 3                       |

When an account exists, add it to `src/site.ts` and to the footer in `src/components/Footer.astro`.

### Bios, ready to paste

**Short (X, TikTok, Instagram)**

> Software developer in Kenya. I build the systems businesses run on — gym management, car sales, ERP data, M-Pesa.
> chege.is-a.dev

**LinkedIn headline**

> Software developer · Business systems, M-Pesa payments & ERP data · Python, TypeScript, React, Next.js, PostgreSQL ·
> Kiambu / Nairobi / remote

**LinkedIn About / Upwork overview**

> I build the web systems businesses run on every day: membership and booking systems, showroom platforms with M-Pesa
> deposits, ERP data clean-ups and consent-compliant messaging.
>
> Recent work: GymFlow, a four-role gym system with a live demo; a showroom and back-office platform for a Nairobi-area
> car dealership; an industrial attachment auditing a multi-company Odoo ERP; and Fanovo, a multi-channel messaging
> platform.
>
> I work in small, tested steps with weekly demos, and I use Claude Code in a workflow where tests and review decide
> what ships. Open to freelance projects, build partnerships and developer roles.
>
> Portfolio: chege.is-a.dev

---

## 3. What to post

Use your own products for anything with numbers or screens. Client and employer work is described in general terms
only.

1. **Build clips** — 30–60 s screen recordings of GymFlow's public demo, Fanovo's local demo or DevControl (fictional
   data only).
2. **Decision posts** — "Hiding a button isn't security: server-side role checks", "Postgres as a queue with
   `FOR UPDATE SKIP LOCKED`".
3. **Explainers** — how M-Pesa STK push works, what Kenya's Data Protection Act means for SMS marketing.
4. **How I build with AI** — honest Claude Code sessions on your own repos: the prompt, the diff, the test that caught a
   mistake.

### First 8 posts

1. Intro: who you are + a screenshot of the homepage systems map.
2. GymFlow demo walkthrough — four roles in 60 seconds (link the live demo).
3. Server-side role checks: why a trainer can't see revenue even through the API.
4. M-Pesa STK push explained in one diagram (generic, no client code).
5. Fanovo: Postgres as a message queue.
6. SMS consent under the Data Protection Act — STOP, ACHA and SITISHA replies.
7. DevControl: Claude explaining a stack trace from one of your own projects.
8. "I'm taking on two projects this month" → link `/services/`.

Cadence: **3 posts a week + 1 longer video a fortnight.**

Once accounts exist, the Postiz or Metricool connectors in this workspace can queue posts — ask Claude to draft a week
for your review.

---

## 4. Finding clients and collaborators

**Warm first**

- People you met through your attachment and client work — ask for introductions, and for a short testimonial you're
  allowed to publish (with their written OK).
- KCA classmates and lecturers.
- Gyms near you — offer a short GymFlow pilot.

**Marketplaces:** Upwork and Contra. Search "M-Pesa", "Daraja", "Odoo", "Next.js dashboard", and reply with a link to
the matching case study.

**Communities:** Kenyan developer groups and build-in-public circles. Answer M-Pesa and Odoo questions first; work
follows.

**Outreach message (personalise every one)**

> Hi {name} — I noticed {business} takes bookings by {WhatsApp / phone}. I build systems for businesses like yours, for
> example a gym system that handles memberships, check-ins and payments in one place (live demo on chege.is-a.dev).
> Would a 20-minute call be useful? — Chege

Send 5 a week and track them in a simple sheet: who, date, reply, next step.

---

## 5. Still open

- Enforce HTTPS in the Pages settings, FormSubmit hashed alias (from `CLAUDE.md`).
- Screenshots of Fanovo and DevControl running on demo data.
- Testimonials, once clients agree in writing.
