import type { Metadata } from "next";
import { Button } from "@/atoms/button";
import { Faq12 } from "@/marketing/faq12";
import { contactHref, faqCategories, services } from "../content";
import styles from "../style.module.css";

export const metadata: Metadata = {
  title: "Services - West Room Studio",
  description:
    "Architecture and interiors scopes, what is included, what is not, and practical questions.",
};

export default function ServicesPage() {
  return (
    <main id="top">
      <section className={styles.section}>
        <div className={styles.frame}>
          <h1 className="jk-heading">Services</h1>
          <p className="jk-lead mt-4">
            Two aligned scopes. Fees are inquiry-based. This sample has no
            monthly plan and no checkout.
          </p>
          <div className={`${styles.scopeColumns} mt-12`}>
            {services.map((service) => (
              <section
                key={service.id}
                id={service.id}
                aria-labelledby={`${service.id}-title`}
              >
                <h2 className="jk-heading" id={`${service.id}-title`}>
                  {service.title}
                </h2>
                <p className="jk-body mt-4">{service.audience}</p>
                <h3 className="jk-label mt-8">Deliverables</h3>
                <ul className="jk-body mt-3 list-disc pl-5">
                  {service.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h3 className="jk-label mt-8">Not included</h3>
                <ul className="jk-body mt-3 list-disc pl-5">
                  {service.exclusions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h3 className="jk-label mt-8">Stages</h3>
                <ol className="jk-body mt-3 list-decimal pl-5">
                  {service.stages.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
                <h3 className="jk-label mt-8">What we need from you</h3>
                <ul className="jk-body mt-3 list-disc pl-5">
                  {service.clientInputs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild>
                    <a href={contactHref({ service: service.id })}>
                      Discuss a project
                    </a>
                  </Button>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <Faq12
        kicker=""
        title="Practical questions"
        description="Process, scope, and what this fictional studio will not pretend to sell."
        categories={faqCategories}
      />
    </main>
  );
}
