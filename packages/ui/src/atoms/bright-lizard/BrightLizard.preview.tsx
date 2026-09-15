// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { BrightLizard } from "./BrightLizard";
import { brightLizardMocks } from "./BrightLizard.mocks";

export default {
  Default: () => <BrightLizard {...brightLizardMocks.default} />,
  Sizes: () => <BrightLizard {...brightLizardMocks.labeled} />,
};
