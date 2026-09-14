import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LogoAvatar } from "./LogoAvatar";

const meta = {
  title: "Chrome/LogoAvatar",
  component: LogoAvatar,
  parameters: { layout: "centered" },
} satisfies Meta<typeof LogoAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { className: "size-16" },
};

export const InteractionPlayground: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-6 p-6">
      <LogoAvatar className="size-16" />
      <p className="text-sm text-muted-foreground">
        Hover, click, type, or focus the invalid field to change the face.
      </p>
      <div className="flex flex-wrap gap-3">
        <a href="#playground" className="text-sm text-primary underline">
          Link hover
        </a>
        <button
          type="button"
          className="rounded-md border border-border bg-card px-3 py-1.5 text-sm"
        >
          Button click
        </button>
      </div>
      <input
        type="text"
        placeholder="Type to think"
        className="rounded-md border border-input bg-background px-3 py-2 text-sm"
      />
      <input
        type="text"
        aria-invalid="true"
        placeholder="Invalid focus"
        className="rounded-md border border-destructive bg-background px-3 py-2 text-sm"
      />
    </div>
  ),
};
