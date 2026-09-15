import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const systems = [
  "minimal",
  "neo-brutalism",
  "editorial",
  "luxury",
  "retro",
] as const;
const sourceExtensions = [".ts", ".tsx", ".js", ".jsx"];
const ignoredDirectories = new Set([".next", "node_modules"]);
const arguments_ = process.argv.slice(2);
const dryRun = arguments_.includes("--dry");
const filesIndex = arguments_.indexOf("--files");
const baseIndex = arguments_.indexOf("--base");

function readOption(index: number, option: string) {
  if (index === -1) return null;
  const value = arguments_[index + 1];
  if (!value || value.startsWith("--")) {
    throw new Error(`${option} requires a value`);
  }
  return value;
}

function toRepositoryPath(filePath: string) {
  return path.relative(root, filePath).split(path.sep).join("/");
}

function collectSourceFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      return ignoredDirectories.has(entry.name)
        ? []
        : collectSourceFiles(entryPath);
    }
    return sourceExtensions.includes(path.extname(entry.name))
      ? [entryPath]
      : [];
  });
}

function readImports(filePath: string) {
  const source = readFileSync(filePath, "utf8");
  const imports = new Set<string>();
  const patterns = [
    /\bfrom\s*["']([^"']+)["']/g,
    /\bimport\s*["']([^"']+)["']/g,
    /\bimport\(\s*["']([^"']+)["']\s*\)/g,
  ];

  for (const pattern of patterns) {
    for (const match of source.matchAll(pattern)) imports.add(match[1]);
  }
  return imports;
}

function resolveModule(candidate: string) {
  const candidates = [
    candidate,
    ...sourceExtensions.map((extension) => `${candidate}${extension}`),
    ...sourceExtensions.map((extension) =>
      path.join(candidate, `index${extension}`),
    ),
  ];
  return candidates.find(
    (filePath) => existsSync(filePath) && statSync(filePath).isFile(),
  );
}

function resolveUiImport(importer: string, specifier: string) {
  if (specifier.startsWith("@/")) {
    return resolveModule(
      path.join(root, "packages/ui/src", specifier.slice(2)),
    );
  }
  if (specifier.startsWith(".")) {
    return resolveModule(path.resolve(path.dirname(importer), specifier));
  }
  return undefined;
}

function uiSourceFilesFor(system: (typeof systems)[number]) {
  const appDirectory = path.join(root, "apps", system);
  const queue = collectSourceFiles(appDirectory);
  const visited = new Set<string>();
  const uiFiles = new Set<string>();
  const uiRoot = path.join(root, "packages/ui/src") + path.sep;

  while (queue.length > 0) {
    const current = queue.pop();
    if (!current || visited.has(current)) continue;
    visited.add(current);

    for (const specifier of readImports(current)) {
      const resolved = resolveUiImport(current, specifier);
      if (!resolved || visited.has(resolved)) continue;
      if (resolved.startsWith(uiRoot)) uiFiles.add(toRepositoryPath(resolved));
      queue.push(resolved);
    }
  }

  return uiFiles;
}

function changedFiles() {
  const explicitFiles = readOption(filesIndex, "--files");
  if (explicitFiles) {
    return explicitFiles
      .split(",")
      .map((filePath) => filePath.trim())
      .filter(Boolean);
  }

  const base = readOption(baseIndex, "--base");
  if (!base) {
    throw new Error("Pass --base <git-ref> or --files <comma-separated paths>");
  }
  const commands = [
    ["diff", "--name-only", `${base}...HEAD`],
    ["diff", "--name-only", "--cached"],
    ["diff", "--name-only"],
    ["ls-files", "--others", "--exclude-standard"],
  ];
  return [
    ...new Set(
      commands.flatMap((command) =>
        execFileSync("git", command, { cwd: root, encoding: "utf8" })
          .split("\n")
          .filter(Boolean),
      ),
    ),
  ];
}

function allSystemsAreAffected(filePath: string) {
  return (
    filePath === "package.json" ||
    filePath === "pnpm-lock.yaml" ||
    filePath === "pnpm-workspace.yaml" ||
    filePath === "turbo.json" ||
    filePath.startsWith("packages/tokens/")
  );
}

const changed = changedFiles();
const affected = new Set<(typeof systems)[number]>();
const importedUiFiles = new Map(
  systems.map((system) => [system, uiSourceFilesFor(system)]),
);

for (const filePath of changed) {
  if (allSystemsAreAffected(filePath)) {
    for (const system of systems) affected.add(system);
    break;
  }

  for (const system of systems) {
    if (filePath.startsWith(`apps/${system}/`)) {
      affected.add(system);
      continue;
    }
    if (importedUiFiles.get(system)?.has(filePath)) affected.add(system);
  }
}

const selected = systems.filter((system) => affected.has(system));
console.log(
  selected.length === 0
    ? "No design-system sample builds are affected."
    : `Affected design-system sample builds: ${selected.join(", ")}`,
);

if (!dryRun && selected.length > 0) {
  execFileSync(
    "pnpm",
    selected
      .flatMap((system) => ["--filter", `@jabkit/${system}`])
      .concat("build"),
    { cwd: root, stdio: "inherit" },
  );
}
