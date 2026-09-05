import { createRequire } from "node:module";
import sharp from "sharp";

const { GIFEncoder, applyPalette, quantize } = createRequire(import.meta.url)(
  "gifenc",
) as typeof import("gifenc");

const gifWidth = 640;

export async function encodePreviewGif(
  frames: Buffer[],
  delayMs: number,
): Promise<{ data: Buffer; width: number; height: number }> {
  if (!frames.length)
    throw new Error("GIF encoding requires at least one frame");
  const resized = await Promise.all(
    frames.map((frame) =>
      sharp(frame)
        .resize({ width: gifWidth, withoutEnlargement: true })
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true }),
    ),
  );
  const { width, height } = resized[0].info;
  const encoder = GIFEncoder();
  for (const frame of resized) {
    if (frame.info.width !== width || frame.info.height !== height)
      throw new Error("GIF frames must share dimensions");
    const pixels = new Uint8Array(
      frame.data.buffer,
      frame.data.byteOffset,
      frame.data.byteLength,
    );
    const palette = quantize(pixels, 256, { format: "rgb565" });
    const index = applyPalette(pixels, palette, { format: "rgb565" });
    encoder.writeFrame(index, width, height, {
      palette,
      delay: delayMs,
      repeat: 0,
    });
  }
  encoder.finish();
  return { data: Buffer.from(encoder.bytes()), width, height };
}
