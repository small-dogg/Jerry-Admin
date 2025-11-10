# Repository Guidelines

## Project Structure & Module Organization
The React client lives in `src/`, grouped by domain to keep authentication, dashboard, and shared widgets isolated. Use `src/domains/auth` for login flows (email, Kakao, Naver, Google) and keep reusable UI in `src/components`. Global assets (icons, fonts) stay under `src/assets`, while cross-cutting hooks/utilities belong in `src/lib`. Co-locate tests next to the components they verify (e.g., `LoginForm.test.tsx`) to keep intent obvious. Configuration, build scripts, and tooling sit in the repo root; avoid scattering custom scripts under `src`.

## Build, Test, and Development Commands
- `npm install` – install lockfile-pinned dependencies; rerun after pulling new tooling configs.
- `npm run dev` – start Vite’s dev server with hot reload at `http://localhost:5173`.
- `npm run build` – produce an optimized bundle in `dist/` for preview deployments.
- `npm run preview` – serve the built assets locally to smoke-test OAuth redirects.
- `npm run lint` / `npm run format` – run ESLint and Prettier; required before pushing.

## Coding Style & Naming Conventions
Use TypeScript, 2-space indentation, and named exports for domain modules. Components follow `PascalCase` (`LoginButton`), hooks use `use` prefix, and files inside `src/domains/<domain>` mirror the feature they implement (`LoginPage.tsx`, `auth.api.ts`). Favor functional components with hooks; avoid class components. Keep CSS modules or styled-components colocated with their component file, and centralize OAuth endpoints in `src/domains/auth/constants.ts` to prevent drift.

## Testing Guidelines
Vitest plus React Testing Library power UI tests; stub OAuth adapters with fixtures under `src/domains/auth/__mocks__/`. Name tests `<Component>.test.tsx` and cover at least: input validation, username/password submission, and provider button wiring. Run `npm run test -- --coverage` before opening a PR and keep auth-domain coverage above 80% lines/branches. Snapshot tests are acceptable only for stable layout wrappers.

## Commit & Pull Request Guidelines
Use Conventional Commits (`feat(auth): add kakao oauth handler`) so release notes and CI checks stay predictable. Each PR should describe scope, screenshots or GIFs of UI changes (login form states), and linked issue IDs. Block merges until lint, format, build, and tests pass in CI. If a change touches OAuth settings, call out required `.env` updates and attach verification steps for each provider.

## Security & Configuration Tips
Never hard-code OAuth client secrets; reference them via `VITE_`-prefixed env vars documented in `.env.example`. Audit redirect URIs whenever adding a new environment, and log authentication failures with sanitized payloads only. Credentials entered in the login form must never be stored outside React state—clear them on navigation or unmount.
