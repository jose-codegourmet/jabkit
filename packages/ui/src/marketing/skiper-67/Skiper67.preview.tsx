// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Skiper67 } from "./Skiper67";
import { skiper67Mocks } from "./Skiper67.mocks";

export default {
  Default: () => (
    <div className="w-full">
      <Skiper67 {...skiper67Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Skiper67 {...skiper67Mocks.alternate} />
    </div>
  ),
};
