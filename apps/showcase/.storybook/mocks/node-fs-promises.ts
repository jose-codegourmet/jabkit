function publicUrl(filePath: string) {
  const normalized = filePath.replace(/\\/g, "/");
  const marker = "/public/";
  const index = normalized.indexOf(marker);
  if (index >= 0) return `/${normalized.slice(index + marker.length)}`;
  if (normalized.startsWith("public/")) {
    return `/${normalized.slice("public/".length)}`;
  }
  return `/${normalized.replace(/^\/+/, "")}`;
}

export async function readFile(filePath: string, encoding?: string) {
  const pathUrl = publicUrl(filePath);
  const url =
    typeof window === "undefined"
      ? `http://localhost:6007${pathUrl}`
      : new URL(pathUrl, window.location.origin).toString();
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to read ${filePath}: ${response.status}`);
  }
  if (encoding === "utf8" || encoding === "utf-8") {
    return response.text();
  }
  return new Uint8Array(await response.arrayBuffer());
}

export default { readFile };
