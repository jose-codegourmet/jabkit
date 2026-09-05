// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Hero228 } from "./Hero228";
import { hero228Mocks } from "./Hero228.mocks";

export default {
  Default: () => (
    <div className="w-full">
      <Hero228 {...hero228Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Hero228 {...hero228Mocks.studio} />
    </div>
  ),
};
