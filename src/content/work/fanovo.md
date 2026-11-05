---
title: Fanovo
summary: A multi-channel messaging platform for businesses — SMS, email and WhatsApp campaigns from one prepaid wallet, with Kenyan data-protection rules built in.
kind: Product
year: '2026'
status: v0.2 · API, send pipeline and dashboard working
sector: Business messaging
stage: building
role: Sole developer — architecture, API, worker, dashboard and compliance
stack: [TypeScript, Fastify, PostgreSQL, Vite, Zod, Vitest]
order: 3
theme: rose
highlight:
  value: 3 channels
  label: SMS, email and WhatsApp from one wallet
metrics:
  - value: '3'
    label: channels — SMS, email and WhatsApp — behind one adapter interface
  - value: '0'
    label: extra queue servers — Postgres is the queue
  - value: 2-person
    label: approval required for large campaigns
  - value: 1 command
    label: to run the full stack locally, no database install
architecture:
  caption: The API and the send worker share one Postgres database. Messages are rows; workers claim them with FOR UPDATE SKIP LOCKED, so several can run safely without Redis. Delivery reports and opt-outs come back through webhooks.
  layers:
    - name: businesses
      items: [Sign-up + KYC, Contacts with consent, Templates, Campaigns]
    - name: api (fastify)
      items: [Multi-tenant routes, Prepaid wallet, Two-person approval, Staff console]
    - name: worker
      items: [Claims due messages, SMS / email / WhatsApp adapters, Retries + refunds]
    - name: data + webhooks
      items: [PostgreSQL (PGlite locally), Delivery reports, STOP replies, Audit log]
decisions:
  - title: The messages table is the queue
    body: Workers claim rows with FOR UPDATE SKIP LOCKED. One less moving part to host and pay for, and it scales to several workers before Redis is needed.
  - title: Every row carries a tenant
    body: Each table has a tenant_id and every query filters on it, with tests covering it, so one business can never see another's contacts or campaigns.
  - title: Consent is data, not a checkbox
    body: Each contact needs a consent record per channel with its source. Opt-outs are checked at launch and again at send time, and STOP, ACHA and SITISHA replies are honoured.
  - title: Charge up front, refund what never left
    body: The full campaign cost is reserved at launch. Messages that fail to send or are suppressed are refunded; ones the network already billed are not.
timeline:
  - when: v0.1
    title: Multi-tenant messaging back end — API, send pipeline and compliance rules
  - when: v0.2
    title: Web dashboard, staff console and a one-command local demo
  - when: Next
    title: M-Pesa top-ups and password reset
    done: false
  - when: Then
    title: Live provider accounts and a first paying business
    done: false
---

## The problem

Small businesses in Kenya talk to customers on SMS, email and WhatsApp, usually from three different tools, with no record of who agreed to be contacted. The Data Protection Act 2019 makes that a real risk, not just untidy.

## What I built

One platform where a business signs up, tops up a prepaid balance, imports contacts with consent and sends campaigns on any channel.

- **For businesses** — contacts, templates, campaigns and delivery results in one dashboard
- **For Fanovo staff** — a console to verify new businesses, approve sender IDs and review large campaigns
- **For recipients** — automatic opt-out lines, one-click email unsubscribe and quiet hours (20:00–08:00 EAT by default)

## Built-in abuse controls

New businesses start as `pending_kyc` with a daily send limit until staff verify them. Campaigns above a size threshold need a second person to approve them, and sender IDs must be approved before use.

## Result

Version 0.2 runs end to end: API, worker, webhooks and dashboard, all tested. A one-command local mode runs everything on an embedded Postgres, so a reviewer can try it in a minute. The source is private; a walkthrough is available on request.
