import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/cn";
import { BenImage } from "../../_components/BenImage";
import { BentoGrid, Tile } from "../../_components/Bento";
import shared from "../../style.module.css";
import { walkthroughIntro as intro } from "./content";
import { WalkthroughForm } from "./WalkthroughForm";
import styles from "./walkthrough.module.css";

const headingId = "walkthrough-heading";

export function WalkthroughPage({
  initialFailure = false,
}: {
  initialFailure?: boolean;
}) {
  return (
    <section
      aria-labelledby={headingId}
      className={cn(shared.container, styles.page)}
    >
      <BentoGrid>
        <Tile span={5} surfaceClassName={styles.intro}>
          <h1 className={cn("jk-display", styles.title)} id={headingId}>
            {intro.title}
          </h1>
          <p className="jk-lead">{intro.body}</p>
          <ul className={styles.list}>
            {intro.list.map((item) => (
              <li key={item}>
                <CheckIcon aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className={styles.photo}>
            <BenImage
              alt={intro.imageAlt}
              fit="cover"
              id={intro.imageId}
              sizes="(min-width: 1024px) 34vw, 50vw"
            />
          </div>
        </Tile>
        <Tile kind="action" span={7} surfaceClassName={styles.formTile}>
          <WalkthroughForm
            initialFailure={initialFailure}
            key={initialFailure ? "error" : "ready"}
            labelledBy={headingId}
          />
        </Tile>
      </BentoGrid>
    </section>
  );
}
