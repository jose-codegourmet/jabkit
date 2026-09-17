import type { SliderProps } from "./Slider.types";

export const sliderMocks = {
  default: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
  range: {
    defaultValue: [25, 75],
    max: 100,
    step: 1,
  },
} satisfies Record<"default" | "range", SliderProps>;
