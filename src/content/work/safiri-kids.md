---
title: Safiri Kids
summary: Records and M-Pesa payments for private school transport. Each van owner sees which parents have paid, who owes and whose agreement is ending.
kind: product
status: Phases 1–6 of 7 built · going online next
sector: School transport
stage: building
year: "2026"
stack: [Node.js, Express, SQLite, React, Vite, M-Pesa Daraja]
order: 10
---

## The problem

In Kenya many children get to school in privately owned vans and cars. The children in one vehicle attend different schools and live in different places, and each family agrees its own price with the owner or driver. Owners track all of this in notebooks and M-Pesa messages, so they lose track of who has paid, who owes, and when an agreement ends.

## What I built

- **One agreement per child:** agreed price, weekly, monthly or termly billing, morning, evening or both runs, the child's own pick-up and drop-off points, and an end date.
- **Balances per family:** invoices minus payments, with siblings sharing one balance.
- **M-Pesa STK push:** the parent gets a payment prompt on their phone. The payment is recorded only after the server checks it with Safaricom, and each M-Pesa code is recorded once.
- **Daily billing and reminders:** invoices are raised before each period starts. Parents get email reminders, receipts and "transport ends in 7 days" notices without needing an account. Each owner gets a morning summary.
- **Safety and compliance:** emergency contacts, who may collect each child, medical notes, trip records, and warnings before insurance, inspection, driving licence or PSV badge expire.
- **Driver screen:** drivers sign in with a one-time link the owner sends by WhatsApp or SMS, with no password. They see only today's runs for their own vehicles and mark each child picked up, dropped off or absent. Parents get an email at each step, and the owner's home screen shows the run live. Drivers never see money.
- **Owner app:** a web app that works on a phone and installs to the home screen, covering parents, children, vehicles, money, messages and drivers.

## How it's built

- **Backend:** Node.js and Express with the SQLite built into Node, so there is no database server to run.
- **Frontend:** React and Vite.
- **Security:** each owner sees only their own data, and a driver's sign-in can never pass as an owner's. The app also has hardened sessions, security headers, request limits and verified M-Pesa callbacks. Its 46 automated tests are mostly attack cases.

## Where it stands

Phases 1 to 6 of 7 are built: database, API, M-Pesa (sandbox), daily billing, the owner app and the driver screen. Next is going online: HTTPS, email verification, password reset, backups and live M-Pesa. The source is private; I can walk you through it on request.
