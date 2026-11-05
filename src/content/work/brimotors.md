---
title: Brimotors
summary: Showroom website and back office for a car dealer on Kiambu Road — stock search, M-Pesa deposits and a secure document vault.
kind: Client project
year: '2026'
status: Launching on brimotorslimited.co.ke
sector: Automotive retail
stage: building
role: Full-stack developer — architecture, build, security and deployment
stack: [Next.js, TypeScript, PostgreSQL, M-Pesa Daraja, Tailwind CSS]
order: 2
theme: amber
cover: ../../assets/work/brimotors/home.jpg
coverAlt: Brimotors home page with car search
gallery:
  - src: ../../assets/work/brimotors/home.jpg
    alt: Brimotors home page
    caption: Home — search stock by make, model, body type and price.
  - src: ../../assets/work/brimotors/stock.jpg
    alt: Brimotors stock listing
    caption: Stock — filters, sorting and status badges.
  - src: ../../assets/work/brimotors/car.jpg
    alt: Brimotors car page
    caption: Car page — gallery, offers, waiting list and WhatsApp. Shown with demo stock.
metrics:
  - value: '100'
    label: Lighthouse accessibility on every tested page
  - value: 91–97
    label: Lighthouse speed on mobile 4G
  - value: '0'
    label: layout shift on any page
  - value: up to 40
    label: photos per car, in the order staff choose
architecture:
  caption: Public pages are server-rendered for speed and search. Staff work behind sign-in with two-factor codes; documents never touch the database unencrypted.
  layers:
    - name: buyers
      items: [Stock search, Car pages, Offers + waiting list, M-Pesa deposit, WhatsApp]
    - name: next.js app
      items: [Server-rendered pages, Staff admin + roles, Two-factor sign-in, Rate limiting]
    - name: services
      items: [M-Pesa Daraja (STK push), PDF invoices, Email alerts, ClamAV virus scan]
    - name: data
      items: [PostgreSQL via Drizzle ORM, Encrypted file storage (R2), Hash-chained audit log, Nightly off-site backup]
decisions:
  - title: Never trust the payment callback alone
    body: A car is only reserved after the app asks Safaricom directly what happened. If the callback never arrives, the same query recovers the payment.
  - title: Encrypt every document with its own key
    body: Logbooks and IDs use envelope encryption — a fresh AES-256 key per file, wrapped by a master key that lives only in the server environment.
  - title: An audit log that can't be quietly edited
    body: Each entry stores the hash of the one before it, so deleting or changing any record breaks the chain and shows up in verification.
  - title: Built for slow phones first
    body: Most buyers browse on mobile data. Pages were tuned until they loaded their first content in about a second on slow 4G.
timeline:
  - when: Brief
    title: Requirements from the client's brief, item by item
  - when: Core site
    title: Stock search, car pages, offers, invoices and staff back office
  - when: Security
    title: Document vault, two-factor sign-in, audit chain, CodeQL scanning
  - when: Payments
    title: M-Pesa deposits to reserve a car, with live status
  - when: Quality
    title: Accessibility and speed audit — 100 accessibility on all tested pages
  - when: Next
    title: Go live on the company domain with real stock and photos
    done: false
---

## The brief

Brimotors Limited, a used-car showroom on Kiambu Road, needed more than a brochure site: a place to sell cars online and a back office to run the showroom.

## What I built

**For buyers:** stock search, car pages with photos and video, PDF pro-forma invoices, offers, waiting lists, price-drop alerts, test-drive booking, trade-ins, financing requests and M-Pesa deposits to reserve a car.

**For staff:** a back office for vehicles, leads, offers, testimonials and staff accounts, with bulk stock import from Excel and an audit log of every change.

**For documents:** a vault for logbooks and IDs. Every file is virus-scanned, encrypted, watermarked on view and shared only through one-time links.

## A closer look: M-Pesa outcomes

Safaricom reports payments as numeric result codes. The app maps them to four clear states, so staff and buyers always see what actually happened:

```ts
export function outcomeFor(resultCode: string | number): PaymentOutcome {
  const code = String(resultCode);
  if (code === '0') return 'paid';
  if (code === '1032') return 'cancelled'; // customer pressed cancel
  if (code === '1037' || code === '1019') return 'timeout'; // phone unreachable / no PIN in time
  return 'failed'; // e.g. insufficient funds, wrong PIN
}
```

## Result

A fast, accessible, secure platform ready for launch on the company's own domain. Automated tests, security scanning and backups run on every change.
