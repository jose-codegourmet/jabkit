# JabKit

JabKit is a React component library distributed as source. Browse components in the showcase, query the registry through its MCP server, or copy files into your own project with the CLI.

Engineering docs: [docs/README.md](docs/README.md). Agent entry point: [AGENTS.md](AGENTS.md).

## Local development

```bash
nvm use
pnpm install
pnpm dev
```

`pnpm dev` starts the catalogue on port 3000 and all five design-system apps on ports 3101–3105. For only the catalogue, run `pnpm --filter @jabkit/showcase dev`; for only the five websites, run `pnpm dev:design-systems`. See [the app guide](docs/standalone-design-systems.md) for local ports and production hosts.

Registry JSON under `apps/showcase/public/r/` is committed. After adding or changing a component, run `pnpm registry:build` and commit its output. Use `pnpm check` for the local quality gate.

## Current status

Infrastructure is wired: source-distributed registry files include shared `lib` dependencies, the CLI supports `add --all` with import rewriting and dependency installation, `apps/verify` is an external-consumer gate, and `/components` is a URL-filterable live-preview catalogue. Storybook uses the same Tailwind v4 token pipeline as the library.

The registry currently holds 39 components across `atoms`, `marketing`, and `dashboard`. A shadcn conversion pass has been run (`scripts/convert-shadcn.ts`); `.shadcn-src/` is a committed vendored snapshot used as conversion input, not as runtime source.

The published npm package is `@jabkit/cli`. It contains the installer; component source is fetched from the hosted registry and copied into your project:

```bash
npx @jabkit/cli init
npx @jabkit/cli add button
```

The executable is named `jabkit`, but package runners need the scoped package name. See [docs/cli.md](docs/cli.md).

Connect an MCP client using Streamable HTTP at `https://jabkit.joseadrianbuctuanon.dev/mcp` to search components, inspect source, and request install plans. The server is read-only; the CLI writes files. See [docs/mcp.md](docs/mcp.md).
