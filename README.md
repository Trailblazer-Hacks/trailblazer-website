# Trailblazer Hacks

A static, crimson-and-gold launch site for a new CES high-school hackathon. Built with Next.js static export, TypeScript, an original pixel-rocket SVG, and CSS perspective. No database, paid services, external fonts, WebGL, or analytics.

## Run locally

Node.js 22+ and npm are required.

```sh
npm ci
npm run dev
# http://localhost:3000
```

Production preview:

```sh
npm run build
npm run preview
# http://localhost:4173
```

`out/` is the deployable static site. No deployment is configured or authorized yet. Use a root-domain static host. GitHub project-subpath hosting would require an explicit base-path change and retest.

## Checks

```sh
npm run format:check
npm run typecheck
npm test
npm run build
npm run test:e2e
```

Local browser tests use installed Google Chrome. CI installs isolated Playwright Chromium. If Chrome is unavailable locally, install Chromium with `npx playwright install chromium` and run `CI=1 npm run test:e2e`. Browser tests cover desktop/mobile, anchor navigation, native FAQs, no horizontal overflow, no JavaScript, reduced motion, pointer cleanup, and automated WCAG checks. Automated checks do not replace human accessibility review.

## Where to edit

| File                               | Responsibility                                          |
| ---------------------------------- | ------------------------------------------------------- |
| `src/content/event.ts`             | Organizer-supplied facts and registration URL           |
| `src/components/Sections.tsx`      | Public story, ideas, schedule, venue, FAQ and final CTA |
| `src/components/Rocket.tsx`        | Original vector interpretation of supplied pixel mascot |
| `src/components/LaunchScene.tsx`   | Dimensional scene composition                           |
| `src/components/Enhancements.tsx`  | Small desktop pointer enhancement, paused offscreen     |
| `src/app/globals.css`, `scene.css` | Brand, layout, responsive behavior, depth               |
| `assets/brand/original.png`        | Supplied source artwork, not served in production       |
| `public/brand-patch.webp`          | Optimized source artwork shown on the site              |

## Honest preview, not a registration launch

The organizer supplied November 14, 8 AM–8 PM, with 7 AM organizer setup, at Walmart, 1375 Crossman Ave, Sunnyvale. **The event year is unconfirmed.** There is no fake countdown or calendar entry. Registration is intentionally not connected and no personal data is collected.

Before public launch, organizers must confirm the year, registration URL, eligibility, fees, team limits, prize/track details, meals, mentor/workshop schedule, accessibility contacts, safety/code of conduct, parking and entrances. Historical PioneerHacks statistics and sponsors are not represented as Trailblazer achievements.

The website is a new independent CES operation. The organizer vault is separate from this public repository. Never commit email passwords, outreach spreadsheets, sponsor contact data, or personal organizer notes here.

## Collaboration

Use the issue and pull-request templates. Branch from `main`, link work to an issue, run checks, and request review from the tech leads before merging. See [CONTRIBUTING.md](CONTRIBUTING.md), [design references](docs/references.md), and [design specification](docs/superpowers/specs/2026-10-19-trailblazer-design.md).
