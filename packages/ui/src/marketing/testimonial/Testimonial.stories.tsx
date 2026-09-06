import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Testimonial } from "./Testimonial";
import { testimonialMocks } from "./Testimonial.mocks";

const meta = {
  title: "Marketing/Testimonial",
  component: Testimonial,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Testimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...testimonialMocks.default },
  render: () => (
    <div className="bg-background text-foreground">
      <Testimonial {...testimonialMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...testimonialMocks.alternate },
  render: () => (
    <div className="bg-background text-foreground">
      <Testimonial {...testimonialMocks.alternate} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...testimonialMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border lg:grid-cols-2">
      <div className="bg-background">
        <Testimonial {...testimonialMocks.default} />
      </div>
      <div className="dark bg-background">
        <Testimonial {...testimonialMocks.default} />
      </div>
    </div>
  ),
};
