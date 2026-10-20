import { DEFAULT_SITE_DOMAIN } from "common/base";

export function agentPrompt(name: string) {
  return `Add the JabKit component "${name}" to this project.\n\n1. Fetch https://${DEFAULT_SITE_DOMAIN}/r/${name}.json\n2. Recursively fetch registryDependencies.\n3. Write files[] to src/components/jabkit/, preserving their paths.\n4. Install dependencies, apply light cssVars under :root and dark cssVars under .dark.\n5. Run a type check.`;
}

export function skillCommand(name: string) {
  return `/jabkit-component ${name}`;
}

export function installPlanCurl(name: string) {
  return mcpToolCurl("get_install_plan", { names: [name] });
}

export function mcpToolCurl(name: string, args: Record<string, unknown>) {
  return `curl -X POST https://${DEFAULT_SITE_DOMAIN}/mcp \\
  -H "Content-Type: application/json" \\
  -H "Accept: application/json, text/event-stream" \\
  -d '${JSON.stringify({ jsonrpc: "2.0", id: 1, method: "tools/call", params: { name, arguments: args } })}'`;
}
