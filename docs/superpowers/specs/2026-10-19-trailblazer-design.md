# Trailblazer Hacks: static launch-site design

## Direction

Build a static, responsive event website with the provided pixel-rocket branding. Use crimson as the dominant color, gold as the accent, and cream as the neutral. The visual concept is a mission launch, using strong typography and an illustrated journey rather than generic cards or neon effects.

## Architecture and cost

Use Next.js with static export. No database, authentication, server runtime, or paid animation service. Store public event content in one typed configuration module. Deployable to any static host. Registration will link to an external platform once an approved URL is supplied. Until then, the CTA leads to an explicit registration-status section and does not imply registration has opened.

## Lightweight depth and motion

Create dimensional mission-control illustrations with layered SVG and CSS perspective. Use transform and opacity animations, not a continuously running WebGL scene. Small pointer-driven tilt effects operate only on fine-pointer devices, stop when offscreen, and are disabled for reduced motion. Mobile gets a composed static illustration. Native scrolling stays intact. The supplied rocket is the visual anchor, with an optimized derivative rather than the original multi-megabyte image served as the default asset.

## Sections and interactions

1. Sticky navigation, event identity, date, venue and registration-status link.
2. Large hero with layered rocket illustration and a concise invitation to high-school builders.
3. About section explaining CES and the beginner-friendly single-day format, with historical claims excluded unless approved for Trailblazer.
4. Challenges section clearly stating that tracks and prizes will be announced rather than inventing amounts or sponsor challenges.
5. Schedule with confirmed 7 AM organizer setup, 8 AM event start and 8 PM close. Any intermediate sequence is explicitly provisional and has no fabricated times.
6. Venue details and a directions link, followed by native accessible FAQ disclosures.
7. Final registration-status CTA and organizer attribution.

Use subtle scroll reveals as progressive enhancement. Content remains readable without JavaScript. An optional local calendar download is enabled only once the event year is confirmed. Do not assume that the supplied November 14 date includes a confirmed year.

## Source review

Review Cal Hacks, TreeHacks, Memorable, De Anza Hacks, Flourish, Maglr, the provided YouTube video, and the Fountain Institute article before implementation. Record observations and any access limitations honestly. Borrow principles, not assets or copied layouts. Inspect the shared spreadsheet only for the requested planning context and do not publish its contents to the website or repository.

## Obsidian vault

Keep the vault separate from the public website repository at /Users/yashthakur/github/Trailblazer Hacks Vault. Create a home note, linked organizer notes, event logistics, action tracker, sponsorship/outreach, historical PioneerHacks pitch, website design references and a source announcement. Preserve all supplied roles and assignments. Mark the new CES-only operation as current, and the Tinovation/PioneerHacks material as historical. No credentials are stored. The shared spreadsheet is referenced as a link, not copied into public code.

## Collaboration

Use narrowly scoped GitHub issues for the initial site and launch blockers, a feature branch and reviewable pull request, CI for lint/type/build checks, and a concise contributor guide. Do not merge or deploy without further authorization. Keep personal notes and outreach data out of commits.

## Validation

Check the static production build, all internal navigation and FAQ interactions, keyboard focus, reduced-motion behavior, and layouts at mobile and desktop widths. Inspect browser screenshots for overflow and visual hierarchy. Verify asset sizes and confirm there are no backend or paid-service dependencies. Record unresolved event facts as launch blockers, not invented content.
