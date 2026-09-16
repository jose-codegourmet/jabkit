// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { FisheyeInfiniteGrid } from "./FisheyeInfiniteGrid";
import { fisheyeInfiniteGridMocks } from "./FisheyeInfiniteGrid.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="h-[620px] bg-background">
      <FisheyeInfiniteGrid {...fisheyeInfiniteGridMocks.default} />
    </div>
    <div className="dark h-[620px] bg-background">
      <FisheyeInfiniteGrid {...fisheyeInfiniteGridMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="h-[720px] w-full overflow-hidden bg-background">
      <FisheyeInfiniteGrid {...fisheyeInfiniteGridMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="h-[720px] w-full overflow-hidden bg-background">
      <FisheyeInfiniteGrid {...fisheyeInfiniteGridMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
