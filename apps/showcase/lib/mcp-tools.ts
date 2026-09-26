/**
 * Reference copy for the `/agents` pages. Mirrors the behaviour of
 * `app/mcp/route.ts`; keep both in step (see docs/mcp.md).
 */
export type McpArgument = {
  name: string;
  type: string;
  notes: string;
};

export type McpTool = {
  name: string;
  summary: string;
  description: string;
  arguments: McpArgument[];
  exampleArguments: Record<string, unknown>;
  response: string;
  errors: Array<{ status: number; body: string }>;
  flowStep?: string;
};

export const mcpTools: McpTool[] = [
  {
    name: "list_components",
    summary: "The registry index, optionally by category.",
    description:
      "Returns the registry index array. Pass a category to narrow it. There is no pagination.",
    arguments: [
      {
        name: "category",
        type: "string",
        notes: "Optional. atoms | marketing | dashboard",
      },
    ],
    exampleArguments: { category: "atoms" },
    response: `[
  { "name": "button", "displayName": "Button",
    "category": "atoms", "tags": [ … ], … },
  …
]`,
    errors: [],
  },
  {
    name: "search_components",
    summary: "Search by name, tag, or description.",
    description:
      "Lowercases name, displayName, description, and tags, then matches the query as a substring. Returns at most eight hits.",
    arguments: [{ name: "query", type: "string", notes: 'Default ""' }],
    exampleArguments: { query: "hero" },
    response: `[
  { "name": "hero307", "displayName": "Hero 307", … },
  …  // at most 8
]`,
    errors: [],
    flowStep: "Step 1 of 4. Start here.",
  },
  {
    name: "get_component",
    summary: "One full registry document.",
    description:
      "Returns the complete {name}.json document: files, examples, dependencies, and metadata.",
    arguments: [
      { name: "name", type: "string", notes: "Required" },
      {
        name: "withExamples",
        type: "boolean",
        notes: "false replaces examples with []",
      },
    ],
    exampleArguments: { name: "button" },
    response: `{
  "name": "button",
  "files": [ { "path": "button/Button.tsx", … } ],
  "registryDependencies": [],
  "examples": [ … ]
}`,
    errors: [{ status: 404, body: '{ "error": "Not found" }' }],
    flowStep: "Step 2 of 4, after search_components.",
  },
  {
    name: "get_install_plan",
    summary: "Files, npm deps, and CSS variables to install.",
    description:
      "Walks registryDependencies depth-first, in the same order as the CLI. This is a plan, not an install.",
    arguments: [
      { name: "names", type: "string[]", notes: "Required" },
      {
        name: "targetDir",
        type: "string",
        notes: "Default src/components/jabkit",
      },
    ],
    exampleArguments: { names: ["button"] },
    response: `{
  "filesToCreate": [ ".../button/Button.tsx", … ],
  "filesToOverwrite": [],   // always empty
  "npmDeps": [ "clsx", "tailwind-merge" ],
  "cssVars": { "light": {}, "dark": {} }
}`,
    errors: [{ status: 400, body: '{ "error": "Unknown component: …" }' }],
    flowStep: "Step 2 of 4, after search_components.",
  },
  {
    name: "get_conventions",
    summary: "The static project ruleset.",
    description:
      "Returns a fixed object describing tokens, theming, the import alias, and file naming. Read it before generating classes.",
    arguments: [],
    exampleArguments: {},
    response: `{
  "tailwind": "Tailwind CSS v4 with semantic --jk-* tokens",
  "theme": "Class-based .dark mode. …",
  "alias": "@/components/jabkit",
  "naming": "kebab-case folders with PascalCase-prefixed files"
}`,
    errors: [],
    flowStep: "Step 3 of 4, before writing classes.",
  },
  {
    name: "get_category_overview",
    summary: "A category's rules and components.",
    description:
      "Returns the category, a hardcoded rules string, and the index filtered to that category.",
    arguments: [{ name: "category", type: "string", notes: "Required" }],
    exampleArguments: { category: "marketing" },
    response: `{
  "category": "marketing",
  "rules": "May compose atoms and components …",
  "components": [ … ]
}`,
    errors: [],
  },
];

export const mcpToolNames = mcpTools.map((tool) => tool.name);

export function findMcpTool(name: string) {
  return mcpTools.find((tool) => tool.name === name);
}

export function curlExample(tool: McpTool, origin = "") {
  const body = JSON.stringify(
    { tool: tool.name, arguments: tool.exampleArguments },
    null,
    2,
  )
    .split("\n")
    .map((line, index) => (index === 0 ? line : `    ${line}`))
    .join("\n");
  return `curl -X POST ${origin}/mcp \\
  -H "Content-Type: application/json" \\
  -d '${body}'`;
}

export function fetchExample(tool: McpTool, origin = "") {
  return `await fetch("${origin}/mcp", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(${JSON.stringify({ tool: tool.name, arguments: tool.exampleArguments })}),
}).then((response) => response.json());`;
}

export function promptExample(tool: McpTool, origin = "") {
  return `Call the JabKit catalogue: POST ${origin}/mcp with body
${JSON.stringify({ tool: tool.name, arguments: tool.exampleArguments })}
Show me the result before changing any files.`;
}
