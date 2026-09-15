// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Hero31 } from "./Hero31";
import { hero31Mocks } from "./Hero31.mocks";

export default {
  Default: () => (
    <div className="w-full">
      <Hero31 {...hero31Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Hero31 {...hero31Mocks.alternate} />
    </div>
  ),
};
