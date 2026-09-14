# Stillwater House — Luxury showcase roadmap

Status: **shipped** ([#269](https://github.com/jose-codegourmet/jabkit/pull/269); LUX-03 imagery deferred to [#260](https://github.com/jose-codegourmet/jabkit/issues/260), [#207](https://github.com/jose-codegourmet/jabkit/issues/207) closed `not_planned`) · Ticket prefix: **LUX** · Root: `/samples/luxury` · 12 tickets.

Read the [shared roadmap and mandatory handoff](../roadmap.md), then this folder’s [system](system.md), [rules](rules.md), [component guidance](components.json), [imagery direction](imagery.md), and [migration notes](migration.md). Ticket text below is the original brief. The sample is shipped; LUX-03 imagery is the remaining exception.

## The website to build

A fictional small lakeside guest house for visitors seeking a quiet, considered stay. The site helps them compare rooms, understand the place and experiences, and prepare a stay inquiry without making a reservation.

The site opens with a measured encounter with one believable place. Photography has depth and atmosphere, but essential information arrives early: what it is, where the fictional setting is, what rooms differ, and how to inquire. Large scenic moments alternate with concise practical panels; luxury comes from attentive detail and readable service.

**Completed visitor journey:** Compare the three rooms, inspect Garden Room, follow its inquiry link, choose valid stay dates and guest count, review the local inquiry, edit the dates, and return without making a booking.

## Sitemap and content ownership

All routes below are proposed and share the sample’s own header/footer. The shared demo bar identifies the fictional business and returns visitors to JabKit. Each detail record is a complete page, not a placeholder link.

| Route | Template | Required content |
| --- | --- | --- |
| `/samples/luxury` | Home | Immersive place image, welcome, three rooms, experiences, inquiry |
| `/samples/luxury/rooms` | Room collection | Three rooms with occupancy, area, amenities, illustrative rate basis |
| `/samples/luxury/rooms/[slug]` | Room detail × 3 | Coherent room gallery, specifications, inclusions, inquiry context |
| `/samples/luxury/experiences` | Experiences | Three editorial features with meaningful anchors and practical details |
| `/samples/luxury/house` | The house | Story, material character, arrival guidance, fictional-setting disclosure |
| `/samples/luxury/inquire` | Stay inquiry | Room/date/guest selection, validation, local review/edit state |

Define Lake Room, Garden Room, and Upper Suite with stable slugs, area, occupancy, bed configuration, accessibility notes, amenities, illustrative nightly rates, and two coherent image IDs each. Define three experiences (Morning on the water, Seasonal table, Woodland walk) with duration, suitable audience, access constraints, and imagery. Use a single clearly fictional lakeside setting; no real address, map pin, award, review, or live availability claim.

Use proposed `apps/showcase/app/samples/luxury/content.ts` for fixtures, `assets.ts` for local image references, `layout.tsx` for brand chrome, and `_components/` for sample-only composition. Dynamic route data must come from the same canonical records as summaries. Actual folder organization can be simplified during implementation if ownership and routes remain clear.

## JabKit component plan

This is a source-aware integration plan, not a promise that a token swap restyles every internal element. The `-04` ticket owns the named gaps; page tickets own composition and content. Use real library imports in the finished website.

| Component | Source under `packages/ui/src/` | Role | Integration boundary |
| --- | --- | --- | --- |
| CarouselCards | `marketing/carousel-cards` | Home room collection | Items require price/location and currently hardcode / person. LUX-04 adds a backward-compatible price-unit prop for / night; omit rating/reviewCount. |
| Content1 | `marketing/content1` | Room detail and house information | Compose specific room facts and narrative with supported lists/images/callouts. |
| About14 | `marketing/about14` | Host and house story | Supply fictional host, intro, philosophy, and place imagery. |
| CalendarWithLocalisation | `atoms/calendar-with-localisation` | Date preference | Use controlled selected/onSelect, numberOfMonths, and copy. There is no disabled-date/availability API; validate inquiry rules at the form layer. |
| Faq12, NavigationMenu, Button, Label, Input, Textarea | `marketing/faq12 + atoms` | Questions, navigation, inquiry | Use semantic form groups and live status; no payment or reservation integration. |

## Required image series

**Generate the sample showcase’s new imagery with Higgsfield MCP.** The `-03` ticket owns execution and follows SH-04. Asset IDs below are proposed filenames/manifest keys, not existing outputs. Read [imagery.md](imagery.md) for the full prompt language and exclusions. Keep all generated outputs local under `/assets/design-systems/luxury/`; never hotlink the inspiration sites.

| Asset IDs | Subject and continuity | Slots and aspect | Deliverable |
| --- | --- | --- | --- |
| LUX-HERO | Stillwater House beside the lake at early morning | Home; 16:9 and reviewed 4:5 mobile crop | 1 master + crop |
| LUX-ROOM01–03-A/B | Whole room and tactile detail for each named room | Rooms/detail; A 4:3, B 4:5 | 6 masters |
| LUX-EXP01–03 | Water, seasonal table, and woodland scenes at the same property | Experiences; 3:2 | 3 masters |
| LUX-HOUSE | Entrance and material continuity with exterior hero | House; 3:2 | 1 master |
| LUX-HOST | Fictional host in believable house context | About14 profile; 1:1 | 1 master |

**Series prompt direction:** One consistent lakeside property with plausible floor plans, quiet natural light, restrained warm materials, real fabric weight, and controlled highlights. Lock the exterior architecture, wood species, window geometry, and season before generating room scenes. Generate calm inhabited atmosphere without resort clichés. Avoid gold-everywhere styling, impossible windows, candle clutter, fake dramatic fog, champagne symbolism, and people used as luxury props.

For each shot, expand that direction with the exact subject, composition, light/material, palette roles, camera/framing, negative space, target aspect, and exclusions. Generate one approved anchor image first; keep subsequent subjects and materials consistent. Deliver a reviewed mobile derivative for the leading image; if the master cannot produce a useful crop, generate a matching alternate through Higgsfield MCP. Use HTML/SVG for brand lettering and UI. Actual product or catalogue screenshots must be captured from the running website.

## Copy-ready prompts for future execution

These prompts are instructions to use later. Writing this roadmap does not authorize or perform implementation or image generation now. Replace the bracketed fields before handing a prompt to an agent; choose one ticket at a time.

**Implementation-ticket prompt**

```text
Implement [LUX-NN: ticket title] from design-systems/luxury/roadmap.md
for the fictional Stillwater House sample at /samples/luxury.

Read that entire ticket, its declared dependencies, the shared handoff in
design-systems/roadmap.md, and this system's system.md, rules.md,
tokens.json, typography.json, components.json, imagery.md, and motion.md.
Inspect the repository instructions and current component APIs before editing.
Confirm required predecessor work exists; report a missing dependency instead
of claiming an unsupported API already works.

Use the named JabKit components and keep business-specific composition in
apps/showcase. Deliver the ticket's exact scope and acceptance criteria.
Preserve existing catalogue/SaaS behavior and both themes. Do not create
GitHub issues, deploy, generate unrelated assets, or implement other tickets.
If this ticket requires new sample imagery, use the approved outputs of
LUX-03; generation belongs to its separate Higgsfield MCP task.

Report changed files, completed criteria, verification evidence, and any
remaining blocker. Do not mark a ticket complete without its required evidence.
```

**Image-production prompt — anchor image**

```text
Use Higgsfield MCP to create the LUX-HERO anchor image for Stillwater House.
First read design-systems/luxury/imagery.md, the LUX-03 shot list,
and the SH-04 production/provenance requirements. Discover the actual tools
and models available; if Higgsfield MCP is unavailable, report that blocker.

Scene: A small believable lakeside guest house at early morning, restrained timber and mineral materials, consistent window geometry, quiet reflected light, a clear entrance and human scale, real fabric weight visible through one window, controlled highlights. The feeling is attentive hospitality and unhurried privacy, without resort spectacle or ostentatious props.

Use the shot list's primary aspect ratio. Compose so a separate reviewed
mobile crop can retain the important subject. Match the approved system
palette through scene materials and lighting; do not place UI text, headings,
prices, logos, watermarks, or controls inside the generated image.

Exclude the system's prohibited motifs and reject visible generation defects.
Review this one anchor before making its series. Record the actual prompt,
model, generation date, returned job identifier when available, dimensions,
local asset path, focal point, and alt/decorative role. Do not invent provenance.
Generate further shots only within the explicitly assigned asset ticket.
```

For the remaining shot-list assets, replace the subject and slot specification with the exact record brief; retain the anchor's material, lighting, palette, and framing language. The asset ticket still requires in-page crop review and optimization. UI captures are browser work and never use this generation prompt.

## Ticket index

All tickets are required for the complete website. Shared dependencies refer to [the shared backlog](../roadmap.md). **LUX-03** Higgsfield imagery is deferred to [#260](https://github.com/jose-codegourmet/jabkit/issues/260); GitHub [#207](https://github.com/jose-codegourmet/jabkit/issues/207) is closed `not_planned`. Remaining LUX tickets shipped in [#269](https://github.com/jose-codegourmet/jabkit/pull/269).

| ID | Suggested issue | Size | Depends on |
| --- | --- | --- | --- |
| LUX-01 | Finalize Stillwater House content and route contracts | M | None |
| LUX-02 | Build the Stillwater House visual foundation and site shell | M | SH-02, SH-03, LUX-01 |
| LUX-03 | Produce and integrate the Stillwater House image series with Higgsfield MCP | L | SH-04, LUX-01 |
| LUX-04 | Adapt room cards, rate units, and calendar composition | L | LUX-01, LUX-02 |
| LUX-05 | Build the place-led Stillwater homepage | M | LUX-02, LUX-03, LUX-04 |
| LUX-06 | Build a complete three-room collection | M | LUX-02, LUX-03, LUX-04 |
| LUX-07 | Build three room details with specifications and inquiry context | M | LUX-02, LUX-03, LUX-04 |
| LUX-08 | Build the three-experience editorial page | M | LUX-02, LUX-03 |
| LUX-09 | Build the House story and practical arrival context | M | LUX-02, LUX-03, LUX-04 |
| LUX-10 | Build a date-aware local stay-inquiry preview | L | LUX-02, LUX-04, SH-06 |
| LUX-11 | Finish Stillwater House responsive behavior, motion, and edge states | M | LUX-05, LUX-06, LUX-07, LUX-08, LUX-09, LUX-10 |
| LUX-12 | Release the complete Stillwater House website in the sample catalogue | M | SH-01, SH-07, LUX-11 |

## LUX-01 — Finalize Stillwater House content and route contracts

**Suggested issue title:** `[showcase][LUX-01] Finalize Stillwater House content and route contracts`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `content`  
**Depends on:** None

**Implementation surface:** Proposed `apps/showcase/app/samples/luxury/content.ts` and `apps/showcase/app/samples/luxury/types.ts`; current design direction in this folder’s `system.md`, `patterns.json`, and `imagery.md`.

**Work to deliver**

- A fictional small lakeside guest house for visitors seeking a quiet, considered stay. The site helps them compare rooms, understand the place and experiences, and prepare a stay inquiry without making a reservation.
- Turn the sitemap and content inventory below into typed fixture records. Write finished, specific copy, relationship IDs, descriptive alt drafts, and all CTA destinations before arranging sections. Use the same source record for listing cards, detail headers, breadcrumbs, and inquiry context.
- Define Lake Room, Garden Room, and Upper Suite with stable slugs, area, occupancy, bed configuration, accessibility notes, amenities, illustrative nightly rates, and two coherent image IDs each. Define three experiences (Morning on the water, Seasonal table, Woodland walk) with duration, suitable audience, access constraints, and imagery. Use a single clearly fictional lakeside setting; no real address, map pin, award, review, or live availability claim.
- Keep every person, organization, product claim, and price explicitly part of the fictional demo. Avoid copied reference-site copy, invented real-world endorsements, placeholder paragraphs, or links to unbuilt destinations.

**Acceptance criteria**

- [ ] Every sitemap entry has a page owner and every listed detail fixture has a valid unique slug; unknown slugs have a specified 404 behavior.
- [ ] Copy establishes a clear audience, offering, and primary action; no remaining lorem ipsum, placeholder names, or default component mock copy is needed.
- [ ] A content/asset matrix maps each route section to record IDs and the planned Higgsfield image IDs; all internal links stay under the correct sample root unless explicitly returning to JabKit.
- [ ] The final copy fits narrow/mobile reading order without depending on a desktop-only visual arrangement.

**Verification and handoff:** Attach the content inventory and a route/link table to the issue. Content review can proceed before shared implementation blockers are closed.

## LUX-02 — Build the Stillwater House visual foundation and site shell

**Suggested issue title:** `[showcase][LUX-02] Build the Stillwater House visual foundation and site shell`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `theming`  
**Depends on:** `SH-02`, `SH-03`, `LUX-01`

**Implementation surface:** Proposed `apps/showcase/app/samples/luxury/layout.tsx`, `apps/showcase/app/samples/luxury/style.module.css`, and `apps/showcase/app/samples/luxury/_components/`; shared demo bar and scope from SH-02/SH-03.

**Work to deliver**

- Apply this folder’s complete tokens and typography through the agreed scoped implementation. Build a brand-specific header, current-page navigation, mobile menu, skip link, and footer using the mapped JabKit primitives. All sample pages share this shell; the demo bar remains visible.
- Use the Luxury type hierarchy with a restrained display face and readable utility text. Keep navigation on a dependable contrast surface; any image overlay must pass contrast across the actual crop. Buttons and inquiry fields have generous targets. Use open photography and captions, shallow rounded geometry only where prescribed, and a footer with practical inquiry/navigation links.
- Implement active-route and mobile open/closed states using the actual NavigationMenu or Dialog primitive composition. Verify portal mounting instead of assuming a viewport wrapper forwards a container. Keep fonts and decorative styling within this site.
- Choose whether the header is static or sticky based on the content; reserve its space and offset in-page anchors. Native links must work without a JavaScript-only click handler.

**Acceptance criteria**

- [ ] The shell renders at 320/390/768/1440px in both modes without horizontal page overflow or a clipped wordmark.
- [ ] All nav and footer destinations in the agreed sitemap exist by release; current page is programmatically identifiable and keyboard focus is visible.
- [ ] The mobile menu opens/closes with pointer and keyboard, handles Escape, returns focus, and closes on navigation; theme and portal surfaces match.
- [ ] Visiting this site and then another sample leaves no brand font, token, menu, or scroll-lock residue.

**Verification and handoff:** Attach shell captures including mobile navigation open and long labels. If library primitives change, include the full library handoff; route-only wrappers are not registry components.

## LUX-03 — Produce and integrate the Stillwater House image series with Higgsfield MCP

**Suggested issue title:** `[showcase][LUX-03] Produce and integrate the Stillwater House image series with Higgsfield MCP`  
**Status:** Planned · **Priority:** P1 · **Size:** L · **Labels:** `showcase`, `imagery`  
**Depends on:** `SH-04`, `LUX-01`

**Implementation surface:** Proposed `apps/showcase/public/assets/design-systems/luxury/`, its public-safe provenance manifest, and `apps/showcase/app/samples/luxury/assets.ts`; prompt direction in `imagery.md`.

**Work to deliver**

- **Use Higgsfield MCP for every newly generated image in this sample showcase.** Discover the available tools and models at execution time. If it is unavailable, block this ticket with a precise access dependency; do not substitute another generator.
- Produce every required slot in the shot list below. Begin with the hero/cover reference image, review it against the brand and its actual crop, then continue the matching series. Record revisions and the actual selected outputs in the provenance manifest.
- Prompt direction for this site: One consistent lakeside property with plausible floor plans, quiet natural light, restrained warm materials, real fabric weight, and controlled highlights. Lock the exterior architecture, wood species, window geometry, and season before generating room scenes. Generate calm inhabited atmosphere without resort clichés. Avoid gold-everywhere styling, impossible windows, candle clutter, fake dramatic fog, champagne symbolism, and people used as luxury props.
- Optimize approved outputs, provide intrinsic sizes and useful responsive derivatives, and export local URLs from assets.ts. Keep actual interface text and product screenshots outside image generation. Supply complete alt/caption text or mark an image decorative deliberately.

**Acceptance criteria**

- [ ] Every shot-list ID has a local file, verified dimensions, intended slot/crop, final prompt, and actual Higgsfield MCP provenance; requested alternate crops are present.
- [ ] The series feels like one art-directed business: materials, light, palette, perspective, and recurring subjects stay consistent.
- [ ] No generated logos, gibberish text, implausible anatomy/architecture, watermarks, or third-party reference-site assets appear in the final set.
- [ ] Hero and content images meet shared delivery budgets or have a documented visual-quality exception; mobile crops keep the meaningful subject visible.

**Verification and handoff:** Attach a contact sheet and in-slot hero/detail previews plus provenance. The contact sheet is review evidence, not an examples directory or a substitute for the delivered assets.

## LUX-04 — Adapt room cards, rate units, and calendar composition

**Suggested issue title:** `[showcase][LUX-04] Adapt room cards, rate units, and calendar composition`  
**Status:** Planned · **Priority:** P1 · **Size:** L · **Labels:** `showcase`, `components`  
**Depends on:** `LUX-01`, `LUX-02`

**Implementation surface:** apps/showcase/app/samples/luxury/_components/; existing CarouselCards, CalendarWithLocalisation, About14, and Content1 sources.

**Work to deliver**

- CarouselCards currently renders a literal / person after every price. Add a default-preserving price-unit label capability so room items can state illustrative price / night. Keep all existing story behavior with the original default.
- Pass explicit room items with local imagery, location, price, currency, and detail href; omit ratings/review counts instead of fabricating social proof. Retain favorite controls only with a clearly described local saved-room behavior, or add an optional default-preserving visibility hook.
- Build a calendar adapter using the actual selected/onSelect range props and one-month mobile/two-month desktop presentation. Do not pass unsupported disabled/availability props; inquiry validation owns future-date and night-count constraints.
- Confirm About14 and room narrative geometry against this system, using minimal scoped hooks only when necessary. Check rate labels, favorites, and calendar copy for marketplace leftovers.

**Acceptance criteria**

- [ ] Room cards say / night and existing per-person cases remain unchanged; long translated/unit labels wrap safely.
- [ ] No customer ratings, default listing locations, or unexplained save controls appear.
- [ ] Calendar selection works with keyboard/touch and both display widths; its date values are treated as calendar dates, not accidental UTC timestamps.
- [ ] Any changed library API has required stories, ThemeComparison, rebuilt registry/previews, and a documented compatibility note.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## LUX-05 — Build the place-led Stillwater homepage

**Suggested issue title:** `[showcase][LUX-05] Build the place-led Stillwater homepage`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `LUX-02`, `LUX-03`, `LUX-04`

**Implementation surface:** apps/showcase/app/samples/luxury/page.tsx.

**Work to deliver**

- Lead with LUX-HERO, a short welcome, visible Explore rooms and Plan a stay links, and a concise note about the fictional lakeside setting. Keep the image immersive without hiding the nature of the offer.
- Follow with room collection via CarouselCards, one experience feature, a small house-story passage, and an inquiry close. Put practical room context near the action.
- Use a static hero with intrinsic image sizing and readable text on its own surface or a verified overlay. Avoid a loader, intro film, or delayed navigation.

**Acceptance criteria**

- [ ] The first screen identifies a guest house and provides a useful path to rooms and inquiry.
- [ ] Room carousel links, arrows, optional local saved state, and experience anchors work on touch and keyboard.
- [ ] Illustrative rate basis and demo nature are clear; no live availability or booking claim appears.
- [ ] The hero’s mobile crop preserves the same believable property and does not cut away its identifying architecture.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## LUX-06 — Build a complete three-room collection

**Suggested issue title:** `[showcase][LUX-06] Build a complete three-room collection`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `LUX-02`, `LUX-03`, `LUX-04`

**Implementation surface:** apps/showcase/app/samples/luxury/rooms/page.tsx.

**Work to deliver**

- Present each room in an open photograph-led row with name, area, capacity, bed configuration, notable amenities, and illustrative nightly rate. Use semantic markup and JabKit Button links; do not cram full details into CarouselCards’s limited listing contract.
- Add a short comparison section so a visitor can understand differences between rooms without opening all three. Expose actual accessibility notes from the fictional fixture rather than implying universal access.
- Offer room-detail and inquiry links with allowlisted room IDs; use a clear general inquiry for visitors without a preference.

**Acceptance criteria**

- [ ] All three rooms have consistent facts and images across home, listing, details, and inquiry.
- [ ] Room differences are understandable in text without color badges or hover tooltips.
- [ ] Mobile stacking preserves image/name/facts/actions order and does not create tiny side-by-side rate columns.
- [ ] Every room has a working detail and inquiry destination.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## LUX-07 — Build three room details with specifications and inquiry context

**Suggested issue title:** `[showcase][LUX-07] Build three room details with specifications and inquiry context`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `LUX-02`, `LUX-03`, `LUX-04`

**Implementation surface:** apps/showcase/app/samples/luxury/rooms/[slug]/page.tsx.

**Work to deliver**

- Compose a two-image gallery and Content1 narrative/specifications from each room record. Include capacity, bed, area, amenities, access notes, and the illustrative rate basis in a readable summary.
- Provide Rooms breadcrumb, related rooms, and a Plan this stay link that passes the known room ID to inquiry. Keep images honest to the same room geometry and materials.
- Explain that displayed rates describe a fictional sample and no availability is checked. Do not add an unused shopping-cart or checkout control.

**Acceptance criteria**

- [ ] All three detail routes are complete; unknown rooms 404 and cannot become trusted inquiry selections.
- [ ] Gallery controls, if present, are keyboard accessible and have a stable caption/position indicator; static images are acceptable.
- [ ] Facts and rate units exactly match the collection; the inquiry receives the selected room.
- [ ] Image loading/failure leaves readable facts and a usable inquiry action.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## LUX-08 — Build the three-experience editorial page

**Suggested issue title:** `[showcase][LUX-08] Build the three-experience editorial page`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `LUX-02`, `LUX-03`

**Implementation surface:** apps/showcase/app/samples/luxury/experiences/page.tsx.

**Work to deliver**

- Compose Morning on the water, Seasonal table, and Woodland walk as three alternating image/text chapters with stable native anchors linked from home.
- Give every experience a short atmosphere-setting passage followed by concrete duration, access/season considerations, and a question to include in an inquiry.
- Use Button links to inquire with a known experience ID, preserving any already selected room only when explicitly present in the URL. Keep decorative imagery subordinate to practical information.

**Acceptance criteria**

- [ ] All home experience links reach the right visible heading without sticky-header obstruction.
- [ ] Every chapter explains what a guest would do and any fictional constraints, with no fabricated booking availability.
- [ ] An experience inquiry shows its selected context and remains editable.
- [ ] The three images belong to the same property/season as the house and room series.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## LUX-09 — Build the House story and practical arrival context

**Suggested issue title:** `[showcase][LUX-09] Build the House story and practical arrival context`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `LUX-02`, `LUX-03`, `LUX-04`

**Implementation surface:** apps/showcase/app/samples/luxury/house/page.tsx.

**Work to deliver**

- Use About14 for the fictional host’s philosophy and house story, then Content1 for material choices, daily rhythm, and arrival-planning guidance.
- Explain the imaginary setting in plain language. Use a schematic HTML/SVG relationship diagram only if it helps room/grounds orientation; do not fabricate a real map or navigable address.
- Link rooms, experiences, and inquiry through the narrative. Add a short FAQ or factual list for access, children/guest-count limits, and common practical questions.

**Acceptance criteria**

- [ ] Host, property, room terminology, and imagery are consistent with the rest of the site.
- [ ] The page provides useful practical context without pretending the guest house exists or claiming real certifications.
- [ ] All links are internal valid routes/anchors; no dead directions, phone, or reservation links ship.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## LUX-10 — Build a date-aware local stay-inquiry preview

**Suggested issue title:** `[showcase][LUX-10] Build a date-aware local stay-inquiry preview`  
**Status:** Planned · **Priority:** P1 · **Size:** L · **Labels:** `showcase`, `pages`  
**Depends on:** `LUX-02`, `LUX-04`, `SH-06`

**Implementation surface:** apps/showcase/app/samples/luxury/inquire/page.tsx and proposed StayInquiry.tsx.

**Work to deliver**

- Combine room preference, CalendarWithLocalisation date range, guest count, labeled name/email, and optional notes using JabKit atoms and native form controls.
- Validate a complete range, checkout later than arrival, no past arrival in the documented local-date convention, and guest count within the selected room’s fixture capacity. The current calendar has no disabled-date API: show useful form-layer errors and never imply dates are available.
- Use a deterministic initial month strategy to avoid hydration mismatch and timezone day shifts. Format selected calendar dates consistently and allow reset/clear of an incomplete range.
- Render a local inquiry review with room, dates, night count, guests, optional experience, and contact details. Do not compute a payable total or claim reservation confirmation; action is Preview stay inquiry.

**Acceptance criteria**

- [ ] Incomplete/reversed/past ranges and over-capacity guests are rejected with associated messages; valid ranges across month/year boundaries work.
- [ ] Keyboard and touch can choose, clear, and replace dates; one-month mobile layout does not overflow.
- [ ] Room/experience query context is allowlisted and reflected accurately; changing rooms revalidates guest capacity.
- [ ] Review/edit/reset retain or clear values as labeled, and no availability/payment/email request is sent.

**Verification and handoff:** Exercise same-day, month-boundary, leap-day when applicable, timezone-near-midnight, and over-capacity cases in the browser. Record the date convention and evidence without adding an unrelated testing framework.

## LUX-11 — Finish Stillwater House responsive behavior, motion, and edge states

**Suggested issue title:** `[showcase][LUX-11] Finish Stillwater House responsive behavior, motion, and edge states`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `quality`  
**Depends on:** `LUX-05`, `LUX-06`, `LUX-07`, `LUX-08`, `LUX-09`, `LUX-10`

**Implementation surface:** All proposed `apps/showcase/app/samples/luxury/` routes and local styles; this folder’s `motion.json`, `motion.md`, and `rules.md`.

**Work to deliver**

- Use measured image/section entrances with content visible immediately when reduced motion is requested. Keep the hero static, allow ordinary gallery navigation, and avoid autoplay background video, parallax on form pages, scroll hijacking, or delayed booking controls.
- Map numeric timings/easings to motion.json. Prefer CSS transitions and small existing client utilities; JabKit does not currently depend on GSAP or Motion. Do not add a motion library for this roadmap’s effects.
- Complete keyboard, touch, zoom, no-hover, reduced-motion, deep-link, empty-result, invalid-form, and missing-image behavior. Content is readable before enhancement, and motion never determines whether a link or form is usable.
- Audit typography after real copy and assets land: line breaks, heading order, reading measure, caption contrast, image focal points, and section rhythm. Remove unnecessary effects that compete with the site’s content.

**Acceptance criteria**

- [ ] All routes pass the shared responsive/accessibility matrix, with specific failures fixed rather than hidden by overflow clipping.
- [ ] Reduced motion makes content immediately visible, eliminates nonessential movement, and preserves state feedback; no autoplay loop requires the visitor to chase content.
- [ ] Direct navigation, back/forward, repeated popup open/close, and route changes produce no console/hydration errors or stale state.
- [ ] The intended style remains evident on mobile and in dark mode; it does not rely on color alone or tiny low-contrast text.

**Verification and handoff:** Attach normal/reduced-motion recordings and before/after edge-state captures. Rebuild registry/preview assets only when library source actually changed, then run applicable checks.

## LUX-12 — Release the complete Stillwater House website in the sample catalogue

**Suggested issue title:** `[showcase][LUX-12] Release the complete Stillwater House website in the sample catalogue`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `release`  
**Depends on:** `SH-01`, `SH-07`, `LUX-11`

**Implementation surface:** Existing `apps/showcase/app/samples/catalog.ts`, `app/samples/page.tsx`, and `docs/showcase.md`; proposed capture/evidence and `apps/showcase/app/samples/luxury/` route files.

**Work to deliver**

- Execute the complete journey: Compare the three rooms, inspect Garden Room, follow its inquiry link, choose valid stay dates and guest count, review the local inquiry, edit the dates, and return without making a booking.
- Verify every route in the sitemap, including every detail slug and unknown-slug handling. Check browser titles/descriptions, useful page headings, internal link labels, favicon/brand treatment if added, and social-preview image references. Keep demo attribution clear in metadata as well as UI.
- Capture the real finished homepage for the catalogue and representative secondary pages for review. Do not generate a screenshot with AI. Record the actual library components imported by each route in the site’s implementation notes, including any added props.
- Set the catalogue entry to ready only after all predecessor tickets and review criteria pass. Update showcase documentation with actual routes and asset ownership; link the finished PRs/issues back to this roadmap.

**Acceptance criteria**

- [ ] Every listed page is complete with finished copy, local imagery, functioning navigation, and its specified demo states; no coming-soon secondary route remains.
- [ ] The critical journey works on desktop and touch with keyboard-equivalent controls, in both themes and reduced motion.
- [ ] Production home/heaviest-route performance evidence meets SH-07 targets or records an explicitly reviewed exception with a remediation issue; accessibility and broken-flow blockers cannot be waived.
- [ ] `pnpm check` and the showcase production build pass; changed library components have current registry JSON and committed preview images.
- [ ] The catalogue card links to the real root route and its cover accurately represents this website. A reviewer can trace all generated images to Higgsfield MCP.

**Verification and handoff:** Paste the SH-07 evidence template from [docs/qa/design-system-showcases.md](../../docs/qa/design-system-showcases.md). Attach the filled tables, production command output, measured LCP/CLS, component usage inventory, and desktop/mobile captures. An attractive screenshot alone does not complete the site. This closes implementation readiness, not an unrequested deployment.

