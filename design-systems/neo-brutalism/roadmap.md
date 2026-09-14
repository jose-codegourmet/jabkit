# Good Noise — Neo Brutalism showcase roadmap

Status: **shipped** ([#267](https://github.com/jose-codegourmet/jabkit/pull/267); NEO-03 imagery deferred to [#260](https://github.com/jose-codegourmet/jabkit/issues/260), [#205](https://github.com/jose-codegourmet/jabkit/issues/205) closed `not_planned`) · Ticket prefix: **NEO** · Root: `/samples/neo-brutalism` · 12 tickets.

Read the [shared roadmap and mandatory handoff](../roadmap.md), then this folder’s [system](system.md), [rules](rules.md), [component guidance](components.json), [imagery direction](imagery.md), and [migration notes](migration.md). Ticket text below is the original brief. The sample is shipped; NEO-03 imagery is the remaining exception.

## The website to build

A fictional independent branding studio for small organizations launching something distinctive. Visitors compare work and service engagements, then prepare a project brief locally.

The site reads like a stack of deliberately composed posters: firm borders, heavy headlines, direct copy, and a few objects photographed under hard light. Project evidence carries the personality. Service comparisons and forms keep the same strong grid but become stable and plain enough to scan.

**Completed visitor journey:** Filter work to Identity, open Common Ground, inspect Full Brand scope, start a brief with that scope preselected, review it, edit its deliverables, and reset.

## Sitemap and content ownership

All routes below are proposed and share the sample’s own header/footer. The shared demo bar identifies the fictional business and returns visitors to JabKit. Each detail record is a complete page, not a placeholder link.

| Route | Template | Required content |
| --- | --- | --- |
| `/samples/neo-brutalism` | Home | Typographic poster, selected work, service strips, process, brief CTA |
| `/samples/neo-brutalism/work` | Work index | Six linked case studies; discipline filters |
| `/samples/neo-brutalism/work/[slug]` | Case study × 6 | Brief, idea, applications, deliverables, related project |
| `/samples/neo-brutalism/services` | Service engagements | Three one-time engagements, scope comparison, FAQs |
| `/samples/neo-brutalism/studio` | Studio | Point of view, team roles, method, working boundaries |
| `/samples/neo-brutalism/start` | Project brief | Guided local brief with review/edit/reset states |

Author six fictional cases: Common Ground (cafe), Loop House (arts venue), Day Shift (workwear), Off Hours (community event), Kindred Table (food collective), and Bright Side (learning club). Give each a discipline, year, problem, creative idea, three deliverables, a scope ID, and two image IDs. Define three engagements: Identity Sprint, Full Brand, and Launch Campaign, each with inclusions, exclusions, client inputs, and indicative sequence.

Use proposed `apps/showcase/app/samples/neo-brutalism/content.ts` for fixtures, `assets.ts` for local image references, `layout.tsx` for brand chrome, and `_components/` for sample-only composition. Dynamic route data must come from the same canonical records as summaries. Actual folder organization can be simplified during implementation if ownership and routes remain clear.

## JabKit component plan

This is a source-aware integration plan, not a promise that a token swap restyles every internal element. The `-04` ticket owns the named gaps; page tickets own composition and content. Use real library imports in the finished website.

| Component | Source under `packages/ui/src/` | Role | Integration boundary |
| --- | --- | --- | --- |
| Projects13 | `marketing/projects13` | Numbered selected-work rows | SH-05 supplies optional destination; art-directed thumbnails accompany text, not an invented gallery API. |
| Content1 | `marketing/content1` | Case study narrative | Use lists, callouts, figures, and table blocks for deliverables and constraints. |
| About6 | `marketing/about6` | Studio/process story | Supply story/workplace content and image arrays; inspect aspectClassName handling before relying on it. |
| Faq12 | `marketing/faq12` | Service questions | Use explicit categories and direct answers; keep accordion controls easy to recognize. |
| Button, Badge, NavigationMenu, Label, Input, Textarea, Checkbox | `atoms` | Poster controls, navigation, brief | Hard-shadow styling is a deliberate scoped override; preserve modern semantics and error behavior. |

## Required image series

**Generate the sample showcase’s new imagery with Higgsfield MCP.** The `-03` ticket owns execution and follows SH-04. Asset IDs below are proposed filenames/manifest keys, not existing outputs. Read [imagery.md](imagery.md) for the full prompt language and exclusions. Keep all generated outputs local under `/assets/design-systems/neo-brutalism/`; never hotlink the inspiration sites.

| Asset IDs | Subject and continuity | Slots and aspect | Deliverable |
| --- | --- | --- | --- |
| NEO-HERO | Single sculptural megaphone-like studio object, no logo | Home; 4:3 plus 1:1 mobile crop | 1 master + crop |
| NEO-P01–06-A/B | Six fictional project worlds: object scene + close application material | Work/detail; A 4:3, B 3:2 | 12 masters |
| NEO-STUDIO-A/B | Worktable and production materials under direct light | Studio/About6; 4:3 and 4:5 | 2 masters |
| NEO-TEAM | Fictional collaborators at an actual worktable | Studio; 3:2 | 1 master |

**Series prompt direction:** Hard directional studio light, crisp cast shadows, off-white paper, dense dark ink, and one accent from the Neo palette. Use one strong silhouette per frame and plausible printing/material details. All brand names and poster typography are added as real HTML/SVG, never generated into the picture. Avoid soft pastel clay blobs, torn-paper overload, celebrity likenesses, and glossy tech renders.

For each shot, expand that direction with the exact subject, composition, light/material, palette roles, camera/framing, negative space, target aspect, and exclusions. Generate one approved anchor image first; keep subsequent subjects and materials consistent. Deliver a reviewed mobile derivative for the leading image; if the master cannot produce a useful crop, generate a matching alternate through Higgsfield MCP. Use HTML/SVG for brand lettering and UI. Actual product or catalogue screenshots must be captured from the running website.

## Copy-ready prompts for future execution

These prompts are instructions to use later. Writing this roadmap does not authorize or perform implementation or image generation now. Replace the bracketed fields before handing a prompt to an agent; choose one ticket at a time.

**Implementation-ticket prompt**

```text
Implement [NEO-NN: ticket title] from design-systems/neo-brutalism/roadmap.md
for the fictional Good Noise sample at /samples/neo-brutalism.

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
NEO-03; generation belongs to its separate Higgsfield MCP task.

Report changed files, completed criteria, verification evidence, and any
remaining blocker. Do not mark a ticket complete without its required evidence.
```

**Image-production prompt — anchor image**

```text
Use Higgsfield MCP to create the NEO-HERO anchor image for Good Noise.
First read design-systems/neo-brutalism/imagery.md, the NEO-03 shot list,
and the SH-04 production/provenance requirements. Discover the actual tools
and models available; if Higgsfield MCP is unavailable, report that blocker.

Scene: One sculptural studio object with a megaphone-like silhouette on an off-white sweep, hard directional light, crisp dense cast shadow, one accent from the approved Neo palette, frontal three-quarter view, bold readable silhouette. Keep the composition direct and poster-like, with ample space around the object and no lettering.

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

All tickets are required for the complete website. Shared dependencies refer to [the shared backlog](../roadmap.md). **NEO-03** Higgsfield imagery is deferred to [#260](https://github.com/jose-codegourmet/jabkit/issues/260); GitHub [#205](https://github.com/jose-codegourmet/jabkit/issues/205) is closed `not_planned`. Remaining NEO tickets shipped in [#267](https://github.com/jose-codegourmet/jabkit/pull/267).

| ID | Suggested issue | Size | Depends on |
| --- | --- | --- | --- |
| NEO-01 | Finalize Good Noise content and route contracts | M | None |
| NEO-02 | Build the Good Noise visual foundation and site shell | M | SH-02, SH-03, NEO-01 |
| NEO-03 | Produce and integrate the Good Noise image series with Higgsfield MCP | L | SH-04, NEO-01 |
| NEO-04 | Adapt the project and story blocks to the poster grid | L | NEO-01, NEO-02, SH-05 |
| NEO-05 | Build the Good Noise poster homepage | M | NEO-02, NEO-03, NEO-04 |
| NEO-06 | Build a searchable work archive | M | NEO-02, NEO-03, NEO-04, SH-06 |
| NEO-07 | Build six case studies with actual creative reasoning | M | NEO-02, NEO-03, NEO-04 |
| NEO-08 | Build one-time service engagements and comparison | M | NEO-02, NEO-04 |
| NEO-09 | Build a Studio page that explains how Good Noise works | M | NEO-02, NEO-03, NEO-04 |
| NEO-10 | Build the guided brief and local review flow | L | NEO-02, NEO-04, SH-06 |
| NEO-11 | Finish Good Noise responsive behavior, motion, and edge states | M | NEO-05, NEO-06, NEO-07, NEO-08, NEO-09, NEO-10 |
| NEO-12 | Release the complete Good Noise website in the sample catalogue | M | SH-01, SH-07, NEO-11 |

## NEO-01 — Finalize Good Noise content and route contracts

**Suggested issue title:** `[showcase][NEO-01] Finalize Good Noise content and route contracts`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `content`  
**Depends on:** None

**Implementation surface:** Proposed `apps/showcase/app/samples/neo-brutalism/content.ts` and `apps/showcase/app/samples/neo-brutalism/types.ts`; current design direction in this folder’s `system.md`, `patterns.json`, and `imagery.md`.

**Work to deliver**

- A fictional independent branding studio for small organizations launching something distinctive. Visitors compare work and service engagements, then prepare a project brief locally.
- Turn the sitemap and content inventory below into typed fixture records. Write finished, specific copy, relationship IDs, descriptive alt drafts, and all CTA destinations before arranging sections. Use the same source record for listing cards, detail headers, breadcrumbs, and inquiry context.
- Author six fictional cases: Common Ground (cafe), Loop House (arts venue), Day Shift (workwear), Off Hours (community event), Kindred Table (food collective), and Bright Side (learning club). Give each a discipline, year, problem, creative idea, three deliverables, a scope ID, and two image IDs. Define three engagements: Identity Sprint, Full Brand, and Launch Campaign, each with inclusions, exclusions, client inputs, and indicative sequence.
- Keep every person, organization, product claim, and price explicitly part of the fictional demo. Avoid copied reference-site copy, invented real-world endorsements, placeholder paragraphs, or links to unbuilt destinations.

**Acceptance criteria**

- [ ] Every sitemap entry has a page owner and every listed detail fixture has a valid unique slug; unknown slugs have a specified 404 behavior.
- [ ] Copy establishes a clear audience, offering, and primary action; no remaining lorem ipsum, placeholder names, or default component mock copy is needed.
- [ ] A content/asset matrix maps each route section to record IDs and the planned Higgsfield image IDs; all internal links stay under the correct sample root unless explicitly returning to JabKit.
- [ ] The final copy fits narrow/mobile reading order without depending on a desktop-only visual arrangement.

**Verification and handoff:** Attach the content inventory and a route/link table to the issue. Content review can proceed before shared implementation blockers are closed.

## NEO-02 — Build the Good Noise visual foundation and site shell

**Suggested issue title:** `[showcase][NEO-02] Build the Good Noise visual foundation and site shell`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `theming`  
**Depends on:** `SH-02`, `SH-03`, `NEO-01`

**Implementation surface:** Proposed `apps/showcase/app/samples/neo-brutalism/layout.tsx`, `apps/showcase/app/samples/neo-brutalism/style.module.css`, and `apps/showcase/app/samples/neo-brutalism/_components/`; shared demo bar and scope from SH-02/SH-03.

**Work to deliver**

- Apply this folder’s complete tokens and typography through the agreed scoped implementation. Build a brand-specific header, current-page navigation, mobile menu, skip link, and footer using the mapped JabKit primitives. All sample pages share this shell; the demo bar remains visible.
- Use a heavy display scale with concise multi-line statements, solid ruled sections, squared controls, and a consistent small offset shadow. The accent is reserved for hierarchy and actions. Keep text readable within the poster grid at 320px; large type must wrap naturally. Build a strong masthead, plain links, and a blunt closing invitation rather than a ticker.
- Implement active-route and mobile open/closed states using the actual NavigationMenu or Dialog primitive composition. Verify portal mounting instead of assuming a viewport wrapper forwards a container. Keep fonts and decorative styling within this site.
- Choose whether the header is static or sticky based on the content; reserve its space and offset in-page anchors. Native links must work without a JavaScript-only click handler.

**Acceptance criteria**

- [ ] The shell renders at 320/390/768/1440px in both modes without horizontal page overflow or a clipped wordmark.
- [ ] All nav and footer destinations in the agreed sitemap exist by release; current page is programmatically identifiable and keyboard focus is visible.
- [ ] The mobile menu opens/closes with pointer and keyboard, handles Escape, returns focus, and closes on navigation; theme and portal surfaces match.
- [ ] Visiting this site and then another sample leaves no brand font, token, menu, or scroll-lock residue.

**Verification and handoff:** Attach shell captures including mobile navigation open and long labels. If library primitives change, include the full library handoff; route-only wrappers are not registry components.

## NEO-03 — Produce and integrate the Good Noise image series with Higgsfield MCP

**Suggested issue title:** `[showcase][NEO-03] Produce and integrate the Good Noise image series with Higgsfield MCP`  
**Status:** Planned · **Priority:** P1 · **Size:** L · **Labels:** `showcase`, `imagery`  
**Depends on:** `SH-04`, `NEO-01`

**Implementation surface:** Proposed `apps/showcase/public/assets/design-systems/neo-brutalism/`, its public-safe provenance manifest, and `apps/showcase/app/samples/neo-brutalism/assets.ts`; prompt direction in `imagery.md`.

**Work to deliver**

- **Use Higgsfield MCP for every newly generated image in this sample showcase.** Discover the available tools and models at execution time. If it is unavailable, block this ticket with a precise access dependency; do not substitute another generator.
- Produce every required slot in the shot list below. Begin with the hero/cover reference image, review it against the brand and its actual crop, then continue the matching series. Record revisions and the actual selected outputs in the provenance manifest.
- Prompt direction for this site: Hard directional studio light, crisp cast shadows, off-white paper, dense dark ink, and one accent from the Neo palette. Use one strong silhouette per frame and plausible printing/material details. All brand names and poster typography are added as real HTML/SVG, never generated into the picture. Avoid soft pastel clay blobs, torn-paper overload, celebrity likenesses, and glossy tech renders.
- Optimize approved outputs, provide intrinsic sizes and useful responsive derivatives, and export local URLs from assets.ts. Keep actual interface text and product screenshots outside image generation. Supply complete alt/caption text or mark an image decorative deliberately.

**Acceptance criteria**

- [ ] Every shot-list ID has a local file, verified dimensions, intended slot/crop, final prompt, and actual Higgsfield MCP provenance; requested alternate crops are present.
- [ ] The series feels like one art-directed business: materials, light, palette, perspective, and recurring subjects stay consistent.
- [ ] No generated logos, gibberish text, implausible anatomy/architecture, watermarks, or third-party reference-site assets appear in the final set.
- [ ] Hero and content images meet shared delivery budgets or have a documented visual-quality exception; mobile crops keep the meaningful subject visible.

**Verification and handoff:** Attach a contact sheet and in-slot hero/detail previews plus provenance. The contact sheet is review evidence, not an examples directory or a substitute for the delivered assets.

## NEO-04 — Adapt the project and story blocks to the poster grid

**Suggested issue title:** `[showcase][NEO-04] Adapt the project and story blocks to the poster grid`  
**Status:** Planned · **Priority:** P1 · **Size:** L · **Labels:** `showcase`, `components`  
**Depends on:** `NEO-01`, `NEO-02`, `SH-05`

**Implementation surface:** apps/showcase/app/samples/neo-brutalism/_components/ plus existing Projects13, Content1, About6, and atom sources.

**SH-05 API:** Set `Projects13Project.href` for a title text link whose accessible name is the project title. Omit `href` for an unlinked article row. Do not wrap the whole row or the thumbnail.

**Work to deliver**

- Map case-study records to Projects13 numbered rows with SH-05 hrefs. Retain dates, concise descriptions, and visible descriptive link text.
- Reconcile Projects13’s small fixed thumbnail and internal typography with a ruled, substantial Neo layout. Add only a minimal reusable slot/geometry hook if scoped overrides cannot express the required layout; do not use brittle nth-child selectors.
- Create local adapters for Content1 case sections and About6 story/workplace fields. Override Button glow with a hard semantic-token shadow and preserve disabled/focus/active states.
- Handle strong borders consistently without turning every nested paragraph into another bordered panel.

**Acceptance criteria**

- [ ] Linked project rows work with keyboard and pointer without nested links or ambiguous click regions.
- [ ] Block internals follow the defined grid at mobile and desktop; default source component styling stays compatible.
- [ ] Every case narrative and studio image maps to the proper props, with no hidden fallback mock copy.
- [ ] Any new public hook is documented, covered by required stories, and delivered with rebuilt registry/previews.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## NEO-05 — Build the Good Noise poster homepage

**Suggested issue title:** `[showcase][NEO-05] Build the Good Noise poster homepage`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `NEO-02`, `NEO-03`, `NEO-04`

**Implementation surface:** apps/showcase/app/samples/neo-brutalism/page.tsx.

**Work to deliver**

- Compose a short oversized brand promise, a single NEO-HERO object, and two literal actions: See the work and Start a brief. Keep the object separate from functional text.
- Follow with three Projects13 work rows, three compact service strips, a four-step method, and a full-width closing action. Use different section proportions while maintaining shared border tracks.
- Keep case-study labels and services concrete; remove fake client-logo walls, awards, and metric counters.

**Acceptance criteria**

- [ ] The page communicates a branding service and its next action within the first screen on a small laptop.
- [ ] All selected cases and service actions resolve; large type never obscures or overlaps controls.
- [ ] The page has a distinct poster rhythm on mobile without horizontal scrolling or unreadable all-caps paragraphs.
- [ ] Dark mode preserves the grid and hard-shadow hierarchy rather than inverting photographs.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## NEO-06 — Build a searchable work archive

**Suggested issue title:** `[showcase][NEO-06] Build a searchable work archive`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `NEO-02`, `NEO-03`, `NEO-04`, `SH-06`

**Implementation surface:** apps/showcase/app/samples/neo-brutalism/work/page.tsx and proposed local WorkControls.tsx.

**Work to deliver**

- Display all six cases as Projects13 rows or a scoped adapter preserving its documented data contract. Supply discipline labels alongside title/year.
- Add URL-backed All, Identity, and Campaign filters plus a labeled title search using Input. Combine filters deterministically, show result count, and offer Clear filters.
- Keep focus in the initiating control as results update; announce the count without moving the visitor to the top on every keystroke.

**Acceptance criteria**

- [ ] Filtering and case-insensitive search work independently and together, including an empty result.
- [ ] Refresh/back/forward retain recognized query state; invalid filter values fall back safely.
- [ ] Every result reaches a finished detail page; no whole-row click handler removes native link behavior.
- [ ] No animated reordering makes results inaccessible to keyboard or reduced-motion users.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## NEO-07 — Build six case studies with actual creative reasoning

**Suggested issue title:** `[showcase][NEO-07] Build six case studies with actual creative reasoning`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `NEO-02`, `NEO-03`, `NEO-04`

**Implementation surface:** apps/showcase/app/samples/neo-brutalism/work/[slug]/page.tsx.

**Work to deliver**

- Use Content1 for brief, audience/constraint, central idea, application figures, and deliverables. Pair A/B generated assets with copy explaining the same fictional project.
- Show a compact project fact strip and scope link; add related work and a Start a similar brief action with allowlisted case/scope IDs.
- Keep brand lettering as real accessible content adjacent to assets. Do not invent client testimonials or numeric business results to fill an outcomes section.

**Acceptance criteria**

- [ ] Six distinct slugs have complete narrative and two coherent images each; unknown slugs return 404.
- [ ] The case’s title, year, discipline, image world, and service scope agree with archive content.
- [ ] Headings, in-page outline, lists/tables, and image captions remain readable at 200% zoom.
- [ ] The primary brief action carries accurate case context, and related work never links to itself.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## NEO-08 — Build one-time service engagements and comparison

**Suggested issue title:** `[showcase][NEO-08] Build one-time service engagements and comparison`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `NEO-02`, `NEO-04`

**Implementation surface:** apps/showcase/app/samples/neo-brutalism/services/page.tsx.

**Work to deliver**

- Compose Identity Sprint, Full Brand, and Launch Campaign as three strong sections with the same fields: suitable problem, outputs, client responsibilities, exclusions, and stages.
- Build a semantic comparison table with a readable stacked mobile alternative, and Faq12 for scope/revisions/handoff questions.
- Use plain scope-selection Button links to Start. Pricing28 is not used here because its monthly/yearly interface misstates these one-time engagements; no invented billing-visibility API is assumed.

**Acceptance criteria**

- [ ] The three scopes are comparable without relying on accent color or a recommended badge.
- [ ] All table information remains available on mobile and with screen-reader headers.
- [ ] Each CTA preselects the correct engagement in the brief; FAQs explain practical limitations.
- [ ] No fake subscription, checkout, discount countdown, or commercial claim is introduced.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## NEO-09 — Build a Studio page that explains how Good Noise works

**Suggested issue title:** `[showcase][NEO-09] Build a Studio page that explains how Good Noise works`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `NEO-02`, `NEO-03`, `NEO-04`

**Implementation surface:** apps/showcase/app/samples/neo-brutalism/studio/page.tsx.

**Work to deliver**

- Use About6 for a concise founding story and working environment, then semantic sections for principles, responsibilities, and collaboration stages.
- Pair the studio series with concrete captions about workshops and production materials. Keep fictional people and roles clearly within the demo context.
- Link relevant work and service scopes from the method rather than repeating every homepage section.

**Acceptance criteria**

- [ ] A visitor can explain the studio’s point of view and the client’s role after reading this page.
- [ ] All About6 image/text fields use Good Noise assets and copy, including image alternatives.
- [ ] Strong headings and borders remain structured without excessive decoration or overlapping body text.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## NEO-10 — Build the guided brief and local review flow

**Suggested issue title:** `[showcase][NEO-10] Build the guided brief and local review flow`  
**Status:** Planned · **Priority:** P1 · **Size:** L · **Labels:** `showcase`, `pages`  
**Depends on:** `NEO-02`, `NEO-04`, `SH-06`

**Implementation surface:** apps/showcase/app/samples/neo-brutalism/start/page.tsx and proposed BriefForm.tsx.

**Work to deliver**

- Collect name/email, engagement, project goal, desired deliverables through labeled Checkbox controls, timing, and optional context using JabKit atoms. Group related controls in fieldsets with legends.
- Preselect a known engagement/case from the incoming URL, keep selections editable, and validate that an engagement and goal are supplied. Do not require a fake privacy-consent checkbox for a local preview.
- Render a local brief review with clear selected scope, deliverables, and values; Edit returns to preserved fields and Reset clears the draft. Label the action Preview brief and state that no message is sent.

**Acceptance criteria**

- [ ] Required fields have linked errors, checkbox group labels, and usable focus order on mobile.
- [ ] Valid data produces an accurate review; modifying a checkbox and previewing again updates it.
- [ ] Unknown query values never appear as trusted engagement names, and resetting removes stale case context.
- [ ] No request is sent or confirmation falsely claims a consultation has been booked.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## NEO-11 — Finish Good Noise responsive behavior, motion, and edge states

**Suggested issue title:** `[showcase][NEO-11] Finish Good Noise responsive behavior, motion, and edge states`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `quality`  
**Depends on:** `NEO-05`, `NEO-06`, `NEO-07`, `NEO-08`, `NEO-09`, `NEO-10`

**Implementation surface:** All proposed `apps/showcase/app/samples/neo-brutalism/` routes and local styles; this folder’s `motion.json`, `motion.md`, and `rules.md`.

**Work to deliver**

- Use quick press/offset feedback and short section settling. Keep the grid static, preserve focus outlines, and remove text shuffling, falling letters, perpetual marquees, and pointer-only effects from task-critical content.
- Map numeric timings/easings to motion.json. Prefer CSS transitions and small existing client utilities; JabKit does not currently depend on GSAP or Motion. Do not add a motion library for this roadmap’s effects.
- Complete keyboard, touch, zoom, no-hover, reduced-motion, deep-link, empty-result, invalid-form, and missing-image behavior. Content is readable before enhancement, and motion never determines whether a link or form is usable.
- Audit typography after real copy and assets land: line breaks, heading order, reading measure, caption contrast, image focal points, and section rhythm. Remove unnecessary effects that compete with the site’s content.

**Acceptance criteria**

- [ ] All routes pass the shared responsive/accessibility matrix, with specific failures fixed rather than hidden by overflow clipping.
- [ ] Reduced motion makes content immediately visible, eliminates nonessential movement, and preserves state feedback; no autoplay loop requires the visitor to chase content.
- [ ] Direct navigation, back/forward, repeated popup open/close, and route changes produce no console/hydration errors or stale state.
- [ ] The intended style remains evident on mobile and in dark mode; it does not rely on color alone or tiny low-contrast text.

**Verification and handoff:** Attach normal/reduced-motion recordings and before/after edge-state captures. Rebuild registry/preview assets only when library source actually changed, then run applicable checks.

## NEO-12 — Release the complete Good Noise website in the sample catalogue

**Suggested issue title:** `[showcase][NEO-12] Release the complete Good Noise website in the sample catalogue`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `release`  
**Depends on:** `SH-01`, `SH-07`, `NEO-11`

**Implementation surface:** Existing `apps/showcase/app/samples/catalog.ts`, `app/samples/page.tsx`, and `docs/showcase.md`; proposed capture/evidence and `apps/showcase/app/samples/neo-brutalism/` route files.

**Work to deliver**

- Execute the complete journey: Filter work to Identity, open Common Ground, inspect Full Brand scope, start a brief with that scope preselected, review it, edit its deliverables, and reset.
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

