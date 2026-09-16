// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { ScrollBasedVelocity } from "./ScrollBasedVelocity";
import { scrollBasedVelocityMocks } from "./ScrollBasedVelocity.mocks";

export default {
  Default: () => (
    <div className="w-full">
      <ScrollBasedVelocity {...scrollBasedVelocityMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <ScrollBasedVelocity {...scrollBasedVelocityMocks.alternate} />
    </div>
  ),
};
