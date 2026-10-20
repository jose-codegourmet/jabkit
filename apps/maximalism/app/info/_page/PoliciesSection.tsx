import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/atoms/accordion";
import { cn } from "@/lib/cn";
import { Placeholder } from "../../_components/Placeholder";
import { getPolicy, infoPolicyIds } from "../../_data/info";
import site from "../../style.module.css";
import { policiesCopy } from "./content";
import { InfoBlock } from "./InfoBlock";
import styles from "./info.module.css";

/**
 * All items start closed. Closed panels stay in the DOM (hidden until found),
 * so find-in-page reaches them and the print stylesheet can expand them.
 */
export function PoliciesSection() {
  return (
    <InfoBlock id="policies" title={policiesCopy.heading}>
      <div className={cn(site.quietPanel, styles.policies)}>
        <Accordion hiddenUntilFound multiple>
          {infoPolicyIds.map((id) => {
            const policy = getPolicy(id);
            return (
              <AccordionItem key={policy.id} value={policy.id}>
                <AccordionTrigger>{policy.label}</AccordionTrigger>
                <AccordionContent>
                  <p>
                    <Placeholder text={policy.placeholder} />
                  </p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </InfoBlock>
  );
}
