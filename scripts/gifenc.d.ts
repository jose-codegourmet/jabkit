declare module "gifenc" {
  export function GIFEncoder(options?: { initialCapacity?: number }): {
    writeFrame(
      index: Uint8Array,
      width: number,
      height: number,
      options?: {
        palette?: number[][];
        delay?: number;
        repeat?: number;
        transparent?: boolean;
        dispose?: number;
      },
    ): void;
    finish(): void;
    bytes(): Uint8Array;
  };
  export function quantize(
    rgba: Uint8Array,
    maxColors: number,
    options?: { format?: string; oneBitAlpha?: boolean | number },
  ): number[][];
  export function applyPalette(
    rgba: Uint8Array,
    palette: number[][],
    options?: { format?: string },
  ): Uint8Array;
}
