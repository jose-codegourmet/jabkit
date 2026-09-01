# JabKit

JabKit is a React component library distributed as source. Browse components in the showcase, query the registry through MCP, or copy files into your own project with the CLI.

## Local development

```bash
nvm use
pnpm install
pnpm dev
```

Registry JSON under `apps/showcase/public/r/` is committed. After adding or changing a component, run `pnpm registry:build` and commit its output. Use `pnpm check` for the local quality gate.

## Implementation status

The execution plan's infrastructure and showcase phases are wired: source-distributed registry files include shared `lib` dependencies, the CLI supports `add --all` with import rewriting and dependency installation, the verify app is an external-consumer gate, and `/components` is a URL-filterable live-preview catalogue. Storybook uses the same Tailwind v4 token pipeline as the library.

The current registry contains the existing `Button` component. Additional shadcn components remain intentionally un-ingested until the source snapshot and conversion pass are run; no raw `.shadcn-src/` artifacts are committed.
