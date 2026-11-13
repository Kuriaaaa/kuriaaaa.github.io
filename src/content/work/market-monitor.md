---
title: Market session monitor
summary: Python service that watches gold-market sessions, sends plain-English alerts, tracks every signal to its result and shows it all on a one-page dashboard. It never places trades.
kind: research
status: Research · alerts only · evidence gate
sector: Market research
stage: research
note: Alerts only. It never trades.
year: "2026"
stack: [Python, SQLite, Pine Script, Telegram, Linux VPS]
order: 6
---

A personal research tool. At six fixed checkpoints a day it checks the market against written rules across several timeframes. When every rule is met, it sends a plain-English alert to my phone. It deliberately has no connection to a broker.

The engineering is the interesting part:
- **Honest record keeping:** every signal is followed to its result and stored in a local journal, so the method can be judged on evidence rather than memory.
- **An evidence gate:** a script regenerates a pass/fail report from the journal. It needs enough out-of-sample results, a positive result after costs, limited drawdown and a clean-data replay that agrees. Until it passes, the project stays research. Passing still never switches on trading.
- **A one-page dashboard:** data freshness, today's coverage, the last signal and the gate's status, in plain words.
- **Always-on deployment:** a Linux VPS guide with a cut-over checklist and a read-only pre-flight check, so two monitors never run at once.
- **Guard rails in tests:** the test suite fails if broker or order code ever appears.
