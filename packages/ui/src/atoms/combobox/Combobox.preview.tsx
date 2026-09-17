// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
} from "./Combobox";
import { comboboxMocks } from "./Combobox.mocks";

export default {
  Default: () => (
    <Combobox items={comboboxMocks.frameworks}>
      <ComboboxInput placeholder={comboboxMocks.frameworkPlaceholder} />
      <ComboboxContent>
        <ComboboxEmpty>{comboboxMocks.empty}</ComboboxEmpty>
        <ComboboxList>
          {comboboxMocks.frameworks.map((item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
  Variants: () => (
    <div className="flex w-full max-w-sm flex-col gap-8">
      <Combobox items={comboboxMocks.timezones}>
        <ComboboxInput placeholder={comboboxMocks.timezonePlaceholder} />
        <ComboboxContent>
          <ComboboxEmpty>{comboboxMocks.timezoneEmpty}</ComboboxEmpty>
          <ComboboxList>
            {comboboxMocks.timezones.map((group) => (
              <ComboboxGroup key={group.value} items={group.items}>
                <ComboboxLabel>{group.value}</ComboboxLabel>
                {group.items.map((item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                ))}
                <ComboboxSeparator />
              </ComboboxGroup>
            ))}
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
            {comboboxMocks.frameworks.map((item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  ),
};
