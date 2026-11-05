---
title: Brimat ERP clean-up
short: Brimat ERP
summary: An 8-week industrial attachment auditing and repairing the Odoo ERP shared by a four-company computer retail group.
kind: Industrial attachment
year: '2026'
status: In progress · Sep–Oct 2026
sector: Retail ERP
stage: engagement
role: ERP audit & data-quality trainee, reporting to the CEO
stack: [Odoo 19 Enterprise, PowerShell, Excel, Data analysis]
order: 4
theme: cyan
highlight:
  value: 427 → 0
  label: duplicate customer records, cleared
metrics:
  - value: 427 → 0
    label: duplicate customer records across 125 shared phone numbers
  - value: 1,013 → 13
    label: products without a category
  - value: 1,058
    label: accessories re-sorted into 10 clear groups
  - value: '0'
    label: sales or accounting history deleted
architecture:
  caption: One Odoo database serves four companies. The central hub buys and stores stock and supplies three shops, which sell through their own tills. Products, contacts and serial numbers are shared, so one bad record affects every company.
  layers:
    - name: hub company
      items: [Central buying, 6 warehouses, Sales orders to shops]
    - name: shops (×3)
      items: [Point of sale, Own warehouse, Purchases from the hub]
    - name: shared data
      items: ['~6,500 products', '~9,800 contacts', '74k serial numbers']
    - name: system scale
      items: [65k accounting entries, 44k stock transfers, 16k till orders, 39 apps + 16 custom modules]
decisions:
  - title: Read-only first, always
    body: Every investigation starts with a read-only extract. Nothing is changed until the numbers are in a dated report and a decision has been made.
  - title: People approve, the system records
    body: Anything that touches money or customers — prices, archiving, merges — goes to management for sign-off. Permanent merges are never automated.
  - title: Archive, never delete
    body: Unused products and duplicates are archived, not deleted, so every past sale and invoice keeps its history.
  - title: Fix the cause, not just the data
    body: Each clean-up ends with a rule that stops the problem returning — like searching by phone number before creating a new contact.
timeline:
  - when: Week 1
    title: Orientation — the four companies and how they use Odoo
  - when: Week 2
    title: One report per company on its position in the system
  - when: Week 3
    title: Duplicate customer detection by phone, name and email
  - when: Week 4
    title: Full system health audit — the baseline every result is measured against
  - when: Week 5
    title: Product catalogue rebuilt — every product in the right category
  - when: Week 6
    title: Inter-company invoicing, email and bank reconciliation
    done: false
  - when: Week 7
    title: Data-entry rules and management dashboards
    done: false
  - when: Week 8
    title: Staff guides, training and final report
    done: false
---

## The situation

Four related computer retail companies share one Odoo ERP system: a central hub that buys and stores stock, and three shops that sell it. Years of daily use had let the data drift. Customers were recorded many times over, products were duplicated with different prices, and a thousand products had no category at all.

My job during the attachment: make the system a reliable single source of truth again, and leave behind the rules and guides that keep it that way.

## How I work

Every change follows the same cycle:

1. **Extract** — pull the data read-only through Odoo's standard interface
2. **Analyse** — scripts turn it into dated Excel reports: duplicates, price issues, categories
3. **Decide** — findings that affect money or customers go to the CEO for approval
4. **Change** — authorised staff make the change in Odoo
5. **Verify** — a fresh extract confirms it and updates the progress numbers
6. **Prevent** — a rule or check stops the same problem coming back

## What changed

- **Customers:** 125 phone numbers were shared by 427 records. After guided merges, no real duplicates remain.
- **Products:** duplicate categories merged (409 products moved), every product given a category, the catch-all accessories group split into 10, and 170 misfiled items corrected.
- **Prices:** 180 pricing problems — clashes, missing prices and below-cost items — put in front of management as one decision workbook.
- **Visibility:** a full health check of the system ahead of the move to Odoo 20, used to plan staff training.

## Also: social media analytics

For the group's retail brand I analysed 90 days of data across Instagram, TikTok and Facebook — 172,000 followers, 514 posts and 8.3 million views. The clearest finding: days with two or fewer reels earned about 2.7× more views per reel than days with four or more. I designed a monthly scorecard based on median views and views per 1,000 followers, so progress is measured by reach, not follower count.
