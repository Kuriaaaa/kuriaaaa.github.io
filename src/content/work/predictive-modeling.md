---
title: Predicting missed appointments
summary: Linear models that predict medical appointment no-shows and concrete strength, built in Python.
kind: Data science
year: '2026'
status: Completed
role: Analysis and modelling
stack: [Python, pandas, scikit-learn]
order: 3
theme: violet
# Hidden until rebuilt: publish real runnable code (Kaggle/GitHub), add a tree-based model
# from Assignment 3, and lead with the operational insight (SMS reminders vs waiting time).
draft: true
highlight:
  value: F1 0.41
  label: Best no-show prediction · Logistic Regression
links:
  - label: Report (PDF)
    href: /assets/documents/data-science/assignment-2/DSA4202-Assignment-2-Submission.pdf
  - label: Full workflow (PDF)
    href: /assets/documents/data-science/assignment-2/DSA4202-Assignment-2-Workflow.pdf
---

## The question

Can simple, explainable models predict which patients will miss an appointment — and how strong a concrete mix will be?

## Approach

- Standardised every feature and tuned regularisation strength
- Weighted classes to handle the imbalance in no-shows
- Compared Logistic Regression with Linear SVC, and Ridge with Lasso

## Result

| Task                 | Best model          | Score     |
| -------------------- | ------------------- | --------- |
| Appointment no-shows | Logistic Regression | F1 0.41   |
| Concrete strength    | Ridge               | RMSE 9.69 |

Coursework for DSA 4202 at KCA University.
