# Documentation contract

Format version: `1.0.0`. This is a local documentation convention, not a registered interchange standard, DTCG schema, executable theme API, or extension to `{Name}.meta.ts`. JSON files are strict JSON without comments. Paths are relative to the file containing them unless stated otherwise.

## Authority and provenance

Repository code and [AGENTS.md](../AGENTS.md) govern implementation. Within these proposals, `rules.md` gives constraints; JSON gives the concrete recommended values; `system.md` explains the design decisions. Resolve any discrepancy explicitly before implementing. Do not silently combine values from several systems.

`references.md` separates inspected visual evidence, readable page structure, and interpretation. Observations are dated, scoped desktop reviews, not claims about every route, breakpoint, or animation. Loader frames and cookie overlays are recorded as limitations. A failed browser request does not prove a site is down for everyone. No exact font, palette, timing, or framework attribution is inferred from appearance.

## File responsibilities

| File | Required content and field meaning |
| --- | --- |
| `meta.json` | `schemaVersion`, stable `id`, human `name`, `status`, `intent`, `keywords`, `bestFor`, `avoidFor`, `referenceReviewDate`, `files`, and `compatibility`. `files` locates the core companion specification documents. Supplementary Markdown planning roadmaps are linked from the index and do not require a metadata change. Status describes documentation maturity. |
| `system.md` | Philosophy, sensory character, page sequence, layout logic, type, imagery, adaptable variants, and the distinction from neighboring styles. |
| `rules.md` | Concrete must/prefer/avoid guidance, responsive and accessibility constraints, and a visual acceptance checklist. |
| `tokens.json` | `schemaVersion`, `system`, `status`, `modes`, `foundation`, and `colorUsage`. `modes.light` / `modes.dark` map existing CSS variable names to literal CSS values. `foundation` holds proposed, mode-independent geometry variables. |
| `typography.json` | `families`, `roles`, and `implementation`. Family values are fallback CSS stacks, not bundled fonts. Each role defines family key, CSS font size, numeric line height, weight, tracking, and measure. |
| `components.json` | `components` contains styling guidance, category, existing candidates, and adaptation work for foundational components. Candidates are repository-relative paths and require inspection; they are not guaranteed drop-in matches. |
| `patterns.json` | `patterns`, each with `id`, `purpose`, ordered `sections`, `desktop`, `mobile`, and `conversion`. Section names describe content, not new registry names. |
| `motion.json` | Millisecond durations, easing strings, and named `behaviors`. Each behavior supplies trigger, effect, duration key, easing key, and reduced-motion replacement. |
| `motion.md` | Motivation, choreography, limits, implementation notes, and review criteria. `motion.json` owns numeric timing. |
| `imagery.md` | Mood, lighting/material language, composition, prompt formula, full prompts, negative direction, crop and production guidance. |
| `migration.md` | Source-aware changes, order of work, both-theme handling, validation, and rollback. This is a manual workflow. |
| `references.md` | All URLs assigned to the system in `TO_EXTRACT.md`, access status, observations, structure, interpretation, and limitations. |
| `roadmap.md` | Supplementary implementation instructions: fictional website brief, sitemap, component mapping, Higgsfield MCP shot list/prompts, ticket dependencies, scope, acceptance criteria, and verification. This document describes future work, not shipped routes. |

## Tokens and references

Existing variables retain JabKit's semantic meaning. For example, `--jk-primary` is an action surface paired with `--jk-primary-foreground`; it is not automatically the color for inline links. `--jk-muted-foreground` carries readable secondary text. `--jk-border` may be a subtle decorative divider; use `--jk-input` when a visible boundary is necessary. Chart colors require labels or other redundant encodings.

All mode colors are authored `oklch(...)` values. `--jk-radius` appears explicitly in both modes for a complete proposal, even though current `.dark` inherits the radius from `:root`. Every palette is standalone: no implicit inheritance from a different design system.

`foundation` values use proposed `--jk-*` names for spacing, content width, border width, shadow, and control height. They do not exist in the runtime yet and have no automatic Tailwind mapping. If adopted in the library, define them deliberately in `packages/tokens/tokens.css` and document any new mappings in `docs/theming.md`. In a consumer, define them in the consumer stylesheet. Typography roles are defined in `typography.json.roles`.

To adopt a palette manually, copy the chosen `modes.light` declarations to the intended light scope and the dark declarations to its `.dark` scope, following existing theme ownership. Do not paste a JSON object into CSS or register these docs as component `cssVars`. Portals must receive the same variables; preview iframes are separate documents. Do not introduce a selector architecture as part of reading these files.

## Consistency checks for authors

- Keep all five packs on the same contract version and include every listed file.
- Keep both modes complete against the variable set in canonical `tokens.css`.
- Verify all `var(--jk-...)` references exist in the proposal or canonical tokens.
- Keep component names, typography roles, motion timing keys, and metadata paths consistent.
- Keep existing-candidate paths real; do not invent a `card` atom just because the guidance describes a card.
- Record proposals as proposals. No claim that these files add CLI flags, install fonts, generate assets, or guarantee accessibility.
- Review JSON syntax and links, format JSON with the repository formatter, and run the repository's required correctness gate. Do not add test infrastructure for documentation.
