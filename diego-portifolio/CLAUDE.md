# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check (`tsc -b`) then build to `dist/`
- `npm run preview` — serve the production build locally
- `npm run deploy` — publish `dist/` to GitHub Pages via `gh-pages` (run `npm run build` first)

There are no tests and no linter configured; `tsc -b` (part of `build`) is the only check.

## Architecture

Single-page portfolio site (React 18 + TypeScript + Vite + Tailwind CSS). No router — `src/App.tsx` composes the page from the four section components in `src/sections/` (Hero, Projects, Skills, About) and renders a floating WhatsApp button whose visibility depends on scroll position (desktop) or is always on (mobile). Entry point `src/main.tsx` initializes AOS (scroll animations, `once: true`) globally.

- `src/components/Lightning.tsx` — animated canvas background effect used by sections (plain 2D canvas, styled by `Lightning.css`).
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge); Tailwind config uses the shadcn/ui-style HSL CSS-variable theme tokens defined in `src/index.css`.
- `src/pages/ErrorPages.tsx` — standalone 404/error components, not wired into rendering.
- Project screenshots live in `src/assets/`; the downloadable CV is `public/cv/Diego_Carvalho_CV.pdf`.
- `@` path alias resolves to `src/` (configured in both `vite.config.ts` and `tsconfig.json`).

All user-facing content is in Brazilian Portuguese (`lang="pt-BR"`); keep new copy and commit messages consistent with that.

## Deployment gotchas

- Vite `base` is `'/diego-portifolio/'` (note the intentional "portifolio" spelling) for GitHub Pages — asset and link paths must work under that subpath.
- `vercel.json` also exists for Vercel deploys (SPA rewrite to `index.html`); the site targets both hosts.
- `vite.config.ts` is the source of truth; `vite.config.js` (plus `*.tsbuildinfo`) is compiled output from `tsc -b` — don't edit it.
