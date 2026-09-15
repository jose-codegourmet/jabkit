// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { HorribleShrimp } from "./HorribleShrimp";
import { horribleShrimpMocks } from "./HorribleShrimp.mocks";

export default {
  Default: () => <HorribleShrimp {...horribleShrimpMocks.default} />,
  Checked: () => <HorribleShrimp {...horribleShrimpMocks.alternate} />,
};
