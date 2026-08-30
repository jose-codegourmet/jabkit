export default function VerifyPage() {
  return (
    <main className="grid gap-8 p-8">
      <div className="rounded-[--radius] bg-background text-foreground">
        Light consumer harness
      </div>
      <div className="dark rounded-[--radius] bg-background text-foreground">
        Dark consumer harness
      </div>
    </main>
  );
}
