// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import { Slider } from "./Slider";
import { sliderMocks } from "./Slider.mocks";

export default {
  Default: () => (
    <div className="w-64">
      <Slider {...sliderMocks.default} />
    </div>
  ),
  Range: () => (
    <div className="w-64">
      <Slider {...sliderMocks.range} />
    </div>
  ),
};
