import { spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { assetsRoot, root, uiRoot } from "./preview-assets";

const hostedAssetBase = "/assets";
const sourceMapPath = path.join(assetsRoot, "sources.json");
const unavailableImageFallback =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=900&q=80";
const remoteAssetPattern =
  /https:\/\/(?:images\.unsplash\.com|cdn\.simpleicons\.org)\/[^"'`\s)]+/g;
const legacyHostedAssetPattern =
  /https:\/\/jabkit\.joseadrianbuctuanon\.dev\/assets\/([a-f0-9]+\.webp)/g;

async function walk(directory: string): Promise<string[]> {
  const entries = await readdir(directory, {
    withFileTypes: true,
  });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const filePath = path.join(directory, entry.name);
      return entry.isDirectory() ? walk(filePath) : [filePath];
    }),
  );
  return files.flat().filter((filePath) => /\.tsx?$/.test(filePath));
}

async function existingSourceMap() {
  try {
    return JSON.parse(await readFile(sourceMapPath, "utf8")) as Record<
      string,
      string
    >;
  } catch {
    return {};
  }
}

async function exists(filePath: string) {
  try {
    return (await stat(filePath)).isFile();
  } catch {
    return false;
  }
}

function fileNameFor(url: string, sources: Record<string, string>) {
  const digest = createHash("sha256").update(url).digest("hex");
  const used = new Map(
    Object.entries(sources).map(([source, file]) => [file, source]),
  );
  for (let length = 16; length <= digest.length; length += 4) {
    const fileName = `${digest.slice(0, length)}.webp`;
    const owner = used.get(fileName);
    if (!owner || owner === url) return fileName;
  }
  throw new Error(`Unable to assign a collision-free asset name for ${url}`);
}

async function download(url: string, destination: string) {
  let response = await fetch(url);
  if (!response.ok && response.status === 404) {
    console.warn(`Using fallback for unavailable remote image: ${url}`);
    response = await fetch(unavailableImageFallback);
  }
  if (!response.ok)
    throw new Error(`${url}: download failed with HTTP ${response.status}`);
  const source = Buffer.from(await response.arrayBuffer());
  const width = Number(new URL(url).searchParams.get("w"));
  const image = sharp(source, { animated: false }).rotate();
  const output =
    Number.isFinite(width) && width > 0
      ? image.resize({ width, withoutEnlargement: true })
      : image;
  await output.webp({ quality: 82 }).toFile(destination);
}

function formatFiles(filePaths: string[]) {
  if (filePaths.length === 0) return Promise.resolve();
  return new Promise<void>((resolve, reject) => {
    const child = spawn(
      "pnpm",
      ["exec", "biome", "format", "--write", ...filePaths],
      { cwd: root, env: process.env, stdio: "inherit" },
    );
    child.once("error", reject);
    child.once("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Biome formatting failed with exit code ${code}`));
    });
  });
}

const files = await walk(uiRoot);
const contents = new Map<string, string>();
const urls = new Set<string>();
for (const filePath of files) {
  const source = await readFile(filePath, "utf8");
  contents.set(filePath, source);
  for (const match of source.matchAll(remoteAssetPattern)) urls.add(match[0]);
}

await mkdir(assetsRoot, { recursive: true });
const sources = await existingSourceMap();
for (const url of [...urls].sort()) {
  const existing = sources[url];
  if (existing && (await exists(path.join(assetsRoot, existing)))) continue;
  const fileName = fileNameFor(url, sources);
  console.log(`Downloading ${url}`);
  await download(url, path.join(assetsRoot, fileName));
  sources[url] = fileName;
}

const rewrittenFiles: string[] = [];
for (const [filePath, source] of contents) {
  let rewritten = source;
  for (const url of urls) {
    const fileName = sources[url];
    if (fileName)
      rewritten = rewritten.replaceAll(url, `${hostedAssetBase}/${fileName}`);
  }
  rewritten = rewritten.replace(legacyHostedAssetPattern, "/assets/$1");
  if (rewritten !== source) {
    await writeFile(filePath, rewritten);
    rewrittenFiles.push(filePath);
  }
}
await formatFiles(rewrittenFiles);

const orderedSources = Object.fromEntries(
  Object.entries(sources).sort(([left], [right]) => left.localeCompare(right)),
);
await writeFile(sourceMapPath, `${JSON.stringify(orderedSources, null, 2)}\n`);
console.log(
  `Vendored ${urls.size} remote images into ${path.relative(root, assetsRoot)}.`,
);
