# MCP and catalogue HTTP API

JabKit serves a **read-only Model Context Protocol server** at `https://jabkit.joseadrianbuctuanon.dev/mcp`, using the official TypeScript SDK and Streamable HTTP. Connect a remote MCP client with that URL and transport; no API key or local npm MCP package is required.

`packages/mcp` (`@jabkit/mcp`) owns tool names, strict argument schemas, MCP server registration, and the stateless transport. It is a private workspace package used by the showcase, not a published npm command. `apps/showcase/lib/catalogue-tools.ts` implements the six catalogue operations. `apps/showcase/app/mcp/route.ts` routes both native MCP and the original HTTP API to those operations.

## Protocol

- MCP clients use JSON-RPC `initialize`, `notifications/initialized`, `tools/list`, and `tools/call` over `POST /mcp`. The SDK handles protocol negotiation, notifications, and errors.
- Requests use `Content-Type: application/json` and `Accept: application/json, text/event-stream`. Clients send the negotiated `MCP-Protocol-Version` on subsequent requests.
- Responses are JSON. Tool results contain a `content` text block with JSON-encoded catalogue data. Validation and tool failures use MCP tool errors (`isError: true`).
- Each request creates and closes a fresh server and transport. There are no session IDs, persistent sessions, server-initiated streams, or shared connection state.
- `GET /mcp` with `Accept: text/event-stream` returns 405 because standalone SSE is unsupported. Ordinary GET requests retain `{ name: "JabKit MCP", tools: string[] }` for HTTP discovery.

The original API remains compatible: `POST /mcp` with `{ tool, arguments }` returns the plain result. It now rejects missing required arguments, unknown argument keys, incorrect types, invalid categories, and empty install plans with HTTP 400. Malformed JSON returns a JSON-RPC parse error with HTTP 400. Unknown component lookup returns HTTP 404; an unknown component in an install plan returns HTTP 400.

All tools are read-only. The CLI writes files; this endpoint does not. See [cli.md](cli.md).

### Origin validation

Requests without an Origin header are accepted for native clients. If Origin is supplied, it must match the production site, a comma-separated `MCP_ALLOWED_ORIGINS` entry, or the current localhost origin in development. Other origins receive HTTP 403. Add explicit origins for alternate deployments or browser-based clients. The endpoint has no authentication or rate limiting; it serves public registry data only.

## Data source

Catalogue operations call `registryIndex()` / `registryEntry()` from `apps/showcase/lib/registry.ts`, which reads `apps/showcase/public/r`. The endpoint is exactly as fresh as the last committed `pnpm registry:build`. See [registry.md](registry.md).

There is no authentication and no rate limiting in the route.

## Tools

### `list_components`

Arguments: optional `category` (`atoms` \| `marketing` \| `dashboard`).

Returns the registry index array, optionally filtered by `item.category === args.category`.

### `search_components`

Arguments: `query` (string, default `""`).

Concatenates `name`, `displayName`, `description`, and `tags`, lowercases, and `includes` the query. Returns at most **8** hits. Empty query returns the first eight index items.

### `get_component`

Arguments: `name` (required component-name string, letters/digits separated by hyphens), optional `withExamples` (if `false`, `examples` is replaced with `[]`).

Returns the full `{name}.json` document, or `{ error: "Not found" }` with HTTP 404.

### `get_install_plan`

Arguments: `names` (required non-empty array of component-name strings), optional `targetDir` (default `"src/components/jabkit"`).

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

Arguments: `category` (`atoms` | `marketing` | `dashboard`, required).

Returns `{ category, rules, components }` where `components` is the index filtered to that category. `rules` is a hardcoded string:

- `atoms` → `"Atoms may depend on other atoms, never marketing or dashboard."`
- `marketing` / `dashboard` → `"May compose atoms and components from the same category, never the other feature category."`

Composition rules match [adding-a-component.md](adding-a-component.md) and root `AGENTS.md`.

## Agent use

The flow the showcase home page advertises, and the one `jabkit init` writes into a consumer `SKILL.md`:

1. `search_components` by intent, tag, or name.
2. `get_component` / `get_install_plan` to see files, npm deps, and registry deps.
3. `get_conventions` before generating classes.
4. Install with the CLI (or by writing `files[]` from the JSON). Modify only after the pristine copy is on disk.

## Limitations

- Read-only by design.
- No persistent sessions or server-initiated notifications.
- `search_components` hard-caps at 8; `list_components` has no pagination.
- `filesToOverwrite` is always `[]`.
- `lib/mcp-tools.ts` maintains human-facing reference examples; keep it in step with the schemas and operations.
