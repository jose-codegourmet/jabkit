# AGENTS.md - JabKit

JabKit is a source-distributed React component library. Every component must be discoverable through the registry and render correctly in light and dark themes.

## Non-negotiable rules

- Use semantic `--jk-*` tokens only. Do not use hardcoded Tailwind colors.
- Components use the category structure `atoms`, `marketing`, and `dashboard`.
- Atoms may depend on other atoms through declared `registryDependencies`. Atoms never depend on marketing or dashboard. Marketing and dashboard never depend on each other.
- Every component has a typed prop file, metadata, at least two stories, and a `ThemeComparison` story.
- Stories are the source for component examples. Generated registry JSON is never edited by hand.
- MCP tools are read-only. The CLI writes source files.
- An installed component is pristine before any requested local edits are applied.
