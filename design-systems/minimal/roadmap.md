# West Room Studio — Minimal showcase roadmap

Status: **shipped** ([#266](https://github.com/jose-codegourmet/jabkit/pull/266); MIN-03 imagery deferred to [#260](https://github.com/jose-codegourmet/jabkit/issues/260), [#204](https://github.com/jose-codegourmet/jabkit/issues/204) closed `not_planned`) · Ticket prefix: **MIN** · Root: `/samples/minimal` · 12 tickets.

Read the [shared roadmap and mandatory handoff](../roadmap.md), then this folder’s [system](system.md), [rules](rules.md), [component guidance](components.json), [imagery direction](imagery.md), and [migration notes](migration.md). Ticket text below is the original brief. The sample is shipped; MIN-03 imagery is the remaining exception.

## The website to build

A fictional architecture and interiors practice for clients who want small spaces planned with care. The primary journey is work → project detail → services → a local inquiry preview.

The page should feel like entering a quiet studio with a few excellent prints laid out. A small practice statement and a large daylight image lead; captions, dimensions, and process make the restraint useful. Portfolio pages are open and unboxed, while service and contact pages become denser because they answer practical questions.

**Completed visitor journey:** Open Work, filter to Workspace, enter Reading Room, follow its related service, prepare a valid inquiry, inspect the local review, edit it, and return to the catalogue.

## Sitemap and content ownership

All routes below are proposed and share the sample’s own header/footer. The shared demo bar identifies the fictional business and returns visitors to JabKit. Each detail record is a complete page, not a placeholder link.

| Route | Template | Required content |
| --- | --- | --- |
| `/samples/minimal` | Home | Practice statement, one leading image, four selected projects, approach, inquiry |
| `/samples/minimal/work` | Work index | Six projects; discipline filter, linked captions, empty/reset state |
| `/samples/minimal/work/[slug]` | Project detail × 6 | Brief, constraints, plans-in-words, image sequence, outcome, next project |
| `/samples/minimal/studio` | Studio | Practice story, working principles, small fictional team, process |
| `/samples/minimal/services` | Services | Two service scopes, inclusions/exclusions, stages, FAQ |
| `/samples/minimal/contact` | Project inquiry | Local form with selected service/project context and review state |

Create six project records across residential, workspace, and retail: Courtyard House, Narrow House, Reading Room, Common Table, North Workshop, and Small Corner. Each needs a slug, discipline, fictional place, year, area, brief, constraints, three narrative sections, and image IDs. Supply two service scopes (architecture and interiors), four process stages, and six practical FAQ answers.

Use proposed `apps/showcase/app/samples/minimal/content.ts` for fixtures, `assets.ts` for local image references, `layout.tsx` for brand chrome, and `_components/` for sample-only composition. Dynamic route data must come from the same canonical records as summaries. Actual folder organization can be simplified during implementation if ownership and routes remain clear.

## JabKit component plan

This is a source-aware integration plan, not a promise that a token swap restyles every internal element. The `-04` ticket owns the named gaps; page tickets own composition and content. Use real library imports in the finished website.

| Component | Source under `packages/ui/src/` | Role | Integration boundary |
| --- | --- | --- | --- |
| Projects16 | `marketing/projects16` | Home’s four selected projects | Pass exactly four images; SH-05 adds optional destination/caption. The block is not the six-item index. |
| Content1 | `marketing/content1` | Six project narratives | Use sections and its paragraph/image/list/callout blocks, unique outline IDs, and real next-project links outside the block. |
| About14 | `marketing/about14` | Studio story | Supply title, label, intro, profile, philosophy, and image; remove default copy and adjust existing internal spacing only through supported hooks. |
| Faq12 | `marketing/faq12` | Services questions | Pass categories and explicit items; verify its scroll-linked navigation in this quieter context. |
| NavigationMenu, Button, Label, Input, Textarea | `atoms` | Navigation, service actions, inquiry | Use exported primitives and literal labels; compose semantic lists/figures because no generic card atom exists. |

## Required image series

**Generate the sample showcase’s new imagery with Higgsfield MCP.** The `-03` ticket owns execution and follows SH-04. Asset IDs below are proposed filenames/manifest keys, not existing outputs. Read [imagery.md](imagery.md) for the full prompt language and exclusions. Keep all generated outputs local under `/assets/design-systems/minimal/`; never hotlink the inspiration sites.

| Asset IDs | Subject and continuity | Slots and aspect | Deliverable |
| --- | --- | --- | --- |
| MIN-HERO | Courtyard House daylight view | Home; 16:9 and separately reviewed 4:5 mobile crop | 1 master + 1 mobile derivative |
| MIN-P01–06-A/B | Six coherent project pairs: room/whole-space + material/detail | Work index and all details; A 4:3, B 4:5 | 12 masters; same design per pair |
| MIN-STUDIO | Observed studio worktable, no legible plans or brand marks | Studio; 3:2 | 1 master |
| MIN-PROFILE | Fictional founder at work, natural context | About14 profile; 1:1 | 1 master |

**Series prompt direction:** Observed architectural daylight, warm neutral plaster and timber, level camera, believable joins, one purposeful object, and generous unoccupied space. Build each project pair from the same room/material brief. Avoid showroom gloss, ultra-wide distortion, fake drawings, staged handshakes, and decorative plants repeated in every frame.

For each shot, expand that direction with the exact subject, composition, light/material, palette roles, camera/framing, negative space, target aspect, and exclusions. Generate one approved anchor image first; keep subsequent subjects and materials consistent. Deliver a reviewed mobile derivative for the leading image; if the master cannot produce a useful crop, generate a matching alternate through Higgsfield MCP. Use HTML/SVG for brand lettering and UI. Actual product or catalogue screenshots must be captured from the running website.

## Copy-ready prompts for future execution

These prompts are instructions to use later. Writing this roadmap does not authorize or perform implementation or image generation now. Replace the bracketed fields before handing a prompt to an agent; choose one ticket at a time.

**Implementation-ticket prompt**

```text
Implement [MIN-NN: ticket title] from design-systems/minimal/roadmap.md
for the fictional West Room Studio sample at /samples/minimal.

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
MIN-03; generation belongs to its separate Higgsfield MCP task.

Report changed files, completed criteria, verification evidence, and any
remaining blocker. Do not mark a ticket complete without its required evidence.
```

**Image-production prompt — anchor image**

```text
Use Higgsfield MCP to create the MIN-HERO anchor image for West Room Studio.
First read design-systems/minimal/imagery.md, the MIN-03 shot list,
and the SH-04 production/provenance requirements. Discover the actual tools
and models available; if Higgsfield MCP is unavailable, report that blocker.

Scene: A modest courtyard home seen through an open interior threshold, warm plaster, pale oak, level camera at human eye height, observed morning daylight, believable joinery, quiet negative space. The architecture should feel lived with and exact, with one purposeful object and no showroom gloss.

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

All tickets are required for the complete website. Shared dependencies refer to [the shared backlog](../roadmap.md). **MIN-03** Higgsfield imagery is deferred to [#260](https://github.com/jose-codegourmet/jabkit/issues/260); GitHub [#204](https://github.com/jose-codegourmet/jabkit/issues/204) is closed `not_planned`. Remaining MIN tickets shipped in [#266](https://github.com/jose-codegourmet/jabkit/pull/266).

| ID | Suggested issue | Size | Depends on |
| --- | --- | --- | --- |
| MIN-01 | Finalize West Room Studio content and route contracts | M | None |
| MIN-02 | Build the West Room Studio visual foundation and site shell | M | SH-02, SH-03, MIN-01 |
| MIN-03 | Produce and integrate the West Room Studio image series with Higgsfield MCP | L | SH-04, MIN-01 |
| MIN-04 | Adapt portfolio and narrative blocks for the Minimal composition | L | MIN-01, MIN-02, SH-05 |
| MIN-05 | Build the work-led West Room homepage | M | MIN-02, MIN-03, MIN-04 |
| MIN-06 | Build the six-project work index with URL-backed discipline filters | M | MIN-02, MIN-03, MIN-04, SH-06 |
| MIN-07 | Build all six project detail narratives | M | MIN-02, MIN-03, MIN-04 |
| MIN-08 | Build the Studio page around practice and process | M | MIN-02, MIN-03, MIN-04 |
| MIN-09 | Build clear service scopes and practical questions | M | MIN-02, MIN-04 |
| MIN-10 | Build the local project-inquiry flow | L | MIN-02, MIN-04, SH-06 |
| MIN-11 | Finish West Room Studio responsive behavior, motion, and edge states | M | MIN-05, MIN-06, MIN-07, MIN-08, MIN-09, MIN-10 |
| MIN-12 | Release the complete West Room Studio website in the sample catalogue | M | SH-01, SH-07, MIN-11 |

## MIN-01 — Finalize West Room Studio content and route contracts

**Suggested issue title:** `[showcase][MIN-01] Finalize West Room Studio content and route contracts`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `content`  
**Depends on:** None

**Implementation surface:** Proposed `apps/showcase/app/samples/minimal/content.ts` and `apps/showcase/app/samples/minimal/types.ts`; current design direction in this folder’s `system.md`, `patterns.json`, and `imagery.md`.

**Work to deliver**

- A fictional architecture and interiors practice for clients who want small spaces planned with care. The primary journey is work → project detail → services → a local inquiry preview.
- Turn the sitemap and content inventory below into typed fixture records. Write finished, specific copy, relationship IDs, descriptive alt drafts, and all CTA destinations before arranging sections. Use the same source record for listing cards, detail headers, breadcrumbs, and inquiry context.
- Create six project records across residential, workspace, and retail: Courtyard House, Narrow House, Reading Room, Common Table, North Workshop, and Small Corner. Each needs a slug, discipline, fictional place, year, area, brief, constraints, three narrative sections, and image IDs. Supply two service scopes (architecture and interiors), four process stages, and six practical FAQ answers.
- Keep every person, organization, product claim, and price explicitly part of the fictional demo. Avoid copied reference-site copy, invented real-world endorsements, placeholder paragraphs, or links to unbuilt destinations.

**Acceptance criteria**

- [ ] Every sitemap entry has a page owner and every listed detail fixture has a valid unique slug; unknown slugs have a specified 404 behavior.
- [ ] Copy establishes a clear audience, offering, and primary action; no remaining lorem ipsum, placeholder names, or default component mock copy is needed.
- [ ] A content/asset matrix maps each route section to record IDs and the planned Higgsfield image IDs; all internal links stay under the correct sample root unless explicitly returning to JabKit.
- [ ] The final copy fits narrow/mobile reading order without depending on a desktop-only visual arrangement.

**Verification and handoff:** Attach the content inventory and a route/link table to the issue. Content review can proceed before shared implementation blockers are closed.

## MIN-02 — Build the West Room Studio visual foundation and site shell

**Suggested issue title:** `[showcase][MIN-02] Build the West Room Studio visual foundation and site shell`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `theming`  
**Depends on:** `SH-02`, `SH-03`, `MIN-01`

**Implementation surface:** Proposed `apps/showcase/app/samples/minimal/layout.tsx`, `apps/showcase/app/samples/minimal/style.module.css`, and `apps/showcase/app/samples/minimal/_components/`; shared demo bar and scope from SH-02/SH-03.

**Work to deliver**

- Apply this folder’s complete tokens and typography through the agreed scoped implementation. Build a brand-specific header, current-page navigation, mobile menu, skip link, and footer using the mapped JabKit primitives. All sample pages share this shell; the demo bar remains visible.
- Use the Minimal family stacks and restrained role scale. Keep content aligned to one quiet grid, with generous section breathing room and small but legible metadata. Remove Button’s colored glow in local overrides, keep square calm controls, and use semantic input boundaries rather than a faint decorative divider. The header is compact text navigation and the footer is an open inquiry line plus practical links.
- Implement active-route and mobile open/closed states using the actual NavigationMenu or Dialog primitive composition. Verify portal mounting instead of assuming a viewport wrapper forwards a container. Keep fonts and decorative styling within this site.
- Choose whether the header is static or sticky based on the content; reserve its space and offset in-page anchors. Native links must work without a JavaScript-only click handler.

**Acceptance criteria**

- [ ] The shell renders at 320/390/768/1440px in both modes without horizontal page overflow or a clipped wordmark.
- [ ] All nav and footer destinations in the agreed sitemap exist by release; current page is programmatically identifiable and keyboard focus is visible.
- [ ] The mobile menu opens/closes with pointer and keyboard, handles Escape, returns focus, and closes on navigation; theme and portal surfaces match.
- [ ] Visiting this site and then another sample leaves no brand font, token, menu, or scroll-lock residue.

**Verification and handoff:** Attach shell captures including mobile navigation open and long labels. If library primitives change, include the full library handoff; route-only wrappers are not registry components.

## MIN-03 — Produce and integrate the West Room Studio image series with Higgsfield MCP

**Suggested issue title:** `[showcase][MIN-03] Produce and integrate the West Room Studio image series with Higgsfield MCP`  
**Status:** Planned · **Priority:** P1 · **Size:** L · **Labels:** `showcase`, `imagery`  
**Depends on:** `SH-04`, `MIN-01`

**Implementation surface:** Proposed `apps/showcase/public/assets/design-systems/minimal/`, its public-safe provenance manifest, and `apps/showcase/app/samples/minimal/assets.ts`; prompt direction in `imagery.md`.

**Work to deliver**

- **Use Higgsfield MCP for every newly generated image in this sample showcase.** Discover the available tools and models at execution time. If it is unavailable, block this ticket with a precise access dependency; do not substitute another generator.
- Produce every required slot in the shot list below. Begin with the hero/cover reference image, review it against the brand and its actual crop, then continue the matching series. Record revisions and the actual selected outputs in the provenance manifest.
- Prompt direction for this site: Observed architectural daylight, warm neutral plaster and timber, level camera, believable joins, one purposeful object, and generous unoccupied space. Build each project pair from the same room/material brief. Avoid showroom gloss, ultra-wide distortion, fake drawings, staged handshakes, and decorative plants repeated in every frame.
- Optimize approved outputs, provide intrinsic sizes and useful responsive derivatives, and export local URLs from assets.ts. Keep actual interface text and product screenshots outside image generation. Supply complete alt/caption text or mark an image decorative deliberately.

**Acceptance criteria**

- [ ] Every shot-list ID has a local file, verified dimensions, intended slot/crop, final prompt, and actual Higgsfield MCP provenance; requested alternate crops are present.
- [ ] The series feels like one art-directed business: materials, light, palette, perspective, and recurring subjects stay consistent.
- [ ] No generated logos, gibberish text, implausible anatomy/architecture, watermarks, or third-party reference-site assets appear in the final set.
- [ ] Hero and content images meet shared delivery budgets or have a documented visual-quality exception; mobile crops keep the meaningful subject visible.

**Verification and handoff:** Attach a contact sheet and in-slot hero/detail previews plus provenance. The contact sheet is review evidence, not an examples directory or a substitute for the delivered assets.

## MIN-04 — Adapt portfolio and narrative blocks for the Minimal composition

**Suggested issue title:** `[showcase][MIN-04] Adapt portfolio and narrative blocks for the Minimal composition`  
**Status:** Planned · **Priority:** P1 · **Size:** L · **Labels:** `showcase`, `components`  
**Depends on:** `MIN-01`, `MIN-02`, `SH-05`

**Implementation surface:** apps/showcase/app/samples/minimal/_components/ and existing Projects16, Content1, About14, and Faq12 source folders.

**SH-05 API:** Pass four `Projects16Image` records. Set `title` for visible captions and `href` for caption text links (for example `/samples/minimal/work/[slug]`). Do not send six work-index records into this block; extra images are ignored. `PROJECTS16_IMAGE_LIMIT` is 4.

**Work to deliver**

- Build thin sample adapters from typed project records to Projects16 and Content1 props; pass exactly four selected image records to Projects16 and explicit content throughout.
- Use SH-05 linked captions for home projects. Build the six-item work index as semantic linked figures with JabKit Button controls instead of sending six records into a four-image block.
- Review internal Content1/About14 container widths, radius, and headings against the Minimal system. Prefer approved scoped geometry/classes; any public slot hook required by fixed internal classes is a separately reviewable library change.
- Keep source imports traceable. Do not duplicate a marketing component into a new design-system registry category.

**Acceptance criteria**

- [ ] Adapters typecheck against actual APIs; no unsupported cards, hrefs, or arbitrary children props are passed.
- [ ] Home projects link to all four intended detail routes with visible captions and no redundant nested links.
- [ ] Blocks follow one coherent width/type rhythm and include no default mock content, excess glow, or promotional badges.
- [ ] Existing default component stories remain correct after any reusable hook changes.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## MIN-05 — Build the work-led West Room homepage

**Suggested issue title:** `[showcase][MIN-05] Build the work-led West Room homepage`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `MIN-02`, `MIN-03`, `MIN-04`

**Implementation surface:** apps/showcase/app/samples/minimal/page.tsx and local home composition.

**Work to deliver**

- Compose one h1 practice statement, a large MIN-HERO figure, and a concise intro with View work and Discuss a project actions. Keep the first screen readable on a small laptop; do not make an oversized empty hero.
- Follow with Projects16 showing four real project links, a short approach section with three principles, and a compact service/inquiry closing.
- Provide useful image captions and semantic section headings without converting every paragraph into a card.

**Acceptance criteria**

- [ ] The first viewport identifies the practice and offers a visible route into work; the leading image does not obscure text.
- [ ] All four selected projects, the service CTA, and contact action resolve to real sample routes.
- [ ] At mobile widths the image/caption order remains natural and project grid items are legible without hover.
- [ ] Only the leading image is eager/priority where appropriate; lower images have reserved aspect ratio and lazy loading.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## MIN-06 — Build the six-project work index with URL-backed discipline filters

**Suggested issue title:** `[showcase][MIN-06] Build the six-project work index with URL-backed discipline filters`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `MIN-02`, `MIN-03`, `MIN-04`, `SH-06`

**Implementation surface:** apps/showcase/app/samples/minimal/work/page.tsx and proposed local WorkFilter client component.

**Work to deliver**

- Render six linked project figures with title, discipline, fictional place, and year. Alternate landscape/portrait rhythm intentionally but retain row/DOM reading order.
- Use Button controls for All, Residential, Workspace, and Retail; preserve the selected filter in the URL and make selected state programmatic. Invalid filter values resolve to All.
- Provide a count, no-results/reset treatment for filtered fixture changes, and stable image boxes while images load.

**Acceptance criteria**

- [ ] Every record appears in All exactly once and each known filter returns the correct subset.
- [ ] Direct filtered URLs, back/forward, refresh, and clearing the filter agree with visible content.
- [ ] Each project has a descriptive link and all six destinations exist; no image-only unlabeled link is required.
- [ ] The page remains an open portfolio with useful captions rather than a generic card grid.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## MIN-07 — Build all six project detail narratives

**Suggested issue title:** `[showcase][MIN-07] Build all six project detail narratives`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `MIN-02`, `MIN-03`, `MIN-04`

**Implementation surface:** apps/showcase/app/samples/minimal/work/[slug]/page.tsx with proposed route metadata and slug lookup.

**Work to deliver**

- Render project title, discipline/place/year/area, main figure, and Content1 sections for brief, constraints, and design response. Pair the two project images with specific captions; reusing a master crop is acceptable when clearly intentional.
- Add native Work breadcrumb, previous/next project links in a stable sequence, and a Discuss a similar project link carrying an allowlisted project ID to contact.
- Write restrained fictional outcomes describing spatial changes, not unverifiable performance statistics. Use unique section IDs for each outline link.

**Acceptance criteria**

- [ ] All six known slugs render distinct finished content; an unknown slug returns a useful 404.
- [ ] Outline anchors work without hiding headings behind the header, and title/heading levels do not duplicate the page h1.
- [ ] Next/previous navigation never points outside the known set or back to the same project.
- [ ] Inquiry context matches the project record and cannot turn an arbitrary query value into a trusted project label.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## MIN-08 — Build the Studio page around practice and process

**Suggested issue title:** `[showcase][MIN-08] Build the Studio page around practice and process`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `MIN-02`, `MIN-03`, `MIN-04`

**Implementation surface:** apps/showcase/app/samples/minimal/studio/page.tsx.

**Work to deliver**

- Use About14 with the supplied founder/profile and worktable imagery. Introduce the practice, its philosophy, and the kinds of spaces it takes on.
- Follow with a four-stage working sequence and a short factual fictional team list using semantic HTML; link the architecture and interiors scopes.
- Make the distinction between process images and project images explicit in captions, avoiding fake awards or client-logo proof.

**Acceptance criteria**

- [ ] The page gives a concrete sense of how the practice works and what a client should expect at each stage.
- [ ] Every About14 text/image prop is supplied with West Room content; no default agency identity remains.
- [ ] The stage sequence and team descriptions remain readable in one column and in dark mode.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## MIN-09 — Build clear service scopes and practical questions

**Suggested issue title:** `[showcase][MIN-09] Build clear service scopes and practical questions`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `MIN-02`, `MIN-04`

**Implementation surface:** apps/showcase/app/samples/minimal/services/page.tsx.

**Work to deliver**

- Present Architecture and Interiors as aligned scope sections with audience, deliverables, exclusions, indicative stages, and client inputs. Use Button for inquiry links preselecting the chosen scope.
- Use Faq12 for process, scope, and practical questions with final authored answers. Align section anchors and mobile reading order with the shell.
- Do not force these services into Pricing28’s monthly/yearly billing interface. Describe inquiry-based scope rather than inventing subscription fees.

**Acceptance criteria**

- [ ] A reader can compare both scopes using the same headings and find what is not included.
- [ ] Each inquiry link arrives with the correct validated scope; FAQ categories and items remain keyboard operable.
- [ ] No paid checkout, fake availability, generic repeated plan card, or default billing toggle appears.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## MIN-10 — Build the local project-inquiry flow

**Suggested issue title:** `[showcase][MIN-10] Build the local project-inquiry flow`  
**Status:** Planned · **Priority:** P1 · **Size:** L · **Labels:** `showcase`, `pages`  
**Depends on:** `MIN-02`, `MIN-04`, `SH-06`

**Implementation surface:** apps/showcase/app/samples/minimal/contact/page.tsx and proposed local InquiryForm.tsx.

**Work to deliver**

- Compose labeled name, email, project type, location, short brief, and optional timing fields using JabKit atoms and native select where suitable. Validate only fields necessary to prepare the inquiry; keep the form modest.
- Accept project/service context from allowlisted query records, show it visibly, and allow the visitor to change it. Render an inline review with Edit and Reset controls.
- Use the action label Preview inquiry and a persistent note that nothing is sent. Keep data in memory, preserve values when editing, and avoid mailto/network submission.

**Acceptance criteria**

- [ ] Empty required values and invalid email produce associated inline errors and focus the first invalid field.
- [ ] A valid submission creates a readable review containing the actual selected project/scope and entered values.
- [ ] Edit preserves values; Reset clears context and form state according to a labeled action; page reload does not claim persistence.
- [ ] No external request, fake loading delay, or sent-message claim occurs.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## MIN-11 — Finish West Room Studio responsive behavior, motion, and edge states

**Suggested issue title:** `[showcase][MIN-11] Finish West Room Studio responsive behavior, motion, and edge states`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `quality`  
**Depends on:** `MIN-05`, `MIN-06`, `MIN-07`, `MIN-08`, `MIN-09`, `MIN-10`

**Implementation surface:** All proposed `apps/showcase/app/samples/minimal/` routes and local styles; this folder’s `motion.json`, `motion.md`, and `rules.md`.

**Work to deliver**

- Restrict motion to brief opacity/position settling and understated link feedback. Keep project crops stable on hover; no image chasing, scroll pinning, cursor replacement, or continuously moving captions.
- Map numeric timings/easings to motion.json. Prefer CSS transitions and small existing client utilities; JabKit does not currently depend on GSAP or Motion. Do not add a motion library for this roadmap’s effects.
- Complete keyboard, touch, zoom, no-hover, reduced-motion, deep-link, empty-result, invalid-form, and missing-image behavior. Content is readable before enhancement, and motion never determines whether a link or form is usable.
- Audit typography after real copy and assets land: line breaks, heading order, reading measure, caption contrast, image focal points, and section rhythm. Remove unnecessary effects that compete with the site’s content.

**Acceptance criteria**

- [ ] All routes pass the shared responsive/accessibility matrix, with specific failures fixed rather than hidden by overflow clipping.
- [ ] Reduced motion makes content immediately visible, eliminates nonessential movement, and preserves state feedback; no autoplay loop requires the visitor to chase content.
- [ ] Direct navigation, back/forward, repeated popup open/close, and route changes produce no console/hydration errors or stale state.
- [ ] The intended style remains evident on mobile and in dark mode; it does not rely on color alone or tiny low-contrast text.

**Verification and handoff:** Attach normal/reduced-motion recordings and before/after edge-state captures. Rebuild registry/preview assets only when library source actually changed, then run applicable checks.

## MIN-12 — Release the complete West Room Studio website in the sample catalogue

**Suggested issue title:** `[showcase][MIN-12] Release the complete West Room Studio website in the sample catalogue`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `release`  
**Depends on:** `SH-01`, `SH-07`, `MIN-11`

**Implementation surface:** Existing `apps/showcase/app/samples/catalog.ts`, `app/samples/page.tsx`, and `docs/showcase.md`; proposed capture/evidence and `apps/showcase/app/samples/minimal/` route files.

**Work to deliver**

- Execute the complete journey: Open Work, filter to Workspace, enter Reading Room, follow its related service, prepare a valid inquiry, inspect the local review, edit it, and return to the catalogue.
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

