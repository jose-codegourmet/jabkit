// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { LovelyYak } from "./LovelyYak";
import { lovelyYakMocks } from "./LovelyYak.mocks";

export default {
  Default: () => <LovelyYak {...lovelyYakMocks.default} />,
  WeeklyPulse: () => <LovelyYak {...lovelyYakMocks.weeklyPulse} />,
};
