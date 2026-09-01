
---

# 3️⃣ `docs/DATABASE.md`

```md
# Database Documentation

## Overview

ckmhto.ai uses PostgreSQL as its primary relational database.

The backend accesses the database using:

- SQLAlchemy
- Async SQLAlchemy sessions
- PostgreSQL
- Alembic migrations

The production database can be hosted using Neon PostgreSQL.

---

# Database Architecture

```text
Next.js
   │
   ▼
FastAPI
   │
   ▼
SQLAlchemy
   │
   ▼
PostgreSQL
   │
   ▼
Neon