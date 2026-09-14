import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CopyPromptButton } from "./CopyPromptButton";

const meta = {
  title: "Chrome/CopyPromptButton",
  component: CopyPromptButton,
  args: { name: "button" },
  parameters: { layout: "centered" },
} satisfies Meta<typeof CopyPromptButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
