// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { InfographicNodeGraph } from "./InfographicNodeGraph";
import { infographicNodeGraphMocks } from "./InfographicNodeGraph.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background p-8">
      <InfographicNodeGraph {...infographicNodeGraphMocks.default} />
    </div>
    <div className="dark bg-background p-8">
      <InfographicNodeGraph {...infographicNodeGraphMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => (
    <InfographicNodeGraph {...infographicNodeGraphMocks.default} />
  ),
  Variants: () => (
    <InfographicNodeGraph {...infographicNodeGraphMocks.alternate} />
  ),
  ThemeComparison,
};
