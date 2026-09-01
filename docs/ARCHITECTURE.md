# Architecture

## Overview

ckmhto.ai is a full-stack AI portfolio application built around a
separation of frontend, backend, database and AI inference responsibilities.

The system consists of:

- Next.js frontend
- FastAPI backend
- PostgreSQL database
- Neon PostgreSQL hosting
- Groq LLM inference
- SQLAlchemy asynchronous database access
- Alembic database migrations

---

## High-Level Architecture

```text
                         INTERNET
                            │
                            ▼
                  ┌──────────────────┐
                  │     Next.js      │
                  │    Frontend      │
                  └────────┬─────────┘
                           │
                        HTTP API
                           │
                           ▼
                  ┌──────────────────┐
                  │     FastAPI      │
                  │     Backend      │
                  └────────┬─────────┘
                           │
                ┌──────────┴──────────┐
                │                     │
                ▼                     ▼
       ┌─────────────────┐   ┌─────────────────┐
       │   PostgreSQL    │   │     Groq LLM    │
       │                 │   │                 │
       │ Projects        │   │ AI Generation   │
       │ Chat Messages   │   │                 │
       └────────┬────────┘   └─────────────────┘
                │
                ▼
          Neon PostgreSQL