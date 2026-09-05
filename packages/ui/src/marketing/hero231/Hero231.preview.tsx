// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Hero231 } from "./Hero231";

export default {
  Default: () => (
    <div className="w-full">
      <Hero231 />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <Hero231
        title="A quieter way to introduce the room."
        kicker="Now booking spring"
      />
    </div>
  ),
};
