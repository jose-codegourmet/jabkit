// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { EmptyPenguin } from "./EmptyPenguin";
import { emptyPenguinMocks } from "./EmptyPenguin.mocks";

export default {
  Default: () => <EmptyPenguin {...emptyPenguinMocks.default} />,
  On: () => <EmptyPenguin {...emptyPenguinMocks.alternate} />,
};
