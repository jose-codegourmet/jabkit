import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CurtainCall } from "./CurtainCall";

const meta = {
  title: "Home/CurtainCall",
  component: CurtainCall,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof CurtainCall>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile1" } },
};
