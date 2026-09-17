// biome-ignore lint/correctness/noUnusedImports: packages/ui uses the classic JSX runtime.
import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";
import { accordionMocks } from "./Accordion.mocks";

export default {
  Default: () => (
    <Accordion className="w-full max-w-md" defaultValue={["item-1"]}>
      {accordionMocks.default.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
  Variants: () => (
    <div className="flex w-full max-w-md flex-col gap-8">
      <Accordion
        className="rounded-lg border border-border px-4"
        defaultValue={["notifications", "billing"]}
        multiple
      >
        {accordionMocks.multiple.map((item) => (
          <AccordionItem
            key={item.value}
            className="border-b border-border last:border-b-0"
            value={item.value}
          >
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Accordion className="w-full" defaultValue={["history"]}>
        {accordionMocks.disabled.map((item) => (
          <AccordionItem
            key={item.value}
            disabled={item.disabled}
            value={item.value}
          >
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  ),
};
