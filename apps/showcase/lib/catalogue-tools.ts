import {
  CatalogueError,
  type JabkitTool,
  parseToolArguments,
} from "@jabkit/mcp";
import { type RegistryEntry, registryEntry, registryIndex } from "./registry";

/** Shared implementation for native MCP and the original JSON HTTP API. */
export async function executeCatalogueTool(
  tool: JabkitTool,
  args: unknown,
): Promise<unknown> {
  switch (tool) {
    case "list_components": {
      const { category } = parseToolArguments(tool, args);
      return (await registryIndex()).filter(
        (item) => !category || item.category === category,
      );
    }
    case "search_components": {
      const { query } = parseToolArguments(tool, args);
      return (await registryIndex())
        .filter((item) =>
          [item.name, item.displayName, item.description, ...item.tags]
            .join(" ")
            .toLowerCase()
            .includes(query.toLowerCase()),
        )
        .slice(0, 8);
    }
    case "get_component": {
      const { name, withExamples } = parseToolArguments(tool, args);
      const item = await registryEntry(name);
      if (!item) throw new CatalogueError("Not found", 404);
      return withExamples === false ? { ...item, examples: [] } : item;
    }
    case "get_install_plan": {
      const { names, targetDir } = parseToolArguments(tool, args);
      const seen = new Set<string>();
      const resolved: RegistryEntry[] = [];
      async function walk(name: string) {
        if (seen.has(name)) return;
        seen.add(name);
        const item = await registryEntry(name);
        if (!item) throw new CatalogueError(`Unknown component: ${name}`);
        for (const dependency of item.registryDependencies)
          await walk(dependency);
        resolved.push(item);
      }
      for (const name of names) await walk(name);
      return {
        filesToCreate: resolved.flatMap((item) =>
          item.files.map((file) => `${targetDir}/${file.path}`),
        ),
        filesToOverwrite: [],
        npmDeps: [...new Set(resolved.flatMap((item) => item.dependencies))],
        cssVars: {
          light: Object.assign(
            {},
            ...resolved.map((item) => item.cssVars?.light ?? {}),
          ),
          dark: Object.assign(
            {},
            ...resolved.map((item) => item.cssVars?.dark ?? {}),
          ),
        },
      };
    }
    case "get_conventions": {
      parseToolArguments(tool, args);
      return {
        tailwind: "Tailwind CSS v4 with semantic --jk-* tokens",
        theme:
          "Class-based .dark mode. Use bg-background, text-foreground, border-border.",
        alias: "@/components/jabkit",
        naming: "kebab-case folders with PascalCase-prefixed files",
      };
    }
    case "get_category_overview": {
      const { category } = parseToolArguments(tool, args);
      return {
        category,
        rules:
          category === "atoms"
            ? "Atoms may depend on other atoms, never marketing or dashboard."
            : "May compose atoms and components from the same category, never the other feature category.",
        components: (await registryIndex()).filter(
          (item) => item.category === category,
        ),
      };
    }
  }
}
