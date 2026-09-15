// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Hero39 } from "./Hero39";
import { hero39Mocks } from "./Hero39.mocks";

export default {
  Default: () => (
    <div className="w-full">
      <Hero39 {...hero39Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Hero39 {...hero39Mocks.alternate} />
    </div>
  ),
};
