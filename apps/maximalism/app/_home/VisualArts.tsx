import { cn } from "@/lib/cn";
import { MaxImage } from "../_components/MaxImage";
import { Placeholder } from "../_components/Placeholder";
import { Sticker } from "../_components/Sticker";
import shared from "../style.module.css";
import { artsCopy } from "./content";
import styles from "./home.module.css";

/** Text left, collage right. The layered paper and stickers stay inside the image column. */
export function VisualArts() {
  return (
    <section
      aria-labelledby="home-arts-title"
      className={cn(shared.section, styles.arts)}
    >
      <div className={styles.artsText}>
        <p className={shared.eyebrow}>{artsCopy.eyebrow}</p>
        <h2 className="jk-heading" id="home-arts-title">
          {artsCopy.title}
        </h2>
        <p className="jk-lead">
          <Placeholder text={artsCopy.body} />
        </p>
      </div>
      <div className={styles.artsArt}>
        <div aria-hidden="true" className={styles.artsPaper} />
        <MaxImage
          className={styles.artsImage}
          id="max-process-collage"
          ratio="4:5"
          sizes="(max-width: 899px) 90vw, 36rem"
        />
        <Sticker
          className={styles.artsStickerStar}
          motion="drift"
          rotate={-10}
          shape="star"
          size="clamp(3rem, 6vw, 4.5rem)"
          tone="tangerine"
        />
        <Sticker
          className={styles.artsStickerSquiggle}
          motion="drift"
          rotate={8}
          shape="squiggle"
          size="clamp(3.5rem, 7vw, 5.5rem)"
          tone="lime"
        />
      </div>
    </section>
  );
}
