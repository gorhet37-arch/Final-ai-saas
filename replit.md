# RevenuePilot AI

AI-powered customer engagement platform for high-value service practices (dental, legal, medical, physio). Captures leads, books appointments, and recovers missed-call revenue via an AI front-desk assistant.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000/8080)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run typecheck:libs` — rebuild lib type declarations (run after editing `lib/api-client-react/src/generated/api.schemas.ts`)
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — **DO NOT RUN** — OpenAPI spec is minimal; generated files have manually added types that codegen would wipe
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string
- Required env: `GEMINI_API_KEY` — Google Gemini API key for AI chat

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- AI: Google Gemini 2.5 Flash (`@google/genai`)
- Frontend: React 19 + Vite + Wouter (routing) + TailwindCSS v4 + shadcn/ui
- API codegen: Orval (from OpenAPI spec) — but spec is minimal, generated files edited directly
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/api-server/src/routes/` — all API routes (dashboard, analytics, conversations, chat, profile, ai-settings, integrations)
- `artifacts/web/src/pages/` — all frontend pages
- `artifacts/web/src/components/layout/` — AppLayout (desktop sidebar + mobile Sheet drawer), Sidebar, Navbar, PublicLayout
- `lib/db/src/schema/` — Drizzle DB schemas (conversations, leads, integrations, profile, ai-settings)
- `lib/api-client-react/src/generated/` — TypeScript types and React Query hooks — **edit directly, do not codegen**
- `lib/api-zod/src/` — Zod validation schemas for API routes

## Architecture decisions

- `api.schemas.ts` edited manually (not via codegen) — OpenAPI spec only has `/healthz`; all other schemas are hand-maintained. Running codegen would erase them.
- All routes wrapped in `try/catch` → graceful 500 JSON errors when DB absent; frontend shows empty states.
- `chat.ts` auto-captures leads by scanning user+AI messages for email regex, then inserts into `leadsTable` and updates the conversation row.
- Dashboard shows only 4 real stats: totalConversations, totalLeads, activeIntegrations, totalIntegrations — no fake/synthetic metrics.
- `roiEstimate` = `totalLeads × $285` — clearly labeled as estimate in UI.

## Product

- **Home page**: Light/premium Stripe-style design, live AI chat demo, 3 modest honest stats, 6 feature cards, testimonials, pricing teaser, footer
- **Dashboard**: Empty state when no data; 4 real stat cards + charts once data exists
- **Conversations / Leads**: Paginated table with load-more; empty states; real DB data only
- **Analytics**: Period selector (7d/30d/90d); real GROUP BY date queries; ROI estimate from captured leads
- **AI Brain**: Configurable persona name, tone, greeting, FAQs, business hours
- **Profile**: Business info + plan selector
- **Integrations**: 10 seeded integrations (Starter/Revenue/Omnichannel tiers)
- **Mobile**: Full responsive — mobile top bar + Sheet drawer for sidebar on small screens

## User preferences

_Populate as you build._

## Gotchas

- After editing `lib/api-client-react/src/generated/api.schemas.ts`, run `pnpm run typecheck:libs` before web typecheck or the web will use stale `.d.ts` declarations.
- Do NOT run `pnpm --filter @workspace/api-spec run codegen` — it will overwrite the manually maintained generated files.
- The API server build output is ~2.2MB — this is normal (bundled with Drizzle and Pino).

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
