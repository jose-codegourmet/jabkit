import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import {
  componentCaptureMeta,
  componentSourceHash,
  isGifStory,
  type PreviewAssetsManifest,
  pipelineVersion,
  previewsRoot,
  type RegistryIndexItem,
  registryRoot,
  requiredMarketingStories,
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
const marketingCoverage: string[] = [];

for (const item of registry) {
  const entry = manifest.components[item.name];
  if (!entry) {
    problems.push(`${item.name}: missing preview asset manifest entry`);
    if (item.category === "marketing")
      marketingCoverage.push(`${item.name}\t(missing)\t-\t-\tfail`);
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
  if (item.category === "marketing") {
    const capture = await componentCaptureMeta(item);
    for (const story of requiredMarketingStories) {
      const storyAssets = entry.assets.filter((asset) => asset.story === story);
      if (!storyAssets.length) {
        problems.push(
          `${item.name}/${story}: missing required marketing asset`,
        );
        marketingCoverage.push(`${item.name}\t${story}\t-\t-\tmissing`);
        continue;
      }
      if (
        isGifStory(capture, story) &&
        !storyAssets.some(
          (asset) => asset.format === "gif" || asset.file.endsWith(".gif"),
        )
      ) {
        problems.push(
          `${item.name}/${story}: motion summary requires an animated GIF`,
        );
      }
      for (const asset of storyAssets) {
        const format =
          asset.format ?? (asset.file.endsWith(".gif") ? "gif" : "webp");
        const present = await fileExists(path.join(previewsRoot, asset.file));
        marketingCoverage.push(
          `${item.name}\t${story}\t${asset.theme}\t${format}\t${present ? "ok" : "missing"}`,
        );
      }
    }
  }
}

console.log("Marketing preview coverage");
console.log("component\tstory\ttheme\tformat\tstatus");
if (marketingCoverage.length) console.log(marketingCoverage.join("\n"));
else console.log("(no marketing components)");

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log("Preview asset verification passed.");
