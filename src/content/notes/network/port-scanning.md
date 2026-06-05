---
title: "Port Scanning Techniques"
description: "SYN, UDP, version detection, and OS fingerprinting — when to use which."
date: 2026-04-20
tags: [network, scanning, recon]
order: 2
---

## SYN Scan (default)

```bash
nmap -sS 10.10.10.5
```

Sends SYN, waits for SYN-ACK. Never completes the handshake. Fast, stealthy(ish), requires root.

## UDP Scan

```bash
nmap -sU 10.10.10.5
```

Slow. ICMP port-unreachable = closed. No response = open|filtered.

## Version Detection

```bash
nmap -sV 10.10.10.5
```

Sends probes to open ports, matches against service fingerprint DB.

## OS Fingerprinting

```bash
nmap -O 10.10.10.5
```

Needs at least one open and one closed port to work reliably.
