import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/atoms/button";
import { Content1 } from "@/marketing/content1";
import { toRoomSections } from "../../_components/adapters";
import { sampleImage } from "../../assets";
import {
  formatRate,
  getRoom,
  inquireHref,
  relatedRooms,
  roomHref,
  rooms,
} from "../../content";
import styles from "../../style.module.css";
import { sampleRoot } from "../../types";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) {
    return { title: "Room not found - Stillwater House" };
  }
  return {
    title: `${room.title} - Stillwater House`,
    description: room.summary,
  };
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) notFound();

  const establishing = sampleImage(
    room.imageIds.establishing,
    room.alt.establishing,
  );
  const detail = sampleImage(room.imageIds.detail, room.alt.detail);
  const related = relatedRooms(room.slug);

  return (
    <main id="top">
      <article>
        <header className={styles.section}>
          <div className={styles.frame}>
            <nav className="jk-caption">
              <a href={`${sampleRoot}/rooms`}>Rooms</a>
              {` / ${room.title}`}
            </nav>
            <h1 className="jk-heading mt-4">{room.title}</h1>
            <p className="jk-lead mt-4">{room.summary}</p>
            <p className={`jk-caption ${styles.meta} mt-4`}>
              {room.area} · {room.occupancy} guests · {room.beds} ·{" "}
              {formatRate(room)}
            </p>
            <div className={`${styles.gallery} mt-8`}>
              <figure className={styles.figure}>
                <img
                  src={establishing.src}
                  alt={room.alt.establishing}
                  width={establishing.width}
                  height={establishing.height}
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/3] object-cover"
                />
                <figcaption className={`jk-caption ${styles.caption}`}>
                  {room.captions.establishing}
                </figcaption>
              </figure>
              <figure className={`${styles.figure} ${styles.revealFigure}`}>
                <img
                  src={detail.src}
                  alt={room.alt.detail}
                  width={detail.width}
                  height={detail.height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] object-cover"
                />
                <figcaption className={`jk-caption ${styles.caption}`}>
                  {room.captions.detail}
                </figcaption>
              </figure>
            </div>
          </div>
        </header>

        <Content1
          kicker=""
          title="Specifications"
          description={`${room.area}. ${room.beds}. ${formatRate(room)} as an illustrative demo figure.`}
          outlineLabel="On this page"
          sections={toRoomSections(room)}
        />

        <section className={styles.section} aria-labelledby="plan-stay">
          <div className={styles.frame}>
            <h2 className="jk-heading" id="plan-stay">
              Plan this stay
            </h2>
            <p className="jk-body mt-4">
              Displayed rates describe a fictional sample. No availability is
              checked. There is no cart or checkout.
            </p>
            <div className={`${styles.actions} mt-6`}>
              <Button asChild>
                <a href={inquireHref({ room: room.slug })}>Plan this stay</a>
              </Button>
              <Button asChild variant="secondary">
                <a href={`${sampleRoot}/rooms`}>All rooms</a>
              </Button>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="related-rooms">
          <div className={styles.frame}>
            <h2 className="jk-heading" id="related-rooms">
              Other rooms
            </h2>
            <ul className={`${styles.listPlain} mt-6`}>
              {related.map((item) => (
                <li key={item.slug}>
                  <a href={roomHref(item.slug)}>{item.title}</a>
                  <p className={`jk-caption ${styles.meta}`}>{item.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>
    </main>
  );
}
