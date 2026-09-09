// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { FallingText } from "./FallingText";
import { fallingTextMocks } from "./FallingText.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <FallingText {...fallingTextMocks.default} />
    </div>
    <div className="dark bg-background">
      <FallingText {...fallingTextMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <FallingText {...fallingTextMocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <FallingText {...fallingTextMocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
