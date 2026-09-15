// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { FastPuma } from "./FastPuma";
import { fastPumaMocks } from "./FastPuma.mocks";

export default {
  Default: () => <FastPuma {...fastPumaMocks.default} />,
  Tones: () => <FastPuma {...fastPumaMocks.alternate} />,
};
