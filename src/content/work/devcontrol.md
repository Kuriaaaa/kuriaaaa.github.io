---
title: DevControl
summary: A personal control centre for a developer — every project, its tasks, live uptime, error tracking and a readiness score, with Claude proposing fixes for new errors.
kind: Internal tool
year: '2026'
status: Phases 1 and 2 of 4 built
sector: Developer tooling
stage: building
role: Sole developer — product, full stack and AI integration
stack: [Next.js, React, TypeScript, PostgreSQL, Drizzle ORM, Claude API]
order: 5
theme: violet
highlight:
  value: AI fixes
  label: Claude reads the stack trace and source, then proposes a fix
metrics:
  - value: 1 min
    label: fastest health-check interval, with uptime and SSL expiry
  - value: '5'
    label: readiness templates — web app, API, Odoo module, mobile backend, library
  - value: 3
    label: error SDKs — browser, Node.js and Python
  - value: 0
    label: code changed automatically — AI fixes are suggestions only
architecture:
  caption: One Next.js app with an embedded Postgres (PGlite) by default, so it runs with no database install. Monitors and error ingest feed a ranked "Needs attention" list; Claude is called only when you ask it to explain an error.
  layers:
    - name: sources
      items: [GitHub repositories, Website + API monitors, Error snippets in each app]
    - name: next.js app
      items: [Workspaces + projects, Kanban tasks, Readiness checklists, Alerts]
    - name: intelligence
      items: [Errors grouped by cause, Claude API fix proposals, Ranked attention list]
    - name: data + delivery
      items: [PostgreSQL via Drizzle, Telegram alerts, Email alerts]
decisions:
  - title: AI suggests, it never commits
    body: Claude reads the stack trace and the matching files from GitHub, explains the cause and proposes a fix. Nothing touches the code without me.
  - title: Readiness is measured, not guessed
    body: Each project type has a launch checklist. Items that can be verified from live data — uptime, SSL, open errors — tick themselves.
  - title: Zero-install by default
    body: Without a DATABASE_URL it runs on PGlite, a real Postgres embedded in the app, with migrations applied on start.
  - title: Reuse the login you already have
    body: It reads repositories through the GitHub CLI session when present, so there is no extra token to create for personal use.
timeline:
  - when: Phase 1
    title: Workspaces, GitHub import, projects and kanban tasks
  - when: Phase 2
    title: Health monitoring, alerts, readiness scores, error tracking and AI fixes
  - when: Phase 3
    title: Deeper automation across projects
    done: false
  - when: Phase 4
    title: Hosted, multi-device use
    done: false
---

## Why I built it

I run several systems at once: client sites, a product in pilot, an ERP engagement. I needed one screen that answers "what needs my attention right now?" without opening five dashboards.

## What it does

- **Imports from GitHub** — pick repositories and each becomes a project with a guessed type and a launch checklist
- **Watches what's live** — HTTP checks every 1 to 60 minutes, response time, uptime and SSL expiry; an outage opens an urgent task and a recovery closes it
- **Tracks errors** — one snippet per app sends errors in; they are grouped by cause and alert on first sight and on regressions
- **Explains errors with Claude** — on any error, Claude reads the stack trace and the matching source files and proposes a fix

## Result

Phases 1 and 2 of 4 are built and working. The source is private; a walkthrough is available on request.
