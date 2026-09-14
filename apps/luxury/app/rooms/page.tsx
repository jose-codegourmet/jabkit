import type { Metadata } from "next";
import { Button } from "@/atoms/button";
import { sampleImage } from "../assets";
import { formatRate, inquireHref, roomHref, rooms } from "../content";
import styles from "../style.module.css";

export const metadata: Metadata = {
  title: "Rooms - Stillwater House",
  description:
    "Compare Lake Room, Garden Room, and Upper Suite. Occupancy, access, and illustrative nightly rates.",
};

export default function RoomsPage() {
  return (
    <main id="top">
      <header className={styles.section}>
        <div className={styles.frame}>
          <h1 className="jk-heading">Three rooms</h1>
          <p className="jk-lead mt-4">
            Compare occupancy, area, beds, and access in text. Rates are
            illustrative. No live availability is shown.
          </p>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="room-list">
        <div className={styles.frame}>
          <h2 className="jk-heading sr-only" id="room-list">
            Room list
          </h2>
          {rooms.map((room) => {
            const image = sampleImage(
              room.imageIds.establishing,
              room.alt.establishing,
            );
            return (
              <article key={room.slug} className={styles.roomRow}>
                <figure className={styles.figure}>
                  <img
                    src={image.src}
                    alt={room.alt.establishing}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] object-cover"
                  />
                  <figcaption className={`jk-caption ${styles.caption}`}>
                    {room.captions.establishing}
                  </figcaption>
                </figure>
                <div>
                  <h2 className="jk-heading">{room.title}</h2>
                  <p className="jk-body mt-4">{room.summary}</p>
                  <dl className={`${styles.facts} mt-6`}>
                    <div>
                      <dt className={`jk-caption ${styles.meta}`}>Area</dt>
                      <dd className="jk-body">{room.area}</dd>
                    </div>
                    <div>
                      <dt className={`jk-caption ${styles.meta}`}>Occupancy</dt>
                      <dd className="jk-body">{room.occupancy} guests</dd>
                    </div>
                    <div>
                      <dt className={`jk-caption ${styles.meta}`}>Beds</dt>
                      <dd className="jk-body">{room.beds}</dd>
                    </div>
                    <div>
                      <dt className={`jk-caption ${styles.meta}`}>
                        Illustrative rate
                      </dt>
                      <dd className="jk-body">{formatRate(room)}</dd>
                    </div>
                  </dl>
                  <p className="jk-body mt-4">{room.amenities.join(". ")}.</p>
                  <p className={`jk-caption ${styles.meta} mt-4`}>
                    Access: {room.access}
                  </p>
                  <div className={`${styles.actions} mt-6`}>
                    <Button asChild>
                      <a href={roomHref(room.slug)}>Room details</a>
                    </Button>
                    <Button asChild variant="secondary">
                      <a href={inquireHref({ room: room.slug })}>
                        Plan this stay
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="compare">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="compare">
            How they differ
          </h2>
          <div className={`${styles.compare} mt-8`}>
            {rooms.map((room) => (
              <article key={`${room.slug}-compare`}>
                <h3>{room.title}</h3>
                <p className="jk-body mt-3">{room.comparison}</p>
              </article>
            ))}
          </div>
          <div className={`${styles.actions} mt-8`}>
            <Button asChild variant="secondary">
              <a href={inquireHref()}>General inquiry</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
