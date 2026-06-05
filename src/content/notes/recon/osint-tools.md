---
title: "OSINT Tools"
description: "Passive reconnaissance tools and techniques for target profiling."
date: 2026-05-10
tags: [osint, recon, passive]
order: 1
---

## Identity & People

- `theHarvester` — emails, names, IPs from public sources
- `Maltego` — graph-based relationship mapping
- `sherlock` — username across platforms

## Infrastructure

- `shodan` — internet-connected device search
- `censys` — certificate and host enumeration
- `FOFA` — Chinese alternative to Shodan

## Documents & Metadata

```bash
exiftool document.pdf          # author, GPS, software
metagoofil -d target.com -t pdf,doc -l 20
```

## Google Dorks

```
site:target.com filetype:pdf
intitle:"index of" site:target.com
inurl:admin site:target.com
```
