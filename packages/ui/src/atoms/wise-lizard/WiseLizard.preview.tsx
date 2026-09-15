// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { WiseLizard } from "./WiseLizard";
import { wiseLizardMocks } from "./WiseLizard.mocks";

export default {
  Default: () => <WiseLizard {...wiseLizardMocks.default} />,
  Filled: () => <WiseLizard {...wiseLizardMocks.filled} />,
  Compact: () => <WiseLizard {...wiseLizardMocks.compact} />,
};
