import { InfoCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { BenImage } from "../../_components/BenImage";
import { BentoGrid, Tile } from "../../_components/Bento";
import { CtaBand } from "../../_components/CtaBand";
import shared from "../../style.module.css";
import { businessTypes, fitNote, header, roles } from "./content";
import { RoleIcon } from "./RoleIcon";
import styles from "./who.module.css";

export function WhoPage() {
  return (
    <>
      <section
        aria-labelledby="who-heading"
        className={cn(shared.container, styles.header)}
      >
        <BentoGrid>
          <Tile span={7} surfaceClassName={styles.headerCopy}>
            <h1 className={cn("jk-display", styles.title)} id="who-heading">
              {header.title}
            </h1>
            <p className="jk-lead">{header.body}</p>
          </Tile>
          <Tile flush span={5} surfaceClassName={styles.headerPhoto}>
            <BenImage
              alt={header.imageAlt}
              fit="cover"
              id={header.imageId}
              priority
              sizes="(min-width: 1024px) 34vw, 100vw"
            />
          </Tile>
        </BentoGrid>
      </section>

      <section
        aria-labelledby="who-roles-heading"
        className={cn(shared.container, shared.section)}
      >
        <div className={shared.sectionHead}>
          <h2 className="jk-heading" id="who-roles-heading">
            {roles.title}
          </h2>
        </div>
        <BentoGrid as="ul">
          {roles.items.map((role) => {
            const headingId = `who-role-${role.id}`;
            return (
              <Tile
                as="li"
                key={role.id}
                labelledBy={headingId}
                span={4}
                surfaceClassName={styles.role}
              >
                <RoleIcon role={role.id} />
                <h3 className="jk-title" id={headingId}>
                  {role.title}
                </h3>
                <p className={cn("jk-body", shared.muted)}>{role.body}</p>
              </Tile>
            );
          })}
        </BentoGrid>
      </section>

      <section
        aria-labelledby="who-types-heading"
        className={cn(shared.container, shared.section)}
      >
        <div className={shared.sectionHead}>
          <h2 className="jk-heading" id="who-types-heading">
            {businessTypes.title}
          </h2>
        </div>
        <BentoGrid as="ul">
          {businessTypes.items.map((type) => (
            <Tile as="li" flush key={type.id} span={6}>
              <figure className={styles.typeFigure}>
                <div className={styles.typeMedia}>
                  <BenImage
                    alt={type.imageAlt}
                    fit="cover"
                    id={type.imageId}
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <figcaption className={cn("jk-title", styles.typeCaption)}>
                  {type.label}
                </figcaption>
              </figure>
            </Tile>
          ))}
        </BentoGrid>
        <p className={cn("jk-lead", styles.typesBody)}>
          {businessTypes.body.before}
          <Link
            className={styles.inlineLink}
            href={businessTypes.body.link.href}
          >
            {businessTypes.body.link.label}
          </Link>
          {businessTypes.body.after}
        </p>
      </section>

      <section
        aria-labelledby="who-fit-heading"
        className={cn(shared.container, shared.section)}
      >
        <BentoGrid>
          <Tile span={12} surfaceClassName={styles.fit} tone="muted">
            <span aria-hidden="true" className={styles.fitIcon}>
              <InfoCircledIcon height={22} width={22} />
            </span>
            <h2
              className={cn("jk-heading", styles.fitTitle)}
              id="who-fit-heading"
            >
              {fitNote.title}
            </h2>
            <p className={cn("jk-lead", styles.fitBody)}>{fitNote.body}</p>
          </Tile>
        </BentoGrid>
      </section>

      <CtaBand />
    </>
  );
}
