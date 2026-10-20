import {
  CatalogueError,
  handleMcpRequest,
  type JabkitTool,
  jabkitTools,
} from "@jabkit/mcp";
import { DEFAULT_SITE_DOMAIN } from "../../common/base";
import { executeCatalogueTool } from "../../lib/catalogue-tools";

export const runtime = "nodejs";

function validateOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return;
  const allowed = new Set([
    `https://${DEFAULT_SITE_DOMAIN}`,
    ...(process.env.MCP_ALLOWED_ORIGINS ?? "")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean),
  ]);
  const url = new URL(request.url);
  if (
    process.env.NODE_ENV !== "production" &&
    ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname)
  ) {
    // Next may normalize a loopback request's URL to localhost.
    for (const hostname of ["localhost", "127.0.0.1", "[::1]"]) {
      const local = new URL(url.origin);
      local.hostname = hostname;
      allowed.add(local.origin);
    }
  }
  if (!allowed.has(origin))
    return Response.json({ error: "Forbidden origin" }, { status: 403 });
}

export async function GET(request: Request) {
  const forbidden = validateOrigin(request);
  if (forbidden) return forbidden;
  // No server-initiated SSE stream; keep the original JSON discovery response.
  if (request.headers.get("accept")?.includes("text/event-stream")) {
    return new Response(null, { status: 405, headers: { Allow: "POST" } });
  }
  return Response.json({ name: "JabKit MCP", tools: jabkitTools });
}

export async function POST(request: Request) {
  const forbidden = validateOrigin(request);
  if (forbidden) return forbidden;
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      {
        jsonrpc: "2.0",
        id: null,
        error: { code: -32700, message: "Parse error: invalid JSON" },
      },
      { status: 400 },
    );
  }
  // Existing HTTP integrations retain { tool, arguments } and plain JSON results.
  // Anything with JSON-RPC fields goes through the SDK's protocol validation.
  if (
    body &&
    typeof body === "object" &&
    !Array.isArray(body) &&
    "tool" in body &&
    !("jsonrpc" in body) &&
    !("method" in body)
  ) {
    if (
      typeof body.tool !== "string" ||
      !jabkitTools.includes(body.tool as JabkitTool)
    ) {
      return Response.json(
        { error: "Unknown tool", tools: jabkitTools },
        { status: 400 },
      );
    }
    if (
      Object.keys(body).some((key) => key !== "tool" && key !== "arguments")
    ) {
      return Response.json(
        { error: "Only tool and arguments are accepted" },
        { status: 400 },
      );
    }
    try {
      return Response.json(
        await executeCatalogueTool(
          body.tool as JabkitTool,
          "arguments" in body ? body.arguments : {},
        ),
      );
    } catch (error) {
      return Response.json(
        {
          error:
            error instanceof CatalogueError
              ? error.message
              : "Unable to read the JabKit catalogue",
        },
        { status: error instanceof CatalogueError ? error.status : 500 },
      );
    }
  }
  return handleMcpRequest(request, executeCatalogueTool, body);
}
