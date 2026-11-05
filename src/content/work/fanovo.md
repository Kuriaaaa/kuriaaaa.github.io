---
title: Fanovo
summary: Multi-channel messaging platform for businesses. SMS, email and WhatsApp campaigns run from one prepaid wallet, with Kenyan data-protection rules built in.
kind: product
status: Version 0.2 · API, sending and dashboard working
sector: Business messaging
stage: building
year: "2026"
stack: [TypeScript, Fastify, PostgreSQL, Vite, Zod, Vitest]
order: 8
---

## The problem

Small businesses talk to customers on SMS, email and WhatsApp, usually from three different tools, with no record of who agreed to be contacted. Kenya's Data Protection Act 2019 makes that a real risk.

## What I built

One platform where a business signs up, tops up a prepaid balance, imports contacts with consent and sends campaigns on any channel.

- **Businesses:** contacts, templates, campaigns and delivery results in one dashboard.
- **Platform staff:** a console to verify new businesses, approve sender IDs and review large campaigns.
- **Recipients:** automatic opt-out lines, one-click email unsubscribe and quiet hours (20:00–08:00 EAT by default).

## How it's built

- **API and worker:** a Fastify API and a separate send worker share one PostgreSQL database.
- **Postgres as the queue:** workers claim due messages with `FOR UPDATE SKIP LOCKED`, so several can run safely without Redis.
- **Multi-tenant:** every row carries a tenant ID and every query filters on it, with tests covering it.
- **Consent as data:** each contact needs a consent record per channel. Opt-outs are checked at launch and again at send time, and STOP, ACHA and SITISHA replies are honoured.
- **Abuse controls:** new businesses start with a daily send limit until they are verified, and large campaigns need a second person to approve them.
- **One-command demo:** the whole stack runs locally on an embedded Postgres (PGlite), with no database to install.

## Where it stands

Version 0.2 works end to end: API, worker, webhooks and dashboard, all tested. M-Pesa top-ups and password reset come next. The source is private; I can walk you through it on request.
