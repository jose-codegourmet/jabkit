import { cn } from "@/lib/cn";
import site from "../../style.module.css";
import { faq } from "./content";
import { FaqList } from "./FaqList";
import { InfoBlock } from "./InfoBlock";
import styles from "./info.module.css";

export function FaqSection() {
  return (
    <InfoBlock id="faq" title={faq.heading}>
      <div className={cn(site.quietPanel, styles.faqPanelWrap)}>
        <FaqList items={faq.items} />
      </div>
    </InfoBlock>
  );
}
