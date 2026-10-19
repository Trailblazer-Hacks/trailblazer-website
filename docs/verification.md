# Verification record

## Local production acceptance (2026-10-19)

- Next.js static production build completed with the home page exported to `out/index.html`.
- TypeScript check passed.
- Three event-content unit tests passed.
- Browser acceptance: 24 passed, two deliberately skipped (desktop-only pointer interaction on mobile and mobile-only static-art check on desktop).
- Desktop and mobile automated WCAG A/AA checks reported no violations after fixing section-number opacity. This is not a certification or a substitute for manual assistive-technology testing.
- Registration navigation, all anchor destinations, native FAQ expansion, keyboard skip link, reduced motion, and essential no-JavaScript content passed.
- Pointer depth resets when motion preference changes and the scene stops offscreen.
- No horizontal overflow or oversized headings/articles at 320, 360, 390, 768, 1024 and 1440 CSS pixels.
- Desktop and mobile screenshots were captured from the exported production site and visually inspected. See `docs/screenshots/`. Reproduce with `npm run capture` while `npm run preview` is running.
- `npm audit`: zero known vulnerabilities at verification time. The preview server's transitive compression dependency is overridden to a patched compatible release.

## Asset measurements

- Original supplied artwork: 6,436,153 bytes. Kept in `assets/brand/`, not served.
- Optimized artwork: 82,608 bytes, about 98.7% smaller. Lazy-loaded below the hero.
- Hero is inline SVG/CSS, without a raster hero request, external font request, animation framework or WebGL renderer.
- Exported JavaScript files total 570,556 uncompressed bytes, including framework chunks. This is the entire output sum, not a measured initial transfer.
- Exported CSS totals 22,321 uncompressed bytes at the measured build.
- Home HTML gzip size: 9,146 bytes at the measured build.
- No database, API server, analytics, registration-data collection or paid runtime dependency.

These are local build measurements, not live-host network latency or Core Web Vitals. Hosting and real-device performance remain launch checks.

## Known scope boundaries

- Chromium desktop and mobile emulation were tested. Real iOS Safari, Android devices and screen readers were not audited.
- The year, registration destination, program, prizes, meals and participant policies remain organizer-confirmation blockers. The mockup labels unknowns and contains no fabricated statistics or sponsor claims.
- Reference review covered three hero screenshot views and public text. The supplied YouTube video could only be identified by title, not watched or transcribed.
- No public deployment or registration launch has occurred. The PR is for team review.

## Requirement-level evidence

See [the acceptance matrix](acceptance-matrix.md) for each requested capability, the actual check performed, its observed result, measured improvements, and unverified boundaries. Counts alone are not the acceptance argument.
