import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
import { briefSchema, discoveryInstructions } from "./discovery";

export { getDiscoveryRequest } from "./discovery";

const category = z.enum(["atoms", "marketing", "dashboard"]);
const componentName = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
  message: "Expected a component name such as button or hero-section-5",
});

export const jabkitToolDefinitions = {
  list_components: {
    description: "List JabKit components, optionally filtered by category.",
    inputSchema: z.strictObject({
      brief: briefSchema,
      category: category.optional(),
    }),
  },
  search_components: {
    description:
      "Rank candidates by section intent and brand fit. Search metadata as well as names; pass tone, useCase, and visualWeight from the brand brief. Inspect match reasons and avoidFor conflicts, compare source/layout before selecting, and paginate with offset. Scores are lexical evidence, not design verdicts.",
    inputSchema: z.strictObject({
      brief: briefSchema,
      query: z.string().default(""),
      category: category.optional(),
      sectionCategory: z.string().trim().min(1).optional(),
      tone: z.array(z.string().trim().min(1)).default([]),
      useCase: z.string().trim().min(1).optional(),
      visualWeight: z.enum(["low", "medium", "high"]).optional(),
      limit: z.number().int().min(1).max(50).default(8),
      offset: z.number().int().min(0).default(0),
    }),
  },
  get_component: {
    description:
      "Read source, examples, layout, slots, capabilities, and brand-fit metadata. Compare shortlisted candidates before installing; demo brands, copy, and media must be adapted to the user's brief.",
    inputSchema: z.strictObject({
      brief: briefSchema,
      name: componentName,
      withExamples: z.boolean().optional(),
    }),
  },
  get_install_plan: {
    description:
      "Plan source files and npm dependencies for one or more components. Does not write files.",
    inputSchema: z.strictObject({
      brief: briefSchema,
      names: z
        .array(componentName, {
          error:
            "names is required and must be a non-empty array of component names",
        })
        .min(1, "names must contain at least one component"),
      targetDir: z.string().trim().min(1).default("src/components/jabkit"),
    }),
  },
  get_conventions: {
    description:
      "Start here for brand-led selection, source adaptation, semantic theme customization, and naming conventions. Read before selecting components for a branded website.",
    inputSchema: z.strictObject({ brief: briefSchema }),
  },
  get_category_overview: {
    description: "Read the composition rules and components for a category.",
    inputSchema: z.strictObject({ brief: briefSchema, category }),
  },
};

export type JabkitTool = keyof typeof jabkitToolDefinitions;
export const jabkitTools = Object.keys(jabkitToolDefinitions) as JabkitTool[];

export class CatalogueError extends Error {
  constructor(
    message: string,
    public readonly status = 400,
  ) {
    super(message);
  }
}

export function parseToolArguments<T extends JabkitTool>(
  name: T,
  args: unknown,
) {
  const parsed = jabkitToolDefinitions[name].inputSchema.safeParse(args);
  if (!parsed.success) {
    throw new CatalogueError(
      parsed.error.issues
        .map(
          (issue) => `${issue.path.join(".") || "arguments"}: ${issue.message}`,
        )
        .join("; "),
    );
  }
  return parsed.data as z.output<
    (typeof jabkitToolDefinitions)[T]["inputSchema"]
  >;
}

type ExecuteTool = (name: JabkitTool, args: unknown) => Promise<unknown>;

export function createJabkitServer(executeTool: ExecuteTool) {
  const server = new McpServer({ name: "JabKit", version: "0.1.0" });
  for (const name of jabkitTools) {
    const definition = jabkitToolDefinitions[name];
    server.registerTool(
      name,
      {
        description: `${definition.description} ${discoveryInstructions}`,
        inputSchema: definition.inputSchema,
        annotations: {
          readOnlyHint: true,
          destructiveHint: false,
          idempotentHint: true,
          openWorldHint: false,
        },
      },
      async (args: unknown): Promise<CallToolResult> => {
        try {
          const result = await executeTool(name, args);
          return { content: [{ type: "text", text: JSON.stringify(result) }] };
        } catch (error) {
          return {
            isError: true,
            content: [
              {
                type: "text",
                text:
                  error instanceof CatalogueError
                    ? error.message
                    : "Unable to read the JabKit catalogue",
              },
            ],
          };
        }
      },
    );
  }
  return server;
}

/** One server per request: no sessions or in-memory state across deployments. */
export async function handleMcpRequest(
  request: Request,
  executeTool: ExecuteTool,
  parsedBody: unknown,
) {
  const server = createJabkitServer(executeTool);
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
  });
  try {
    await server.connect(transport);
    return await transport.handleRequest(request, { parsedBody });
  } finally {
    await server.close();
  }
}
