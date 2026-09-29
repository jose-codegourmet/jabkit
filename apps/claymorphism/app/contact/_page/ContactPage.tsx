import { ClayImage } from "../../_components/ClayImage";
import { ClaySurface } from "../../_components/ClaySurface";
import { DemoFormNotice } from "../../_components/DemoFormNotice";
import { PlaceholderText } from "../../_components/PlaceholderText";
import { ContactForm } from "./ContactForm";
import styles from "./contact.module.css";
import { contactFaq, contactFormCopy, contactIntro } from "./content";

export function ContactPage() {
  return (
    <div className={styles.page}>
      <section aria-labelledby="contact-heading" className={styles.intro}>
        <ClaySurface className={styles.introCard}>
          <div className={styles.heading}>
            <ClayImage
              alt=""
              className={styles.logo}
              decorative
              id={contactIntro.logoId}
            />
            <h1 className="jk-heading" id="contact-heading">
              {contactIntro.title}
            </h1>
          </div>
          <p className={`jk-body ${styles.lede}`}>{contactIntro.body}</p>
          <dl className={styles.facts}>
            <div>
              <dt>{contactIntro.emailLabel}</dt>
              <dd>
                <PlaceholderText text={contactIntro.email} />
              </dd>
            </div>
            <div>
              <dt>{contactIntro.replyLabel}</dt>
              <dd>
                <PlaceholderText text={contactIntro.reply} />
              </dd>
            </div>
          </dl>
        </ClaySurface>
      </section>

      <section aria-label="Contact form" className={styles.formSection}>
        <DemoFormNotice>{contactFormCopy.notice}</DemoFormNotice>
        <ContactForm />
      </section>

      <section aria-label="FAQ" className={styles.nudge}>
        <a className={styles.nudgeLink} href={contactFaq.href}>
          {contactFaq.label}
        </a>
      </section>
    </div>
  );
}
