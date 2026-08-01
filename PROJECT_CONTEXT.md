# MarketLens — Project Context

## Stack
- **Frontend**: Next.js (App Router), React 19, TypeScript, Tailwind CSS v4, Recharts, Framer Motion, TanStack Query
- **Backend**: FastAPI, SQLAlchemy, PostgreSQL, Redis, Celery
- **ML**: Python, TensorFlow, Scikit-learn, Pandas, NumPy, XGBoost
- **Auth**: JWT Authentication

## Conventions
- **Backend**: Repository pattern + Service layer, all routes thin
- **Frontend**: Feature-based folders where possible, use `src/components/ui` for shared components
- **Naming**: `snake_case` (Python backend), `camelCase` & `PascalCase` (TypeScript frontend)
- **API**: All new endpoints require Pydantic request/response schemas
- **Styling**: No inline styles — Tailwind only. Use existing design tokens in `globals.css`
- **Testing**: Every new backend module needs a corresponding test file

## Strict Rules
- Do not modify auth or DB migration files without explicit instruction
- Do not introduce new dependencies without asking
- Do not restructure existing folders
- Generate only the files requested. Never regenerate unchanged files.
- Return code only unless an explanation is requested.
