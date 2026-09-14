export type SampleCta =
  | { kind: "route"; label: string; href: string }
  | { kind: "local"; label: string }
  | { kind: "disabled"; label: string; reason: string };

export function isMasqueradingHash(href: string): boolean {
  return href.trim() === "#";
}

export function assertSampleCta(cta: SampleCta): void {
  if (cta.kind === "route" && isMasqueradingHash(cta.href)) {
    throw new Error(
      `Sample CTA "${cta.label}" uses "#" instead of a route or local action.`,
    );
  }
}
