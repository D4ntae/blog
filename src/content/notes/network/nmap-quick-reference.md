---
title: "Nmap Quick Reference"
description: "The nmap flags and scan patterns I actually reach for, organized by task. Not exhaustive, just useful."
date: 2026-04-15
tags: [nmap, recon, network, cheatsheet]
order: 1
---

Not a replacement for the man page — just the commands I keep reaching for.

## Host Discovery

```bash
# Ping sweep — who's alive on the subnet
nmap -sn 192.168.1.0/24

# Skip ping, assume host is up (useful when ICMP is filtered)
nmap -Pn 10.10.10.5

# ARP ping (faster, only works on local network)
nmap -PR 192.168.1.0/24
```

## Port Scanning

```bash
# Top 1000 ports, SYN scan (default, requires root)
nmap -sS 10.10.10.5

# All 65535 ports — slow but thorough
nmap -p- 10.10.10.5

# Specific ports
nmap -p 22,80,443,8080,8443 10.10.10.5

# UDP scan (very slow, use sparingly)
nmap -sU --top-ports 20 10.10.10.5

# Fast scan — top 100 ports
nmap -F 10.10.10.5
```

## Service and Version Detection

```bash
# Service version detection
nmap -sV 10.10.10.5

# OS detection (requires root)
nmap -O 10.10.10.5

# Aggressive: version + OS + scripts + traceroute
nmap -A 10.10.10.5
```

## NSE Scripts

```bash
# Run default scripts
nmap -sC 10.10.10.5

# Run a specific script
nmap --script=http-title 10.10.10.5

# Run a script category
nmap --script=vuln 10.10.10.5

# SMB enumeration
nmap --script=smb-enum-shares,smb-enum-users -p 445 10.10.10.5

# HTTP enumeration
nmap --script=http-enum -p 80,443 10.10.10.5

# Check for anonymous FTP
nmap --script=ftp-anon -p 21 10.10.10.5
```

## My Standard CTF Workflow

Two-phase scan: fast all-ports first, then deep scan on open ports.

```bash
# Phase 1 — find all open ports quickly
nmap -p- --min-rate 5000 -T4 10.10.10.5 -oN ports.txt

# Extract open ports (requires grep/sed)
PORTS=$(grep '^[0-9]' ports.txt | cut -d'/' -f1 | tr '\n' ',' | sed 's/,$//')

# Phase 2 — deep scan on open ports only
nmap -p $PORTS -sC -sV -O 10.10.10.5 -oN detailed.txt
```

## Output Formats

```bash
# Normal output to file
nmap 10.10.10.5 -oN output.txt

# Grepable output
nmap 10.10.10.5 -oG output.gnmap

# XML output (good for parsing)
nmap 10.10.10.5 -oX output.xml

# All three at once
nmap 10.10.10.5 -oA output
```

## Useful Flags

| Flag           | Meaning                                 |
|----------------|-----------------------------------------|
| `-v` / `-vv`   | Verbose (print results as found)        |
| `-T4`          | Timing template — fast but detectable  |
| `--min-rate`   | Minimum packets per second              |
| `--open`       | Only show open ports                    |
| `--reason`     | Show why nmap classified a port         |
| `-n`           | Skip DNS resolution (faster)            |
| `--source-port 53` | Spoof source port (firewall bypass trick) |

## Firewall / IDS Evasion

```bash
# Fragment packets
nmap -f 10.10.10.5

# Decoy scan (mix real traffic with decoys)
nmap -D RND:10 10.10.10.5

# Idle scan (use zombie host, very stealthy)
nmap -sI zombie_host 10.10.10.5

# Slow scan to avoid rate-limit detection
nmap -T1 10.10.10.5
```

Use evasion techniques only on systems you're authorized to test.
