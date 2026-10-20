# @jabkit/cli

Install [JabKit](https://jabkit.joseadrianbuctuanon.dev) React components as source files in your project.

## Quick start

Run from your React project, with Node.js and pnpm available:

```sh
npx @jabkit/cli init
npx @jabkit/cli add button
```

Other package runners:

```sh
pnpm dlx @jabkit/cli add button
bunx @jabkit/cli add button
yarn dlx @jabkit/cli add button
```

The npm package is **`@jabkit/cli`** and its executable is **`jabkit`**. Use the scoped package name with package runners.

## What gets installed

This package contains the compiled CLI in `dist/index.js`. The CLI downloads component source from the hosted JabKit registry, resolves component dependencies, and writes files to `src/components/jabkit`. It installs npm dependencies using `pnpm add`.

`init` creates `jabkit.config.json`, a component skill, and an `AGENTS.md` snippet. `add button --dry-run` previews an install; `add button --force` replaces existing files.

JabKit components are distributed through the registry, not bundled as an npm UI library. You own and edit the copied files.

## MCP

Agents can connect to `https://jabkit.joseadrianbuctuanon.dev/mcp` using Streamable HTTP to search components, inspect source, and request install plans. The MCP server is read-only; this CLI performs installation.

See the [CLI guide](https://github.com/jose-codegourmet/jabkit/blob/main/docs/cli.md) and [MCP guide](https://github.com/jose-codegourmet/jabkit/blob/main/docs/mcp.md).
