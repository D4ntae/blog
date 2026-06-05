---
title: "recon-toolkit"
description: "A lightweight Python CLI that chains together common recon tasks — subdomain enumeration, port scanning, and HTTP probing — into a single opinionated workflow."
date: 2026-03-10
tags: [python, recon, cli, automation, security]
github: "https://github.com/dankodelimar/recon-toolkit"
status: "active"
---

## Overview

recon-toolkit is a lightweight Python CLI for bug bounty and CTF recon. It chains subdomain enumeration, port scanning, and HTTP probing into a single workflow with structured output.

The goal is to replace the "run 5 tools, combine the output manually" problem with one command that handles the handoffs automatically.

## Usage

```bash
# Full recon on a target domain
recon-toolkit run example.com

# Just subdomain discovery
recon-toolkit subdomains example.com --wordlist /path/to/wordlist.txt

# Port scan + HTTP probe on a list of hosts
recon-toolkit scan --hosts hosts.txt --probe-http
```

## Output

Results are written as JSON for easy piping into other tools:

```bash
recon-toolkit run example.com | jq '.hosts[] | select(.open_ports | length > 0)'
```
