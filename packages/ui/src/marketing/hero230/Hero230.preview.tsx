// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Hero230 } from "./Hero230";
import { hero230EditorialMocks, hero230Mocks } from "./Hero230.mocks";

export default {
  Default: () => (
    <div className="w-full">
      <Hero230 {...hero230Mocks} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Hero230 {...hero230EditorialMocks} />
    </div>
  ),
};
