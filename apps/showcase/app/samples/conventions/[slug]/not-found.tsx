import Link from "next/link";

export default function ConventionRecordNotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <h1 className="text-3xl font-semibold tracking-tight">
        Unknown sample record
      </h1>
      <p className="mt-4 max-w-prose leading-7 text-muted-foreground">
        That slug is not in the convention fixtures. Unknown IDs are not
        interpolated into headings or destinations.
      </p>
      <Link
        href="/samples/conventions"
        className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-primary"
      >
        Return to sample conventions
      </Link>
    </main>
  );
}
