import { Button } from "@/atoms/button/Button";
import "../../../globals.css";

export default async function Preview({
  params,
  searchParams,
}: {
  params: Promise<{ name: string; story: string }>;
  searchParams: Promise<{ theme?: string }>;
}) {
  const { name, story } = await params;
  const query = await searchParams;
  const isDark = query.theme === "dark" || story === "ThemeComparison";
  return (
    <main
      className={`${isDark ? "dark" : ""} grid min-h-dvh place-items-center bg-background p-10 text-foreground`}
    >
      <Button variant={story === "Variants" ? "secondary" : "primary"}>
        {name === "button" ? "Browse the library" : name}
      </Button>
    </main>
  );
}
