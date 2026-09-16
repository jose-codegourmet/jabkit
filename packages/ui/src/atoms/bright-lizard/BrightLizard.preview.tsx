// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { BrightLizard } from "./BrightLizard";
import { brightLizardMocks } from "./BrightLizard.mocks";

export default {
  Default: () => <BrightLizard {...brightLizardMocks.default} />,
  Sizes: () => (
    <div className="flex flex-wrap items-end gap-8 bg-background p-10 text-foreground">
      <BrightLizard {...brightLizardMocks.compact} />
      <BrightLizard {...brightLizardMocks.default} />
      <BrightLizard label="Preparing" size="lg" />
    </div>
  ),
};
