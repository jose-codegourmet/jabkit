// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Hero33 } from "./Hero33";
import { hero33Mocks } from "./Hero33.mocks";

export default {
  Default: () => (
    <div className="w-full">
      <Hero33 {...hero33Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Hero33 {...hero33Mocks.alternate} />
    </div>
  ),
};
