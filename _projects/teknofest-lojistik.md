---
title: Linehaul Demand Forecasting
subtitle: TEKNOFEST 2026 · Hepsiburada
summary: >-
  Route-level 7-day shipment-demand forecasting for Hepsiburada's linehaul
  network. XGBoost, LSTM, GRU and Prophet against naive, seasonal and
  moving-average baselines, with leakage-free features and rolling-origin
  validation.
metric: "Rolling WMAPE 34.48% → 32.96%"
tags: [Time series, XGBoost, LSTM / GRU, Pandas]
repo: https://github.com/yasinserifhan/Teknofest_Lojistik
role: Team project · I developed the forecasting component
year: 2026
order: 1
featured: true
---

Built for the TEKNOFEST 2026 AI-Powered Linehaul Logistics Optimization
Competition. The model forecasts shipment volume (`toplam_desi`) for every
origin → destination route, 7 days ahead, for both demand completion times
(09:00 and 17:00).

## Approach

- **Models:** XGBoost, LSTM and GRU, plus Prophet experiments, compared against
  naive, seasonal-naive, moving-average and EMA baselines.
- **Leakage-free features:** lags (1–28 days) and rolling statistics use only
  data available before the forecast date, and XGBoost forecasts recursively
  on its own predictions.
- **Calendar and route features:** campaign and special-day flags,
  operationally closed days, cyclic weekday and yearly encodings, route
  identity, transfer-center distance and route × weekday behavior.
- **Model selection with rolling-origin validation** instead of a single
  holdout week.

## Results

| Model | Final-week WMAPE | Rolling mean WMAPE | Rolling mean MAE |
|---|---:|---:|---:|
| Previous XGBoost | **28.02%** | 34.48% | 1102.48 |
| **New XGBoost (production)** | 29.46% | **32.96%** | **1069.97** |

The previous model scores slightly better on the single final week, but the
new one is better on average across the rolling windows and varies less from
fold to fold, so it went to production. The project deliberately optimizes for
consistency over time rather than one favorable test period.

The final deliverable was a validated forecast of **3,862 route-hour rows** for
29 June – 5 July 2026.
