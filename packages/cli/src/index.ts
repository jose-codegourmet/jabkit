#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

type RegistryFile = { path: string; type: string; content: string };
type RegistryEntry = {
  name: string;
  dependencies: string[];
  registryDependencies: string[];
  cssVars?: { light: Record<string, string>; dark: Record<string, string> };
  files: RegistryFile[];
};
type Config = {
  componentsDir: string;
  alias: string;
  registry: string;
  formatter: "biome";
  theme: { mode: "class"; provider: "next-themes" };
};
const root = process.cwd();
const configPath = path.join(root, "jabkit.config.json");
const hash = (text: string) => createHash("sha256").update(text).digest("hex");

function usage() {
  console.log(
    "jabkit init | add <name...> [--force] [--dry-run] | upgrade [name]",
  );
}
async function loadConfig(): Promise<Config> {
  if (!existsSync(configPath))
    throw new Error("Missing jabkit.config.json. Run `jabkit init` first.");
  return JSON.parse(await readFile(configPath, "utf8"));
}
async function getEntry(
  registry: string,
  name: string,
): Promise<RegistryEntry> {
  const url = `${registry.replace(/\/$/, "")}/r/${name}.json`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Unable to fetch ${name} from ${url}`);
  return response.json() as Promise<RegistryEntry>;
}
async function getComponentNames(registry: string) {
  const url = `${registry.replace(/\/$/, "")}/r/index.json`;
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`Unable to fetch component index from ${url}`);
  const index = (await response.json()) as Array<{ name: string }>;
  return index.map((entry) => entry.name);
}
function rewriteImports(content: string, alias: string) {
  return content
    .replaceAll("@/components/jabkit", alias)
    .replaceAll("@/lib/", `${alias}/lib/`);
}
function tokenBlock(vars?: {
  light: Record<string, string>;
  dark: Record<string, string>;
}) {
  if (
    !vars ||
    (!Object.keys(vars.light).length && !Object.keys(vars.dark).length)
  )
    return "";
  const render = (values: Record<string, string>) =>
    Object.entries(values)
      .map(([key, value]) => `  ${key}: ${value};`)
      .join("\n");
  return `\n\n/* JabKit component variables */\n:root {\n${render(vars.light)}\n}\n\n.dark {\n${render(vars.dark)}\n}\n`;
}
async function init() {
  const config: Config = {
    componentsDir: "src/components/jabkit",
    alias: "@/components/jabkit",
    registry: process.env.JABKIT_REGISTRY ?? "http://localhost:3000",
    formatter: "biome",
    theme: { mode: "class", provider: "next-themes" },
  };
  await writeFile(configPath, `${JSON.stringify(config, null, 2)}\n`);
  await mkdir(path.join(root, ".github/skills/jabkit-component"), {
    recursive: true,
  });
  await writeFile(
    path.join(root, ".github/skills/jabkit-component/SKILL.md"),
    `---\nname: jabkit-component\ndescription: Add UI components from the JabKit library when the user asks for a hero, pricing section, button, dashboard panel, or another reusable UI component.\n---\n\n# JabKit component\n\nSearch the JabKit MCP catalogue first. Show the install plan before writing. Install verbatim with \`npx jabkit add <name>\`, then apply requested modifications separately. Use semantic tokens rather than hardcoded colors.\n`,
  );
  const agentsPath = path.join(root, "AGENTS.md");
  const snippet =
    "\n## UI components (JabKit)\n\nThis project uses JabKit. Search its MCP catalogue before hand-writing a reusable UI component. Installed files live in `src/components/jabkit/`; use semantic token classes, never hardcoded colors.\n";
  const currentAgents = existsSync(agentsPath)
    ? await readFile(agentsPath, "utf8")
    : "";
  if (!currentAgents.includes("UI components (JabKit)"))
    await writeFile(agentsPath, `${currentAgents}${snippet}`);
  console.log(
    "JabKit initialized. Configure your MCP client to use your deployed /mcp endpoint.",
  );
}
async function add(
  names: string[],
  force: boolean,
  dryRun: boolean,
  all: boolean,
) {
  const config = await loadConfig();
  const registry = process.env.JABKIT_REGISTRY ?? config.registry;
  const requestedNames = all ? await getComponentNames(registry) : names;
  if (!requestedNames.length)
    throw new Error("Pass one or more component names.");
  const resolved: RegistryEntry[] = [];
  const seen = new Set<string>();
  async function resolve(name: string) {
    if (seen.has(name)) return;
    seen.add(name);
    const entry = await getEntry(registry, name);
    for (const dependency of entry.registryDependencies)
      await resolve(dependency);
    resolved.push(entry);
  }
  for (const name of requestedNames) await resolve(name);
  const manifestFiles: Record<string, string> = {};
  for (const entry of resolved)
    for (const file of entry.files) {
      const destination = path.join(root, config.componentsDir, file.path);
      if (existsSync(destination) && !force)
        throw new Error(
          `${path.relative(root, destination)} already exists. Re-run with --force after reviewing it.`,
        );
      console.log(
        `${dryRun ? "would write" : "write"} ${path.relative(root, destination)}`,
      );
      if (!dryRun) {
        await mkdir(path.dirname(destination), { recursive: true });
        const content = rewriteImports(file.content, config.alias);
        await writeFile(destination, content);
        manifestFiles[path.relative(root, destination)] = hash(content);
      }
    }
  const variables = {
    light: Object.assign(
      {},
      ...resolved.map((entry) => entry.cssVars?.light ?? {}),
    ),
    dark: Object.assign(
      {},
      ...resolved.map((entry) => entry.cssVars?.dark ?? {}),
    ),
  };
  if (
    !dryRun &&
    (Object.keys(variables.light).length || Object.keys(variables.dark).length)
  ) {
    const css = path.join(root, "src/app/globals.css");
    if (existsSync(css))
      await writeFile(
        css,
        `${await readFile(css, "utf8")}${tokenBlock(variables)}`,
      );
  }
  if (!dryRun) {
    const manifestPath = path.join(root, ".jabkit/manifest.json");
    await mkdir(path.dirname(manifestPath), { recursive: true });
    await writeFile(
      manifestPath,
      `${JSON.stringify({ components: resolved.map((entry) => ({ name: entry.name, files: manifestFiles })), updatedAt: new Date().toISOString() }, null, 2)}\n`,
    );
  }
  const deps = [...new Set(resolved.flatMap((entry) => entry.dependencies))];
  if (deps.length) {
    if (dryRun)
      console.log(`would install dependencies: pnpm add ${deps.join(" ")}`);
    else {
      const install = spawnSync("pnpm", ["add", ...deps], {
        cwd: root,
        stdio: "inherit",
      });
      if (install.status !== 0)
        throw new Error("Failed to install component dependencies.");
    }
  }
}
async function upgrade() {
  console.log(
    "Upgrade protection is scaffolded through .jabkit/manifest.json. A registry-aware three-way merge lands in the next implementation pass.",
  );
}

const [command, ...args] = process.argv.slice(2);
try {
  if (command === "init") await init();
  else if (command === "add")
    await add(
      args.filter((arg) => !arg.startsWith("--")),
      args.includes("--force"),
      args.includes("--dry-run"),
      args.includes("--all"),
    );
  else if (command === "upgrade") await upgrade();
  else usage();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
