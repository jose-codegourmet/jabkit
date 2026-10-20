# MCP and catalogue HTTP API

JabKit serves a **read-only Model Context Protocol server** at `https://jabkit.joseadrianbuctuanon.dev/mcp`, using the official TypeScript SDK and Streamable HTTP. Connect a remote MCP client with that URL and transport; no API key or local npm MCP package is required.

`packages/mcp` (`@jabkit/mcp`) owns tool names, strict argument schemas, MCP server registration, and the stateless transport. It is a private workspace package used by the showcase, not a published npm command. `apps/showcase/lib/catalogue-tools.ts` implements the six catalogue operations. `apps/showcase/app/mcp/route.ts` routes both native MCP and the original HTTP API to those operations.

## Protocol

- MCP clients use JSON-RPC `initialize`, `notifications/initialized`, `tools/list`, and `tools/call` over `POST /mcp`. The SDK handles protocol negotiation, notifications, and errors.
- Requests use `Content-Type: application/json` and `Accept: application/json, text/event-stream`. Clients send the negotiated `MCP-Protocol-Version` on subsequent requests.
- Responses are JSON. Tool results contain a `content` text block with JSON-encoded catalogue data. Validation and tool failures use MCP tool errors (`isError: true`).
- Each request creates and closes a fresh server and transport. There are no session IDs, persistent sessions, server-initiated streams, or shared connection state.
- `GET /mcp` with `Accept: text/event-stream` returns 405 because standalone SSE is unsupported. Ordinary GET requests retain `{ name: "JabKit MCP", tools: string[] }` for HTTP discovery.

The original HTTP transport remains supported: `POST /mcp` with `{ tool, arguments }` returns plain JSON. Clients must now handle the `needs_brief` discovery response before catalogue data (see below). It rejects missing required tool arguments, unknown argument keys, incorrect types, invalid categories, and empty install plans with HTTP 400. Malformed JSON returns a JSON-RPC parse error with HTTP 400. With a complete brief, unknown component lookup returns HTTP 404; an unknown component in an install plan returns HTTP 400.

All tools are read-only. The CLI writes files; this endpoint does not. See [cli.md](cli.md).

### Origin validation

Requests without an Origin header are accepted for native clients. If Origin is supplied, it must match the production site, a comma-separated `MCP_ALLOWED_ORIGINS` entry, or the current localhost origin in development. Other origins receive HTTP 403. Add explicit origins for alternate deployments or browser-based clients. The endpoint has no authentication or rate limiting; it serves public registry data only.

## Data source

Catalogue operations call `registryIndex()` / `registryEntry()` from `apps/showcase/lib/registry.ts`, which reads `apps/showcase/public/r`. The endpoint is exactly as fresh as the last committed `pnpm registry:build`. See [registry.md](registry.md).

There is no authentication and no rate limiting in the route.

## Tools

### Discovery on every catalogue tool

All six tools accept `brief: { intent?: string; visualDirection?: string }`. A valid call without both nonblank answers returns a normal result with `status: "needs_brief"`, `questions`, the partial `brief`, and `nextStep`, before any catalogue lookup. This applies equally to native MCP and the JSON HTTP API, including direct component lookup and install plans. It is not an MCP error or a server-initiated elicitation request.

The two questions are:

1. **intent:** What are you building, for whom, and what should visitors do? Include required sections/interactions and functional constraints.
2. **visualDirection:** What should this brand look and feel like? Include tone or references, available imagery/content, and styles or patterns to avoid.

The consuming agent answers from the current user brief and project context. It asks the user only for material missing details. For a small component change, the intent and existing project design are sufficient. When the user delegates design choices, the agent may state assumptions without inventing brand facts.

Retry the same tool with both answers and its original arguments. Partial answers return only the missing question. Include the brief on every subsequent call and update it when requirements change; there is no session state, token, or shared memory. A complete brief preserves each tool's catalogue-result shape described below. The guard checks presence, not truth or design quality. The agent translates the answers into explicit search preferences and evaluates candidates against the full brief; the server does not infer tone or useCase from prose.

Example first call: `get_conventions({})` returns:

```json
{
  "status": "needs_brief",
  "questions": [
    {"field": "intent", "question": "What are you building, for whom, and what should visitors do? Include the required sections or interactions and any functional constraints."},
    {"field": "visualDirection", "question": "What should this brand look and feel like? Include desired tone or references, available imagery/content, and styles or patterns to avoid."}
  ],
  "brief": {"intent": "", "visualDirection": ""},
  "nextStep": "Repeat the same tool call with both brief fields answered, retaining its other arguments. ..."
}
```

The shared schema and questions live in `packages/mcp/src/discovery.ts`; `executeCatalogueTool` enforces the guard. Protocol discovery (`initialize`, `tools/list`, `GET /mcp`) stays available without a brief. Static registry downloads and CLI `add` remain noninteractive; the installed skill directs agents through discovery before selection.

### `list_components`

Arguments: optional `category` (`atoms` \| `marketing` \| `dashboard`).

Returns the registry index array, optionally filtered by `item.category === args.category`.

### `search_components`

Arguments:

- `query`: string, default `""`; section intent or component name.
- `category`: optional `atoms` | `marketing` | `dashboard` filter.
- `sectionCategory`: optional case-insensitive exact section-role filter (for example `hero`).
- `tone`: preferred tone strings, default `[]`.
- `useCase`: optional desired use case.
- `visualWeight`: optional preference, `low` | `medium` | `high`.
- `limit`: integer 1–50, default 8.
- `offset`: non-negative integer, default 0.

With a complete brief, returns an array of registry index items, each extended with `match: { score, matches, conflicts, missingMetadata }`. Advance `offset` by `limit`; a short page or `[]` means the results are exhausted. Category and section role are filters; brand preferences rank rather than exclude candidates with missing metadata.

Search normalizes case and punctuation, matches query words across name, displayName, sectionCategory, tags, description, purpose, bestFor, tone, and industries, and requires at least one query-word hit when the query is nonempty. Per query word, the highest matching field weight counts: name/section 6, tags 4, bestFor/tone 3, industries 2, description/purpose 1. Coverage adds up to 10; an exact normalized component name adds 100. Each exact preferred tone adds 6, each use-case word found in bestFor adds 3, and matching visualWeight adds 4. A whole avoidFor phrase present in the supplied context or a visualWeight mismatch costs 12 and appears in conflicts. Ties sort by name; empty queries browse by preference score then name.

This is lexical ranking, not semantic or visual judgment. Unmatched avoidFor warnings remain in the returned metadata for agent review; missing metadata is reported, not treated as evidence of suitability. Inspect source, examples, and previews before choosing. For example:

```json
{"brief":{"intent":"Photography portfolio for art directors; show projects and invite enquiries.","visualDirection":"Restrained editorial layout with supplied photography; avoid dashboard chrome."},"query":"hero","category":"marketing","tone":["editorial","restrained"],"useCase":"creative portfolios","visualWeight":"medium","limit":12,"offset":0}
```

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

Accepts the shared `brief` argument only. Without it, returns the discovery questions. With both answers, returns a static object with the existing `tailwind`, `theme`, `alias`, and `naming` fields plus `selection` and `customization` arrays. These describe:

- Establishing a brand brief and visual direction before selecting blocks.
- Comparing tone, bestFor, avoidFor, visualWeight, layout, slots, and capabilities; inspecting alternatives and broadening search.
- Installing pristine source, then adapting local composition, markup, typography, spacing, imagery, and motion to the brief.
- Defining brand-specific semantic token values; shared palettes and sample presets are optional.
- Replacing demo branding and unsupported proof claims and reviewing desktop/mobile and supported themes.

The same workflow is shipped in the CLI's consumer templates. Tool descriptions surface it even before an agent reads the skill.

### `get_category_overview`

Arguments: `category` (`atoms` | `marketing` | `dashboard`, required).

Returns `{ category, rules, components }` where `components` is the index filtered to that category. `rules` is a hardcoded string:

- `atoms` → `"Atoms may depend on other atoms, never marketing or dashboard."`
- `marketing` / `dashboard` → `"May compose atoms and components from the same category, never the other feature category."`

Composition rules match [adding-a-component.md](adding-a-component.md) and root `AGENTS.md`.

## Agent use

The flow the showcase home page advertises, and the one `jabkit init` writes into a consumer `SKILL.md`:

1. `get_conventions`; answer the two discovery questions and retry with the completed `brief`. Carry that brief on all following calls.
2. `search_components` per section with brand preferences; compare alternatives and inspect `get_component` source/examples. Review all avoidFor metadata, not only scored conflicts. Broaden search or compose atoms when no block fits.
3. `get_install_plan`; show the plan and check local files for overwrite risks.
4. Install with the CLI (or write `files[]` from JSON), then adapt source and brand tokens after the pristine checkpoint. Replace demo content and review the actual page.

Existing consumers receive search/convention changes when the showcase is deployed. Generated local guidance needs the updated CLI release and a rerun of `init`; see [cli.md](cli.md). Older servers can be used with `list_components` and manual metadata comparison.

## Limitations

- Read-only by design.
- No persistent sessions or server-initiated notifications.
- Search ranking is lexical and depends on authored metadata quality; it cannot guarantee brand fit. Search pages default to 8 and allow up to 50; `list_components` has no pagination.
- `filesToOverwrite` is always `[]`.
- `lib/mcp-tools.ts` maintains human-facing reference examples; keep it in step with the schemas and operations.
