# Pocket Keeps — Retro showcase roadmap

Status: **planned** · Ticket prefix: **RET** · Proposed root: `/samples/retro` · 12 tickets.

Read the [shared roadmap and mandatory handoff](../roadmap.md), then this folder’s [system](system.md), [rules](rules.md), [component guidance](components.json), [imagery direction](imagery.md), and [migration notes](migration.md). These are implementation tickets; none of the proposed routes or API extensions is claimed to exist yet.

## The website to build

A fictional creative utility for collecting small visual keepsakes and preparing image crops. Its website combines a tactile collection catalogue with a real browser-local crop/download demo; plans illustrate a product concept rather than an operational subscription.

The site feels like opening a well-kept box of sleeves, cards, and photographic scraps. Warm paper and modest hard shadows give objects presence; the interface remains clear and contemporary. Marketing can be playful, while the studio becomes a stable work surface with explicit controls and readable feedback.

**Completed visitor journey:** Find Weekend Postcards, choose an asset and 4:3 crop format, open the studio, crop/zoom and download it, replace it with a local upload, and compare plan concepts without starting a subscription.

## Sitemap and content ownership

All routes below are proposed and share the sample’s own header/footer. The shared demo bar identifies the fictional business and returns visitors to JabKit. Each detail record is a complete page, not a placeholder link.

| Route | Template | Required content |
| --- | --- | --- |
| `/samples/retro` | Home | Tactile product introduction, collection preview, real studio preview, plan invitation |
| `/samples/retro/collections` | Collection index | Three themed packs, searchable tags, clear routes |
| `/samples/retro/collections/[slug]` | Collection detail × 3 | Asset selection, format preview, provenance note, open in studio |
| `/samples/retro/how-it-works` | Product guide | Choose an image, crop, preview, download; actual UI captures |
| `/samples/retro/pricing` | Illustrative plans | Two recurring plan concepts and local plan-selection summary |
| `/samples/retro/studio` | Working local tool | JabKit ImageCropper, built-in asset or upload, crop/zoom/download, errors/reset |

Define three fictional collections: Desk Drawer, Weekend Postcards, and Night Bus. Each has a slug, theme, concise description, tags, and two generated asset records. Define two illustrative recurring tiers and a truthful capability matrix: crop/zoom/download works now in the demo; cloud sync, collaboration, and paid accounts are concept-only and must never appear as operational controls.

Use proposed `apps/showcase/app/samples/retro/content.ts` for fixtures, `assets.ts` for local image references, `layout.tsx` for brand chrome, and `_components/` for sample-only composition. Dynamic route data must come from the same canonical records as summaries. Actual folder organization can be simplified during implementation if ownership and routes remain clear.

## JabKit component plan

This is a source-aware integration plan, not a promise that a token swap restyles every internal element. The `-04` ticket owns the named gaps; page tickets own composition and content. Use real library imports in the finished website.

| Component | Source under `packages/ui/src/` | Role | Integration boundary |
| --- | --- | --- | --- |
| ImageCropper | `atoms/image-cropper` | Local studio | Use src, aspect, zoom bounds, downloadFileName, onCropChange, and onFileChange as actually supported. It does not provide AI cutout, collaboration, or cloud storage. |
| ProductQuickView4 | `marketing/product-quick-view4` | Collection asset/format picker | Use images and size options for crop format, explicit labels, and onAddToCart as a local navigation callback. RET-04 must remove misleading commerce defaults through supported values or narrow optional hooks. |
| Pricing28 | `marketing/pricing28` | Two plan concepts | Consume EDT-04’s layout/supporting-copy enhancement; controlled billing, explicit empty social proof, and honest demo summary. |
| Content1, Faq12 | `marketing/content1 + marketing/faq12` | Product instructions and questions | Use actual process explanations, supported blocks, and local browser captures instead of generated UI. |
| Button, Badge, Label, Input, NavigationMenu | `atoms` | Navigation, collection filters, studio controls | Paper-like styling stays outside image-editing pixels and readable form surfaces. |

## Required image series

**Generate the sample showcase’s new imagery with Higgsfield MCP.** The `-03` ticket owns execution and follows SH-04. Asset IDs below are proposed filenames/manifest keys, not existing outputs. Read [imagery.md](imagery.md) for the full prompt language and exclusions. Keep all generated outputs local under `/assets/design-systems/retro/`; never hotlink the inspiration sites.

| Asset IDs | Subject and continuity | Slots and aspect | Deliverable |
| --- | --- | --- | --- |
| RET-HERO | Coherent paper/photo-object arrangement without lettering | Home; 3:2 plus 4:5 mobile crop | 1 master + crop |
| RET-C01–03-A/B | Two usable artwork/photo assets per collection | Collection/detail and studio seeds; masters support 1:1, 4:3, 16:9 crops | 6 masters |
| RET-TEXTURE01–02 | Subtle paper grain and sleeve material | Decorative surfaces; small tileable or bounded texture | 2 masters |
| RET-UI-HOME/GUIDE | Real cropper and download-state captures | Home and How it works; responsive frame | Browser captures after RET-10, not AI-generated imagery |

**Series prompt direction:** Choose one coherent analog world: handled photographic prints, warm off-white paper, restrained faded ink, believable fiber and edge wear, directional tabletop light, and small off-register material details. Give each collection a recognizable subject while preserving the same palette and lens language. Avoid a mixture of vaporwave/neon/8-bit/Y2K motifs, fake operating-system controls, generated text, and heavy noise over functional content.

For each shot, expand that direction with the exact subject, composition, light/material, palette roles, camera/framing, negative space, target aspect, and exclusions. Generate one approved anchor image first; keep subsequent subjects and materials consistent. Deliver a reviewed mobile derivative for the leading image; if the master cannot produce a useful crop, generate a matching alternate through Higgsfield MCP. Use HTML/SVG for brand lettering and UI. Actual product or catalogue screenshots must be captured from the running website.

## Copy-ready prompts for future execution

These prompts are instructions to use later. Writing this roadmap does not authorize or perform implementation or image generation now. Replace the bracketed fields before handing a prompt to an agent; choose one ticket at a time.

**Implementation-ticket prompt**

```text
Implement [RET-NN: ticket title] from design-systems/retro/roadmap.md
for the fictional Pocket Keeps sample at /samples/retro.

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
RET-03; generation belongs to its separate Higgsfield MCP task.

Report changed files, completed criteria, verification evidence, and any
remaining blocker. Do not mark a ticket complete without its required evidence.
```

**Image-production prompt — anchor image**

```text
Use Higgsfield MCP to create the RET-HERO anchor image for Pocket Keeps.
First read design-systems/retro/imagery.md, the RET-03 shot list,
and the SH-04 production/provenance requirements. Discover the actual tools
and models available; if Higgsfield MCP is unavailable, report that blocker.

Scene: A small deliberate arrangement of photographic prints, paper sleeves, and keepsake objects on a warm off-white tabletop, believable paper fibers and slight edge wear, restrained faded-ink accents, directional tabletop light, a consistent analog material language. Use objects to suggest collecting small memories; keep the interface itself out of the image.

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

All tickets are required for the complete website. Shared dependencies refer to [the shared backlog](../roadmap.md); cross-style dependencies retain their stable IDs until GitHub issues exist. M/L are relative work sizes, not dates.

| ID | Suggested issue | Size | Depends on |
| --- | --- | --- | --- |
| RET-01 | Finalize Pocket Keeps content and route contracts | M | None |
| RET-02 | Build the Pocket Keeps visual foundation and site shell | M | SH-02, SH-03, RET-01 |
| RET-03 | Produce and integrate the Pocket Keeps image series with Higgsfield MCP | L | SH-04, RET-01 |
| RET-04 | Adapt collection preview and pricing blocks for honest local actions | L | RET-01, RET-02, EDT-04 |
| RET-05 | Build the tactile Pocket Keeps homepage | M | RET-02, RET-03, RET-04, RET-10 |
| RET-06 | Build the collection index with useful filtering | M | RET-02, RET-03, RET-04, SH-06 |
| RET-07 | Build three collection details and an asset-format picker | M | RET-02, RET-03, RET-04 |
| RET-08 | Build a product guide using the working tool | M | RET-02, RET-04, RET-10 |
| RET-09 | Build plan concepts with a truthful selection summary | M | RET-02, RET-04, SH-06 |
| RET-10 | Build the working browser-local image studio | L | RET-02, RET-03, RET-04, SH-06 |
| RET-11 | Finish Pocket Keeps responsive behavior, motion, and edge states | M | RET-05, RET-06, RET-07, RET-08, RET-09, RET-10 |
| RET-12 | Release the complete Pocket Keeps website in the sample catalogue | M | SH-01, SH-07, RET-11 |

## RET-01 — Finalize Pocket Keeps content and route contracts

**Suggested issue title:** `[showcase][RET-01] Finalize Pocket Keeps content and route contracts`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `content`  
**Depends on:** None

**Implementation surface:** Proposed `apps/showcase/app/samples/retro/content.ts` and `apps/showcase/app/samples/retro/types.ts`; current design direction in this folder’s `system.md`, `patterns.json`, and `imagery.md`.

**Work to deliver**

- A fictional creative utility for collecting small visual keepsakes and preparing image crops. Its website combines a tactile collection catalogue with a real browser-local crop/download demo; plans illustrate a product concept rather than an operational subscription.
- Turn the sitemap and content inventory below into typed fixture records. Write finished, specific copy, relationship IDs, descriptive alt drafts, and all CTA destinations before arranging sections. Use the same source record for listing cards, detail headers, breadcrumbs, and inquiry context.
- Define three fictional collections: Desk Drawer, Weekend Postcards, and Night Bus. Each has a slug, theme, concise description, tags, and two generated asset records. Define two illustrative recurring tiers and a truthful capability matrix: crop/zoom/download works now in the demo; cloud sync, collaboration, and paid accounts are concept-only and must never appear as operational controls.
- Keep every person, organization, product claim, and price explicitly part of the fictional demo. Avoid copied reference-site copy, invented real-world endorsements, placeholder paragraphs, or links to unbuilt destinations.

**Acceptance criteria**

- [ ] Every sitemap entry has a page owner and every listed detail fixture has a valid unique slug; unknown slugs have a specified 404 behavior.
- [ ] Copy establishes a clear audience, offering, and primary action; no remaining lorem ipsum, placeholder names, or default component mock copy is needed.
- [ ] A content/asset matrix maps each route section to record IDs and the planned Higgsfield image IDs; all internal links stay under the correct sample root unless explicitly returning to JabKit.
- [ ] The final copy fits narrow/mobile reading order without depending on a desktop-only visual arrangement.

**Verification and handoff:** Attach the content inventory and a route/link table to the issue. Content review can proceed before shared implementation blockers are closed.

## RET-02 — Build the Pocket Keeps visual foundation and site shell

**Suggested issue title:** `[showcase][RET-02] Build the Pocket Keeps visual foundation and site shell`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `theming`  
**Depends on:** `SH-02`, `SH-03`, `RET-01`

**Implementation surface:** Proposed `apps/showcase/app/samples/retro/layout.tsx`, `apps/showcase/app/samples/retro/style.module.css`, and `apps/showcase/app/samples/retro/_components/`; shared demo bar and scope from SH-02/SH-03.

**Work to deliver**

- Apply this folder’s complete tokens and typography through the agreed scoped implementation. Build a brand-specific header, current-page navigation, mobile menu, skip link, and footer using the mapped JabKit primitives. All sample pages share this shell; the demo bar remains visible.
- Use Retro’s display/body hierarchy, restrained corners, and small hard shadows. Make collection entries feel like sleeves or index cards with real captions. Keep the studio work area flat and stable, with no texture over images being cropped, no rotated inputs, and no fake desktop title-bar buttons. The compact nav may resemble tabs visually but uses correct link semantics.
- Implement active-route and mobile open/closed states using the actual NavigationMenu or Dialog primitive composition. Verify portal mounting instead of assuming a viewport wrapper forwards a container. Keep fonts and decorative styling within this site.
- Choose whether the header is static or sticky based on the content; reserve its space and offset in-page anchors. Native links must work without a JavaScript-only click handler.

**Acceptance criteria**

- [ ] The shell renders at 320/390/768/1440px in both modes without horizontal page overflow or a clipped wordmark.
- [ ] All nav and footer destinations in the agreed sitemap exist by release; current page is programmatically identifiable and keyboard focus is visible.
- [ ] The mobile menu opens/closes with pointer and keyboard, handles Escape, returns focus, and closes on navigation; theme and portal surfaces match.
- [ ] Visiting this site and then another sample leaves no brand font, token, menu, or scroll-lock residue.

**Verification and handoff:** Attach shell captures including mobile navigation open and long labels. If library primitives change, include the full library handoff; route-only wrappers are not registry components.

## RET-03 — Produce and integrate the Pocket Keeps image series with Higgsfield MCP

**Suggested issue title:** `[showcase][RET-03] Produce and integrate the Pocket Keeps image series with Higgsfield MCP`  
**Status:** Planned · **Priority:** P1 · **Size:** L · **Labels:** `showcase`, `imagery`  
**Depends on:** `SH-04`, `RET-01`

**Implementation surface:** Proposed `apps/showcase/public/assets/design-systems/retro/`, its public-safe provenance manifest, and `apps/showcase/app/samples/retro/assets.ts`; prompt direction in `imagery.md`.

**Work to deliver**

- **Use Higgsfield MCP for every newly generated image in this sample showcase.** Discover the available tools and models at execution time. If it is unavailable, block this ticket with a precise access dependency; do not substitute another generator.
- Produce every required slot in the shot list below. Begin with the hero/cover reference image, review it against the brand and its actual crop, then continue the matching series. Record revisions and the actual selected outputs in the provenance manifest.
- Prompt direction for this site: Choose one coherent analog world: handled photographic prints, warm off-white paper, restrained faded ink, believable fiber and edge wear, directional tabletop light, and small off-register material details. Give each collection a recognizable subject while preserving the same palette and lens language. Avoid a mixture of vaporwave/neon/8-bit/Y2K motifs, fake operating-system controls, generated text, and heavy noise over functional content.
- Optimize approved outputs, provide intrinsic sizes and useful responsive derivatives, and export local URLs from assets.ts. Keep actual interface text and product screenshots outside image generation. Supply complete alt/caption text or mark an image decorative deliberately.

**Acceptance criteria**

- [ ] Every shot-list ID has a local file, verified dimensions, intended slot/crop, final prompt, and actual Higgsfield MCP provenance; requested alternate crops are present.
- [ ] The series feels like one art-directed business: materials, light, palette, perspective, and recurring subjects stay consistent.
- [ ] No generated logos, gibberish text, implausible anatomy/architecture, watermarks, or third-party reference-site assets appear in the final set.
- [ ] Hero and content images meet shared delivery budgets or have a documented visual-quality exception; mobile crops keep the meaningful subject visible.

**Verification and handoff:** Attach a contact sheet and in-slot hero/detail previews plus provenance. The contact sheet is review evidence, not an examples directory or a substitute for the delivered assets.

## RET-04 — Adapt collection preview and pricing blocks for honest local actions

**Suggested issue title:** `[showcase][RET-04] Adapt collection preview and pricing blocks for honest local actions`  
**Status:** Planned · **Priority:** P1 · **Size:** L · **Labels:** `showcase`, `components`  
**Depends on:** `RET-01`, `RET-02`, `EDT-04`

**Implementation surface:** apps/showcase/app/samples/retro/_components/; existing ProductQuickView4, ImageCropper, and Pricing28 sources.

**Work to deliver**

- Use ProductQuickView4 as a local collection preview with explicit title/description/images and format options mapped to supported ImageCropper aspect values. Set action labels to Open in studio and route with known asset/format IDs through the existing callback; do not create a cart.
- Inspect empty price/compareAtPrice/colors behavior and remaining commerce copy. Add narrowly scoped, default-preserving visibility/label hooks only where existing props cannot remove misleading prices, color legends, or shopping language.
- Consume EDT-04’s two-column Pricing28 capability. Supply every plan/social-proof value explicitly and clear inherited security/payment text rather than inventing customer counts.
- Inspect ImageCropper upload errors, keyboard controls, download behavior, and src changes before integration. Record any missing error/controlled-source hook as a small library change with compatibility requirements.

**Acceptance criteria**

- [ ] Preview opening/closing, image navigation, format selection, and Open in studio work with keyboard and restore focus appropriately.
- [ ] No buy/cart/payment language or empty unexplained option group appears in the collection preview.
- [ ] Aspect/asset values are allowlisted and map to actual supported cropper values; the chosen image reaches the studio.
- [ ] Library changes preserve defaults, include required stories/ThemeComparison, and rebuild registry/previews.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## RET-05 — Build the tactile Pocket Keeps homepage

**Suggested issue title:** `[showcase][RET-05] Build the tactile Pocket Keeps homepage`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `RET-02`, `RET-03`, `RET-04`, `RET-10`

**Implementation surface:** apps/showcase/app/samples/retro/page.tsx.

**Work to deliver**

- Lead with a short product promise, RET-HERO objects, and Open studio / Browse collections actions. Explain the working local capability plainly before introducing broader fictional plan concepts.
- Follow with three collection links and a real capture of the implemented ImageCropper from RET-10, then a three-step flow and small plan invitation.
- Keep object arrangement decorative and separate from interactive UI; do not rasterize text or use a fake generated product screenshot.

**Acceptance criteria**

- [ ] The first screen makes it clear what the visitor can actually try now and offers a working studio route.
- [ ] All three collections resolve to distinct pages; the real studio capture matches current controls.
- [ ] Textures and rotations do not impair contrast, click targets, reading order, or mobile layout.
- [ ] Concept-only capabilities are clearly distinguished from the working local tool.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## RET-06 — Build the collection index with useful filtering

**Suggested issue title:** `[showcase][RET-06] Build the collection index with useful filtering`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `RET-02`, `RET-03`, `RET-04`, `SH-06`

**Implementation surface:** apps/showcase/app/samples/retro/collections/page.tsx and proposed CollectionControls.tsx.

**Work to deliver**

- Display Desk Drawer, Weekend Postcards, and Night Bus with descriptive artwork, concise theme, tags, and asset count derived from records.
- Use labeled Input search and Button tag filters with URL state. Provide a reset action and clear no-match view; avoid presenting three items as an endless marketplace.
- Keep all card captions as real text and ordinary links. Offer a direct Open studio route for visitors who want to use their own image.

**Acceptance criteria**

- [ ] Each collection appears once and its count equals available fixture assets.
- [ ] Search/tag combinations, direct URLs, and back/forward preserve correct results and focus.
- [ ] No fake ratings, download popularity, paid-license badges, or empty decorative buttons appear.
- [ ] The index works without hover effects or loaded decorative textures.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## RET-07 — Build three collection details and an asset-format picker

**Suggested issue title:** `[showcase][RET-07] Build three collection details and an asset-format picker`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `RET-02`, `RET-03`, `RET-04`

**Implementation surface:** apps/showcase/app/samples/retro/collections/[slug]/page.tsx and proposed CollectionPicker.tsx.

**Work to deliver**

- Render the collection story and its two distinct asset previews with practical notes about intended crops. Use ProductQuickView4 with explicit data to choose an asset and crop format.
- Pass an allowlisted asset ID and supported aspect to the studio. Display available output behavior honestly: this prepares a crop of a local image, not a generated design or cloud project.
- Include a plain provenance note for the generated demo artwork and only rights statements verified in SH-04; use source manifest data instead of invented licenses.

**Acceptance criteria**

- [ ] All three collections have two usable assets, correct labels, and complete detail routes; unknown slugs 404.
- [ ] Choosing an asset/format opens the studio with the expected image and crop ratio.
- [ ] Popup keyboard behavior, Escape, focus restoration, and theme scoping work in both modes.
- [ ] No UI promises background removal, multi-layer editing, or account saving that the cropper cannot perform.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## RET-08 — Build a product guide using the working tool

**Suggested issue title:** `[showcase][RET-08] Build a product guide using the working tool`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `RET-02`, `RET-04`, `RET-10`

**Implementation surface:** apps/showcase/app/samples/retro/how-it-works/page.tsx and real browser capture assets.

**Work to deliver**

- Use Content1 to explain the actual sequence: choose a collection image or upload, set aspect, pan/zoom, inspect the crop, and download.
- Capture the implemented RET-10 controls in useful states and annotate them with real HTML captions. Include keyboard instructions and local-file behavior.
- Use Faq12 for supported file formats/limits discovered in implementation, local-only processing, reload behavior, and the boundary between working demo and conceptual plans.

**Acceptance criteria**

- [ ] Every described control and step exists in the implemented studio; screenshots show the current UI.
- [ ] The guide links to a working seeded studio route and explains how to recover from a failed upload.
- [ ] No generated UI screenshot, unsupported file-format promise, or fabricated persistence claim appears.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## RET-09 — Build plan concepts with a truthful selection summary

**Suggested issue title:** `[showcase][RET-09] Build plan concepts with a truthful selection summary`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `RET-02`, `RET-04`, `SH-06`

**Implementation surface:** apps/showcase/app/samples/retro/pricing/page.tsx and proposed PlanPreview.tsx.

**Work to deliver**

- Use two explicit Pricing28 plans with controlled monthly/yearly display and EDT-04’s layout behavior. Keep totals, period labels, included capabilities, and concept-only features consistent.
- Route plan actions to a local summary of plan name, interval, illustrative price, and concept limitations. Provide Change plan and Open free demo actions instead of checkout or account creation.
- Remove default customers, security claims, and trust rows; use Faq12 to clarify that pricing and subscriptions are illustrative and no payment is collected.

**Acceptance criteria**

- [ ] Billing selection updates both cards and summary accurately; direct valid plan links work and invalid values fall back.
- [ ] Working crop/download capabilities and unimplemented cloud/account ideas are clearly distinguishable.
- [ ] No payment field, checkout flow, fake subscription success, or network request appears.
- [ ] The two plans have readable inclusion/exclusion rows and a balanced mobile/desktop layout.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## RET-10 — Build the working browser-local image studio

**Suggested issue title:** `[showcase][RET-10] Build the working browser-local image studio`  
**Status:** Planned · **Priority:** P1 · **Size:** L · **Labels:** `showcase`, `pages`  
**Depends on:** `RET-02`, `RET-03`, `RET-04`, `SH-06`

**Implementation surface:** apps/showcase/app/samples/retro/studio/page.tsx and proposed LocalStudio.tsx; existing ImageCropper source as necessary.

**Work to deliver**

- Integrate ImageCropper with a local seeded asset, supported aspect options, zoom bounds, meaningful filename, and visible source/crop state. Accept known asset/aspect query values; unknown values use a documented default.
- Support local file upload using the existing onFileChange path, with readable format/size/decode errors and a reset-to-sample action. Inspect current source handling before adding wrappers; do not introduce a second competing upload state.
- Verify pan/zoom keyboard access, portrait/landscape coverage, image replacement, and canvas export. If a necessary error or reset API is missing, extend the atom narrowly and ship required stories, registry, and previews.
- Keep uploads and processing in the browser; release object URLs and listeners on replacement/unmount. Do not upload private files to Higgsfield: it is required for producing the built-in showcase assets, not for this local editing interaction.

**Acceptance criteria**

- [ ] A user can load each built-in asset, set 1:1/4:3/16:9/free as supported, pan/zoom, and download a valid image with the expected crop and filename.
- [ ] A valid local upload works; unsupported/too-large/corrupt inputs show a recoverable error with the documented limit and preserve or restore a usable source.
- [ ] Changing query-selected image or resetting does not leave stale pixels, crop coordinates, or broken object URLs.
- [ ] Keyboard/touch controls are usable, exports contain no decorative page texture, and no file leaves the browser.
- [ ] Navigation away and back releases resources and returns to the documented default state without hydration/console errors.

**Verification and handoff:** Download and inspect at least one portrait and landscape crop, exercise upload replacement and error recovery, and record keyboard/touch evidence. Rebuild atom previews/registry only if the atom changed; then run the repository gate.

## RET-11 — Finish Pocket Keeps responsive behavior, motion, and edge states

**Suggested issue title:** `[showcase][RET-11] Finish Pocket Keeps responsive behavior, motion, and edge states`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `quality`  
**Depends on:** `RET-05`, `RET-06`, `RET-07`, `RET-08`, `RET-09`, `RET-10`

**Implementation surface:** All proposed `apps/showcase/app/samples/retro/` routes and local styles; this folder’s `motion.json`, `motion.md`, and `rules.md`.

**Work to deliver**

- Allow small button press offsets and a short collection-item settle. Keep image-cropper movement directly tied to user action; no wobbling canvas, looping stickers, sound autoplay, or spring effects on form controls. Do not alter exported image pixels with decorative site texture.
- Map numeric timings/easings to motion.json. Prefer CSS transitions and small existing client utilities; JabKit does not currently depend on GSAP or Motion. Do not add a motion library for this roadmap’s effects.
- Complete keyboard, touch, zoom, no-hover, reduced-motion, deep-link, empty-result, invalid-form, and missing-image behavior. Content is readable before enhancement, and motion never determines whether a link or form is usable.
- Audit typography after real copy and assets land: line breaks, heading order, reading measure, caption contrast, image focal points, and section rhythm. Remove unnecessary effects that compete with the site’s content.

**Acceptance criteria**

- [ ] All routes pass the shared responsive/accessibility matrix, with specific failures fixed rather than hidden by overflow clipping.
- [ ] Reduced motion makes content immediately visible, eliminates nonessential movement, and preserves state feedback; no autoplay loop requires the visitor to chase content.
- [ ] Direct navigation, back/forward, repeated popup open/close, and route changes produce no console/hydration errors or stale state.
- [ ] The intended style remains evident on mobile and in dark mode; it does not rely on color alone or tiny low-contrast text.

**Verification and handoff:** Attach normal/reduced-motion recordings and before/after edge-state captures. Rebuild registry/preview assets only when library source actually changed, then run applicable checks.

## RET-12 — Release the complete Pocket Keeps website in the sample catalogue

**Suggested issue title:** `[showcase][RET-12] Release the complete Pocket Keeps website in the sample catalogue`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `release`  
**Depends on:** `SH-01`, `SH-07`, `RET-11`

**Implementation surface:** Existing `apps/showcase/app/samples/catalog.ts`, `app/samples/page.tsx`, and `docs/showcase.md`; proposed capture/evidence and `apps/showcase/app/samples/retro/` route files.

**Work to deliver**

- Execute the complete journey: Find Weekend Postcards, choose an asset and 4:3 crop format, open the studio, crop/zoom and download it, replace it with a local upload, and compare plan concepts without starting a subscription.
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

