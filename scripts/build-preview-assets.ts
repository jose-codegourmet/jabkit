import { spawn } from "node:child_process";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";
import sharp from "sharp";
import {
  assetsRoot,
  captureViewport,
  componentCaptureMeta,
  componentSourceHash,
  type PreviewAssetsManifest,
  type PreviewManifestEntry,
  pipelineVersion,
  previewsRoot,
  type RegistryIndexItem,
  registryRoot,
  root,
  type Theme,
} from "./preview-assets";

const hostedAssets = "https://jabkit.joseadrianbuctuanon.dev/assets/";
const blockedHosts = new Set([
  "videos.pexels.com",
  "commondatastorage.googleapis.com",
  "www.youtube-nocookie.com",
  "youtube-nocookie.com",
  "api.qrserver.com",
]);
const maxPreviewBytes = 150 * 1024;

type Options = {
  name?: string;
  changed: boolean;
  dev: boolean;
};

function parseOptions(): Options {
  const options: Options = { changed: false, dev: false };
  for (let index = 0; index < process.argv.length; index += 1) {
    const argument = process.argv[index];
    if (argument === "--") continue;
    if (argument === "--changed") options.changed = true;
    else if (argument === "--dev") options.dev = true;
    else if (argument === "--name") {
      const name = process.argv[index + 1];
      if (!name || name.startsWith("--"))
        throw new Error("--name requires a registry name");
      options.name = name;
      index += 1;
    } else if (argument.startsWith("--")) {
      throw new Error(`Unknown option: ${argument}`);
    }
  }
  return options;
}

function run(command: string, args: string[]) {
  return new Promise<void>((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: root,
      env: process.env,
      stdio: "inherit",
    });
    child.once("error", reject);
    child.once("exit", (code, signal) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} exited with ${signal ?? code}`));
    });
  });
}

function startServer(dev: boolean, port: number) {
  const args = [
    "--filter",
    "@jabkit/showcase",
    "exec",
    "next",
    dev ? "dev" : "start",
    "--port",
    String(port),
  ];
  return spawn("pnpm", args, {
    cwd: root,
    env: process.env,
    stdio: "inherit",
  });
}

async function waitForServer(
  baseUrl: string,
  server?: ReturnType<typeof startServer>,
) {
  let lastError: unknown;
  for (let attempt = 0; attempt < 120; attempt += 1) {
    if (server?.exitCode !== null)
      throw new Error(`Showcase server exited with ${server?.exitCode}`);
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  throw new Error(`Showcase server did not start: ${String(lastError)}`);
}

async function readManifest(): Promise<PreviewAssetsManifest> {
  try {
    return JSON.parse(
      await readFile(path.join(previewsRoot, "manifest.json"), "utf8"),
    ) as PreviewAssetsManifest;
  } catch {
    return { pipelineVersion, components: {} };
  }
}

async function fileExists(filePath: string) {
  try {
    return (await stat(filePath)).isFile();
  } catch {
    return false;
  }
}

async function entryIsCurrent(
  entry: PreviewManifestEntry | undefined,
  sourceHash: string,
) {
  return Boolean(
    entry &&
      entry.sourceHash === sourceHash &&
      entry.pipelineVersion === pipelineVersion &&
      (
        await Promise.all(
          entry.assets.map((asset) =>
            fileExists(path.join(previewsRoot, asset.file)),
          ),
        )
      ).then((files) => files.every(Boolean)),
  );
}

function previewUrl(
  baseUrl: string,
  name: string,
  story: string,
  theme: Theme,
) {
  const url = new URL(`/preview/${name}/${story}`, baseUrl);
  url.searchParams.set("theme", theme);
  return url.toString();
}

function captureError(name: string, story: string, message: string) {
  return new Error(`${name}/${story}: ${message}`);
}

const options = parseOptions();
await run("pnpm", ["registry:build"]);
if (!process.env.PREVIEW_BASE_URL && !options.dev)
  await run("pnpm", ["--filter", "@jabkit/showcase", "build"]);

const registry = JSON.parse(
  await readFile(path.join(registryRoot, "index.json"), "utf8"),
) as RegistryIndexItem[];
const selected = options.name
  ? registry.filter((item) => item.name === options.name)
  : registry;
if (options.name && selected.length === 0)
  throw new Error(`Unknown registry component: ${options.name}`);

const baseUrl = (
  process.env.PREVIEW_BASE_URL ?? "http://127.0.0.1:3210"
).replace(/\/$/, "");
const server = process.env.PREVIEW_BASE_URL
  ? undefined
  : startServer(options.dev, 3210);
const manifest = await readManifest();
const nextComponents = options.name ? { ...manifest.components } : {};

let browser: Awaited<ReturnType<typeof chromium.launch>> | undefined;
try {
  await waitForServer(baseUrl, server);
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    deviceScaleFactor: 1,
    locale: "en-US",
    reducedMotion: "reduce",
    timezoneId: "UTC",
    viewport: { width: 800, height: 480 },
  });
  const page = await context.newPage();
  let networkError: string | undefined;
  let current = { name: "unknown", story: "unknown" };
  const firstPartyOrigin = new URL(baseUrl).origin;

  await context.route("**/*", async (route) => {
    const requestUrl = new URL(route.request().url());
    if (requestUrl.href.startsWith(hostedAssets)) {
      const relativePath = decodeURIComponent(requestUrl.pathname).replace(
        /^\/assets\//,
        "",
      );
      const assetPath = path.resolve(assetsRoot, relativePath);
      if (
        !assetPath.startsWith(`${assetsRoot}${path.sep}`) ||
        !(await fileExists(assetPath))
      ) {
        networkError = `${current.name}/${current.story}: missing hosted asset ${requestUrl}`;
        await route.abort();
        return;
      }
      await route.fulfill({ path: assetPath });
      return;
    }
    if (requestUrl.origin === firstPartyOrigin) {
      await route.continue();
      return;
    }
    if (blockedHosts.has(requestUrl.hostname)) {
      await route.abort();
      return;
    }
    networkError = `${current.name}/${current.story}: unexpected cross-origin request ${requestUrl}`;
    await route.abort();
  });

  for (const item of selected) {
    const sourceHash = await componentSourceHash(item);
    if (
      options.changed &&
      (await entryIsCurrent(manifest.components[item.name], sourceHash))
    ) {
      nextComponents[item.name] = manifest.components[item.name];
      console.log(`Skipping ${item.name}; preview assets are current.`);
      continue;
    }

    const capture = await componentCaptureMeta(item);
    const viewport = captureViewport(item, capture);
    await page.setViewportSize(viewport);
    current = { name: item.name, story: "Default" };
    networkError = undefined;
    await page.goto(previewUrl(baseUrl, item.name, "Default", "dark"), {
      waitUntil: "domcontentloaded",
    });
    const main = page.locator("main[data-preview-ready]");
    await main.waitFor({ state: "attached" });
    if (networkError) throw new Error(networkError);
    const storyAttribute = await main.getAttribute("data-preview-stories");
    if (storyAttribute === null)
      throw captureError(item.name, "Default", "missing data-preview-stories");
    const availableStories = storyAttribute.split(",").filter(Boolean);
    if (!availableStories.length)
      throw captureError(item.name, "Default", "has no preview stories");
    const stories = capture?.stories
      ? capture.stories.filter((story) => availableStories.includes(story))
      : availableStories;
    if (!stories.length)
      throw captureError(item.name, "Default", "capture stories do not exist");
    const themes = capture?.themes ?? ["dark"];
    const assets: PreviewManifestEntry["assets"] = [];

    for (const story of stories) {
      for (const theme of themes) {
        current = { name: item.name, story };
        networkError = undefined;
        await page.setViewportSize(viewport);
        await page.goto(previewUrl(baseUrl, item.name, story, theme), {
          waitUntil: "domcontentloaded",
        });
        const frame = page.locator("main[data-preview-ready]");
        await frame.waitFor({ state: "attached" });
        await frame.waitFor({ state: "visible" });
        if (networkError) throw new Error(networkError);
        if ((await frame.getAttribute("data-preview-ready")) === null)
          throw captureError(item.name, story, "missing data-preview-ready");
        await page.addStyleTag({
          content:
            "*, *::before, *::after { animation: none !important; transition: none !important; }",
        });
        await page.evaluate(async () => {
          await document.fonts.ready;
          await Promise.all(
            [...document.images].map((image) =>
              image.decode().catch(() => undefined),
            ),
          );
        });
        if (capture?.waitMs) await page.waitForTimeout(capture.waitMs);
        if (networkError) throw new Error(networkError);

        const png = await frame.screenshot({ type: "png" });
        const encoded = await sharp(png)
          .resize({ width: 960, withoutEnlargement: true })
          .webp({ quality: 78 })
          .toBuffer({ resolveWithObject: true });
        const file = `${item.name}.${story}.${theme}.webp`;
        await mkdir(previewsRoot, { recursive: true });
        await writeFile(path.join(previewsRoot, file), encoded.data);
        assets.push({
          story,
          theme,
          file,
          bytes: encoded.info.size,
          width: encoded.info.width,
          height: encoded.info.height,
        });
        if (encoded.info.size > maxPreviewBytes)
          console.warn(
            `Preview exceeds 150 KB: ${item.name}/${story}/${theme} (${encoded.info.size} bytes)`,
          );
      }
    }
    nextComponents[item.name] = {
      sourceHash,
      pipelineVersion,
      stories,
      themes,
      assets,
    };
  }
  await context.close();
} finally {
  await browser?.close();
  if (server && server.exitCode === null) server.kill("SIGTERM");
}

await mkdir(previewsRoot, { recursive: true });
await writeFile(
  path.join(previewsRoot, "manifest.json"),
  `${JSON.stringify(
    {
      pipelineVersion,
      components: nextComponents,
    } satisfies PreviewAssetsManifest,
    null,
    2,
  )}\n`,
);
console.log(`Built preview assets for ${selected.length} component(s).`);
