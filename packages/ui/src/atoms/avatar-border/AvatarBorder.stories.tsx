import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { AvatarBorder } from "./AvatarBorder";
import { avatarBorderMocks } from "./AvatarBorder.mocks";

const meta = {
  title: "Atoms/AvatarBorder",
  component: AvatarBorder,
  parameters: { layout: "centered" },
} satisfies Meta<typeof AvatarBorder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ...avatarBorderMocks.default },
  render: () => (
    <div className="bg-background p-8 text-foreground">
      <AvatarBorder
        alt={avatarBorderMocks.default.alt}
        fallback={avatarBorderMocks.default.fallback}
        size="lg"
        src={avatarBorderMocks.default.src}
      />
    </div>
  ),
};

export const Variants: Story = {
  args: { ...avatarBorderMocks.fallback },
  render: () => (
    <div className="flex flex-wrap items-end gap-6 bg-background p-8 text-foreground">
      <AvatarBorder
        alt={avatarBorderMocks.default.alt}
        fallback={avatarBorderMocks.default.fallback}
        size="sm"
        src={avatarBorderMocks.default.src}
      />
      <AvatarBorder
        alt={avatarBorderMocks.second.alt}
        fallback={avatarBorderMocks.second.fallback}
        src={avatarBorderMocks.second.src}
      />
      <AvatarBorder fallback={avatarBorderMocks.fallback.fallback} size="lg" />
      <AvatarBorder
        alt={avatarBorderMocks.default.alt}
        animate={false}
        fallback={avatarBorderMocks.default.fallback}
        size="lg"
        src={avatarBorderMocks.default.src}
      />
    </div>
  ),
};

export const ThemeComparison: Story = {
  args: { ...avatarBorderMocks.default },
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="flex items-center justify-center bg-background p-8">
        <AvatarBorder
          alt={avatarBorderMocks.default.alt}
          fallback={avatarBorderMocks.default.fallback}
          size="lg"
          src={avatarBorderMocks.default.src}
        />
      </div>
      <div className="dark flex items-center justify-center bg-background p-8">
        <AvatarBorder
          alt={avatarBorderMocks.default.alt}
          fallback={avatarBorderMocks.default.fallback}
          size="lg"
          src={avatarBorderMocks.default.src}
        />
      </div>
    </div>
  ),
};
