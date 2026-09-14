# Common Hours — Editorial showcase roadmap

Status: **shipped** ([#268](https://github.com/jose-codegourmet/jabkit/pull/268); EDT-03 imagery deferred to [#260](https://github.com/jose-codegourmet/jabkit/issues/260), [#206](https://github.com/jose-codegourmet/jabkit/issues/206) closed `not_planned`) · Ticket prefix: **EDT** · Root: `/samples/editorial` · 12 tickets.

Read the [shared roadmap and mandatory handoff](../roadmap.md), then this folder’s [system](system.md), [rules](rules.md), [component guidance](components.json), [imagery direction](imagery.md), and [migration notes](migration.md). Ticket text below is the original brief. The sample is shipped; EDT-03 imagery is the remaining exception.

## The website to build

A fictional independent journal about everyday places, shared rituals, and local creative life. The main task is discovering and reading a story; membership is a secondary, clearly simulated choice.

The homepage feels like a magazine cover opening into a contents page. One lead story, a strong standfirst, and a deliberate image create a point of view; smaller features create contrast. Article pages slow down into reading-width prose, captions, author context, and an ending that suggests what to read next.

**Completed visitor journey:** Filter the archive to Rituals, read a story, follow its contributor and another article, compare monthly/yearly membership, and preview a signup without sending data.

## Sitemap and content ownership

All routes below are proposed and share the sample’s own header/footer. The shared demo bar identifies the fictional business and returns visitors to JabKit. Each detail record is a complete page, not a placeholder link.

| Route | Template | Required content |
| --- | --- | --- |
| `/samples/editorial` | Home | Current issue cover, lead story, secondary stories, topics, membership invitation |
| `/samples/editorial/stories` | Story archive | Nine stories, topic filter, title/deck search, empty state |
| `/samples/editorial/stories/[slug]` | Longread × 9 | Byline, standfirst, body, figures, outline, related reading |
| `/samples/editorial/contributors/[slug]` | Contributor × 3 | Fictional biography and filtered bibliography |
| `/samples/editorial/about` | About the journal | Editorial point of view, issue structure, contributors, practical questions |
| `/samples/editorial/membership` | Membership | Two recurring tiers, billing selection, local signup preview |

Write nine complete articles across Places, People, and Rituals, with three fictional contributors and one current issue. Each article needs a slug, title, standfirst, topic, author ID, fixed publication date, lead asset, ordered Content4 blocks, and related article IDs. Write three lead longreads of 800–1,100 words and six shorter pieces of 400–650 words; do not pad with repeated filler. Define two illustrative membership tiers with consistent monthly/yearly values.

Use proposed `apps/showcase/app/samples/editorial/content.ts` for fixtures, `assets.ts` for local image references, `layout.tsx` for brand chrome, and `_components/` for sample-only composition. Dynamic route data must come from the same canonical records as summaries. Actual folder organization can be simplified during implementation if ownership and routes remain clear.

## JabKit component plan

This is a source-aware integration plan, not a promise that a token swap restyles every internal element. The `-04` ticket owns the named gaps; page tickets own composition and content. Use real library imports in the finished website.

| Component | Source under `packages/ui/src/` | Role | Integration boundary |
| --- | --- | --- | --- |
| Content4 | `marketing/content4` | Article template | Supported blocks are paragraph, heading, and image. Do not pass invented quote/table blocks; compose additional byline links outside if necessary. |
| Content1 | `marketing/content1` | Journal principles | Structured outline sections for the About page; useful for lists/callouts beyond Content4’s union. |
| Pricing28 | `marketing/pricing28` | Two-tier membership | Pass controlled interval and explicit plans. Current desktop grid is fixed to four columns; adapt reusable column behavior in EDT-04. |
| Faq12 | `marketing/faq12` | Membership questions | Explain the fictional offer, billing display, and local preview limitations. |
| Avatar, Badge, Button, Input, Label, NavigationMenu | `atoms` | Bylines, topics, navigation, search, signup | Use text metadata and linked author names; never rely on an avatar as the only author label. |

## Required image series

**Generate the sample showcase’s new imagery with Higgsfield MCP.** The `-03` ticket owns execution and follows SH-04. Asset IDs below are proposed filenames/manifest keys, not existing outputs. Read [imagery.md](imagery.md) for the full prompt language and exclusions. Keep all generated outputs local under `/assets/design-systems/editorial/`; never hotlink the inspiration sites.

| Asset IDs | Subject and continuity | Slots and aspect | Deliverable |
| --- | --- | --- | --- |
| EDT-ST01–09 | One story-led lead image per article | Home/archive/articles; 3:2 with 4:5 mobile crop for current lead | 9 masters + lead crop |
| EDT-DETAIL01–03 | A contextual second frame for each lead longread | Longread body; mixed 4:3 / 4:5 | 3 masters |
| EDT-AUTHOR01–03 | Consistent contextual portraits of fictional contributors | Bylines/profiles; 1:1 | 3 masters |

**Series prompt direction:** A documentary-inspired but explicitly fictional photographic sequence: human-scale framing, available light, contextual details, gentle tonal variation, and a reason for each photograph. Match each image to the article brief instead of prompting generic lifestyle scenes. Keep captions honest about AI-created demo illustrations; do not imply documentary evidence of real events. Avoid commercial handshakes, stock-photo smiles, vague travel glamour, generated newspaper text, and recognizable real people.

For each shot, expand that direction with the exact subject, composition, light/material, palette roles, camera/framing, negative space, target aspect, and exclusions. Generate one approved anchor image first; keep subsequent subjects and materials consistent. Deliver a reviewed mobile derivative for the leading image; if the master cannot produce a useful crop, generate a matching alternate through Higgsfield MCP. Use HTML/SVG for brand lettering and UI. Actual product or catalogue screenshots must be captured from the running website.

## Copy-ready prompts for future execution

These prompts are instructions to use later. Writing this roadmap does not authorize or perform implementation or image generation now. Replace the bracketed fields before handing a prompt to an agent; choose one ticket at a time.

**Implementation-ticket prompt**

```text
Implement [EDT-NN: ticket title] from design-systems/editorial/roadmap.md
for the fictional Common Hours sample at /samples/editorial.

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
EDT-03; generation belongs to its separate Higgsfield MCP task.

Report changed files, completed criteria, verification evidence, and any
remaining blocker. Do not mark a ticket complete without its required evidence.
```

**Image-production prompt — anchor image**

```text
Use Higgsfield MCP to create the EDT-ST01 anchor image for Common Hours.
First read design-systems/editorial/imagery.md, the EDT-03 shot list,
and the SH-04 production/provenance requirements. Discover the actual tools
and models available; if Higgsfield MCP is unavailable, report that blocker.

Scene: A fictional neighborhood reading room shortly before opening, shelves and chairs arranged by actual use, a small everyday detail in the foreground, human-scale documentary-inspired framing, soft available light, gentle tonal variation, and a sense of an ordinary story about to begin. This is an illustration for fictional editorial content, not evidence of a real place or event.

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

All tickets are required for the complete website. Shared dependencies refer to [the shared backlog](../roadmap.md). **EDT-03** Higgsfield imagery is deferred to [#260](https://github.com/jose-codegourmet/jabkit/issues/260); GitHub [#206](https://github.com/jose-codegourmet/jabkit/issues/206) is closed `not_planned`. Remaining EDT tickets shipped in [#268](https://github.com/jose-codegourmet/jabkit/pull/268).

| ID | Suggested issue | Size | Depends on |
| --- | --- | --- | --- |
| EDT-01 | Finalize Common Hours content and route contracts | M | None |
| EDT-02 | Build the Common Hours visual foundation and site shell | M | SH-02, SH-03, EDT-01 |
| EDT-03 | Produce and integrate the Common Hours image series with Higgsfield MCP | L | SH-04, EDT-01 |
| EDT-04 | Adapt reading blocks and support a two-tier pricing layout | L | EDT-01, EDT-02 |
| EDT-05 | Build a magazine-cover homepage with a clear reading path | M | EDT-02, EDT-03, EDT-04 |
| EDT-06 | Build the searchable topic archive | M | EDT-02, EDT-03, EDT-04, SH-06 |
| EDT-07 | Build nine complete longreads with bylines and related reading | M | EDT-02, EDT-03, EDT-04 |
| EDT-08 | Build the journal’s About page and publication context | M | EDT-02, EDT-04 |
| EDT-09 | Build membership comparison and a local signup preview | M | EDT-02, EDT-04, SH-06 |
| EDT-10 | Build contributor profiles and their article collections | L | EDT-02, EDT-03, EDT-04 |
| EDT-11 | Finish Common Hours responsive behavior, motion, and edge states | M | EDT-05, EDT-06, EDT-07, EDT-08, EDT-09, EDT-10 |
| EDT-12 | Release the complete Common Hours website in the sample catalogue | M | SH-01, SH-07, EDT-11 |

## EDT-01 — Finalize Common Hours content and route contracts

**Suggested issue title:** `[showcase][EDT-01] Finalize Common Hours content and route contracts`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `content`  
**Depends on:** None

**Implementation surface:** Proposed `apps/showcase/app/samples/editorial/content.ts` and `apps/showcase/app/samples/editorial/types.ts`; current design direction in this folder’s `system.md`, `patterns.json`, and `imagery.md`.

**Work to deliver**

- A fictional independent journal about everyday places, shared rituals, and local creative life. The main task is discovering and reading a story; membership is a secondary, clearly simulated choice.
- Turn the sitemap and content inventory below into typed fixture records. Write finished, specific copy, relationship IDs, descriptive alt drafts, and all CTA destinations before arranging sections. Use the same source record for listing cards, detail headers, breadcrumbs, and inquiry context.
- Write nine complete articles across Places, People, and Rituals, with three fictional contributors and one current issue. Each article needs a slug, title, standfirst, topic, author ID, fixed publication date, lead asset, ordered Content4 blocks, and related article IDs. Write three lead longreads of 800–1,100 words and six shorter pieces of 400–650 words; do not pad with repeated filler. Define two illustrative membership tiers with consistent monthly/yearly values.
- Keep every person, organization, product claim, and price explicitly part of the fictional demo. Avoid copied reference-site copy, invented real-world endorsements, placeholder paragraphs, or links to unbuilt destinations.

**Acceptance criteria**

- [ ] Every sitemap entry has a page owner and every listed detail fixture has a valid unique slug; unknown slugs have a specified 404 behavior.
- [ ] Copy establishes a clear audience, offering, and primary action; no remaining lorem ipsum, placeholder names, or default component mock copy is needed.
- [ ] A content/asset matrix maps each route section to record IDs and the planned Higgsfield image IDs; all internal links stay under the correct sample root unless explicitly returning to JabKit.
- [ ] The final copy fits narrow/mobile reading order without depending on a desktop-only visual arrangement.

**Verification and handoff:** Attach the content inventory and a route/link table to the issue. Content review can proceed before shared implementation blockers are closed.

## EDT-02 — Build the Common Hours visual foundation and site shell

**Suggested issue title:** `[showcase][EDT-02] Build the Common Hours visual foundation and site shell`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `theming`  
**Depends on:** `SH-02`, `SH-03`, `EDT-01`

**Implementation surface:** Proposed `apps/showcase/app/samples/editorial/layout.tsx`, `apps/showcase/app/samples/editorial/style.module.css`, and `apps/showcase/app/samples/editorial/_components/`; shared demo bar and scope from SH-02/SH-03.

**Work to deliver**

- Apply this folder’s complete tokens and typography through the agreed scoped implementation. Build a brand-specific header, current-page navigation, mobile menu, skip link, and footer using the mapped JabKit primitives. All sample pages share this shell; the demo bar remains visible.
- Use the Editorial display/body contrast from typography.json, with a restrained masthead and plain section navigation. Give article body text a comfortable reading measure, keep metadata above the relevant story, and use thin rules to organize related content. Buttons should support reading, not compete with it. The footer is a small publication colophon with useful routes.
- Implement active-route and mobile open/closed states using the actual NavigationMenu or Dialog primitive composition. Verify portal mounting instead of assuming a viewport wrapper forwards a container. Keep fonts and decorative styling within this site.
- Choose whether the header is static or sticky based on the content; reserve its space and offset in-page anchors. Native links must work without a JavaScript-only click handler.

**Acceptance criteria**

- [ ] The shell renders at 320/390/768/1440px in both modes without horizontal page overflow or a clipped wordmark.
- [ ] All nav and footer destinations in the agreed sitemap exist by release; current page is programmatically identifiable and keyboard focus is visible.
- [ ] The mobile menu opens/closes with pointer and keyboard, handles Escape, returns focus, and closes on navigation; theme and portal surfaces match.
- [ ] Visiting this site and then another sample leaves no brand font, token, menu, or scroll-lock residue.

**Verification and handoff:** Attach shell captures including mobile navigation open and long labels. If library primitives change, include the full library handoff; route-only wrappers are not registry components.

## EDT-03 — Produce and integrate the Common Hours image series with Higgsfield MCP

**Suggested issue title:** `[showcase][EDT-03] Produce and integrate the Common Hours image series with Higgsfield MCP`  
**Status:** Planned · **Priority:** P1 · **Size:** L · **Labels:** `showcase`, `imagery`  
**Depends on:** `SH-04`, `EDT-01`

**Implementation surface:** Proposed `apps/showcase/public/assets/design-systems/editorial/`, its public-safe provenance manifest, and `apps/showcase/app/samples/editorial/assets.ts`; prompt direction in `imagery.md`.

**Work to deliver**

- **Use Higgsfield MCP for every newly generated image in this sample showcase.** Discover the available tools and models at execution time. If it is unavailable, block this ticket with a precise access dependency; do not substitute another generator.
- Produce every required slot in the shot list below. Begin with the hero/cover reference image, review it against the brand and its actual crop, then continue the matching series. Record revisions and the actual selected outputs in the provenance manifest.
- Prompt direction for this site: A documentary-inspired but explicitly fictional photographic sequence: human-scale framing, available light, contextual details, gentle tonal variation, and a reason for each photograph. Match each image to the article brief instead of prompting generic lifestyle scenes. Keep captions honest about AI-created demo illustrations; do not imply documentary evidence of real events. Avoid commercial handshakes, stock-photo smiles, vague travel glamour, generated newspaper text, and recognizable real people.
- Optimize approved outputs, provide intrinsic sizes and useful responsive derivatives, and export local URLs from assets.ts. Keep actual interface text and product screenshots outside image generation. Supply complete alt/caption text or mark an image decorative deliberately.

**Acceptance criteria**

- [ ] Every shot-list ID has a local file, verified dimensions, intended slot/crop, final prompt, and actual Higgsfield MCP provenance; requested alternate crops are present.
- [ ] The series feels like one art-directed business: materials, light, palette, perspective, and recurring subjects stay consistent.
- [ ] No generated logos, gibberish text, implausible anatomy/architecture, watermarks, or third-party reference-site assets appear in the final set.
- [ ] Hero and content images meet shared delivery budgets or have a documented visual-quality exception; mobile crops keep the meaningful subject visible.

**Verification and handoff:** Attach a contact sheet and in-slot hero/detail previews plus provenance. The contact sheet is review evidence, not an examples directory or a substitute for the delivered assets.

## EDT-04 — Adapt reading blocks and support a two-tier pricing layout

**Suggested issue title:** `[showcase][EDT-04] Adapt reading blocks and support a two-tier pricing layout`  
**Status:** Planned · **Priority:** P1 · **Size:** L · **Labels:** `showcase`, `components`  
**Depends on:** `EDT-01`, `EDT-02`

**Implementation surface:** apps/showcase/app/samples/editorial/_components/; existing Content4, Content1, Pricing28, and Faq12 sources.

**Work to deliver**

- Create typed adapters for article blocks, authors, related links, and plan data. Content4 only accepts paragraph/heading/image blocks; quote-style material can be ordinary authored paragraphs or a separately composed semantic section, not an untyped prop.
- Inspect Content4’s title/byline and outline output to avoid a duplicate h1 and ensure author-profile links are reachable. Add a minimal optional author destination only if outside composition cannot preserve the intended semantics.
- Add a backwards-compatible Pricing28 column-layout capability for one through four supplied plans, keeping existing defaults and responsive behavior. Own that shared enhancement here; RET-04 consumes it rather than implementing a second API.
- Suppress inherited pricing social-proof content explicitly with supported empty values (people=[], extraCount=0, trustItems=[]), and inspect residual secure/trust copy. Add an optional visibility hook if omission cannot be expressed truthfully; document default-preserving behavior.

**Acceptance criteria**

- [ ] Article and pricing adapters compile against actual component types, with no arbitrary content-block escape hatch.
- [ ] Two plans occupy a deliberate balanced grid instead of two cells in a four-column layout; one/three/four-plan cases remain usable.
- [ ] Membership renders no fake customer counts, borrowed avatars, or claims about secure payments when no payments exist.
- [ ] Updated public props have required stories/ThemeComparison, rebuilt registry/previews, and no breakage to existing default stories.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## EDT-05 — Build a magazine-cover homepage with a clear reading path

**Suggested issue title:** `[showcase][EDT-05] Build a magazine-cover homepage with a clear reading path`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `EDT-02`, `EDT-03`, `EDT-04`

**Implementation surface:** apps/showcase/app/samples/editorial/page.tsx.

**Work to deliver**

- Build a masthead-adjacent issue label, one lead story with standfirst and image, and two secondary stories with intentionally different prominence. Keep title, byline, date, and topic as real text.
- Continue with a compact topic-index section, three more story links, a contributor note, and a small membership invitation. Do not force every story into the same box or introduce a generic SaaS hero.
- Use semantic articles/figures and actual JabKit Badge, Avatar, and Button where they serve topic, author, and action roles.

**Acceptance criteria**

- [ ] The lead story is unmistakable and readable at 390px; secondary hierarchy survives the desktop-to-mobile reorder.
- [ ] Every story and contributor link resolves to its canonical record, with no duplicated article appearing accidentally.
- [ ] Issue metadata and publication dates are consistent and explicitly part of the fictional journal.
- [ ] Photography enhances the subject; navigation and titles are never rasterized into the cover.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## EDT-06 — Build the searchable topic archive

**Suggested issue title:** `[showcase][EDT-06] Build the searchable topic archive`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `EDT-02`, `EDT-03`, `EDT-04`, `SH-06`

**Implementation surface:** apps/showcase/app/samples/editorial/stories/page.tsx and proposed ArchiveControls.tsx.

**Work to deliver**

- Render the nine stories with title, standfirst, author, date, topic, and a meaningful thumbnail. Use a reading-oriented list/grid that preserves title prominence over decorative badges.
- Provide topic buttons plus a labeled title/standfirst search field. Keep topic and query in URL state, allow direct links from the homepage, and show count and clear/reset controls.
- Handle no matches with a useful suggestion and reset action; allow long titles and absent optional imagery without breaking the list.

**Acceptance criteria**

- [ ] All nine stories appear once in the unfiltered archive and belong to the correct topic and author.
- [ ] Combined search/topic filters, reload, and back/forward reproduce the same visible result set.
- [ ] Updating results preserves typing focus and announces the result count politely.
- [ ] Story links have meaningful accessible names and complete article destinations.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## EDT-07 — Build nine complete longreads with bylines and related reading

**Suggested issue title:** `[showcase][EDT-07] Build nine complete longreads with bylines and related reading`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `EDT-02`, `EDT-03`, `EDT-04`

**Implementation surface:** apps/showcase/app/samples/editorial/stories/[slug]/page.tsx.

**Work to deliver**

- Render finished Content4 blocks with stable unique IDs, actual reading order, byline/date context, captioned figures, and outline navigation. Calculate reading time from the final text rather than an arbitrary marketing number.
- Add a linked author profile and a two-story related-reading section below the body. Keep readable lines, comfortable paragraph spacing, and deliberate image breaks.
- Use accurate captions for fictional AI imagery and avoid invented documentary attribution. Provide per-story metadata and explicit unknown-slug handling.

**Acceptance criteria**

- [ ] All nine articles meet the content inventory length/quality brief and contain distinct coherent prose, not repeated demo filler.
- [ ] Each outline link reaches the intended heading; a single meaningful h1 and ordered section headings are preserved.
- [ ] Body text is readable at 200% zoom, reduced motion, and dark mode; captions and bylines retain contrast.
- [ ] Author and related-story routes work, exclude the current article, and have correct metadata.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## EDT-08 — Build the journal’s About page and publication context

**Suggested issue title:** `[showcase][EDT-08] Build the journal’s About page and publication context`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `EDT-02`, `EDT-04`

**Implementation surface:** apps/showcase/app/samples/editorial/about/page.tsx.

**Work to deliver**

- Use Content1 to explain the journal’s point of view, topic boundaries, issue cadence within the fictional concept, and how readers navigate it.
- Include a plain contributor directory linking the three profile pages and a clear note that this publication, articles, and people are fictional demo content.
- Link to story topics and membership with direct descriptions; do not fabricate submission inboxes, legal claims, or real-world partnerships.

**Acceptance criteria**

- [ ] The page communicates a recognizable editorial perspective and practical reading routes.
- [ ] Content1 outline/list/callout data remains within supported APIs and uses unique IDs.
- [ ] Every contributor/topic link resolves and the demo attribution is discoverable without dominating the editorial layout.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## EDT-09 — Build membership comparison and a local signup preview

**Suggested issue title:** `[showcase][EDT-09] Build membership comparison and a local signup preview`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `pages`  
**Depends on:** `EDT-02`, `EDT-04`, `SH-06`

**Implementation surface:** apps/showcase/app/samples/editorial/membership/page.tsx and proposed MembershipPreview.tsx.

**Work to deliver**

- Use Pricing28 with two complete illustrative tiers, controlled monthly/yearly state, explicit prices/period labels, and the layout enhancement from EDT-04. Make plan actions select a validated plan and move to an on-page labeled email/name form.
- Explain recurring period, included reading benefits, and fictional limitations beside the comparison; avoid undisclosed annual totals or fake percentage savings. Use Faq12 for common questions.
- Preview the chosen plan, billing interval, displayed amount, and entered contact values locally. The visitor can edit the selection; no payment details, subscription request, or mailing-list call occurs.

**Acceptance criteria**

- [ ] Changing billing period updates both plan cards and the preview consistently with the fixture amounts.
- [ ] Plan selection works from direct allowlisted query links and keyboard actions; invalid plan/interval values fall back clearly.
- [ ] Email validation and review/edit/reset work without losing unrelated values or showing sent/subscribed claims.
- [ ] No default customer avatars, security/payment assurances, or irrelevant trust labels leak from Pricing28.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## EDT-10 — Build contributor profiles and their article collections

**Suggested issue title:** `[showcase][EDT-10] Build contributor profiles and their article collections`  
**Status:** Planned · **Priority:** P1 · **Size:** L · **Labels:** `showcase`, `pages`  
**Depends on:** `EDT-02`, `EDT-03`, `EDT-04`

**Implementation surface:** apps/showcase/app/samples/editorial/contributors/[slug]/page.tsx.

**Work to deliver**

- Render three fictional contributor profiles with contextual portrait, name, role, short biography, and bibliography derived from the same article author IDs used everywhere else.
- Give the bibliography story titles, dates, topics, and links; use an Avatar only as supporting imagery, never the sole accessible profile identifier.
- Include a route back to the journal and a relevant topic link. Set per-profile metadata and return 404 for unknown contributor slugs.

**Acceptance criteria**

- [ ] Every byline in the nine-story corpus resolves to the correct profile and bibliography.
- [ ] Changing an article author in content updates profile membership through the shared data relationship, not duplicated arrays.
- [ ] All three profiles look complete, have honest fictional identities, and remain readable without images.
- [ ] No external social/email destinations are invented for the fictional contributors.

**Verification and handoff:** Review the specified route directly and through site navigation in both themes. Attach desktop/mobile screenshots and the relevant interaction states; apply the shared page handoff checklist.

## EDT-11 — Finish Common Hours responsive behavior, motion, and edge states

**Suggested issue title:** `[showcase][EDT-11] Finish Common Hours responsive behavior, motion, and edge states`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `quality`  
**Depends on:** `EDT-05`, `EDT-06`, `EDT-07`, `EDT-08`, `EDT-09`, `EDT-10`

**Implementation surface:** All proposed `apps/showcase/app/samples/editorial/` routes and local styles; this folder’s `motion.json`, `motion.md`, and `rules.md`.

**Work to deliver**

- Keep text and body images stable while reading. Allow a subtle cover entrance and restrained link feedback; outline navigation is native and respects reduced-motion scrolling. No scroll-scrubbed prose, pinned narrative, word-by-word reveals, or auto-advancing cover.
- Map numeric timings/easings to motion.json. Prefer CSS transitions and small existing client utilities; JabKit does not currently depend on GSAP or Motion. Do not add a motion library for this roadmap’s effects.
- Complete keyboard, touch, zoom, no-hover, reduced-motion, deep-link, empty-result, invalid-form, and missing-image behavior. Content is readable before enhancement, and motion never determines whether a link or form is usable.
- Audit typography after real copy and assets land: line breaks, heading order, reading measure, caption contrast, image focal points, and section rhythm. Remove unnecessary effects that compete with the site’s content.

**Acceptance criteria**

- [ ] All routes pass the shared responsive/accessibility matrix, with specific failures fixed rather than hidden by overflow clipping.
- [ ] Reduced motion makes content immediately visible, eliminates nonessential movement, and preserves state feedback; no autoplay loop requires the visitor to chase content.
- [ ] Direct navigation, back/forward, repeated popup open/close, and route changes produce no console/hydration errors or stale state.
- [ ] The intended style remains evident on mobile and in dark mode; it does not rely on color alone or tiny low-contrast text.

**Verification and handoff:** Attach normal/reduced-motion recordings and before/after edge-state captures. Rebuild registry/preview assets only when library source actually changed, then run applicable checks.

## EDT-12 — Release the complete Common Hours website in the sample catalogue

**Suggested issue title:** `[showcase][EDT-12] Release the complete Common Hours website in the sample catalogue`  
**Status:** Planned · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `release`  
**Depends on:** `SH-01`, `SH-07`, `EDT-11`

**Implementation surface:** Existing `apps/showcase/app/samples/catalog.ts`, `app/samples/page.tsx`, and `docs/showcase.md`; proposed capture/evidence and `apps/showcase/app/samples/editorial/` route files.

**Work to deliver**

- Execute the complete journey: Filter the archive to Rituals, read a story, follow its contributor and another article, compare monthly/yearly membership, and preview a signup without sending data.
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

