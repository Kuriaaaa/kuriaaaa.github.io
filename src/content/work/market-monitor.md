---
title: Market session monitor
summary: Python service that watches gold-market sessions, logs every decision and sends phone alerts. It never places trades.
kind: research
status: Research · alerts only
year: "2026"
stack: [Python, SQLite, Pine Script, Push notifications]
order: 6
---

A personal research tool. It reads market context across several timeframes and records each decision to a local journal. It then sends notifications to a phone. It deliberately has no connection to a broker.

The engineering is the interesting part:
- signed-in sessions
- encrypted device tokens
- notifications retried in order
- 69 automated tests
