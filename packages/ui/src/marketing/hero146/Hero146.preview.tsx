// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Hero146 } from "./Hero146";
import { hero146Mocks } from "./Hero146.mocks";

export default {
  Default: () => (
    <div className="w-full">
      <Hero146 {...hero146Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Hero146 {...hero146Mocks.alternate} />
    </div>
  ),
};
