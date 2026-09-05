import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const base = path.join(root, "packages/ui/src");
const categories = ["atoms", "marketing", "dashboard"];
const hardcodedColors =
  /\b(?:bg|text|border)-(?:white|black|gray|slate|zinc|neutral|stone)\b/;
const kebab = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/;
const problems: string[] = [];

for (const category of categories) {
  let folders: string[] = [];
  try {
    folders = await readdir(path.join(base, category));
  } catch {
    continue;
  }
  for (const folder of folders) {
    if (!kebab.test(folder)) {
      problems.push(`${category}/${folder}: folder must be kebab-case`);
      continue;
    }
    const name = folder
      .split("-")
      .map((part) => part[0].toUpperCase() + part.slice(1))
      .join("");
    const dir = path.join(base, category, folder);
    const files = await readdir(dir);
    for (const required of [
      `${name}.tsx`,
      `${name}.stories.tsx`,
      `${name}.preview.tsx`,
      `${name}.types.ts`,
      `${name}.meta.ts`,
      "index.ts",
    ]) {
      if (!files.includes(required))
        problems.push(`${category}/${folder}: missing ${required}`);
    }
    const component = await readFile(path.join(dir, `${name}.tsx`), "utf8");
    if (hardcodedColors.test(component))
      problems.push(
        `${category}/${folder}: contains a hardcoded Tailwind color`,
      );
    if (/from\s+["']\.\.\//.test(component))
      problems.push(`${category}/${folder}: import escapes component folder`);
    const index = await readFile(path.join(dir, "index.ts"), "utf8");
    if (
      index
        .split("\n")
        .some((line) => line.trim() && !line.trim().startsWith("export "))
    )
      problems.push(
        `${category}/${folder}: index.ts must contain re-exports only`,
      );
    const stories = await readFile(
      path.join(dir, `${name}.stories.tsx`),
      "utf8",
    );
    if (
      !stories.includes(
        `title: "${category[0].toUpperCase()}${category.slice(1)}/`,
      )
    )
      problems.push(
        `${category}/${folder}: story title does not match category`,
      );
    if (!stories.includes("ThemeComparison") || !stories.includes("render:"))
      problems.push(
        `${category}/${folder}: stories need render functions and ThemeComparison`,
      );
  }
}
if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log("Convention check passed.");
