# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # start dev server (localhost:3000)
npm run build            # production build
npm run lint             # next lint
npx tsc --noEmit         # type-check (no dedicated script; there is no test suite)
npx vercel --prod --yes  # deploy to production — run from this directory, not its parent
```

See `.claude/skills/site-deploy-ops/SKILL.md` for the full deploy/DNS/resume-refresh workflow (Vercel CLI, Cloudflare's `cf` CLI for DNS, converting the resume from its source `.docx`).

## Architecture

This is a single-page portfolio site (Next.js App Router, TypeScript, Ant Design v6). Real SSR, not a static export — `next.config.ts` deliberately has no `output: "export"`.

**Content lives in one place**: `src/data/content.ts` is the single source of truth for experience, About-section highlights, skills, projects, and social links. Editing site copy or adding a project means editing this file — the section components (`src/components/*.tsx`) just render whatever's there.

**Everything is a client component except the page itself.** `src/app/page.tsx` is the only Server Component (it's `async`). Every section component is `"use client"` — Ant Design v6 relies on React context/hooks internally, so it needs a client boundary even though the App Router would otherwise default to Server Components.

**SSR + Ant Design wiring**: `src/components/Providers.tsx` wraps the tree in `AntdRegistry` (collects antd's CSS-in-JS styles during SSR so there's no unstyled flash) and `ConfigProvider` with the dark theme from `src/theme.ts`. This has to be a client component and has to wrap everything in `src/app/layout.tsx`.

**Live Play Store install counts**: `page.tsx` fetches install counts server-side via `src/lib/playstore.ts` (uses `google-play-scraper` — there's no official free Google API for this) and passes them down as a prop to the client `Projects` component. `export const revalidate = 86400` in `page.tsx` makes this re-fetch at most once a day via ISR rather than on every request. Don't move this fetch into a client component — that would hit Play Store on every page load instead of once a day.

**Project cards are conditionally composed**: the `Project` type in `content.ts` has optional `href` (GitHub — omitted for private repos), `playStoreId` (drives both the Play Store icon link and the live install badge), and `demoUrl` (live preview link). `src/components/Projects.tsx` renders whichever icons apply per project rather than assuming every project has the same links.

**Deployment**: Vercel, with `raedalbloushy.com` on Cloudflare DNS (an apex `A` record to Vercel's anycast IP, `proxied: false` since Cloudflare's proxy would interfere with Vercel's own SSL/edge routing).

**`public/resume.pdf`** is generated from an external `.docx` (not in this repo) via Microsoft Word — it isn't hand-edited here.

Note: `README.md` in this repo is stale — it still describes the old Create React App/Firebase setup this project was migrated away from.
