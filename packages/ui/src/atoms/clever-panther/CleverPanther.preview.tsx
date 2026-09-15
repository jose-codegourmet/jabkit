// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { CleverPanther } from "./CleverPanther";
import { cleverPantherMocks } from "./CleverPanther.mocks";

export default {
  Default: () => <CleverPanther {...cleverPantherMocks.default} />,
  Tones: () => (
    <CleverPanther {...cleverPantherMocks.raised} size="lg">
      Night route
    </CleverPanther>
  ),
};
