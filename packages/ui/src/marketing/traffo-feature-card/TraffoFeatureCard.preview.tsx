// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { TraffoFeatureCard } from "./TraffoFeatureCard";
import { traffoFeatureCardMocks } from "./TraffoFeatureCard.mocks";

const ThemeComparison = () => (
  <div className="grid gap-px overflow-hidden border-border bg-border sm:grid-cols-2">
    <div className="bg-background p-8">
      <TraffoFeatureCard {...traffoFeatureCardMocks.default} />
    </div>
    <div className="dark bg-background p-8">
      <TraffoFeatureCard {...traffoFeatureCardMocks.default} />
    </div>
  </div>
);

export default {
  Default: () => <TraffoFeatureCard {...traffoFeatureCardMocks.default} />,
  Variants: () => <TraffoFeatureCard {...traffoFeatureCardMocks.alternate} />,
  ThemeComparison,
};
