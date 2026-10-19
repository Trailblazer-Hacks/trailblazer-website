# Contributing

1. Choose or create a scoped issue with an owner and observable acceptance criteria.
2. Create `feat/<description>` or `fix/<description>` from the current main branch.
3. Keep event facts in `src/content/event.ts`. Do not promote historical pitch claims to current promises.
4. Add a failing test for changed behavior, implement, then run the complete checks in README.
5. Format with `npm run format`. Include desktop/mobile screenshots for visual changes.
6. Open a pull request linked to the issue. Ask Arnav or Adarsh for technical review and the relevant organizer for content approval. Coordinate launch logistics with Yash and Shravan.
7. Do not merge your own unreviewed PR or publish unconfirmed event information.

## Design constraints

Use crimson, gold and cream intentionally. Keep native scrolling. Do not add a 3D engine, animation framework, heavy video, remote fonts or trackers without discussing the performance/privacy trade-off. Pointer effects must stop offscreen, be absent on mobile, and respect reduced motion. Essential content and FAQs must work without JavaScript. Avoid emoji as interface icons, generic purple gradients, unexplained status indicators and cards around every block of text.

## Secrets and private material

The Obsidian organizer vault lives outside this repository. Share credentials through a secure password manager, not issues, Markdown, source code or PR descriptions. Do not copy the outreach spreadsheet into this repository. The local `.env*` ignore rule is a last line of defense, not permission to store credentials unnecessarily.
