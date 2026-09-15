// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { TinyFish } from "./TinyFish";
import { tinyFishMocks } from "./TinyFish.mocks";

export default {
  Default: () => <TinyFish {...tinyFishMocks.default} />,
  Sizes: () => <TinyFish {...tinyFishMocks.alternate} />,
};
