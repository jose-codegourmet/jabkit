import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SourceViewer } from "./SourceViewer";

const files = [
  {
    path: "atoms/button/Button.tsx",
    content:
      "export function Button() {\n  return <button>Continue</button>;\n}\n",
  },
  {
    path: "atoms/button/Button.types.ts",
    content: "export type ButtonProps = {\n  children: React.ReactNode;\n};\n",
  },
];

const meta = {
  title: "Chrome/SourceViewer",
  component: SourceViewer,
  parameters: { layout: "padded" },
} satisfies Meta<typeof SourceViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MultiFile: Story = {
  args: { files },
};

export const SingleFile: Story = {
  args: { files: [files[0]] },
};

export const Embedded: Story = {
  args: { files, embedded: true },
};

export const Empty: Story = {
  args: { files: [] },
};
