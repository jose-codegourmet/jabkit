// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { SeriousStingray } from "./SeriousStingray";
import { seriousStingrayMocks } from "./SeriousStingray.mocks";

export default {
  Default: () => <SeriousStingray {...seriousStingrayMocks.default} />,
  Accents: () => <SeriousStingray {...seriousStingrayMocks.alternate} />,
};
