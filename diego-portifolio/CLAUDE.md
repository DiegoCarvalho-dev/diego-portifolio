# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Next.js dev server
- `npm run build` — type-check + static export to `out/` (this is the only verification step; there are no tests)
- `npm run lint` / `npm run format` — ESLint 9 (flat config) / Prettier
- `npm run convert-image -- <input> <output-rel-to-public/images> [--max N]` — convert an image to WebP and record its dimensions in `lib/image-manifest.json`
- `node scripts/generate-og.mjs` — regenerate the Open Graph images

## Architecture

Bilingual static portfolio (Next.js 16 App Router, `output: "export"`, `trailingSlash`, unoptimized images). Deploy is manual: upload `out/` to any static host. Do NOT add Vercel/gh-pages config or a base path — they were removed deliberately.

**i18n via two root layouts**: route group `app/(pt)/` serves `/` with `<html lang="pt-BR">`; `app/(en)/en/` serves `/en/` with `lang="en"`. There is no top-level `app/layout.tsx`. Case-study slug pairs (PT↔EN) live in `CASE_SLUGS` in `lib/routes.ts`, which also powers the language switcher path mapping and the sitemap.

**All user-facing strings live in `content/pt/*.ts` and `content/en/*.ts`** (mirrored files typed by `content/types.ts`) — never hardcode copy in components. Contact info and URLs come from `content/site.ts` (`SITE_URL` and `LINKEDIN_URL` are placeholders pending the owner). Case-study texts were provided verbatim by the owner — do not rewrite, and never name the employer's products or clients (the two professional case studies use SVG architecture diagrams in `components/diagrams/`, not screenshots).

**Theming**: dark is default; `.light` on `<html>` switches CSS variables (defined in `app/globals.css`, mapped to Tailwind v4 tokens via `@theme inline`). An inline script (`lib/theme-script.ts`) applies the stored/system theme before paint and adds the `js` class that enables reveal animations. `--accent` is the text-safe blue per theme; `--accent-deep` (#3c6ea5) is for fills/borders.

**Images**: `components/ProjectImage.tsx` checks `fs.existsSync` at build time — missing files render an aspect-ratio-reserving dashed placeholder (expected filenames are documented in README). Width/height come from `lib/image-manifest.json`, written by the convert script.

## Constraints from the owner

- Never invent projects, metrics, or technologies; the allowed stack list is in the content files — notably no Java, Angular, Django, Spring Boot, Bootstrap, GraphQL, Jest or Cypress (Vue.js is allowed).
- Keep files under 300 lines; TypeScript strict; commit messages in pt-BR following the existing `feat:`/`fix:`/`chore:` style.
- WCAG 2.1 AA: contrast ≥ 4.5:1, keyboard nav with visible focus, skip link, semantic landmarks, descriptive alts, `prefers-reduced-motion` respected. Lighthouse target ≥ 95 in all categories.
