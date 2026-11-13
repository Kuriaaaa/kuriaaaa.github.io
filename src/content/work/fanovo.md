---
title: Fanovo
summary: Multi-channel messaging platform for businesses. SMS, email and WhatsApp campaigns run from one prepaid wallet, with Kenyan data-protection rules built in.
kind: product
status: Version 0.6 · M-Pesa top-ups, security and Docker deploy
sector: Business messaging
stage: building
year: "2026"
stack: [TypeScript, Fastify, PostgreSQL, React, Vite, Zod, Vitest, Docker]
order: 8
---

## The problem

Small businesses talk to customers on SMS, email and WhatsApp, usually from three different tools, with no record of who agreed to be contacted. Kenya's Data Protection Act 2019 makes that a real risk.

## What I built

One platform where a business signs up, tops up a prepaid balance, imports contacts with consent and sends campaigns on any channel.

- **Businesses:** contacts, templates, campaigns and delivery results in one dashboard.
- **Platform staff:** a console to verify new businesses, approve sender IDs and review large campaigns.
- **Recipients:** automatic opt-out lines, one-click email unsubscribe and quiet hours (20:00–08:00 EAT by default).
- **Developers:** a send API, plus delivery detail with retry and export.
- **Wallet:** M-Pesa top-ups and per-type WhatsApp pricing.

## How it's built

- **API and worker:** a Fastify API and a separate send worker share one PostgreSQL database.
- **Postgres as the queue:** workers claim due messages with `FOR UPDATE SKIP LOCKED`, so several can run safely without Redis.
- **Multi-tenant:** every row carries a tenant ID and every query filters on it, with tests covering it.
- **Consent as data:** each contact needs a consent record per channel. Opt-outs are checked at launch and again at send time, and STOP, ACHA and SITISHA replies are honoured.
- **Abuse controls:** new businesses start with a daily send limit until they are verified, and large campaigns need a second person to approve them.
- **Security in layers:** HttpOnly session cookies, CSRF checks, scrypt passwords, account lockout, a strict Content Security Policy and a Security page listing signed-in devices, each layer with its own test.
- **Privacy:** a business can erase a contact on request, as the Data Protection Act requires.
- **One-command demo:** the whole stack runs locally on an embedded Postgres (PGlite), with no database to install.

## Where it stands

Version 0.6 works end to end: API, worker, webhooks, dashboard, password reset, email verification and M-Pesa top-ups, covered by 76 automated tests. It ships as Docker containers (Postgres, API and send worker). The source is private; I can walk you through it on request.
