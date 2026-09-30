import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import {
  BentoGrid,
  Tile,
  TileFooter,
  TileLabel,
} from "../../_components/Bento";
import { CtaBand } from "../../_components/CtaBand";
import shared from "../../style.module.css";
import { faqGroups, faqHeader } from "./content";
import { FaqGroupAccordion } from "./FaqGroupAccordion";
import styles from "./faq.module.css";

export function FaqPage() {
  return (
    <>
      <section
        aria-labelledby="faq-heading"
        className={cn(shared.container, styles.header)}
      >
        <BentoGrid>
          <Tile span={8} surfaceClassName={styles.intro}>
            <h1 className={cn("jk-display", styles.title)} id="faq-heading">
              {faqHeader.title}
            </h1>
            <p className="jk-lead">{faqHeader.body}</p>
          </Tile>
          <Tile
            kind="action"
            span={4}
            surfaceClassName={styles.topics}
            tone="mint"
          >
            <nav aria-labelledby="faq-topics-label">
              <TileLabel id="faq-topics-label">
                {faqHeader.topicsLabel}
              </TileLabel>
              <ul className={styles.topicList}>
                {faqGroups.map((group) => (
                  <li key={group.id}>
                    <a className={styles.topicLink} href={`#faq-${group.id}`}>
                      {group.title}
                      <ArrowRightIcon aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Tile>
        </BentoGrid>
      </section>

      <div className={cn(shared.container, styles.groups)}>
        <BentoGrid>
          {faqGroups.map((group) => {
            const headingId = `faq-${group.id}-heading`;
            return (
              <Tile
                as="section"
                id={`faq-${group.id}`}
                key={group.id}
                kind="action"
                labelledBy={headingId}
                span={group.span}
                surfaceClassName={styles.group}
                tone={group.id === "demo-data" ? "apricot" : "default"}
              >
                <h2 className={styles.groupTitle} id={headingId}>
                  {group.title}
                </h2>
                <FaqGroupAccordion
                  groupId={group.id}
                  items={group.items}
                  openFirst={group.openFirst}
                />
                {group.action ? (
                  <TileFooter>
                    <Button asChild variant="secondary">
                      <Link href={group.action.href}>{group.action.label}</Link>
                    </Button>
                  </TileFooter>
                ) : null}
              </Tile>
            );
          })}
        </BentoGrid>
      </div>

      <CtaBand />
    </>
  );
}
