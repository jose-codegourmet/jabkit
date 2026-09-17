import type { Meta, StoryObj } from "@storybook/react";
// biome-ignore lint/correctness/noUnusedImports: Storybook supports the classic JSX runtime.
import * as React from "react";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxValue,
  useComboboxAnchor,
} from "./Combobox";
import { comboboxMocks } from "./Combobox.mocks";

const meta = {
  title: "Atoms/Combobox",
  component: Combobox,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

function MultipleFrameworks() {
  const anchor = useComboboxAnchor();

  return (
    <Combobox
      autoHighlight
      defaultValue={[comboboxMocks.frameworks[0]]}
      items={comboboxMocks.frameworks}
      multiple
    >
      <ComboboxChips ref={anchor}>
        <ComboboxValue>
          {(values) => (
            <>
              {values.map((value: string) => (
                <ComboboxChip key={value}>{value}</ComboboxChip>
              ))}
              <ComboboxChipsInput />
            </>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>{comboboxMocks.empty}</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}

export const Default: Story = {
  render: () => (
    <Combobox items={comboboxMocks.frameworks}>
      <ComboboxInput placeholder={comboboxMocks.frameworkPlaceholder} />
      <ComboboxContent>
        <ComboboxEmpty>{comboboxMocks.empty}</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex w-full max-w-sm flex-col gap-8">
      <MultipleFrameworks />
      <Combobox items={comboboxMocks.timezones}>
        <ComboboxInput placeholder={comboboxMocks.timezonePlaceholder} />
        <ComboboxContent>
          <ComboboxEmpty>{comboboxMocks.timezoneEmpty}</ComboboxEmpty>
          <ComboboxList>
            {(group) => (
              <ComboboxGroup key={group.value} items={group.items}>
                <ComboboxLabel>{group.value}</ComboboxLabel>
                <ComboboxCollection>
                  {(item) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxCollection>
                <ComboboxSeparator />
              </ComboboxGroup>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <Combobox
        defaultValue={comboboxMocks.frameworks[0]}
        items={comboboxMocks.frameworks}
      >
        <ComboboxInput
          placeholder={comboboxMocks.frameworkPlaceholder}
          showClear
        />
        <ComboboxContent>
          <ComboboxEmpty>{comboboxMocks.empty}</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  ),
};

export const ThemeComparison: Story = {
  render: () => (
    <div className="grid gap-px overflow-hidden rounded-[--radius] border border-border bg-border sm:grid-cols-2">
      <div className="bg-background p-8">
        <Combobox
          defaultValue={comboboxMocks.frameworks[0]}
          items={comboboxMocks.frameworks}
        >
          <ComboboxInput placeholder={comboboxMocks.frameworkPlaceholder} />
          <ComboboxContent>
            <ComboboxEmpty>{comboboxMocks.empty}</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
      <div className="dark bg-background p-8">
        <Combobox
          defaultValue={comboboxMocks.frameworks[0]}
          items={comboboxMocks.frameworks}
        >
          <ComboboxInput placeholder={comboboxMocks.frameworkPlaceholder} />
          <ComboboxContent>
            <ComboboxEmpty>{comboboxMocks.empty}</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    </div>
  ),
};
