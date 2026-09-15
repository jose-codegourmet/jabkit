// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Hero32 } from "./Hero32";
import { hero32Mocks } from "./Hero32.mocks";

export default {
  Default: () => (
    <div className="w-full">
      <Hero32 {...hero32Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Hero32 {...hero32Mocks.alternate} />
    </div>
  ),
};
