import type { Metadata } from "next";
import { StayInquiry } from "../_components/StayInquiry";
import { demoNote, isExperienceId, isRoomId } from "../content";
import styles from "../style.module.css";

export const metadata: Metadata = {
  title: "Inquire - Stillwater House",
  description:
    "Preview a stay inquiry with room, dates, and guest count. Nothing is sent.",
};

function firstParam(value: string | string[] | undefined): string | undefined {
  const raw = Array.isArray(value) ? value[0] : value;
  const trimmed = raw?.trim();
  return trimmed ? trimmed : undefined;
}

export default async function InquirePage({
  searchParams,
}: {
  searchParams: Promise<{ room?: string; experience?: string }>;
}) {
  const params = await searchParams;
  const room = firstParam(params.room);
  const experience = firstParam(params.experience);

  return (
    <main id="top">
      <header className={styles.section}>
        <div className={styles.frame}>
          <h1 className="jk-heading">Stay inquiry</h1>
          <p className="jk-lead mt-4">
            Choose a room, dates, and guest count. Preview the inquiry in this
            tab. Edit dates, then leave without booking. Nothing is sent.
          </p>
          <p className={`jk-caption ${styles.meta} mt-4`}>{demoNote}</p>
        </div>
      </header>
      <div className={styles.frame}>
        <StayInquiry
          key={`${room ?? ""}-${experience ?? ""}`}
          initialRoom={room}
          initialExperience={experience}
          ignoredUnknownRoom={Boolean(room) && !isRoomId(room)}
          ignoredUnknownExperience={
            Boolean(experience) && !isExperienceId(experience)
          }
        />
      </div>
    </main>
  );
}
