import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import type {
  ComponentCategory,
  ComponentMeta,
  RegistryComponent,
  RegistryFile,
} from "./index";

const root = path.resolve(import.meta.dirname, "../../..");
const componentsRoot = path.join(root, "packages/ui/src");
const libRoot = path.join(componentsRoot, "lib");
const registryRoot = path.join(root, "apps/showcase/public/r");
const categories: ComponentCategory[] = ["atoms", "marketing", "dashboard"];

async function componentExamples(stories: string) {
  const pattern =
    /export const (\w+):[\s\S]*?render:\s*\(\)\s*=>\s*\(([\s\S]*?)\n\s*\)\s*[},]/g;
  const results: Array<{ name: string; code: string }> = [];
  for (const match of stories.matchAll(pattern)) {
    if (match[1] !== "ThemeComparison")
      results.push({ name: match[1], code: match[2].trim() });
  }
  return results;
}

async function buildComponent(category: ComponentCategory, folder: string) {
  const componentDir = path.join(componentsRoot, category, folder);
  const fileNames = await readdir(componentDir);
  const metaFile = fileNames.find((file) => file.endsWith(".meta.ts"));
  const storyFile = fileNames.find((file) => file.endsWith(".stories.tsx"));
  if (!metaFile || !storyFile)
    throw new Error(
      `${category}/${folder} is missing registry metadata or stories`,
    );

  const meta = (await import(path.join(componentDir, metaFile)))
    ?.default as ComponentMeta;
  if (!meta) throw new Error(`${category}/${folder} does not export metadata`);
  if (meta.cssVars && (!meta.cssVars.light || !meta.cssVars.dark))
    throw new Error(`${meta.name} cssVars need light and dark values`);

  const files: RegistryFile[] = [];
  for (const fileName of fileNames) {
    if (
      fileName.endsWith(".stories.tsx") ||
      fileName.endsWith(".mocks.ts") ||
      fileName.endsWith(".meta.ts")
    )
      continue;
    const type =
      fileName === "index.ts"
        ? "index"
        : fileName.endsWith(".types.ts")
          ? "types"
          : "component";
    if (type === "component" || type === "types" || type === "index") {
      files.push({
        path: `${folder}/${fileName}`,
        type,
        content: await readFile(path.join(componentDir, fileName), "utf8"),
      });
    }
  }
  const stories = await readFile(path.join(componentDir, storyFile), "utf8");
  const libImports = new Set<string>();
  for (const source of files.map((file) => file.content)) {
    for (const match of source.matchAll(/from\s+["']@\/lib\/([^"']+)["']/g)) {
      libImports.add(match[1]);
    }
  }
  for (const importPath of libImports) {
    const sourcePath = path.join(libRoot, `${importPath}.ts`);
    try {
      files.push({
        path: `lib/${importPath}.ts`,
        type: "lib",
        content: await readFile(sourcePath, "utf8"),
      });
    } catch {
      throw new Error(
        `${meta.name} imports missing shared library ${importPath}`,
      );
    }
  }
  const component: RegistryComponent = {
    ...meta,
    category,
    files,
    examples: await componentExamples(stories),
  };
  await writeFile(
    path.join(registryRoot, `${meta.name}.json`),
    `${JSON.stringify(component, null, 2)}\n`,
  );
  return component;
}

await rm(registryRoot, { recursive: true, force: true });
await mkdir(registryRoot, { recursive: true });
const components: RegistryComponent[] = [];
for (const category of categories) {
  const categoryDir = path.join(componentsRoot, category);
  try {
    for (const folder of await readdir(categoryDir))
      components.push(await buildComponent(category, folder));
  } catch (error: unknown) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
  }
}
const index = components.map(
  ({
    name,
    displayName,
    category,
    description,
    tags,
    addedAt,
    dependencies,
    a11y,
  }) => ({
    name,
    displayName,
    category,
    description,
    tags,
    addedAt,
    dependencies,
    a11y,
  }),
);
await writeFile(
  path.join(registryRoot, "index.json"),
  `${JSON.stringify(index, null, 2)}\n`,
);
console.log(`Built registry for ${components.length} components.`);
