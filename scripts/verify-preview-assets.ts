import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import {
  componentSourceHash,
  type PreviewAssetsManifest,
  pipelineVersion,
  previewsRoot,
  type RegistryIndexItem,
  registryRoot,
} from "./preview-assets";

async function fileExists(filePath: string) {
  try {
    return (await stat(filePath)).isFile();
  } catch {
    return false;
  }
}

let manifest: PreviewAssetsManifest;
try {
  manifest = JSON.parse(
    await readFile(path.join(previewsRoot, "manifest.json"), "utf8"),
  ) as PreviewAssetsManifest;
} catch {
  console.error("Preview assets manifest is missing; run pnpm previews:build");
  process.exit(1);
}

const registry = JSON.parse(
  await readFile(path.join(registryRoot, "index.json"), "utf8"),
) as RegistryIndexItem[];
const problems: string[] = [];
for (const item of registry) {
  const entry = manifest.components[item.name];
  if (!entry) {
    problems.push(`${item.name}: missing preview asset manifest entry`);
    continue;
  }
  if (entry.pipelineVersion !== pipelineVersion)
    problems.push(`${item.name}: stale preview pipeline version`);
  const sourceHash = await componentSourceHash(item);
  if (entry.sourceHash !== sourceHash)
    problems.push(`${item.name}: stale preview source hash`);
  for (const asset of entry.assets) {
    if (!(await fileExists(path.join(previewsRoot, asset.file))))
      problems.push(`${item.name}: missing preview asset ${asset.file}`);
  }
}

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log("Preview asset verification passed.");
