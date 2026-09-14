export const designSystemIds = [
  "minimal",
  "neo-brutalism",
  "editorial",
  "luxury",
  "retro",
] as const;

export type DesignSystemId = (typeof designSystemIds)[number];

export const provenanceSchemaVersion = 1;

export const deliveryBudgets = {
  hero: 300 * 1024,
  content: 180 * 1024,
  texture: 60 * 1024,
} as const;

export type DeliveryRole = keyof typeof deliveryBudgets;

export type AssetRole = "content" | "decorative";

export type OutputUseRights =
  | "higgsfield-account-terms"
  | "browser-capture"
  | "unrecorded";

export type ProvenanceKind = "higgsfield-mcp" | "browser-capture";

export type FocalCrop = {
  focalX: number;
  focalY: number;
  objectPosition: string;
};

export type ProvenanceAsset = {
  id: string;
  fileName: string;
  kind: ProvenanceKind;
  prompt: string;
  negativeDirection: string;
  provider: string;
  model: string;
  generatedAt: string;
  jobId: string | null;
  width: number;
  height: number;
  aspectRatio: string;
  crop: FocalCrop;
  alt: string;
  role: AssetRole;
  deliveryRole: DeliveryRole;
  outputUseRights: OutputUseRights;
  bytes: number;
  budgetException: string | null;
};

export type ProvenanceManifest = {
  schemaVersion: number;
  system: DesignSystemId;
  assets: ProvenanceAsset[];
};

export type SampleAssetRef = {
  src: `/assets/design-systems/${DesignSystemId}/${string}`;
  width: number;
  height: number;
  alt: string;
  role: AssetRole;
  objectPosition: string;
};

export type SampleAssetMap = {
  readonly [id: string]: SampleAssetRef;
};

export function isDesignSystemId(value: string): value is DesignSystemId {
  return (designSystemIds as readonly string[]).includes(value);
}

export function sampleAssetSrc(
  system: DesignSystemId,
  fileName: string,
): `/assets/design-systems/${DesignSystemId}/${string}` {
  return `/assets/design-systems/${system}/${fileName}`;
}

export function toSampleAsset(
  system: DesignSystemId,
  entry: ProvenanceAsset,
): SampleAssetRef {
  return {
    src: sampleAssetSrc(system, entry.fileName),
    width: entry.width,
    height: entry.height,
    alt: entry.role === "decorative" ? "" : entry.alt,
    role: entry.role,
    objectPosition: entry.crop.objectPosition,
  };
}

export function sampleAssetsFromManifest(
  manifest: ProvenanceManifest,
): SampleAssetMap {
  return Object.fromEntries(
    manifest.assets.map((entry) => [
      entry.id,
      toSampleAsset(manifest.system, entry),
    ]),
  );
}
