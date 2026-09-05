# CLI

`packages/cli` (`@jabkit/cli`) writes JabKit component **source** into a **consumer** project. It does not scaffold components inside this monorepo. Implementation: `packages/cli/src/index.ts`.

MCP tools are read-only. The CLI is the writer. An installed component must stay pristine until the consumer (or their agent) applies requested local edits in a separate step.

## How to invoke it today

`packages/cli/package.json` is `private: true`, has no `build` script, and points `bin.jabkit` at `./src/index.ts` (raw TypeScript). `npx jabkit`, `pnpm dlx jabkit`, and `bunx jabkit` — the commands the showcase copies — do not resolve to a published package today.

The working in-repo invocation is the one `apps/verify` uses:

```bash
tsx packages/cli/src/index.ts init
tsx packages/cli/src/index.ts add button
tsx packages/cli/src/index.ts add --all --force
```

`apps/verify/package.json` `sync` is `tsx ../../packages/cli/src/index.ts add --all --force`.

The rest of this document describes that program, not a hypothetical published binary.

## Commands

Usage string: `jabkit init | add <name...> [--force] [--dry-run] | upgrade [name]`.

| Command | Behavior |
| --- | --- |
| `init` | Writes `jabkit.config.json`, a consumer skill file, and an `AGENTS.md` snippet. |
| `add <name...>` | Fetches registry JSON, writes files, installs npm deps. |
| `add --all` | Same, for every name in `index.json`. |
| `add --force` | Overwrite existing destination files. Without it, an existing file throws. |
| `add --dry-run` | Logs writes and the `pnpm add` line; writes nothing; does not install. |
| `upgrade` | Stub. Prints that a three-way merge "lands in the next implementation pass" and exits 0. |

Unknown commands print usage.

## Config

Required file: `jabkit.config.json` in `process.cwd()`. Missing file → `"Missing jabkit.config.json. Run jabkit init first."`

Shape (`Config` in `src/index.ts`), matching `apps/verify/jabkit.config.json`:

```json
{
  "componentsDir": "src/components/jabkit",
  "alias": "@/components/jabkit",
  "registry": "http://localhost:3000",
  "formatter": "biome",
  "theme": { "mode": "class", "provider": "next-themes" }
}
```

`formatter` and `theme` are stored and currently unused by `add`. Registry URL precedence: `process.env.JABKIT_REGISTRY` if set, otherwise `config.registry`. `init` seeds `registry` from that env var or `http://localhost:3000`.

The CLI always fetches over HTTP (`{registry}/r/{name}.json` and `{registry}/r/index.json`). It does not read `apps/showcase/public/r` from disk. For local work that means the showcase (`pnpm dev`) must be serving those files.

## `init`

1. Writes `jabkit.config.json` with the defaults above.
2. Writes `.github/skills/jabkit-component/SKILL.md` (hardcoded string; not read from `templates/SKILL.md`).
3. Appends a `## UI components (JabKit)` section to `AGENTS.md` if that substring is not already present (creates the file if needed). The text is hardcoded; it is not read from `templates/AGENTS.snippet.md`.
4. Logs: configure your MCP client against the deployed `/mcp` endpoint. That overstates today's protocol — see [mcp.md](mcp.md).

`templates/SKILL.md` and `templates/AGENTS.snippet.md` exist in this repo as reference boilerplate with similar but not identical wording. Nothing reads them. Treat them as stale copies, not as the source `init` uses.

## `add`

Order of operations:

1. Load config. Resolve names (`--all` fetches `index.json` and uses every `name`).
2. Walk `registryDependencies` depth-first, skipping names already seen, then push the entry. Requested components are resolved after their registry deps, so files for deps are written first.
3. For each file in each resolved entry, destination is `{cwd}/{componentsDir}/{file.path}` (for example `src/components/jabkit/button/Button.tsx` and `src/components/jabkit/lib/cn.ts`). Existing files without `--force` throw.
4. Rewrite imports: `@/components/jabkit` → `config.alias`, `@/lib/` → `{alias}/lib/`.
5. If any resolved entry has `cssVars`, merge light maps and dark maps, and if `src/app/globals.css` exists, append a `:root` / `.dark` block. If that CSS file is missing, variables are skipped with no error.
6. Write `.jabkit/manifest.json` (gitignored in this repo). `updatedAt` is an ISO timestamp. `components` is an array of `{ name, files }` — but `files` is the **same complete `manifestFiles` map** for every component, not that component's own files. Do not build upgrade logic on this shape until it is fixed.
7. Union npm `dependencies` across resolved entries and run `pnpm add ...` in the consumer cwd (skipped / logged under `--dry-run`).

## What the CLI does not do

- Does not create library components under `packages/ui`.
- Does not format with Biome despite `formatter: "biome"` in config.
- Does not install `@jabkit/tokens` or a `tokens.css` into the consumer. Consumers that want the shared theme import that file themselves (as `apps/verify/app/globals.css` does from the workspace package).
- Does not implement `upgrade`.
- Does not speak MCP. Search and install plans are the showcase HTTP endpoint; the CLI only writes.

## Verify app

`apps/verify` is the external-consumer gate:

- `jabkit.config.json` points `registry` at `http://localhost:3000`.
- `sync` force-adds every registry component into `src/components/jabkit` (gitignored).
- Its `tsconfig.json` maps `@/*` to `./src/*`, which is the consumer-shaped alias the rewritten imports expect.
- `app/page.tsx` is a light/dark harness shell, not a gallery of installed components.

To use it you still need a running showcase that serves `/r/*.json`.
