import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";
import { sliderMocks } from "./Slider.mocks";

const meta = {
  title: "Atoms/Slider",
  component: Slider,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...sliderMocks.default },
  render: () => (
    <div className="w-64">
      <Slider {...sliderMocks.default} />
    </div>
  ),
};

export const Range: Story = {
  args: { ...sliderMocks.range },
  render: () => (
    <div className="w-64">
      <Slider {...sliderMocks.range} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...sliderMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <Slider {...sliderMocks.default} />
      </div>
      <div className="dark bg-background p-8">
        <Slider {...sliderMocks.default} />
      </div>
    </div>
  ),
};
