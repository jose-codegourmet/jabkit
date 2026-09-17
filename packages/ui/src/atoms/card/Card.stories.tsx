import type { Meta, StoryObj } from "@storybook/react";
import { ChevronRightIcon } from "lucide-react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import { Button } from "@/atoms/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./Card";
import { cardMocks } from "./Card.mocks";

const meta = {
  title: "Atoms/Card",
  component: Card,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{cardMocks.default.title}</CardTitle>
        <CardDescription>{cardMocks.default.description}</CardDescription>
        <CardAction>{cardMocks.default.action}</CardAction>
      </CardHeader>
      <CardContent>
        <p>{cardMocks.default.content}</p>
      </CardContent>
      <CardFooter>
        <p>{cardMocks.default.footer}</p>
      </CardFooter>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => (
    <Card size="sm" className="mx-auto w-full max-w-xs">
      <CardHeader>
        <CardTitle>{cardMocks.size.title}</CardTitle>
        <CardDescription>{cardMocks.size.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-2 py-2 text-sm">
          {cardMocks.size.items.map((item) => (
            <li className="flex gap-2" key={item}>
              <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full" size="sm">
          {cardMocks.size.primary}
        </Button>
        <Button className="w-full" size="sm" variant="secondary">
          {cardMocks.size.secondary}
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const ThemeComparison: Story = {
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>{cardMocks.default.title}</CardTitle>
            <CardDescription>{cardMocks.default.description}</CardDescription>
            <CardAction>{cardMocks.default.action}</CardAction>
          </CardHeader>
          <CardContent>
            <p>{cardMocks.default.content}</p>
          </CardContent>
          <CardFooter>
            <p>{cardMocks.default.footer}</p>
          </CardFooter>
        </Card>
      </div>
      <div className="dark bg-background p-8">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>{cardMocks.default.title}</CardTitle>
            <CardDescription>{cardMocks.default.description}</CardDescription>
            <CardAction>{cardMocks.default.action}</CardAction>
          </CardHeader>
          <CardContent>
            <p>{cardMocks.default.content}</p>
          </CardContent>
          <CardFooter>
            <p>{cardMocks.default.footer}</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
};
