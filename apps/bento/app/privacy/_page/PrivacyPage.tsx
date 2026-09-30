import { InfoCircledIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/cn";
import { BentoGrid, Tile } from "../../_components/Bento";
import { DemoNotice } from "../../_components/DemoNotice";
import { WithPlaceholders } from "../../_components/Placeholder";
import shared from "../../style.module.css";
import { privacy } from "./content";
import styles from "./legal.module.css";

export function PrivacyPage() {
  return (
    <div className={cn(shared.container, styles.page)}>
      <article aria-labelledby="privacy-heading" className={styles.article}>
        <header className={styles.header}>
          <h1 className={cn("jk-display", styles.title)} id="privacy-heading">
            {privacy.title}
          </h1>
        </header>
        <BentoGrid>
          <Tile span={12} surfaceClassName={styles.body}>
            <p className="jk-body">
              <WithPlaceholders text={privacy.body} />
            </p>
          </Tile>
        </BentoGrid>
        <DemoNotice className={styles.notice} variant="inline">
          <InfoCircledIcon aria-hidden="true" />
          <span>{privacy.demoLine}</span>
        </DemoNotice>
      </article>
    </div>
  );
}
