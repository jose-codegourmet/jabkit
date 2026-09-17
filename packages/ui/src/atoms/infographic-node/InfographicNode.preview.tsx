// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { InfographicNode } from "./InfographicNode";
import { infographicNodeMocks } from "./InfographicNode.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border sm:grid-cols-2">
    <div className="bg-background p-8">
      <InfographicNode {...infographicNodeMocks.default} />
    </div>
    <div className="dark bg-background p-8">
      <InfographicNode {...infographicNodeMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => <InfographicNode {...infographicNodeMocks.default} />,
  Variants: () => (
    <div className="flex items-end gap-4">
      <InfographicNode {...infographicNodeMocks.alternate} />
      <InfographicNode
        label="Hub"
        value="DB"
        state="active"
        tone="ink"
        shape="hub"
      />
      <InfographicNode {...infographicNodeMocks.default} />
    </div>
  ),
  ThemeComparison,
};
