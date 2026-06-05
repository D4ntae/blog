---
name: security-research-frontend
description: Frontend design workflow for improving an Astro static security research/personal site, especially post readability, technical content presentation, and dark editorial UI polish.
---

# Security Research Frontend

Use this skill when asked to make this site look nicer, improve UI, improve content display, polish pages/components, or redesign frontend sections.

## Goals

- Make security research, notes, and blog posts easier to read, scan, and trust.
- Preserve a dark, technical, editorial identity.
- Improve UI with restrained details: borders, surfaces, metadata, subtle terminal/lab cues, strong typography.
- Keep pages fast, static, accessible, and mobile-friendly.

## Workflow

1. Inspect the relevant route/component/layout/style files.
2. Identify whether the problem is global typography, layout, navigation, listing cards, post layout, or content schema.
3. Prefer improvements in this order:
   - semantic structure and hierarchy
   - spacing and readability
   - reusable components
   - CSS tokens/design system cleanup
   - small visual polish
   - only then client-side interactivity, if clearly justified
4. Implement focused changes.
5. Run `npm run build`.
6. Summarize what changed and note any follow-up design ideas.

## Astro files to check first

- `src/layouts/BaseLayout.astro`
- `src/layouts/PostLayout.astro`
- `src/styles/global.css`
- `src/components/PostCard.astro`
- `src/components/Sidebar.astro`
- route pages under `src/pages/`
- content schemas in `src/content/config.ts`

## Design heuristics

- Keep body copy readable: avoid tiny text for long prose.
- Use max-widths intentionally. Research articles should not span too wide.
- Code blocks need comfortable padding, clear contrast, horizontal scroll, and mono font consistency.
- Tables should be readable on mobile; use overflow wrappers if needed.
- Tags and badges should help scanning without becoming visual noise.
- Listing cards should communicate title, collection, description, tags, and freshness clearly.
- Homepage should quickly answer: who this is, what they research/build, and where to read more.

## Avoid

- Editing `dist/`.
- Adding large JS frameworks or animation libraries.
- Overly bright cyberpunk/glitch effects.
- Weak contrast or tiny metadata that becomes unreadable.
- Changing research claims/content without explicit user approval.
