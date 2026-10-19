# Trailblazer Hacks Implementation Plan

> **For agentic workers:** Use executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Deliver a tested static hackathon website and separate linked organizer vault.
**Architecture:** Next.js static export with server-rendered content and one small progressive-enhancement client island. CSS and SVG create the dimensional mission-launch theme, with no WebGL or paid runtime services.
**Tech Stack:** Next.js, React, TypeScript, CSS, Node test runner, Playwright browser verification.
**Spec:** docs/superpowers/specs/2026-10-19-trailblazer-design.md

## Global Constraints

- No database, authentication, server runtime, or paid animation service.
- Native scrolling stays intact.
- Content remains readable without JavaScript.
- Keep the vault separate from the public website repository.
- Do not assume that the supplied November 14 date includes a confirmed year.
- Do not merge or deploy without further authorization.
- Historical PioneerHacks claims are not current Trailblazer claims.

## Files and boundaries

- `src/content/event.ts`: typed public event facts and registration status.
- `src/app/layout.tsx`: metadata and document shell.
- `src/app/page.tsx`: compose the sections in narrative order.
- `src/components/Rocket.tsx`: original lightweight pixel-art SVG interpretation.
- `src/components/LaunchScene.tsx`: decorative dimensional launch platform.
- `src/components/Enhancements.tsx`: offscreen-aware pointer and scroll enhancement.
- `src/components/Sections.tsx`: semantic about, schedule, venue, FAQ, registration sections.
- `src/app/globals.css`: brand tokens, responsive compositions, depth and motion rules.
- `tests/content.test.ts`: event fact and content safety checks.
- `tests/site.spec.ts`: browser acceptance tests.
- `.github/workflows/ci.yml`: type, unit, build and browser checks.
- `README.md`, `CONTRIBUTING.md`, `docs/references.md`: handoff, progress and research.
- Outside repo: `../Trailblazer Hacks Vault`: organizer graph.

## Task 1: Factual static foundation

**Produces:** exported `event` constant with name, dateLabel, hours, venue, address, registrationUrl (string or null).

- [ ] Create test asserting event.name is Trailblazer Hacks, dateLabel is November 14, registrationUrl is null and venue is Walmart. Run `npm test` and observe missing module failure.
- [ ] Implement event module and Next static-export config (`output: 'export'`, `images: { unoptimized: true }`). Use no remote font dependency.
- [ ] Run `npm test` and `npm run typecheck`. Commit foundation.

## Task 2: Branded narrative site

**Consumes:** event constant. **Produces:** static semantic home page with section IDs about, mission, schedule, venue, faq, register.

- [ ] Write browser tests using `await expect(page.getByRole('heading', {name: 'TRAILBLAZER HACKS', exact: true})).toBeVisible()` and `await expect(page.locator('#register')).toContainText('Registration is coming soon')`.
- [ ] Implement hero, pixel rocket and layered launch platform. Compose editorial sections with all confirmed dates and no invented prizes, sponsors, registration form, or event year.
- [ ] Implement FAQ as native details/summary and directions as a normal external map link.
- [ ] Add CSS responsive layouts, keyboard focus, skip link, static mobile art and reduced-motion rules. Add a small offscreen-aware client enhancer, never hide essential content behind JavaScript.
- [ ] Run production build and browser tests. Commit the site.

## Task 3: Reference and collaboration handoff

**Produces:** contributor workflow and publicly safe launch blocker issues.

- [ ] Document each supplied source, what was actually accessible, and design lessons. Do not claim video review beyond available metadata.
- [ ] Add CI with `npm ci`, `npm run typecheck`, `npm test`, `npm run build`, browser installation and `npm run test:e2e`.
- [ ] Add issue and PR templates with factual-content, accessibility, performance and reviewer checklists.
- [ ] Create GitHub issues for initial mockup and launch facts, push a feature branch and open PR. Do not merge or deploy.

## Task 4: Vault and acceptance

**Produces:** independent Obsidian vault and evidence-backed handoff.

- [ ] Write home, organizer, logistics, assignments, pitch/history, sources and website notes with wikilinks. Preserve all supplied names and roles, mark unknown facts.
- [ ] Validate every wikilink resolves and all nine organizers have their own notes.
- [ ] Verify mobile (390px) and desktop (1440px) screenshots, no horizontal overflow, native FAQ interaction, keyboard access, reduced motion and JavaScript-disabled content.
- [ ] Inspect compressed artwork size and static output. Run final full check and document results, PR and remaining launch blockers.

## Self-review

Every spec section maps to Tasks 1–4. Event uncertainties are content states rather than implementation placeholders. Registration is consistently null until an approved URL exists. No calendar download is generated without a confirmed year. CSS depth is used instead of a heavy 3D engine.
