// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { YoungDragon } from "./YoungDragon";
import { youngDragonMocks } from "./YoungDragon.mocks";

export default {
  Default: () => <YoungDragon {...youngDragonMocks.default} />,
  Sizes: () => <YoungDragon {...youngDragonMocks.labeled} />,
};
