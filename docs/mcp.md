# MCP (catalogue HTTP endpoint)

JabKit's agent-facing catalogue is a **read-only JSON HTTP endpoint** on the showcase: `apps/showcase/app/mcp/route.ts`.

`packages/mcp` (`@jabkit/mcp`) currently exports one thing: the `jabkitTools` string tuple and the `JabkitTool` type in `packages/mcp/src/index.ts`. It has no server and no handlers. The live dispatch table is the showcase route, which duplicates the name list rather than importing the package.

## Protocol

This is **not** the Model Context Protocol wire format and not JSON-RPC.

- `GET /mcp` → `{ name: "JabKit MCP", tools: string[] }`.
- `POST /mcp` with body `{ tool?: string, arguments?: Record<string, unknown> }`.

A standard MCP client cannot speak to this endpoint without an adapter. `jabkit init` still logs "Configure your MCP client to use your deployed /mcp endpoint", which overstates compatibility.

All tools are read-only. The CLI writes files; this endpoint does not. See [cli.md](cli.md).

## Data source

Every handler calls `registryIndex()` / `registryEntry()` from `apps/showcase/lib/registry.ts`, which reads `apps/showcase/public/r`. The endpoint is exactly as fresh as the last committed `pnpm registry:build`. See [registry.md](registry.md).

There is no authentication and no rate limiting in the route.

## Tools

### `list_components`

Arguments: optional `category` (`atoms` \| `marketing` \| `dashboard`).

Returns the registry index array, optionally filtered by `item.category === args.category`.

### `search_components`

Arguments: `query` (string, default `""`).

Concatenates `name`, `displayName`, `description`, and `tags`, lowercases, and `includes` the query. Returns at most **8** hits. Empty query returns the first eight index items.

### `get_component`

Arguments: `name` (string), optional `withExamples` (if `false`, `examples` is replaced with `[]`).

Returns the full `{name}.json` document, or `{ error: "Not found" }` with HTTP 404.

### `get_install_plan`

Arguments: `names` (string array), optional `targetDir` (default `"src/components/jabkit"`).

Walks `registryDependencies` depth-first (same order as the CLI). Unknown name → HTTP 400 `{ error: "Unknown component: …" }`.

Success body:

```ts
{
  filesToCreate: string[];      // `{targetDir}/{file.path}` for every file of every resolved entry
  filesToOverwrite: [];         // always empty — overwrite detection is not implemented
  npmDeps: string[];            // unique union of `dependencies`
  cssVars: { light: object; dark: object }; // merged from resolved entries
}
```

This is a plan, not an install. Agents are expected to show it, then run the CLI or write files themselves.

### `get_conventions`

No arguments. Returns a static object, not derived from `docs/`:

```json
{
  "tailwind": "Tailwind CSS v4 with semantic --jk-* tokens",
  "theme": "Class-based .dark mode. Use bg-background, text-foreground, border-border.",
  "alias": "@/components/jabkit",
  "naming": "kebab-case folders with PascalCase-prefixed files"
}
```

### `get_category_overview`

Arguments: `category`.

Returns `{ category, rules, components }` where `components` is the index filtered to that category. `rules` is a hardcoded string:

- `atoms` → `"Atoms do not depend on other JabKit components."`
- anything else → `"May compose atoms and components from the same category, never the other feature category."`

The atoms sentence disagrees with the rest of the repo: atoms **may** depend on other atoms via `registryDependencies` ([adding-a-component.md](adding-a-component.md), root `AGENTS.md`). Documented here as current endpoint behavior, not as the library rule.

## Agent use

The flow the showcase home page advertises, and the one `jabkit init` writes into a consumer `SKILL.md`:

1. `search_components` by intent, tag, or name.
2. `get_component` / `get_install_plan` to see files, npm deps, and registry deps.
3. `get_conventions` before generating classes.
4. Install with the CLI (or by writing `files[]` from the JSON). Modify only after the pristine copy is on disk.

## Limitations

- Read-only by design.
- Not MCP-native.
- `search_components` hard-caps at 8; `list_components` has no pagination.
- `filesToOverwrite` is always `[]`.
- `packages/mcp` is not wired to the route; renaming a tool in one place does not update the other.
