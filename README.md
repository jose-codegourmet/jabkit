# JabKit

JabKit is a React component library distributed as source. Browse components in the showcase, query the registry through the catalogue HTTP endpoint, or copy files into your own project with the CLI.

Engineering docs: [docs/README.md](docs/README.md). Agent entry point: [AGENTS.md](AGENTS.md).

## Local development

```bash
nvm use
pnpm install
pnpm dev
```

Registry JSON under `apps/showcase/public/r/` is committed. After adding or changing a component, run `pnpm registry:build` and commit its output. Use `pnpm check` for the local quality gate.

## Current status

Infrastructure is wired: source-distributed registry files include shared `lib` dependencies, the CLI supports `add --all` with import rewriting and dependency installation, `apps/verify` is an external-consumer gate, and `/components` is a URL-filterable live-preview catalogue. Storybook uses the same Tailwind v4 token pipeline as the library.

The registry currently holds 39 components across `atoms`, `marketing`, and `dashboard`. A shadcn conversion pass has been run (`scripts/convert-shadcn.ts`); `.shadcn-src/` is a committed vendored snapshot used as conversion input, not as runtime source.

The published-CLI story (`npx jabkit add`) is ahead of packaging: the working in-repo invocation is `tsx packages/cli/src/index.ts`. See [docs/cli.md](docs/cli.md).
