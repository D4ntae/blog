# Project Instructions for Pi

This repository is an Astro static personal site/blog for publishing security research, notes, tools, and CTF/security writing. Most tasks here are frontend/content-presentation work.

## Project shape

- Framework: Astro 4, TypeScript-flavored Astro components, some React islands.
- Styling: global CSS in `src/styles/global.css` plus component-scoped Astro styles.
- Content: Astro content collections under `src/content/{blog,research,notes,projects}`.
- Layouts: `src/layouts/BaseLayout.astro` and `src/layouts/PostLayout.astro`.
- Main reusable UI: `src/components/*`.

## Commands

- Run checks/build with `npm run build`.
- Use `npm run dev` for local preview when needed.
- Do not edit `dist/` directly; it is generated output.
- Avoid unnecessary dependency additions. Prefer Astro/CSS unless a React island is genuinely needed.

## Design direction

Optimize for a polished security-research personal site:

- Dark, editorial, technical, high-signal aesthetic.
- Prioritize readability for long-form research: comfortable line length, strong headings, readable code blocks, tables, callouts, and metadata.
- Keep the tone minimal and serious, not flashy or startup-like.
- Visual language can reference terminals, dossiers, labs, packet traces, or field notes, but should remain subtle.
- Preserve the current typographic personality: Fraunces for expressive headings, JetBrains Mono for technical text/UI.
- Use accessible color contrast and keyboard/focus states.
- Mobile layouts must be first-class.

## Frontend implementation preferences

- Prefer semantic HTML and Astro components.
- Keep components small and reusable.
- Prefer CSS custom properties from `:root`; add new tokens when they clarify the design system.
- Use responsive `clamp()`, `minmax()`, and CSS grid/flex thoughtfully.
- Avoid layout shifts and heavy client JavaScript.
- Improve empty states, metadata display, cards, post typography, navigation, and content hierarchy when relevant.

## Content presentation priorities

Security research posts should make it easy to scan:

- summary / TL;DR
- impact
- affected surface
- reproduction steps
- payloads / commands
- mitigations
- references

When improving Markdown/prose styling, pay special attention to:

- code blocks and inline code
- tables
- blockquotes and warnings
- nested lists
- headings and anchors
- images/screenshots
- tags, dates, reading time, and collection labels

## Working rules

- Before larger visual changes, inspect current Astro components and CSS.
- After code changes, run `npm run build` unless the user asked only for planning or text.
- Do not overwrite published research content unless explicitly asked.
- Do not introduce external analytics, trackers, or third-party embeds without explicit approval.
