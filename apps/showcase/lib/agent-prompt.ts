import { DEFAULT_SITE_DOMAIN } from "common/base";

export function agentPrompt(name: string) {
  return `Add the JabKit component "${name}" to this project.\n\n1. Fetch https://${DEFAULT_SITE_DOMAIN}/r/${name}.json\n2. Recursively fetch registryDependencies.\n3. Write files[] to src/components/jabkit/, preserving their paths.\n4. Install dependencies, apply light cssVars under :root and dark cssVars under .dark.\n5. Run a type check.`;
}

export function skillCommand(name: string) {
  return `/jabkit-component ${name}`;
}

export function installPlanCurl(name: string) {
  return `curl -X POST https://${DEFAULT_SITE_DOMAIN}/mcp \\
  -H "Content-Type: application/json" \\
  -d '{"tool":"get_install_plan","arguments":{"names":["${name}"]}}'`;
}
