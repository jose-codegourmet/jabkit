---
name: jabkit-component
description: Select, install, and adapt JabKit components for a branded website or a requested UI component in a consumer project.
---

# Using JabKit for the user's brand

Read `jabkit.config.json` and call `get_conventions`. Scale the workflow to the request: adding a named button does not require redesigning the site.

## Answer JabKit's two discovery questions

Every catalogue tool returns `status: "needs_brief"` instead of catalogue data until both `brief.intent` and `brief.visualDirection` are answered. These questions are directed to you, the consuming agent:

1. **Intent:** What are you building, for whom, and what should visitors do? Include required sections/interactions and functional constraints.
2. **Visual direction:** What should the brand look and feel like? Include tone or references, available imagery/content, and styles or patterns to avoid.

Answer from the user's existing brief and project context. Ask the user only for missing details that would materially change component selection. If they delegate design choices, state your assumptions rather than inventing brand facts. For a small component task, a concise intent and the existing project's design direction are sufficient.

Repeat the tool call with both answers in `brief`, retaining its other arguments. Reuse this brief on **every** catalogue call for the task; the server is stateless. Update it when requirements change. A partial answer returns only the unanswered question. Do not repeat the interview for each component.

## Choose before installing

For a branded page, derive a concise brief from the user's audience, offering, conversion goal, tone, visual references, assets, and constraints. State reasonable assumptions when details are missing. Establish typography, palette, imagery, layout rhythm, density, and motion before choosing blocks. A JabKit sample or theme preset is a reference, not the brand identity.

Search each needed section separately with `search_components`: use `query` for section intent, `category` / `sectionCategory` to narrow the role, and `tone`, `useCase`, and `visualWeight` for brand fit. For example:

```json
{"brief":{"intent":"Photography portfolio for art directors; show projects and invite enquiries.","visualDirection":"Restrained editorial layout with supplied project photography; avoid dashboard chrome."},"query":"hero","category":"marketing","tone":["editorial","restrained"],"useCase":"creative portfolios","visualWeight":"medium","limit":12,"offset":0}
```

Translate the discovery answers into section queries and `tone`, `useCase`, and `visualWeight` preferences; the server does not infer these from prose. Compare plausible alternatives using `tone`, `bestFor`, `avoidFor`, and `visualWeight`, then check `layout`, `slots`, `contentDensity`, and `capabilities` against the full brief. Search scores are lexical evidence, not design verdicts. Review all `avoidFor` warnings semantically, including warnings the scorer did not match. Missing metadata means unknown fit, not approval. Use `limit` / `offset` to inspect later results or `list_components` for a broader view. If an older server rejects the new arguments, keep the answered brief in your working context, omit unsupported arguments, and use `list_components` to compare metadata yourself.

Use `get_component` to inspect shortlisted source and examples, and inspect previews when available. Explain the selected component's fit, rejected alternatives, and required adaptations briefly. Avoid choosing the first result or reusing a whole familiar sample. A coherent page needs intentional variation in composition and visual weight. If no block fits, compose JabKit atoms or adapt installed source to the brief.

## Install, then adapt

Show `get_install_plan` before writing and inspect local paths for overwrite risks; its `filesToOverwrite` is always empty and does not prove the destination is clear. Install with `npx @jabkit/cli add <name...>` using the configured registry and paths. A pristine install is a checkpoint before local edits, not a restriction on the finished design.

A request to fit a brand includes adapting composition, markup, typography, spacing, borders, radii, imagery, and motion in consumer source. Use props where sufficient and edit the installed source where necessary. Preserve accessibility, responsive behavior, and requested functionality.

Semantic tokens are customizable roles. Define the brand's raw color values in consumer `--jk-*` token definitions for light and dark, then use semantic classes such as `bg-background`, `text-foreground`, and `border-border`. Customize typography and other foundation tokens where supported; adjust component styles where they do not consume those tokens. The default palette and sample presets are optional. Recoloring alone is not a brand adaptation.

Replace demo logos, brand names, copy, navigation, imagery, and proof claims, including defaults hidden in nested components. Use the user's assets and factual content; omit unsupported testimonials, customer logos, and metrics.

## Review the result

Check desktop/mobile layouts and supported themes against the brand direction, including content hierarchy, type, imagery, composition, and section rhythm. Look for remaining demo branding and repeated template structure. Run the consumer project's relevant checks and report any visual review limitations.
