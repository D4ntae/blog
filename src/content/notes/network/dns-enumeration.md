---
title: "DNS Enumeration"
description: "Zone transfers, brute-forcing subdomains, and passive DNS recon."
date: 2026-05-01
tags: [dns, network, recon, enumeration]
order: 3
---

## Zone Transfer

```bash
dig axfr @ns1.target.com target.com
```

If misconfigured, dumps all DNS records. Rarely works in the wild.

## Subdomain Brute-force

```bash
gobuster dns -d target.com -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt
```

## Passive Recon

- `crt.sh` — certificate transparency logs
- `dnsx` — fast DNS resolver/prober
- `amass enum -passive -d target.com`
