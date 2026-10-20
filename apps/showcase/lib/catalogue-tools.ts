import {
  CatalogueError,
  getDiscoveryRequest,
  type JabkitTool,
  parseToolArguments,
} from "@jabkit/mcp";
import { searchCatalogue } from "./catalogue-search";
import { type RegistryEntry, registryEntry, registryIndex } from "./registry";

/** Shared implementation for native MCP and the original JSON HTTP API. */
export async function executeCatalogueTool(
  tool: JabkitTool,
  args: unknown,
): Promise<unknown> {
  const discovery = getDiscoveryRequest(parseToolArguments(tool, args).brief);
  if (discovery) return discovery;
  switch (tool) {
    case "list_components": {
      const { category } = parseToolArguments(tool, args);
      return (await registryIndex()).filter(
        (item) => !category || item.category === category,
      );
    }
    case "search_components": {
      return searchCatalogue(
        await registryIndex(),
        parseToolArguments(tool, args),
      );
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
        selection: [
          "Establish the brand's audience, offering, conversion goal, tone, visual references, assets, and constraints from the user's brief. State assumptions for missing details.",
          "Define a direction for typography, palette, imagery, layout rhythm, density, and motion before selecting blocks. A sample site or preset is a reference, not the brand.",
          "Search each needed section separately with query, category/sectionCategory, tone, useCase, and desired visualWeight. Compare plausible alternatives using tone, bestFor, avoidFor, visualWeight, layout, slots, and capabilities. Scores are lexical evidence only; review all avoidFor warnings semantically, including unmatched ones.",
          "Use limit/offset or list_components to broaden discovery. Missing metadata means unknown fit. Inspect shortlisted source, examples, and previews where available; explain the chosen fit, rejected alternatives, and required adaptations. If no block fits, compose atoms or adapt local source rather than forcing a familiar sample.",
        ],
        customization: [
          "Show get_install_plan, check local files for overwrite risks, then install pristine source with npx @jabkit/cli add <name>. Pristine is an installation checkpoint, not a restriction on the finished design.",
          "A request to fit a brand includes local changes to composition, markup, typography, spacing, borders, radii, imagery, and motion. Preserve accessibility, responsive behavior, and requested functionality.",
          "Semantic tokens are customizable roles: define brand-specific --jk-* values in the consumer theme for light and dark, then consume semantic classes. Raw color values belong in token definitions; default palettes and sample presets are optional. Token changes alone do not replace layout and content adaptation.",
          "Replace demo logos, brand names, copy, navigation, media, and proof claims, including defaults in nested components. Omit unsupported testimonials, metrics, and customer logos. Review desktop/mobile and supported themes against the brand direction before delivery.",
        ],
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
