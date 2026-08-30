import { registryEntry, registryIndex } from "../../lib/registry";

type RequestBody = { tool?: string; arguments?: Record<string, unknown> };
const tools = [
  "list_components",
  "search_components",
  "get_component",
  "get_install_plan",
  "get_conventions",
  "get_category_overview",
];

export async function GET() {
  return Response.json({ name: "JabKit MCP", tools });
}
export async function POST(request: Request) {
  const { tool, arguments: args = {} } = (await request.json()) as RequestBody;
  const index = await registryIndex();
  if (tool === "list_components")
    return Response.json(
      index.filter((item) => !args.category || item.category === args.category),
    );
  if (tool === "search_components") {
    const query = String(args.query ?? "").toLowerCase();
    return Response.json(
      index
        .filter((item) =>
          [item.name, item.displayName, item.description, ...item.tags]
            .join(" ")
            .toLowerCase()
            .includes(query),
        )
        .slice(0, 8),
    );
  }
  if (tool === "get_component") {
    const item = await registryEntry(String(args.name));
    return item
      ? Response.json(
          args.withExamples === false ? { ...item, examples: [] } : item,
        )
      : Response.json({ error: "Not found" }, { status: 404 });
  }
  if (tool === "get_install_plan") {
    const names = Array.isArray(args.names) ? args.names.map(String) : [];
    const seen = new Set<string>();
    const resolved = [] as NonNullable<
      Awaited<ReturnType<typeof registryEntry>>
    >[];
    async function walk(name: string) {
      if (seen.has(name)) return;
      seen.add(name);
      const item = await registryEntry(name);
      if (!item) throw new Error(`Unknown component: ${name}`);
      for (const dependency of item.registryDependencies)
        await walk(dependency);
      resolved.push(item);
    }
    try {
      for (const name of names) await walk(name);
      const targetDir = String(args.targetDir ?? "src/components/jabkit");
      return Response.json({
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
      });
    } catch (error) {
      return Response.json(
        { error: error instanceof Error ? error.message : "Plan failed" },
        { status: 400 },
      );
    }
  }
  if (tool === "get_conventions")
    return Response.json({
      tailwind: "Tailwind CSS v4 with semantic --jk-* tokens",
      theme:
        "Class-based .dark mode. Use bg-background, text-foreground, border-border.",
      alias: "@/components/jabkit",
      naming: "kebab-case folders with PascalCase-prefixed files",
    });
  if (tool === "get_category_overview") {
    const category = String(args.category);
    return Response.json({
      category,
      rules:
        category === "atoms"
          ? "Atoms do not depend on other JabKit components."
          : "May compose atoms and components from the same category, never the other feature category.",
      components: index.filter((item) => item.category === category),
    });
  }
  return Response.json({ error: "Unknown tool", tools }, { status: 400 });
}
