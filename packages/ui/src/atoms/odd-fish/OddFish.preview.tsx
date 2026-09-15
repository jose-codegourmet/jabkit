// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { OddFish } from "./OddFish";
import { oddFishMocks } from "./OddFish.mocks";

export default {
  Default: () => <OddFish {...oddFishMocks.default} />,
  Accent: () => <OddFish {...oddFishMocks.accent} />,
};
