// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { JollyParrot } from "./JollyParrot";
import { jollyParrotMocks } from "./JollyParrot.mocks";

export default {
  Default: () => <JollyParrot {...jollyParrotMocks.default} />,
  Tones: () => <JollyParrot {...jollyParrotMocks.alternate} />,
};
