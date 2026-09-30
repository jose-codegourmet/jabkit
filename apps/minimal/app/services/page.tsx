import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import { Faq12 } from "@/marketing/faq12";
import { ArtImage } from "../_components/ArtImage";
import { contactHref, faqCategories, services } from "../content";
import s from "./services.module.css";

export const metadata: Metadata = {
  title: "Services - West Room Studio",
  description:
    "Architecture and interiors scopes, what is included, what is not, and practical questions.",
};

const serviceImages = {
  architecture: {
    id: "min-p01-a",
    alt: "Daylit interior of Courtyard House with a view into the garden",
    caption: "Courtyard House · Architecture",
  },
  interiors: {
    id: "min-p03-a",
    alt: "Reading Room with shelving, a long table, and daylight at the window",
    caption: "Reading Room · Interiors",
  },
} as const;

export default function ServicesPage() {
  return (
    <main id="top" className={s.page}>
      <header className={s.intro}>
        <div className={s.introGrid}>
          <p className={s.eyebrow}>Our practice</p>
          <div>
            <h1>Services</h1>
            <p className={s.introText}>
              From the structure of a home to the details that make a room feel
              right. We work at both scales, with a clear scope for each.
            </p>
            <nav className={s.introLinks} aria-label="Explore services">
              {services.map((service) => (
                <a key={service.id} href={`#${service.id}`}>
                  {service.title} <span aria-hidden="true">↘</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <div className={s.services}>
        {services.map((service) => {
          const image = serviceImages[service.id];
          return (
            <section
              key={service.id}
              id={service.id}
              className={s.service}
              aria-labelledby={`${service.id}-title`}
              data-motion-reveal
            >
              <div className={s.serviceTop}>
                <div className={s.serviceIntro}>
                  <p className={s.eyebrow}>
                    West Room Studio / {service.title}
                  </p>
                  <h2 id={`${service.id}-title`}>{service.title}</h2>
                  <p>{service.audience}</p>
                </div>
                <figure className={s.serviceFigure}>
                  <ArtImage id={image.id} alt={image.alt} />
                  <figcaption>{image.caption}</figcaption>
                </figure>
              </div>

              <div className={s.scopeGrid}>
                <div className={s.deliverables}>
                  <h3>What we make</h3>
                  <ul>
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={s.scopeAside}>
                  <div>
                    <h3>Outside this scope</h3>
                    <ul>
                      {service.exclusions.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>What we need from you</h3>
                    <ul>
                      {service.clientInputs.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={s.serviceBottom}>
                <div className={s.stages}>
                  <h3>How it unfolds</h3>
                  <ol>
                    {service.stages.map((item, index) => (
                      <li key={item}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
                <a
                  className={s.inquiryLink}
                  href={contactHref({ service: service.id })}
                >
                  Discuss {service.title.toLowerCase()}
                  <ArrowTopRightIcon aria-hidden="true" />
                </a>
              </div>
            </section>
          );
        })}
      </div>

      <div className={s.faqWrap} data-motion-reveal>
        <Faq12
          className={s.faq}
          kicker=""
          title="Practical questions"
          description="How a project takes shape, from first conversation to final drawings."
          categories={faqCategories}
        />
      </div>
      <p className={s.disclosure}>
        West Room Studio is a fictional sample. Fees are discussed by inquiry;
        there is no checkout or booking on this site.
      </p>
    </main>
  );
}
