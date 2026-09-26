import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ComicStrip } from "./ComicStrip";

const meta = {
  title: "Home/ComicStrip",
  component: ComicStrip,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ComicStrip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  globals: { viewport: { value: "mobile1" } },
};
