---
title: GymFlow
summary: One system for running a gym — memberships, attendance, schedules and payments, with a separate workspace for each role.
kind: Product
year: '2026'
status: Live demo
role: Design, frontend, backend, database and testing
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
---

## The problem

Most gyms run on paper registers, spreadsheets and WhatsApp. Memberships expire unnoticed, attendance is guessed and nobody has one view of the business.

## What I built

A single platform with four workspaces — owner, reception, trainer and member. Each role sees only what it needs: trainers never see revenue, members only see their own records.

- Memberships, renewals, attendance, class schedules and workout plans
- Secure sessions, forced password resets and role-based access
- Backups, restore tooling and production configuration checks
- Installable on phones as a web app

## Result

The full system is backed by a Python API with 40 passing backend tests. The public demo runs on fictional data stored only in your browser, so anyone can try every role safely.
