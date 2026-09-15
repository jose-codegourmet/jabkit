// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { StrongSquid } from "./StrongSquid";
import { strongSquidMocks } from "./StrongSquid.mocks";

export default {
  Default: () => <StrongSquid {...strongSquidMocks.default} />,
  Night: () => <StrongSquid {...strongSquidMocks.night} />,
  Sizes: () => <StrongSquid {...strongSquidMocks.compact} />,
};
