/**
 * Reference copy for the `/agents` pages. Mirrors the behaviour of
 * `packages/mcp` schemas and `lib/catalogue-tools.ts`; keep them in step (see docs/mcp.md).
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

const toolReference: McpTool[] = [
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
    summary: "Rank candidates by section intent and brand fit.",
    description:
      "Searches names, tags, descriptions, purpose, and design metadata. Returns ranked index entries with match scores, evidence, conflicts, and missing metadata. Scores are lexical hints; compare source, layout, and all avoidFor warnings before selecting.",
    arguments: [
      {
        name: "query",
        type: "string",
        notes: 'Section intent or name. Default "".',
      },
      {
        name: "category",
        type: "string",
        notes: "Optional. atoms | marketing | dashboard.",
      },
      {
        name: "sectionCategory",
        type: "string",
        notes: "Optional exact section role, such as hero.",
      },
      {
        name: "tone",
        type: "string[]",
        notes: "Preferred tones; boosts metadata matches.",
      },
      {
        name: "useCase",
        type: "string",
        notes: "Desired use case; matches bestFor and checks avoidFor.",
      },
      {
        name: "visualWeight",
        type: "string",
        notes: "Optional preference: low | medium | high.",
      },
      { name: "limit", type: "integer", notes: "1–50, default 8." },
      {
        name: "offset",
        type: "integer",
        notes: "Non-negative, default 0. Advance by limit for later results.",
      },
    ],
    exampleArguments: {
      query: "hero",
      category: "marketing",
      tone: ["editorial", "restrained"],
      useCase: "creative portfolios",
      visualWeight: "medium",
      limit: 12,
    },
    response: `[
  { "name": "…", "tone": [ … ], "bestFor": [ … ], "avoidFor": [ … ],
    "match": { "score": 24, "matches": [ … ], "conflicts": [ … ],
      "missingMetadata": [ … ] }, … },
  …  // up to limit; [] when exhausted
]`,
    errors: [],
    flowStep: "Step 2 of 4. Compare candidates against the brand direction.",
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
    flowStep: "Step 2 of 4. Inspect shortlisted source and examples.",
  },
  {
    name: "get_install_plan",
    summary: "Files, npm deps, and CSS variables to install.",
    description:
      "Walks registryDependencies depth-first, in the same order as the CLI. This is a plan, not an install.",
    arguments: [
      {
        name: "names",
        type: "string[]",
        notes: "Required. At least one component name; use names, not name.",
      },
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
    errors: [
      {
        status: 400,
        body: '{ "error": "names: names is required and must be a non-empty array of component names; …" }',
      },
      { status: 400, body: '{ "error": "Unknown component: …" }' },
    ],
    flowStep: "Step 3 of 4, after candidate comparison.",
  },
  {
    name: "get_conventions",
    summary: "Brand selection, adaptation, and project conventions.",
    description:
      "Start here. Returns token, theme, alias, and naming conventions plus selection and customization guidance. Define a brand direction, compare candidates, install pristine source, then adapt it.",
    arguments: [],
    exampleArguments: {},
    response: `{
  "tailwind": "Tailwind CSS v4 with semantic --jk-* tokens",
  "theme": "Class-based .dark mode. …",
  "alias": "@/components/jabkit",
  "naming": "kebab-case folders with PascalCase-prefixed files",
  "selection": [ "Establish the brand's audience, …", … ],
  "customization": [ "Show get_install_plan, …", … ]
}`,
    errors: [],
    flowStep: "Step 1 of 4. Establish the brand direction.",
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

export const mcpTools: McpTool[] = toolReference.map((tool) => ({
  ...tool,
  description: `${tool.description} Without both brief answers, returns status: "needs_brief" and discovery questions instead of this result. Answer from existing context, ask the user only for material gaps, and retry with the same brief on every call.`,
  arguments: [
    {
      name: "brief",
      type: "{ intent?: string; visualDirection?: string }",
      notes:
        "Both answers are needed for catalogue data: what you are building, for whom, and the desired action; then the brand's tone, references, assets, and styles to avoid. Missing/blank answers return questions. Reuse across this task.",
    },
    ...tool.arguments,
  ],
  exampleArguments: {
    brief: {
      intent:
        "Photography portfolio for art directors; show projects and invite enquiries.",
      visualDirection:
        "Restrained editorial layout with supplied photography; avoid dashboard chrome.",
    },
    ...tool.exampleArguments,
  },
}));

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
