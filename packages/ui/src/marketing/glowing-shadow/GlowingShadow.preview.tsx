// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { GlowingShadow } from "./GlowingShadow";
import { glowingShadowMocks } from "./GlowingShadow.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <GlowingShadow {...glowingShadowMocks.default} />
    </div>
    <div className="dark bg-background">
      <GlowingShadow {...glowingShadowMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <GlowingShadow {...glowingShadowMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <GlowingShadow {...glowingShadowMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
