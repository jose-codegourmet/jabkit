import { type RegistryEntry, registryEntry } from "./registry";

export const DEFAULT_TARGET_DIR = "src/components/jabkit";

/** Same depth-first walk as the CLI and `get_install_plan`. */
export async function resolveInstall(names: string[]) {
  const seen = new Set<string>();
  const resolved: RegistryEntry[] = [];
  async function walk(name: string) {
    if (seen.has(name)) return;
    seen.add(name);
    const entry = await registryEntry(name);
    if (!entry) return;
    for (const dependency of entry.registryDependencies) await walk(dependency);
    resolved.push(entry);
  }
  for (const name of names) await walk(name);
  return {
    resolved,
    files: resolved.flatMap((entry) =>
      entry.files.map((file) => `${DEFAULT_TARGET_DIR}/${file.path}`),
    ),
    npmDeps: [...new Set(resolved.flatMap((entry) => entry.dependencies))],
  };
}
