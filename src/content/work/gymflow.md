---
title: GymFlow
summary: One system for running a gym — memberships, attendance, schedules and payments, with a separate workspace for each role.
kind: Product
year: '2026'
status: Pilot-ready · live demo
sector: Fitness operations
stage: pilot
source: public
role: Sole developer — design, frontend, API, database and testing
stack: [React, TypeScript, Python, SQLite, PostgreSQL]
order: 1
theme: emerald
cover: ../../assets/work/gymflow/owner.jpg
coverAlt: GymFlow owner dashboard showing revenue, members and attendance
gallery:
  - src: ../../assets/work/gymflow/owner.jpg
    alt: GymFlow owner workspace
    caption: Owner — revenue, members, payments and expenses.
  - src: ../../assets/work/gymflow/receptionist.jpg
    alt: GymFlow receptionist workspace
    caption: Reception — registration, memberships and check-ins.
  - src: ../../assets/work/gymflow/trainer.jpg
    alt: GymFlow trainer workspace
    caption: Trainer — assigned members, schedules and workout plans.
  - src: ../../assets/work/gymflow/member.jpg
    alt: GymFlow member workspace
    caption: Member — membership, sessions, workouts and progress.
links:
  - label: Live demo
    href: https://kuriaaaa.github.io/gymflow-v1-demo/
  - label: Source code
    href: https://github.com/Kuriaaaa/gymflow-v1-demo
metrics:
  - value: '4'
    label: role-specific workspaces in one system
  - value: 40 / 40
    label: backend tests passing
  - value: 4 / 4
    label: public-demo policy and rendering tests
  - value: 0
    label: real member data in the public demo
architecture:
  caption: The public demo replaces the API and database with fictional data kept in the visitor's browser, so every role can be explored safely. The full V1 runs the same rules on the server.
  layers:
    - name: clients
      items: [Owner, Reception, Trainer, Member, Installable PWA]
    - name: interface
      items: [React + TypeScript, Role-aware routing, Offline-capable shell]
    - name: api
      items: [Python JSON API, Sessions + login throttling, Role checks, Request tracing]
    - name: data
      items: [Ordered SQL migrations, SQLite (development), PostgreSQL (production), Backups + restore]
decisions:
  - title: Enforce roles on the server, not just in the UI
    body: Hiding a button is not security. Every API route checks the caller's role and ownership, so a trainer cannot read revenue even by calling the API directly.
  - title: Model memberships as history, not a status flag
    body: Renewals add a new period instead of overwriting the old one, so the owner can see exactly when a member lapsed and what they paid.
  - title: SQLite to build, PostgreSQL to run
    body: The same ordered migrations run on both, so development stays fast and the production database is a configuration change, not a rewrite.
  - title: A public demo that can't leak anything
    body: The showcase has no server at all. Fictional records live in the browser, payments are simulated, and a reset button restores the sample gym.
timeline:
  - when: Requirements
    title: Mapped how a gym actually runs — front desk, trainers, owner, members
  - when: V1 build
    title: API, database migrations and the four workspaces
  - when: Hardening
    title: Password policy, throttling, backups, health checks — 40 backend tests
  - when: Public demo
    title: React + TypeScript showcase deployed to GitHub Pages with CI
  - when: Next
    title: Controlled pilot with a real gym on hosted PostgreSQL
    done: false
---

## The problem

Most gyms in Nairobi run on paper registers, spreadsheets and WhatsApp. Memberships expire unnoticed, attendance is guessed, and the owner has no single view of the business.

## What I built

One platform with four workspaces. Each role sees only what it needs: trainers never see revenue, and members see only their own records.

- **Owner** — revenue, members, payments, expenses and attendance at a glance
- **Reception** — registration, renewals, check-ins and session booking
- **Trainer** — assigned members, schedules and workout plans
- **Member** — membership status, sessions, workouts and progress

## A closer look: access rules

Trainers may only manage members actively assigned to them. The rule is a small, pure function, which makes it easy to test and impossible to bypass from the interface:

```ts
export function canTrainerManageMember(assignments: Assignment[], trainerId: number, memberId: number) {
  return assignments.some((item) => item.active && item.trainerId === trainerId && item.memberId === memberId);
}
```

## Result

A working four-role system with 40 passing backend tests, backup and restore tooling and production configuration checks. It is ready for a controlled pilot; hosted database operations, monitoring and an independent security review come next.
