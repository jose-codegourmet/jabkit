// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Hero1 } from "./Hero1";
import { hero1Mocks } from "./Hero1.mocks";

export default {
  Default: () => (
    <div className="w-full">
      <Hero1 {...hero1Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Hero1 {...hero1Mocks.alternate} />
    </div>
  ),
};
