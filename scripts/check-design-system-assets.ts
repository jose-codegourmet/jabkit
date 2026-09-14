import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import {
  type DesignSystemId,
  deliveryBudgets,
  designSystemIds,
  type ProvenanceAsset,
  type ProvenanceManifest,
  provenanceSchemaVersion,
  sampleAssetSrc,
} from "../apps/showcase/lib/design-system-assets";
import { assetsRoot } from "./preview-assets";

const uuidPattern =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const assetIdPattern = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/;
const fileNamePattern = /^[a-z0-9]+(?:-[a-z0-9]+)*\.webp$/;
const secretPattern =
  /(?:authorization|api[_-]?key|secret|token|signature|upload_url|signed)/i;
const remoteUrlPattern = /https?:\/\//i;
const fabricatedJobIds = new Set([
  "example",
  "placeholder",
  "tbd",
  "todo",
  "pending",
  "unknown",
]);

const problems: string[] = [];

function problem(system: string, message: string) {
  problems.push(`${system}: ${message}`);
}

async function isFile(filePath: string) {
  try {
    return (await stat(filePath)).isFile();
  } catch {
    return false;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isFinitePositive(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value) && value > 0;
}

function readString(
  system: string,
  label: string,
  value: unknown,
): string | null {
  if (typeof value !== "string" || value.trim() === "") {
    problem(system, `${label} must be a non-empty string`);
    return null;
  }
  return value;
}

const freeTextFields =
  /(?:^|\.)(?:prompt|negativeDirection|alt|budgetException)$/;

function scanSecrets(system: string, value: unknown, trail: string) {
  if (typeof value === "string") {
    if (secretPattern.test(trail))
      problem(system, `${trail} looks like a credential or signed URL`);
    if (!freeTextFields.test(trail) && remoteUrlPattern.test(value))
      problem(system, `${trail} must not contain a remote URL`);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      scanSecrets(system, item, `${trail}[${index}]`);
    });
    return;
  }
  if (isRecord(value)) {
    for (const [key, nested] of Object.entries(value)) {
      scanSecrets(system, nested, trail ? `${trail}.${key}` : key);
    }
  }
}

function parseAsset(
  system: DesignSystemId,
  value: unknown,
  index: number,
): ProvenanceAsset | null {
  const label = `assets[${index}]`;
  if (!isRecord(value)) {
    problem(system, `${label} must be an object`);
    return null;
  }

  const id = readString(system, `${label}.id`, value.id);
  const fileName = readString(system, `${label}.fileName`, value.fileName);
  const kind = readString(system, `${label}.kind`, value.kind);
  const prompt = readString(system, `${label}.prompt`, value.prompt);
  const negativeDirection = readString(
    system,
    `${label}.negativeDirection`,
    value.negativeDirection,
  );
  const provider = readString(system, `${label}.provider`, value.provider);
  const model = readString(system, `${label}.model`, value.model);
  const generatedAt = readString(
    system,
    `${label}.generatedAt`,
    value.generatedAt,
  );
  const aspectRatio = readString(
    system,
    `${label}.aspectRatio`,
    value.aspectRatio,
  );
  const alt = typeof value.alt === "string" ? value.alt : null;
  const role = readString(system, `${label}.role`, value.role);
  const deliveryRole = readString(
    system,
    `${label}.deliveryRole`,
    value.deliveryRole,
  );
  const outputUseRights = readString(
    system,
    `${label}.outputUseRights`,
    value.outputUseRights,
  );

  if (alt === null) problem(system, `${label}.alt must be a string`);
  if (id && !assetIdPattern.test(id))
    problem(system, `${label}.id must be kebab-case`);
  if (fileName && !fileNamePattern.test(fileName))
    problem(system, `${label}.fileName must be kebab-case.webp`);
  if (kind !== "higgsfield-mcp" && kind !== "browser-capture")
    problem(system, `${label}.kind must be higgsfield-mcp or browser-capture`);
  if (role !== "content" && role !== "decorative")
    problem(system, `${label}.role must be content or decorative`);
  if (
    deliveryRole !== "hero" &&
    deliveryRole !== "content" &&
    deliveryRole !== "texture"
  )
    problem(system, `${label}.deliveryRole must be hero, content, or texture`);
  if (
    outputUseRights !== "higgsfield-account-terms" &&
    outputUseRights !== "browser-capture" &&
    outputUseRights !== "unrecorded"
  )
    problem(system, `${label}.outputUseRights is not a known status`);
  if (kind === "higgsfield-mcp" && outputUseRights === "browser-capture")
    problem(system, `${label} mixes Higgsfield kind with capture rights`);
  if (
    kind === "browser-capture" &&
    outputUseRights === "higgsfield-account-terms"
  )
    problem(system, `${label} mixes capture kind with Higgsfield rights`);
  if (kind === "higgsfield-mcp" && provider !== "Higgsfield MCP")
    problem(system, `${label}.provider must be "Higgsfield MCP"`);
  if (kind === "browser-capture" && model !== "browser")
    problem(system, `${label}.model for captures must be "browser"`);
  if (role === "content" && alt !== null && alt.trim() === "")
    problem(system, `${label}.alt is required for content images`);
  if (role === "decorative" && alt !== "")
    problem(system, `${label}.alt must be empty when decorative`);

  let jobId: string | null = null;
  if (value.jobId === null) {
    if (kind === "higgsfield-mcp")
      problem(
        system,
        `${label}.jobId is required for Higgsfield outputs; use null only for browser captures`,
      );
  } else if (typeof value.jobId !== "string") {
    problem(system, `${label}.jobId must be a UUID string or null`);
  } else if (
    fabricatedJobIds.has(value.jobId.toLowerCase()) ||
    !uuidPattern.test(value.jobId)
  ) {
    problem(
      system,
      `${label}.jobId must be the UUID returned by Higgsfield, not a placeholder`,
    );
  } else {
    jobId = value.jobId;
  }

  if (kind === "browser-capture" && value.jobId !== null)
    problem(system, `${label}.jobId must be null for browser captures`);
  if (generatedAt && Number.isNaN(Date.parse(generatedAt)))
    problem(system, `${label}.generatedAt must be an ISO timestamp`);
  if (!isFinitePositive(value.width) || !Number.isInteger(value.width))
    problem(system, `${label}.width must be a positive integer`);
  if (!isFinitePositive(value.height) || !Number.isInteger(value.height))
    problem(system, `${label}.height must be a positive integer`);
  if (!isFinitePositive(value.bytes) || !Number.isInteger(value.bytes))
    problem(system, `${label}.bytes must be a positive integer`);

  if (!isRecord(value.crop)) {
    problem(system, `${label}.crop must be an object`);
  } else {
    for (const axis of ["focalX", "focalY"] as const) {
      const point = value.crop[axis];
      if (typeof point !== "number" || point < 0 || point > 1)
        problem(system, `${label}.crop.${axis} must be 0–1`);
    }
    if (
      typeof value.crop.objectPosition !== "string" ||
      value.crop.objectPosition.trim() === ""
    )
      problem(system, `${label}.crop.objectPosition is required`);
  }

  if (
    value.budgetException !== null &&
    typeof value.budgetException !== "string"
  )
    problem(system, `${label}.budgetException must be a string or null`);
  if (
    typeof value.budgetException === "string" &&
    value.budgetException.trim() === ""
  )
    problem(system, `${label}.budgetException must explain the overage`);

  if (
    !id ||
    !fileName ||
    !kind ||
    !prompt ||
    !negativeDirection ||
    !provider ||
    !model ||
    !generatedAt ||
    !aspectRatio ||
    alt === null ||
    !role ||
    !deliveryRole ||
    !outputUseRights ||
    !isRecord(value.crop) ||
    typeof value.crop.focalX !== "number" ||
    typeof value.crop.focalY !== "number" ||
    typeof value.crop.objectPosition !== "string" ||
    !isFinitePositive(value.width) ||
    !isFinitePositive(value.height) ||
    !isFinitePositive(value.bytes)
  )
    return null;

  if (
    (kind !== "higgsfield-mcp" && kind !== "browser-capture") ||
    (role !== "content" && role !== "decorative") ||
    (deliveryRole !== "hero" &&
      deliveryRole !== "content" &&
      deliveryRole !== "texture") ||
    (outputUseRights !== "higgsfield-account-terms" &&
      outputUseRights !== "browser-capture" &&
      outputUseRights !== "unrecorded")
  )
    return null;

  return {
    id,
    fileName,
    kind,
    prompt,
    negativeDirection,
    provider,
    model,
    generatedAt,
    jobId,
    width: value.width,
    height: value.height,
    aspectRatio,
    crop: {
      focalX: value.crop.focalX,
      focalY: value.crop.focalY,
      objectPosition: value.crop.objectPosition,
    },
    alt,
    role,
    deliveryRole,
    outputUseRights,
    bytes: value.bytes,
    budgetException:
      typeof value.budgetException === "string" ? value.budgetException : null,
  };
}

function parseManifest(
  system: DesignSystemId,
  value: unknown,
): ProvenanceManifest | null {
  if (!isRecord(value)) {
    problem(system, "provenance.json must be an object");
    return null;
  }
  if (value.schemaVersion !== provenanceSchemaVersion)
    problem(system, `schemaVersion must be ${provenanceSchemaVersion}`);
  if (value.system !== system) problem(system, `system must be "${system}"`);
  if (!Array.isArray(value.assets)) {
    problem(system, "assets must be an array");
    return null;
  }
  const assets: ProvenanceAsset[] = [];
  const ids = new Set<string>();
  const files = new Set<string>();
  for (const [index, item] of value.assets.entries()) {
    const asset = parseAsset(system, item, index);
    if (!asset) continue;
    if (ids.has(asset.id)) problem(system, `duplicate asset id ${asset.id}`);
    if (files.has(asset.fileName))
      problem(system, `duplicate fileName ${asset.fileName}`);
    ids.add(asset.id);
    files.add(asset.fileName);
    assets.push(asset);
  }
  return { schemaVersion: provenanceSchemaVersion, system, assets };
}

const systemsRoot = path.join(assetsRoot, "design-systems");

for (const system of designSystemIds) {
  const folder = path.join(systemsRoot, system);
  const manifestPath = path.join(folder, "provenance.json");
  if (!(await isFile(manifestPath))) {
    problem(system, "missing provenance.json");
    continue;
  }
  const raw = JSON.parse(await readFile(manifestPath, "utf8")) as unknown;
  scanSecrets(system, raw, "");
  const manifest = parseManifest(system, raw);
  if (!manifest) continue;

  const assetsModule = (await import(
    `../apps/showcase/app/samples/${system}/assets.ts`
  )) as {
    assets: Record<string, { src: string; width: number; height: number }>;
  };
  const exportedIds = Object.keys(assetsModule.assets);
  const manifestIds = new Set(manifest.assets.map((asset) => asset.id));

  for (const id of exportedIds) {
    if (!manifestIds.has(id))
      problem(system, `assets.ts exports ${id} with no provenance row`);
  }
  for (const asset of manifest.assets) {
    const exported = assetsModule.assets[asset.id];
    if (!exported) {
      problem(system, `${asset.id} is missing from assets.ts`);
      continue;
    }
    const expectedSrc = sampleAssetSrc(system, asset.fileName);
    if (exported.src !== expectedSrc)
      problem(system, `${asset.id} src must be ${expectedSrc}`);
    if (exported.width !== asset.width || exported.height !== asset.height)
      problem(system, `${asset.id} dimensions must match provenance`);

    const filePath = path.join(folder, asset.fileName);
    if (!(await isFile(filePath))) {
      problem(system, `missing file ${asset.fileName}`);
      continue;
    }
    const file = await stat(filePath);
    if (file.size !== asset.bytes)
      problem(
        system,
        `${asset.fileName} bytes ${file.size} != provenance ${asset.bytes}`,
      );
    const budget = deliveryBudgets[asset.deliveryRole];
    if (file.size > budget && !asset.budgetException)
      problem(
        system,
        `${asset.fileName} exceeds the ${asset.deliveryRole} budget of ${budget} bytes`,
      );

    const metadata = await sharp(filePath).metadata();
    if (metadata.width !== asset.width || metadata.height !== asset.height)
      problem(
        system,
        `${asset.fileName} intrinsic size ${metadata.width}x${metadata.height} != ${asset.width}x${asset.height}`,
      );
  }
}

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log(
  `Design-system asset check passed (${designSystemIds.length} systems).`,
);
