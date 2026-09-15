// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { CleverPanther } from "./CleverPanther";
import { cleverPantherMocks } from "./CleverPanther.mocks";

export default {
  Default: () => <CleverPanther {...cleverPantherMocks.default} />,
  WithAction: () => <CleverPanther {...cleverPantherMocks.action} />,
};
