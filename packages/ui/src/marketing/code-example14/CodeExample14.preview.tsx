// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { CodeExample14 } from "./CodeExample14";
import { codeExample14Mocks } from "./CodeExample14.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <CodeExample14 {...codeExample14Mocks.default} />
    </div>
    <div className="dark bg-background">
      <CodeExample14 {...codeExample14Mocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <div className="w-full">
      <CodeExample14 {...codeExample14Mocks.default} />
    </div>
  ),
  Variants: () => (
    <div className="w-full">
      <CodeExample14 {...codeExample14Mocks.alternate} />
    </div>
  ),
  ThemeComparison,
};
