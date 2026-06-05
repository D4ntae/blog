---
title: "My CTF Toolkit in 2026"
description: "The tools and scripts I actually reach for during CTF competitions, and how I think about building a toolkit."
date: 2026-05-20
tags: [ctf, tools, recon, web, pwn]
---

After a few years of competing in CTFs — mostly web and some pwn — I've settled on a toolkit that fits how I think. This isn't a "best tools" list, it's just what works for me and why.

## The principle

Keep the toolkit small enough to actually know it well. There's no point having 40 tools installed if you only reach for the same five. The goal is to know your tools well enough that the tool never becomes the bottleneck.

## Web

**[Burp Suite](https://portswigger.net/burp)** is non-negotiable for web. The repeater and intruder are where I spend most of my time. For CTFs the community edition is usually fine.

**[ffuf](https://github.com/ffuf/ffuf)** for fuzzing — endpoint discovery, parameter fuzzing, vhost enumeration. Faster than alternatives and the filter/match flags are flexible.

```bash
# Directory brute-force
ffuf -w /usr/share/wordlists/dirb/common.txt -u http://target.htb/FUZZ

# Parameter fuzzing (POST body)
ffuf -w params.txt -X POST -d 'FUZZ=test' -u http://target.htb/login \
     -H 'Content-Type: application/x-www-form-urlencoded' \
     -mc 200,302 -fs 1234
```

**[sqlmap](https://sqlmap.org/)** for SQL injection when I've already confirmed there's a vector and don't want to do it manually.

## Recon

**nmap** for everything. I have a notes post with the flags I actually use.

**[amass](https://github.com/owasp-amass/amass)** for subdomain enumeration in longer-running challenges.

## Pwn & Reversing

**pwntools** is the standard. If you're doing pwn and not using it, you're working harder than necessary.

```python
from pwn import *

elf = ELF('./challenge')
libc = ELF('./libc.so.6')

p = remote('target.ctf', 1337)

# Build payload
payload = flat(
    b'A' * 64,          # padding to overflow
    p64(elf.sym['win']) # overwrite return address
)

p.sendlineafter(b'> ', payload)
p.interactive()
```

**Ghidra** for decompilation. IDA Pro if the binary is particularly nasty.

## Scripting

Everything is Python. For web challenges I keep a template that pre-wires a `requests.Session` with the base URL and common headers so I'm not typing boilerplate in every solution script.

## What's missing

Deliberately: I don't carry a bunch of pre-built exploit scripts or automated scanners. In a CTF the interesting part is the vulnerability identification — automating past that is usually slower, not faster.
