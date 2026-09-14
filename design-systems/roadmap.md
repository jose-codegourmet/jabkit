# Five complete design-system showcase websites

Status: **shipped** (Higgsfield photography still open on [#260](https://github.com/jose-codegourmet/jabkit/issues/260); MIN-03–RET-03 [#204](https://github.com/jose-codegourmet/jabkit/issues/204)–[#208](https://github.com/jose-codegourmet/jabkit/issues/208) closed `not_planned`) · Authored: **2026-09-14** · Closeout: SH-08 / [#254](https://github.com/jose-codegourmet/jabkit/issues/254).

The five sample websites live in `apps/showcase` beside the existing SaaS sample. Each has six page templates, secondary routes, fixture content, a brand-specific shell, both themes, a local demo task, and a `ready` catalogue entry. Higgsfield series production is Jose-owned; sites currently use SH-04 empty provenance plus local vendor stubs.

## Website briefs and roadmaps

| Design system | Fictional business | Primary journey | Roadmap | Release |
| --- | --- | --- | --- | --- |
| Minimal | West Room Studio — architecture/interiors | Work → case detail → service → inquiry preview | [12 tickets](minimal/roadmap.md) | [#266](https://github.com/jose-codegourmet/jabkit/pull/266) |
| Neo-brutalism | Good Noise — independent branding studio | Work → engagement → project brief preview | [12 tickets](neo-brutalism/roadmap.md) | [#267](https://github.com/jose-codegourmet/jabkit/pull/267) |
| Editorial | Common Hours — independent journal | Topic → longread → contributor → membership preview | [12 tickets](editorial/roadmap.md) | [#268](https://github.com/jose-codegourmet/jabkit/pull/268) |
| Luxury | Stillwater House — boutique guest house | Rooms → detail → dates → stay-inquiry preview | [12 tickets](luxury/roadmap.md) | [#269](https://github.com/jose-codegourmet/jabkit/pull/269) |
| Retro | Pocket Keeps — creative image utility | Collection → format → working crop/download studio | [12 tickets](retro/roadmap.md) | [#270](https://github.com/jose-codegourmet/jabkit/pull/270) |

## How to turn this backlog into GitHub issues

Each numbered heading is one proposed issue, with a stable ID, suggested issue title, dependencies, implementation surface, work, acceptance criteria, and verification/handoff. Copy that whole section plus links to the system brief and the shared handoff below. Replace dependency IDs with real issue links when issues exist; keep the stable IDs in titles for cross-reference. Do not invent issue numbers or interpret planned status as shipped behavior.

Suggested labels are descriptive, not claims that these labels already exist in GitHub. P0 means shared enabling/blocking work; P1 means work required for the complete site. M suggests a focused implementation/review slice; L suggests several coordinated changes or external asset review. These are relative sizes, not delivery dates. For an L issue that needs subdivision, make its work bullets child issues and retain its acceptance criteria as the parent completion gate. No acceptance criterion becomes optional because the ticket is split.

The `-03` image tickets can be split into access/art-direction approval, image-series production, and asset integration/provenance. The `-04` adaptation tickets can be split by public component API. A detail-page ticket can separate template behavior from content population, but both must be finished for release. A `-10` local interaction can separate validation/state logic from visual integration. Dependencies attach to the parent until all necessary children close.

## Prompt for the ticket-writing agent

```text
Turn design-systems/roadmap.md and the five linked per-system roadmaps into
detailed, implementation-ready ticket bodies. This is a planning/documentation
task: do not implement application code, generate images, or deploy anything.

Preserve the five fictional businesses, complete sitemaps, actual JabKit
component mappings, shared dependencies, image shot lists, and acceptance
criteria. Every newly generated sample image must use Higgsfield MCP during
future implementation. Browser screenshots must show the real finished UI.

Use each stable ticket ID and suggested title. Include the problem/outcome,
scope, exact existing/proposed paths, dependencies, component/API constraints,
content and image requirements, responsive/theme/accessibility states,
acceptance checklist, verification evidence, and exclusions. Link back to the
relevant roadmap and shared handoff. Split large tickets only where the child
work has a clear independent deliverable; retain parent completion criteria.

Resolve dependencies using the stable IDs first. Do not invent GitHub issue
numbers, pretend proposed APIs exist, discard difficult criteria, add example
JSON files, or turn local demo actions into real backend/payment features.
Return the ticket bodies and dependency map for review. Publish them to GitHub
only if separately instructed to do so.
```

## Grounding in the current repository

Read [showcase ownership and routes](../docs/showcase.md), [theming](../docs/theming.md), [component conventions](../docs/adding-a-component.md), and [preview/asset handling](../docs/previews.md). Source code wins if an API changes after this roadmap’s review date.

- Catalogue: [catalog.ts](../apps/showcase/app/samples/catalog.ts). Ready samples are SaaS plus all five design-system sites. Route inventory is in [docs/showcase.md](../docs/showcase.md).
- `@/*` in showcase resolves to `packages/ui/src/*`, not app-local code. Import library components directly and use relative imports for showcase composition. There is no UI root barrel and no new design-system component category.
- [layout.tsx](../apps/showcase/app/layout.tsx) owns ThemeProvider and Geist font variables. Sample-specific typography, tokens, and portals use `SampleScope`; the design-system JSON files are not executable themes.
- SH-05 destinations, EDT-04 Pricing28 columns, LUX-04 rate units, and ImageCropper local crop/download shipped with the shared and site PRs. ImageCropper is still not an AI editing backend.
- Marketing and dashboard blocks may be composed by a showcase page, but library dependency boundaries remain unchanged.

Stage F (SH-08) is the documentation and catalogue closeout. Browser/visual QA and Higgsfield series remain Deferred (#260).

## Scope and handoff common to every ticket

Paths marked proposed are intended implementation locations, not files already created. A site’s route layout, fixtures, forms, and assembly belong in `apps/showcase/app/samples/<system>/`. Reusable library changes belong in the existing component folder. A new general-purpose component needs the full registry contract; a sample-only wrapper does not become a registry item. Do not add an `examples/` directory or per-component example JSON files to these documentation packs.

Every page handoff includes:

- Finished, coherent content from the site’s canonical fixture records; explicit props replace unrelated default mocks.
- One meaningful h1, ordered headings, landmarks, descriptive native links, unique anchors, keyboard access, visible focus, and sensible image alternatives/captions.
- Layout at 320/390/768/1440px, both themes, 200% zoom, reduced motion, no hover dependency, and images with reserved space and readable fallbacks.
- Working direct links, back/forward, query validation, empty/error states where relevant, and useful 404 handling for unknown details.
- No fake live business, payment, reservation, email, account, collaboration, or persistence claim. These are fictional samples with browser-local demo actions, except the real local file download in Pocket Keeps.
- A short component-usage inventory in implementation/PR notes: route → imported JabKit components → local adapter → public API changes. It must reflect real imports rather than listing desired components as implemented.

Every library handoff includes actual `.types.ts`, `.meta.ts`, `.preview.tsx`, at least two stories and ThemeComparison, dependencies where relevant, semantic tokens, and current generated artifacts. Run `pnpm registry:build`, `pnpm previews:build -- --name <actual-registry-name>` for each changed component, and `pnpm check` from the repository root. Never hand-edit generated registry JSON. Check the relevant folder’s current conventions before changing it. This roadmap does not ask for a new testing framework.

Every release handoff includes `pnpm check`, a production showcase build using its package script, measured browser review evidence, real catalogue captures, and doc updates in the same PR. SH-01 owns the pre-existing correctness-gate blocker; an unresolved baseline failure does not make a ready sample acceptable. Re-run narrowly during work and run the combined release gate once changes are complete.

## Image production requirement

**Use Higgsfield MCP for all newly generated imagery for these sample showcases.** Each site’s `-03` ticket contains a shot list and prompt direction, and its existing `imagery.md` gives the fuller aesthetic brief. SH-04 establishes access discovery, output retrieval, public-safe provenance, local asset storage, crop review, and optimization. If Higgsfield MCP cannot be used, image production is blocked until access is available; no alternate generator is silently substituted.

Real UI screenshots come from the implemented website in a browser. Logos, interface labels, headings, prices, and controls remain code/text. User uploads in Pocket Keeps remain local to that demo and are not sent to an image service. There is no need to call an image provider while authoring these roadmaps.

## Delivery sequence and dependencies

| Stage | Work | Exit evidence |
| --- | --- | --- |
| A — Baseline and decisions | SH-01–07 and all `-01` briefs; shared tasks may run as independent engineering work | Route/theme/asset contracts; baseline gate repaired before release |
| B — Foundation and assets | Each `-02` shell and `-03` Higgsfield series | Scoped controls/portals and approved local images |
| C — Reusable adaptation | Each `-04`; SH-05 for Minimal/Neo | Real component APIs and current generated artifacts |
| D — Complete websites | Each `-05` through `-10` in its dependency order | All six templates, concrete detail records, and working local task |
| E — Review and release | Each `-11`, then `-12` | Complete site evidence, readiness flag, catalogue cover |
| F — Collection closeout | SH-08 | Five-site regression and documentation audit |

These are delivery lanes, not a requirement to finish every site’s stage before starting the next site. Minimal is a useful first pilot for scoped tokens and project-link support. Editorial’s EDT-04 owns the shared Pricing28 layout improvement needed by RET-04; it can ship before Editorial pages. Retro’s studio RET-10 must precede RET-05/RET-08 so home and guide use real UI captures. No site release depends on SH-08; SH-08 depends on the completed releases.

## Shared ticket index

| ID | Issue | PR | Status | Depends on |
| --- | --- | --- | --- | --- |
| SH-01 | [#187](https://github.com/jose-codegourmet/jabkit/issues/187) | [#255](https://github.com/jose-codegourmet/jabkit/pull/255), [#256](https://github.com/jose-codegourmet/jabkit/pull/256), [#257](https://github.com/jose-codegourmet/jabkit/pull/257) | Shipped | None |
| SH-02 | [#188](https://github.com/jose-codegourmet/jabkit/issues/188) | [#258](https://github.com/jose-codegourmet/jabkit/pull/258) | Shipped | None |
| SH-03 | [#189](https://github.com/jose-codegourmet/jabkit/issues/189) | [#259](https://github.com/jose-codegourmet/jabkit/pull/259) | Shipped | None |
| SH-04 | [#190](https://github.com/jose-codegourmet/jabkit/issues/190) | [#261](https://github.com/jose-codegourmet/jabkit/pull/261) | Shipped (process; series on #260) | None |
| SH-05 | [#191](https://github.com/jose-codegourmet/jabkit/issues/191) | [#262](https://github.com/jose-codegourmet/jabkit/pull/262) | Shipped | None |
| SH-06 | [#192](https://github.com/jose-codegourmet/jabkit/issues/192) | [#264](https://github.com/jose-codegourmet/jabkit/pull/264) | Shipped | None |
| SH-07 | [#193](https://github.com/jose-codegourmet/jabkit/issues/193) | [#265](https://github.com/jose-codegourmet/jabkit/pull/265) | Shipped (process). Filled visual evidence **Deferred** | None |
| SH-08 | [#254](https://github.com/jose-codegourmet/jabkit/issues/254) | this closeout | Complete except Jose visual QA + #260 | SH-01, MIN-12, NEO-12, EDT-12, LUX-12, RET-12 |

## SH-01 — Record the implementation baseline and unblock the correctness gate

**Suggested issue title:** `[showcase][SH-01] Record the implementation baseline and unblock the correctness gate`  
**Status:** Shipped ([#257](https://github.com/jose-codegourmet/jabkit/pull/257); gate fixes [#255](https://github.com/jose-codegourmet/jabkit/pull/255), [#256](https://github.com/jose-codegourmet/jabkit/pull/256)) · **Priority:** P0 · **Size:** M · **Labels:** `showcase`, `maintenance`  
**Depends on:** None

**Implementation surface:** Existing `package.json`, `apps/verify`, `docs/showcase.md`, `docs/theming.md`, and `docs/previews.md`; proposed implementation evidence in `docs/qa/design-system-showcases.md`.

**Work to deliver**

- Read the root and showcase AGENTS files and installed Next.js documentation before writing Next code. Record the current commit, Node/pnpm versions, route inventory, and existing dirty files; preserve unrelated work.
- Run `pnpm check` from the repository root and a showcase production build using its package scripts. The documentation-stage baseline reported unresolved copied-component imports/dependencies in `apps/verify`; reproduce before assigning a cause. Repair a reproduced blocker in a separate, linked defect change with its own focused acceptance criteria.
- Record the existing SaaS, component catalogue, preview iframe, registry, and theme behavior. Agree that design-system documentation is an authored input, not an existing JSON-to-theme runtime.

**Acceptance criteria**

- [ ] A dated baseline distinguishes pre-existing failures from new failures, with exact commands and concise error evidence.
- [ ] The full correctness gate passes before this blocker is closed; a linked unresolved defect does not count as a waiver.
- [ ] No unrelated stories, assets, or local edits have been removed or folded into the change.

**Verification and handoff:** Attach command results and the baseline route matrix. Planning, content, and asset work can start while this gate is being repaired; publishing a ready sample cannot.

## SH-02 — Extend sample routing and provide shared demo controls

**Suggested issue title:** `[showcase][SH-02] Extend sample routing and provide shared demo controls`  
**Status:** Shipped ([#258](https://github.com/jose-codegourmet/jabkit/pull/258)) · **Priority:** P0 · **Size:** M · **Labels:** `showcase`, `routing`  
**Depends on:** None

**Implementation surface:** Existing `apps/showcase/app/samples/catalog.ts`, `app/samples/page.tsx`, `app/samples/saas/page.tsx`, and `app/layout.tsx`; proposed `apps/showcase/components/samples/DemoBar.tsx`.

**Work to deliver**

- Replace the current `SampleEntry.href: "/samples/saas"` literal with a checked route contract that supports the five proposed sample roots while retaining Next typed routes. Keep the existing SaaS entry and its route unchanged.
- Define sample metadata for design-system label, fictional brand, description, and readiness. Add a compact shared demo bar with All samples, component catalogue, current design-system name, and access to the existing theme preference.
- Keep each business’s navigation and footer local to its route layout. The root layout already supplies ThemeProvider and fonts, not SiteHeader/SiteFooter; do not add a second theme provider or globally replace site chrome.
- Provide a non-linked treatment for any visible pending entry, or omit it until its root route exists. The current index wraps every entry in a Link even for status soon; explicitly address this before adding pending entries.

**Acceptance criteria**

- [ ] Existing SaaS navigation and the index remain usable; no listed sample leads to a missing page.
- [ ] The route contract rejects unsupported destinations without broad type assertions that bypass typedRoutes.
- [ ] The demo bar identifies every new site as fictional, is keyboard accessible, fits at 320px, and never covers sample navigation.
- [ ] Each style can become ready independently after its release ticket; collection completion is not required for the first release.

**Verification and handoff:** Verify the existing SaaS and one temporary local draft composition without publishing placeholder catalogue entries. Update `docs/showcase.md` with actual routing and ownership behavior.

## SH-03 — Implement scoped style tokens, typography, and portal inheritance

**Suggested issue title:** `[showcase][SH-03] Implement scoped style tokens, typography, and portal inheritance`  
**Status:** Shipped ([#259](https://github.com/jose-codegourmet/jabkit/pull/259)) · **Priority:** P0 · **Size:** L · **Labels:** `showcase`, `theming`  
**Depends on:** None

**Implementation surface:** Existing `packages/tokens/tokens.css`, `apps/showcase/app/layout.tsx`, Button/Input/Dialog/NavigationMenu/Tooltip sources; proposed sample scope helper under `apps/showcase/components/samples/` and optional scoped preset stylesheet in `packages/tokens`.

**Work to deliver**

- Adopt an explicit proposed scope such as `[data-jk-design-system="minimal"]`; define light and `.dark` descendant overrides from each approved tokens document. Keep canonical semantic token ownership in `packages/tokens`, and document any adopted foundation variables and imports. Do not replace default `:root` values or invent a theme JSON loader.
- Allow sample layouts to apply their own font-family variables so the root Geist class does not flatten all five directions. Load only needed, licensed font files or configured fallbacks; `typography.json` is not a font installer.
- Inspect actual Base UI portal APIs. Provide a supported scoped portal mount/composition path for navigation, dialogs, and tooltips; the convenient NavigationMenuViewport creates its own portal and DialogContent must also be checked. Avoid document-wide theme mutation on route mount.
- Audit Button shadow/active translation and Input fixed dimensions separately from color. Use local class overrides where supported; add minimal documented public hooks only if necessary. Preserve existing default atom behavior and copied-consumer compatibility.

**Acceptance criteria**

- [ ] A scoped light/dark reference surface renders Button, Input, a navigation popup, Dialog, and Tooltip with matching surfaces, text, rings, radius, and fonts.
- [ ] Switching between style routes and back to SaaS/catalogue does not leave style classes, fonts, scroll locks, or event listeners behind.
- [ ] Portals opened after client navigation inherit the current scope and mode; Escape, focus restoration, stacking, and outside interaction still work.
- [ ] New foundation variables are documented and defined; no hardcoded Tailwind color palettes or unscoped overrides of all buttons/headings are introduced.

**Verification and handoff:** Provide before/after screenshots of default and scoped controls, including open overlays in both modes. Any changed library files require the library handoff described below; update `docs/theming.md`.

## SH-04 — Define Higgsfield MCP image production and asset provenance

**Suggested issue title:** `[showcase][SH-04] Define Higgsfield MCP image production and asset provenance`  
**Status:** Shipped ([#261](https://github.com/jose-codegourmet/jabkit/pull/261); image series [#260](https://github.com/jose-codegourmet/jabkit/issues/260)) · **Priority:** P0 · **Size:** M · **Labels:** `showcase`, `imagery`  
**Depends on:** None

**Implementation surface:** Existing `docs/previews.md`, `apps/showcase/public/assets/sources.json`, and each system’s `imagery.md`; proposed `apps/showcase/public/assets/design-systems/<system>/` and `apps/showcase/app/samples/<system>/assets.ts`.

**Work to deliver**

- All newly generated showcase photography, illustration, objects, and textures must be created through **Higgsfield MCP**. At implementation time discover its available tools, supported models, output retrieval, and account access. Record actual capabilities; do not assume a model, endpoint, credit balance, or price. If unavailable, mark image-production tickets blocked and request the required connection instead of silently switching generators.
- Use each system’s imagery direction plus the ticket shot list. Approve one representative image before producing its series. Keep logos, navigation, headlines, labels, prices, and interactive UI as HTML/SVG; capture implemented product UI from the browser rather than generating fake screenshots.
- Define a public-safe provenance manifest per system: asset ID, relative file path, prompt, negative direction, actual provider/model, generation date, returned job ID when available, dimensions, aspect, crop/focal point, alt/decorative role, and output-use rights status. Keep credentials and signed retrieval URLs out of committed manifests.
- Store final optimized files under `/assets/design-systems/<system>/`; export typed local references in assets.ts. Existing sources.json maps external URLs to vendored hashes and is not this new manifest. Existing assets:vendor does not generate Higgsfield images; document any deliberate ingestion change separately.

**Acceptance criteria**

- [ ] The documented workflow names Higgsfield MCP explicitly, includes access-failure handling, and distinguishes generation from browser captures.
- [ ] Every generated image is traceable to an actual output and prompt; no job IDs, licenses, or generation results are fabricated.
- [ ] Each image has intrinsic dimensions, an approved crop, an alt strategy, and a local production URL. Default budgets are ≤300KB hero delivery, ≤180KB content image, ≤60KB decorative texture; document justified exceptions.
- [ ] Full desktop/mobile image crops are reviewed in their real slot; no reference-site image hotlinks, watermarks, or generated functional text ship.

**Verification and handoff:** Publish the manifest contract and asset checklist in `docs/previews.md`. Each style’s asset ticket owns generation and visual review; this shared ticket owns the process, not sixty images.

## SH-05 — Add backward-compatible project destinations to portfolio blocks

**Suggested issue title:** `[showcase][SH-05] Add backward-compatible project destinations to portfolio blocks`  
**Status:** Shipped ([#262](https://github.com/jose-codegourmet/jabkit/pull/262)) · **Priority:** P0 · **Size:** M · **Labels:** `showcase`, `components`  
**Depends on:** None

**Implementation surface:** Existing `packages/ui/src/marketing/projects13/` and `packages/ui/src/marketing/projects16/`, their metadata/stories/previews, and generated registry/preview outputs.

**API (landed):** `Projects13Project.href?` is a title text link. `Projects16Image.title?` / `href?` are caption text links. Projects16 renders `PROJECTS16_IMAGE_LIMIT` (4) ordered images and ignores extras. Defaults stay unlinked.

**Work to deliver**

- Projects13 items currently contain index, title, date, description, and image but no destination. Add an optional href with a real text-link focus target and an accessible name; preserve plain article output when absent.
- Projects16 images currently expose src, alt, and aspect only, and the implementation takes exactly four images using two slices. Add optional destination and visible caption/title support needed by the Minimal site. Document the four-image contract; do not silently treat this block as an arbitrary portfolio index.
- Keep defaults visually and behaviorally compatible. Avoid nested links/buttons or turning a whole article into an unlabeled focus target. If a layout hook is required for the prescribed style, keep it narrowly named and independent of fictional brands.
- Update types, metadata descriptions if changed, at least two stories and ThemeComparison, registryDependencies if applicable, committed preview images, and generated registry JSON through the builders.

**Acceptance criteria**

- [ ] Linked and unlinked data both render correctly; Tab/Enter navigation and descriptive link names work in light and dark.
- [ ] Projects16 renders its documented four ordered items without misrepresenting an unrendered fifth item; index pages use their own list composition.
- [ ] No atom depends on marketing, and the new API introduces no design-system category or app import.
- [ ] Default stories and new link cases pass component review, registry verification, and preview verification.

**Verification and handoff:** Run `pnpm registry:build`, rebuild previews for projects13/projects16 with their actual registry names, then `pnpm check`. Link the API notes in Minimal and Neo adaptation tickets.

## SH-06 — Establish sample content, navigation, and demo-state conventions

**Suggested issue title:** `[showcase][SH-06] Establish sample content, navigation, and demo-state conventions`  
**Status:** Shipped ([#264](https://github.com/jose-codegourmet/jabkit/pull/264)) · **Priority:** P0 · **Size:** M · **Labels:** `showcase`, `interaction`  
**Depends on:** None

**Implementation surface:** Existing `apps/showcase/app/samples/saas/content.ts` and sample pattern; proposed `apps/showcase/components/samples/` utilities and documentation in `docs/showcase.md`.

**Work to deliver**

- Define plain typed local content for each site, with stable slugs and IDs, local image references, meaningful empty states, and one canonical record for details and summaries. Keep fictional copy separate from JSX.
- Define a minimal client-only form pattern using JabKit Label/Input/Textarea/Button: native validation plus useful inline errors, retained input, focus at invalid fields, and a live status message. Confirmation must say preview prepared or demo only; never claim an email was sent, a subscription started, or a room reserved.
- Specify URL-backed list filters and allowlisted query parameters for preselecting a project, room, or plan. Unknown IDs produce a useful fallback or 404 as appropriate; never interpolate arbitrary unvalidated values into destinations.
- Forms and favorites retain state for their documented lifetime only. Default to in-memory state and no external request. No real personal data fixture, analytics SDK, backend, authentication, payment integration, or fabricated legal policy is part of this initiative.

**Acceptance criteria**

- [ ] A consumer of the convention can distinguish draft, invalid, preview, and reset states without a fake server delay.
- [ ] Every CTA has an existing route, a real local action, or clearly disabled future behavior; there are no # links masquerading as completed actions.
- [ ] Back/forward and direct links reproduce filter and selected-plan context; unknown slugs and empty results are specified.
- [ ] Demo limitations are short and visible beside the relevant action, with no forced subscription or consent-checkbox theater.

**Verification and handoff:** Document shared behavior and implement only genuinely repeated helpers. Keep layout and business copy in each site rather than forcing one universal landing-page template.

## SH-07 — Define repeatable full-site review and catalogue capture evidence

**Suggested issue title:** `[showcase][SH-07] Define repeatable full-site review and catalogue capture evidence`  
**Status:** Shipped ([#265](https://github.com/jose-codegourmet/jabkit/pull/265); filled visual evidence Deferred) · **Priority:** P0 · **Size:** M · **Labels:** `showcase`, `quality`  
**Depends on:** None

**Implementation surface:** Existing `docs/previews.md`, `docs/showcase.md`, and component preview pipeline; proposed `docs/qa/design-system-showcases.md` plus catalogue covers under `/assets/design-systems/<system>/`.

**Work to deliver**

- Create a manual review matrix for routes at 320, 390, 768, and 1440 CSS pixels, light/dark, keyboard, 200% zoom, reduced motion, image failures, and direct deep links. Include one real mobile/touch browser pass where available and name the actual environment.
- Capture real implemented pages in the browser with fonts/images settled, stable fixture data, and overlays intentionally open/closed. Record route, viewport, theme, commit, and capture date in PR evidence. AI images are inputs; catalogue cover screenshots must show the actual website.
- Keep whole-site captures separate from generated component preview manifests and `public/previews/` hashes. Introduce a documented catalogue-cover field only if the index will actually render it; coordinate that change with SH-02.
- Use production-build measurement for the home route and heaviest secondary route per style: target LCP ≤2.5s and CLS ≤0.1 under a recorded mobile profile; treat lab results as measured evidence, not a guarantee. Review initial image payload against SH-04 budgets and identify lazy-loaded content.

**Acceptance criteria**

- [ ] The checklist has explicit pass/fail fields and places for route, image, accessibility, and performance evidence.
- [ ] The process works on the existing SaaS sample without modifying component preview semantics or adding a second test framework.
- [ ] Accessibility review includes text/control contrast, visible focus, 44px preferred targets, headings, landmarks, reading order, live status, and portal focus return.
- [ ] Failures result in linked follow-up defects or block readiness; an attractive screenshot alone does not complete a site.

**Verification and handoff:** Copy the tables in [docs/qa/design-system-showcases.md](../docs/qa/design-system-showcases.md) into every `-12` release PR. Use existing tooling and manual browser review; no new test infrastructure is required. Whole-site captures stay out of `public/previews/`.

## SH-08 — Close the five-site initiative and verify cross-site regressions

**Suggested issue title:** `[showcase][SH-08] Close the five-site initiative and verify cross-site regressions`  
**Status:** Complete except Jose visual QA + [#260](https://github.com/jose-codegourmet/jabkit/issues/260) · **Priority:** P1 · **Size:** M · **Labels:** `showcase`, `release`  
**Depends on:** `SH-01`, `MIN-12`, `NEO-12`, `EDT-12`, `LUX-12`, `RET-12`

**Implementation surface:** Existing `/samples`, `/samples/saas`, catalogue and preview routes, `docs/showcase.md`, and all five system roadmaps.

**Work to deliver**

- Review the complete collection as five intentionally different businesses with a shared JabKit origin. Confirm each site has its own navigation, meaningful secondary pages, consistent content, and a completed local task.
- Visit every style in sequence, switch themes with a popup open where supported, return to SaaS and catalogue, and verify no residual typography, tokens, scrolling, listeners, or state.
- Close only after all release evidence is attached, source-component manifests match actual imports, and docs describe the implemented route and asset behavior. Update roadmap status with PR/issue links; do not invent issue numbers.

**Acceptance criteria**

- [ ] All five new catalogue entries are ready and resolve; existing SaaS and component catalogue/preview behavior remains correct.
- [ ] All new deep links, filters, selected-context links, and 404 behavior pass the final crawl/review.
- [ ] `pnpm check` and the showcase production build pass on the combined state; no unresolved blocking defect is hidden in baseline notes.
- [ ] Final covers depict the actual completed sites and every generated asset has Higgsfield MCP provenance.

**Verification and handoff:** Attach a final route inventory and the five release evidence links. Deployment or publishing GitHub issues is a separate action from writing this roadmap.

