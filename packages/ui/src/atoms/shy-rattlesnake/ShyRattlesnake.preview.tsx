// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { ShyRattlesnake } from "./ShyRattlesnake";
import { shyRattlesnakeMocks } from "./ShyRattlesnake.mocks";

export default {
  Default: () => <ShyRattlesnake {...shyRattlesnakeMocks.default} />,
  GuestPass: () => <ShyRattlesnake {...shyRattlesnakeMocks.compact} />,
};
