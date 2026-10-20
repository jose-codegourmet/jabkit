import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

const category = z.enum(["atoms", "marketing", "dashboard"]);
const componentName = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
  message: "Expected a component name such as button or hero-section-5",
});

export const jabkitToolDefinitions = {
  list_components: {
    description: "List JabKit components, optionally filtered by category.",
    inputSchema: z.strictObject({ category: category.optional() }),
  },
  search_components: {
    description:
      "Search component names, descriptions, and tags. Returns at most eight matches.",
    inputSchema: z.strictObject({ query: z.string().default("") }),
  },
  get_component: {
    description:
      "Read a component's source files, dependencies, metadata, and examples.",
    inputSchema: z.strictObject({
      name: componentName,
      withExamples: z.boolean().optional(),
    }),
  },
  get_install_plan: {
    description:
      "Plan source files and npm dependencies for one or more components. Does not write files.",
    inputSchema: z.strictObject({
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
      "Read JabKit's semantic token, theme, import, and naming conventions.",
    inputSchema: z.strictObject({}),
  },
  get_category_overview: {
    description: "Read the composition rules and components for a category.",
    inputSchema: z.strictObject({ category }),
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
        description: definition.description,
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
