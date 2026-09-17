import type { Meta, StoryObj } from "@storybook/react";
import { CheckCircle2Icon, CircleAlertIcon, InfoIcon } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Button } from "../button/Button";
import { Alert, AlertAction, AlertDescription, AlertTitle } from "./Alert";
import { alertMocks } from "./Alert.mocks";

const meta = {
  title: "Atoms/Alert",
  component: Alert,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex w-full max-w-lg flex-col gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>{alertMocks.default.title}</AlertTitle>
        <AlertDescription>{alertMocks.default.description}</AlertDescription>
      </Alert>
      <Alert>
        <InfoIcon />
        <AlertTitle>{alertMocks.feature.title}</AlertTitle>
        <AlertDescription>{alertMocks.feature.description}</AlertDescription>
      </Alert>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex w-full max-w-lg flex-col gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>{alertMocks.basic.title}</AlertTitle>
        <AlertDescription>{alertMocks.basic.description}</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <CircleAlertIcon />
        <AlertTitle>{alertMocks.destructive.title}</AlertTitle>
        <AlertDescription>
          {alertMocks.destructive.description}
        </AlertDescription>
      </Alert>
      <Alert>
        <InfoIcon />
        <AlertTitle>{alertMocks.action.title}</AlertTitle>
        <AlertDescription>{alertMocks.action.description}</AlertDescription>
        <AlertAction>
          <Button size="sm" variant="secondary">
            {alertMocks.action.actionLabel}
          </Button>
        </AlertAction>
      </Alert>
    </div>
  ),
};

export const ThemeComparison: Story = {
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <Alert>
          <CheckCircle2Icon />
          <AlertTitle>{alertMocks.default.title}</AlertTitle>
          <AlertDescription>{alertMocks.default.description}</AlertDescription>
        </Alert>
      </div>
      <div className="dark bg-background p-8">
        <Alert>
          <CheckCircle2Icon />
          <AlertTitle>{alertMocks.default.title}</AlertTitle>
          <AlertDescription>{alertMocks.default.description}</AlertDescription>
        </Alert>
      </div>
    </div>
  ),
};
