// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { OrbitCardStack } from "./OrbitCardStack";
import { orbitCardStackMocks } from "./OrbitCardStack.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border lg:grid-cols-2">
    <div className="bg-background">
      <OrbitCardStack {...orbitCardStackMocks.default} />
    </div>
    <div className="dark bg-background">
      <OrbitCardStack {...orbitCardStackMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => <OrbitCardStack {...orbitCardStackMocks.default} />,
  Variants: () => <OrbitCardStack {...orbitCardStackMocks.alternate} />,
  ThemeComparison,
};
