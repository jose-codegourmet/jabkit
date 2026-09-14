import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import { fitPreviewMeta, registryEntryFixture } from "../.storybook/fixtures";
import { ComponentPreview } from "./ComponentPreview";

const meta = {
  title: "Chrome/ComponentPreview",
  component: ComponentPreview,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "The iframe body is proxied to `http://localhost:3000/preview`. Run `pnpm dev` alongside Storybook to see live preview content.",
      },
    },
  },
} satisfies Meta<typeof ComponentPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Atom: Story = {
  args: {
    name: "button",
    story: "Default",
    files: registryEntryFixture.files,
  },
};

export const FitBlock: Story = {
  args: {
    name: "hero228",
    story: "Default",
    files: registryEntryFixture.files,
    preview: fitPreviewMeta,
  },
};

export const CodeTab: Story = {
  args: {
    name: "button",
    story: "Default",
    files: registryEntryFixture.files,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Code" }));
    await expect(canvas.getByText("Button.tsx")).toBeVisible();
  },
};
