// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { CrowdCanvas, SKIPER39_PEEPS_SRC, Skiper39 } from "./Skiper39";
import { skiper39Mocks } from "./Skiper39.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <Skiper39 {...skiper39Mocks.default} className="min-h-[28rem]" />
    </div>
    <div className="dark bg-background">
      <Skiper39 {...skiper39Mocks.default} className="min-h-[28rem]" />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <Skiper39 {...skiper39Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Skiper39 {...skiper39Mocks.alternate} />
    </div>
  ),
  CanvasOnly: () => (
    <div className="relative min-h-[100dvh] w-full overflow-hidden bg-background">
      <CrowdCanvas cols={7} rows={15} src={SKIPER39_PEEPS_SRC} />
    </div>
  ),
  ThemeComparison,
};
