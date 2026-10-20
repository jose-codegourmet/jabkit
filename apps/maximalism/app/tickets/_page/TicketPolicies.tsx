import type { Route } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/atoms/accordion";
import { cn } from "@/lib/cn";
import { Placeholder } from "../../_components/Placeholder";
import { getPolicy, ticketPolicyIds } from "../../_data/info";
import styles from "../../style.module.css";
import { policiesSection } from "./content";
import local from "./tickets.module.css";

/** Section 7: plain-text policies in an accordion, all closed by default. */
export function TicketPolicies() {
  return (
    <section
      aria-labelledby="ticket-policies-heading"
      className={cn(styles.section, local.policies)}
    >
      <div className={styles.sectionHead}>
        <h2
          className={cn("jk-heading", local.sectionTitle)}
          id="ticket-policies-heading"
        >
          {policiesSection.heading}
        </h2>
      </div>
      <div className={cn(styles.quietPanel, local.policyPanel)}>
        <Accordion multiple>
          {ticketPolicyIds.map((id) => {
            const policy = getPolicy(id);
            return (
              <AccordionItem key={id} value={id}>
                <AccordionTrigger>{policy.label}</AccordionTrigger>
                <AccordionContent>
                  <p className={local.policyText}>
                    {policy.label}: <Placeholder text={policy.placeholder} />
                  </p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
      <p className={local.policyLink}>
        <Link
          className={styles.textLink}
          href={policiesSection.link.href as Route}
        >
          {policiesSection.link.label}
        </Link>
      </p>
    </section>
  );
}
