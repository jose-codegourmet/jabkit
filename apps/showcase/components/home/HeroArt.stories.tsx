import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HeroArt } from "./HeroArt";

const meta = {
  title: "Home/HeroArt",
  component: HeroArt,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="vd-stage w-[560px] p-10">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HeroArt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomTag: Story = { args: { tag: "#pricing" } };
