
---

# 4️⃣ `docs/DEPLOYMENT.md`

```md
# Deployment Guide

## Overview

ckmhto.ai is designed so that the frontend and backend can be deployed
as separate services.

The production architecture consists of:

```text
                         Internet
                            │
              ┌─────────────┴─────────────┐
              │                           │
              ▼                           ▼
        Next.js Frontend            FastAPI Backend
              │                           │
              │                           ├──────────► Groq
              │                           │
              │                           ▼
              │                     PostgreSQL
              │                           │
              │                           ▼
              │                          Neon
              │
              └─────────────── API Requests