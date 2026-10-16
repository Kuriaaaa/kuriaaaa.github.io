---
title: Multi-company ERP clean-up
summary: Audited and cleaned one Odoo 19 Enterprise system shared by four computer retail and wholesale companies. Customer, product and supplier data now work as one reliable record.
kind: experience
status: Industrial attachment · Sep – Oct 2026
year: "2026"
stack: [Odoo 19, Python/JSON-RPC, PowerShell, Excel automation, Data quality]
featured: true
order: 3
cover: /images/covers/erp.svg
coverAlt: Diagram of a warehouse and three shops sharing one ERP database
---

**Role:** ERP audit and data-quality trainee, Brimat Ventures Group (industrial attachment, 7 Sep – 30 Oct 2026). I reported to the Director and the CEO.

## The situation

Four companies share one Odoo system: a central warehouse and three shops. Over time the data drifted:
- the same customers were recorded several times
- the same laptop appeared on many product cards, often at different prices
- the reports did not agree with what was on the shelves

## What I did

- **Audit and baseline.** I reviewed stock, sales, purchasing, invoicing, point of sale, email and HR. I recorded a baseline so management could measure progress every week.
- **Customers.** I cleared 427 contact records that shared 125 phone numbers, leaving no real duplicates. I set a phone-number rule so new duplicates are caught.
- **Product catalogue.**
  - About 6,600 products were reorganised.
  - More than 1,000 uncategorised products went into the right categories.
  - One "accessories" bucket was split into 10 groups.
  - More than 3,200 names were standardised with rule-based scripts (BRAND SERIES MODEL).
  - 542 duplicate product cards were merged into 240, keeping their stock, serial numbers and order history.
- **Purchasing and stock.** I checked more than 900 draft supplier bills against purchase orders and goods receipts. I also reconciled supplier stock uploads and designed a standard import template so goods can't be received twice.
- **People and access.** I reviewed point-of-sale access rights and wrote an Odoo role guide for the HR lead.
- **Reporting.** I built automated Excel reports with PowerShell, plus progress decks, staff guides and support tickets for management, finance and stores.

## How I worked

- I read data through Odoo's JSON-RPC API.
- I built each change as a reviewed import file.
- I checked every change live in the system afterwards.
- Nothing was deleted: old records are archived with their history kept.

Company figures and documents stay confidential.
