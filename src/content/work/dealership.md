---
title: Car dealership platform
summary: Showroom website and back office for a Nairobi-area car dealership. It covers stock listings, test-drive booking, M-Pesa deposits and staff roles.
kind: client
status: Phase 1 built · launch pending
year: "2026"
stack: [Next.js, TypeScript, PostgreSQL, Drizzle, Docker, M-Pesa Daraja]
featured: true
order: 2
---

## The brief

The dealership needed a website buyers can browse on their phones. It also needed a back office simple enough for sales staff to run every day.

## What I built

**For buyers:**
- Stock listings with photo galleries and video.
- Saved favourites, side-by-side comparison and price-drop alerts.
- Test-drive booking within opening hours. Staff confirm the booking and the buyer gets a calendar invite.
- M-Pesa deposits that reserve a car. A payment counts as paid only after the system confirms it with M-Pesa. If two buyers pay for the same car, the second payment is flagged for a refund.

**For staff:**
- Excel/CSV stock import with row checks and a duplicate guard.
- Bulk photo upload matched to each car by stock number.
- Draft-then-publish workflow.
- Staff accounts tied to the company email domain, with two-factor sign-in.

## How it's built

- Next.js 16 with TypeScript. PostgreSQL through Drizzle ORM. Files are stored in an object store (Cloudflare R2).
- Every upload is virus-scanned (ClamAV in Docker).
- CI runs tests against a real database. It also runs code scanning (CodeQL), dependency updates and backup jobs.

## Where it stands

Phase 1 is built and tested. Launch is waiting on the client's domain, branding and stock. The client's name will be added here with their permission.
