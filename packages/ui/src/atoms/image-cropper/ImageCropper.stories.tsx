import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { ImageCropper } from "./ImageCropper";
import { imageCropperMocks } from "./ImageCropper.mocks";

const meta = {
  title: "Atoms/ImageCropper",
  component: ImageCropper,
  parameters: { layout: "centered" },
} satisfies Meta<typeof ImageCropper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...imageCropperMocks.default },
  render: () => (
    <div className="bg-background p-6 text-foreground">
      <ImageCropper {...imageCropperMocks.default} />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...imageCropperMocks.widescreen },
  render: () => (
    <div className="bg-background p-6 text-foreground">
      <ImageCropper {...imageCropperMocks.widescreen} />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...imageCropperMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-6">
        <ImageCropper {...imageCropperMocks.default} />
      </div>
      <div className="dark bg-background p-6">
        <ImageCropper {...imageCropperMocks.default} />
      </div>
    </div>
  ),
};
