import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { AspectRatio } from "./AspectRatio";
import { aspectRatioMocks } from "./AspectRatio.mocks";

const meta = {
  title: "Atoms/AspectRatio",
  component: AspectRatio,
  parameters: { layout: "centered" },
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ratio: aspectRatioMocks.default.ratio },
  render: () => (
    <div className="w-full max-w-md">
      <AspectRatio
        ratio={aspectRatioMocks.default.ratio}
        className="rounded-lg bg-muted"
      >
        <img
          src={aspectRatioMocks.default.src}
          alt={aspectRatioMocks.default.alt}
          className="h-full w-full rounded-lg object-cover grayscale dark:brightness-20"
        />
      </AspectRatio>
    </div>
  ),
};

export const Square: Story = {
  args: { ratio: aspectRatioMocks.square.ratio },
  render: () => (
    <div className="w-full max-w-xs">
      <AspectRatio
        ratio={aspectRatioMocks.square.ratio}
        className="rounded-lg bg-muted"
      >
        <img
          src={aspectRatioMocks.square.src}
          alt={aspectRatioMocks.square.alt}
          className="h-full w-full rounded-lg object-cover grayscale dark:brightness-20"
        />
      </AspectRatio>
    </div>
  ),
};

export const Portrait: Story = {
  args: { ratio: aspectRatioMocks.portrait.ratio },
  render: () => (
    <div className="w-48">
      <AspectRatio
        ratio={aspectRatioMocks.portrait.ratio}
        className="rounded-lg bg-muted"
      >
        <img
          src={aspectRatioMocks.portrait.src}
          alt={aspectRatioMocks.portrait.alt}
          className="h-full w-full rounded-lg object-cover grayscale dark:brightness-20"
        />
      </AspectRatio>
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ratio: aspectRatioMocks.default.ratio },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <AspectRatio
          ratio={aspectRatioMocks.default.ratio}
          className="rounded-lg bg-muted"
        >
          <img
            src={aspectRatioMocks.default.src}
            alt={aspectRatioMocks.default.alt}
            className="h-full w-full rounded-lg object-cover grayscale dark:brightness-20"
          />
        </AspectRatio>
      </div>
      <div className="dark bg-background p-8">
        <AspectRatio
          ratio={aspectRatioMocks.default.ratio}
          className="rounded-lg bg-muted"
        >
          <img
            src={aspectRatioMocks.default.src}
            alt={aspectRatioMocks.default.alt}
            className="h-full w-full rounded-lg object-cover grayscale dark:brightness-20"
          />
        </AspectRatio>
      </div>
    </div>
  ),
};
