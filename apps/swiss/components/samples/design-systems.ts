export const sampleDesignSystems = [
  "minimal",
  "neo-brutalism",
  "editorial",
  "luxury",
  "retro",
  "swiss",
] as const;

export type SampleDesignSystemId = (typeof sampleDesignSystems)[number];

export const sampleDesignSystemLabels: Record<SampleDesignSystemId, string> = {
  minimal: "Minimal",
  "neo-brutalism": "Neo-brutalism",
  editorial: "Editorial",
  luxury: "Luxury",
  retro: "Retro",
  swiss: "Swiss",
};

export function isSampleDesignSystemId(
  value: string | undefined,
): value is SampleDesignSystemId {
  return (
    value !== undefined &&
    (sampleDesignSystems as readonly string[]).includes(value)
  );
}
