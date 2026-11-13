---
title: DevControl
summary: A personal control centre for a developer. Every project, its tasks, live uptime, error tracking and a readiness score on one screen.
kind: product
status: Phases 1 and 2 of 4 built · tested in CI
sector: Developer tooling
stage: building
year: "2026"
stack: [Next.js, React, TypeScript, PostgreSQL, Drizzle ORM]
order: 9
---

## Why I built it

I run several systems at once. I needed one screen that answers "what needs my attention right now?" without opening five dashboards.

## What it does

- **Imports from GitHub:** pick repositories and each becomes a project with a guessed type and a launch checklist.
- **Watches what's live:** HTTP checks from every minute to every hour, with response time, uptime and SSL expiry. An outage opens an urgent task; a recovery closes it.
- **Tracks errors:** one snippet per app (browser, Node.js or Python) sends errors in. They are grouped by cause and alert on first sight and on regressions.
- **Measures readiness:** each project type has a launch checklist. Items that can be checked from live data tick themselves.

## How it's built

- **App:** Next.js with React and TypeScript.
- **Data:** PostgreSQL through Drizzle ORM. Without a database URL it runs on PGlite, a real Postgres embedded in the app, so there is nothing to install.
- **Alerts:** in the app, plus Telegram and email when configured.
- **Security:** two-step sign-in with an authenticator app, sign-in limits, and daily backups that are restored into a scratch database to prove they work.
- **Self-monitoring:** DevControl tracks its own errors and uptime.
- **Quality:** 40 automated tests. GitHub Actions runs typecheck, lint, tests, build and a package audit on every change.
- **Demo mode:** a throwaway database of made-up projects for screenshots and design work.

## Where it stands

Phases 1 and 2 of 4 are built and working, with a redesigned interface (November 2026). The source is private; I can walk you through it on request.
