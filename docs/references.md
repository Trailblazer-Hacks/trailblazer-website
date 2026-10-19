# Website reference review

Reviewed 2026-10-19 against [the approved design spec](superpowers/specs/2026-10-19-trailblazer-design.md). This is inspiration research, not permission to reuse artwork, copy, logos, or layouts.

## Evidence and limitations

- Direct visual review: Cal Hacks, TreeHacks, and De Anza Hacks hero views, using dedicated Chrome-window screenshots. The window measured approximately 960 × 1205 logical pixels, including browser chrome, with 2× screenshots. These are initial viewport observations, not full-site or mobile audits.
- The built-in browser `status` check reported an unavailable Firefox bridge. Opening failed, the Firefox application was absent, and the built-in Chrome backend was unsupported. Existing Chrome was opened through macOS AppleScript and its dedicated window captured through the desktop tool instead. No software was installed.
- Text-based findings below use the coordinator's summaries of previously fetched public page text. They are explicitly separated from direct visual observations. No screenshots were committed or saved into this repository.
- Screenshot review does not establish animation behavior, scroll choreography, implementation technology, keyboard access, performance, or reduced-motion support. No such behavior is claimed as tested on the reference sites.
- The supplied YouTube video was **not watched**. Only its title was available in the coordinator's fetch. No transcript-based or audiovisual conclusions are attributed to it.
- No private spreadsheet was accessed or reproduced for this review. This document contains only public reference information and implementation guidance.

## 1. Cal Hacks

Source: <https://www.calhacks.io/>

**Direct visual observations:** The captured Cal Hacks 13.0 hero has a deep navy sky, a huge softly textured blue/green globe, scattered small colored celestial dots, and a bear flying a red propeller plane near the globe's edge. The event wordmark mixes script and tall display lettering. Blue cloud-shaped elements carry the venue, date, registration pathway, sponsorship pathway, and application milestones. A pale-blue pill-shaped Register link stands out in the upper navigation, with an MLH season ribbon on the right. At the inspected window width, the left brand and About navigation label appear crowded together. This is a viewport-specific observation, not a claim that every breakpoint has the same issue.

**Coordinator's text findings:** Beginner belonging, venue directions, a history timeline, event listings, sponsors, and a comprehensive grouped FAQ.

**Apply to Trailblazer:** Build one recognizable illustrated world around the supplied pixel rocket. Place essential event information and the registration-status action in a clear hierarchy, independent of decorative labels. Echo the journey concept with a restrained flight path that connects sections. Use concise beginner-friendly explanations and practical venue/FAQ information.

**Do not copy:** The globe, bear, plane, watercolor palette, cloud-shaped buttons, history claims, event dates, or sponsor marks. Avoid reproducing the crowded navigation or hiding essential facts inside an illustration.

## 2. TreeHacks

Source: <https://treehacks.com/>

**Direct visual observations:** A cyan/teal scene is framed by dark foliage and ruined architectural silhouettes. A friendly capsule-like character containing a small plant occupies the center and holds a prominent illuminated Apply Now sign. Foreground framing, midground architecture, and the lighter distant backdrop create strong spatial separation in a single still image. A small outline logo and chevron sit at top left. Widely tracked TreeHacks lettering and the February 12–14, 2027 date appear near the bottom on a dark rock-like area. The date has visibly subdued contrast in this capture, so Trailblazer should not borrow that treatment for essential information.

**Coordinator's text findings:** A prominent application action, a track wheel described with hover/tap interaction, sponsors marked as coming soon, and FAQ content.

**Apply to Trailblazer:** Use foreground, midground, and background layers to make the rocket scene dimensional even with animation disabled. Keep a single primary action visually prominent. Explicitly mark unconfirmed tracks and prizes as forthcoming instead of inventing content.

**Do not copy:** The mascot, plant, ruins, cyan palette, luminous sign, or immersive scene wholesale. A still screenshot cannot tell us whether TreeHacks uses WebGL, video, CSS, or another renderer. Trailblazer's implementation remains lightweight layered SVG/CSS, regardless of the reference's implementation.

## 3. Memorable

Source: <https://www.memorable.sh/>

**Text-only evidence:** The coordinator's fetched-text summary identifies a numbered sequence: 4 Retrieval, 3 Graph Assembly, 2 Workflow Synthesis, and 1 Traces. The summary describes layered storytelling. This review did not directly inspect Memorable's visual rendering or its scroll behavior.

**Apply to Trailblazer:** Give the page a legible sequence of mission stages, with each section answering a different visitor question. Use section numbering only when it helps orientation. A launch narrative can progress from invitation to what participants build, the day plan, venue, and registration status.

**Do not infer or copy:** Do not claim observed parallax, a particular animation library, transition timing, or a specific visual layout. Do not import AI-product terminology into a high-school event page.

## 4. De Anza Hacks

Source: <https://www.deanzahacks.com/>

**Direct visual observations:** The hero is a tactile collage on warm paper: large irregular white cutout title blocks with purple display typography, an offset shadow, a white burst carrying “5.0,” a coral Golden Gate Bridge, green/purple botanical imagery, and a blue halftone architectural shape. Layered grass, rocks, and a torn-paper edge fill the foreground. The top bar includes a small illustrated mascot, a secondary Mentor button, a high-contrast purple Apply now button, and a hamburger menu. The initial viewport prioritizes the event's visual identity over detailed logistics.

**Coordinator's text findings:** Extraction returned only the page title, so textual structure beyond the visual capture was not established.

**Apply to Trailblazer:** Offset planes, crisp edges, and a few directional shadows can create tactile depth without a real-time 3D scene. Combine a warm cream surface with a distinctive display treatment and a clear action hierarchy. Trailblazer's pixel geometry should determine the decorative vocabulary rather than borrowing collage assets.

**Do not copy:** The bridge, collage imagery, purple palette, mascot, starburst, or cutout title arrangement. Keep Trailblazer's date, venue, and status visible without requiring visitors to decode decorative artwork.

## 5. Flourish scrollytelling

Source: <https://flourish.studio/visualisations/scrollytelling/>

**Text-only evidence:** The coordinator's summary emphasizes responsive narrative in which text and visuals change together. Its paid enterprise scrollytelling product is not needed for this project. No embedded demo was interactively reviewed here.

**Apply to Trailblazer:** Each scroll transition should clarify the story, for example moving from launch invitation to the day's practical sequence. Native sections, CSS transforms/opacity, and progressive enhancement are sufficient. No paid service or dependency is justified by the reference alone.

**Boundary:** The page is an event information site, not a data story. Avoid chart-like machinery, sticky scenes that trap reading, or making content depend on JavaScript.

## 6. Maglr scrollytelling examples

Source: <https://www.maglr.com/blog/best-scrollytelling-examples>

**Text-only evidence:** The coordinator's summary highlights pacing, bold typography, and meaningful visual progression over gimmicks. Individual linked examples and their animations were not directly reviewed.

**Apply to Trailblazer:** Alternate expressive illustration with calm, readable information sections. Use large section headings and deliberate spacing to distinguish invitation, challenges, schedule, and logistics. Let visual progression reinforce those changes, not replace the content.

**Boundary:** Do not translate “scrollytelling” into mandatory scroll-jacking, expensive animation dependencies, or a repeated collection of entrance effects.

## 7. Supplied YouTube video

Source: <https://www.youtube.com/watch?v=M4DNgmI7MIM>

**Limited evidence:** The coordinator could access the title, “How to Avoid AI Slop in Vibe-Coded Landing Pages.” The video was not watched, and no transcript was reviewed. There are no verified video-specific recommendations in this document. Its title is consistent with the project's desire for a distinctive, non-template identity, but that is not evidence of the video's actual advice.

**Follow-up:** If exact techniques from this video become a requirement, review the video or a reliable transcript before attributing any recommendation to it. This limitation does not prevent implementing the already approved design spec.

## 8. The Fountain Institute: signs of vibe-coded UI

Source: <https://www.thefountaininstitute.com/blog/signs-vibe-coded-ui>

**Text-only evidence:** The coordinator's fetched-text summary recommends dominant/accent/neutral color roles and calls out pointless glow, emoji used in place of designed icons, generic purple gradients, excessive cards, rainbow left borders, and meaningless status dots. The article's visual examples were not directly inspected here.

**Apply to Trailblazer:** Crimson owns the primary surfaces and brand identity, gold marks a few important accents, and cream provides calm reading space. Use the actual pixel rocket and a consistent family of simple drawn symbols. Prefer editorial sections, timelines, and native FAQ disclosures to placing every paragraph in a rounded card.

**Boundary:** This is a critique of unconsidered defaults, not a prohibition on every shadow, gradient, or card. Use a shadow to explain layer separation and a status label only when it communicates a real, confirmed state.

## Synthesis for the approved Trailblazer direction

1. **Own the brand.** Use the supplied pixel rocket as the main visual anchor. Preserve crisp pixel edges in an optimized derivative. Crimson is dominant, gold is an accent, and cream is the neutral. Avoid substituting another reference's mascot, palette, or scene.
2. **Depth without a renderer.** Compose a background mission grid or restrained orbital line, a middle launch platform, and the foreground rocket. Layered SVG, CSS perspective, and controlled offset shadows can make the still composition readable and dimensional. These are recommendations for Trailblazer, not claims about how the reference sites were built.
3. **Information before spectacle.** Keep the high-school invitation, event date and venue, and registration-status link as readable text. Do not imply registration is open without an approved destination. Do not add an event year until confirmed.
4. **Narrative with useful stops.** Invitation → beginner-friendly context → challenges announced later → confirmed day boundaries and explicitly provisional intermediate activities → venue/FAQ → registration status. Let each section have its own composition rather than repeating interchangeable cards.
5. **Motion is optional.** Native scrolling stays intact. Reveal effects only enhance already visible content. Pointer tilt is limited to fine pointers, stops offscreen, and is disabled for reduced motion. Mobile receives a composed static scene. Avoid continuous WebGL, unnecessary glows, particle storms, and paid animation services.
6. **Keep facts truthful.** Reference event dates, sponsor logos, prize amounts, attendance numbers, histories, and affiliations are not Trailblazer facts. Keep confirmed 7 AM organizer setup, 8 AM event start, and 8 PM close distinct from unconfirmed intermediate schedule details.
7. **Validate the interpretation.** Check narrow and intermediate widths for navigation collisions, keep essential text contrast strong, test keyboard focus and native FAQ disclosures, inspect reduced-motion and no-JavaScript states, and measure the production asset sizes. The reference screenshots do not substitute for testing Trailblazer itself.

## Review completion

All eight supplied URLs are recorded with their evidence level. Three references received direct hero screenshot review, four additional web references were considered through coordinator-provided fetched-text summaries, and the video remains title-only. The design spec was read. This task changed only `docs/references.md`, installed nothing, made no source-code edits or commits, and did not inspect private planning data.
