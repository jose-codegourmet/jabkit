// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Footer19 } from "./Footer19";
import { footer19Mocks } from "./Footer19.mocks";

export default {
  Default: () => (
    <div className="w-full">
      <Footer19 {...footer19Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Footer19 {...footer19Mocks.alternate} />
    </div>
  ),
};
