/** Byte-mode QR encoder (versions 1-10, ECC M). Spec-based; not vendor source. */

const TOTAL_CODEWORDS = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346];
const EC_PER_BLOCK = [0, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26];
const EC_BLOCKS = [0, 1, 1, 1, 2, 2, 4, 4, 4, 4, 6];
const ALIGNMENT = [
  [],
  [],
  [6, 18],
  [6, 22],
  [6, 26],
  [6, 30],
  [6, 34],
  [6, 22, 38],
  [6, 24, 42],
  [6, 26, 46],
  [6, 28, 50],
];

const EXP = new Uint8Array(512);
const LOG = new Uint8Array(256);

(() => {
  let value = 1;
  for (let i = 0; i < 255; i++) {
    EXP[i] = value;
    LOG[value] = i;
    value <<= 1;
    if (value & 0x100) value ^= 0x11d;
  }
  for (let i = 255; i < 512; i++) EXP[i] = EXP[i - 255];
})();

function gfMul(a: number, b: number) {
  if (a === 0 || b === 0) return 0;
  return EXP[LOG[a] + LOG[b]];
}

function rsDivisor(degree: number) {
  const result = new Array(degree).fill(0);
  result[degree - 1] = 1;
  let root = 1;
  for (let i = 0; i < degree; i++) {
    for (let j = 0; j < result.length; j++) {
      result[j] = gfMul(result[j], root);
      if (j + 1 < result.length) result[j] ^= result[j + 1];
    }
    root = gfMul(root, 2);
  }
  return result;
}

function rsEncode(data: number[], degree: number) {
  const gen = rsDivisor(degree);
  const ecc = new Array(degree).fill(0);
  for (const byte of data) {
    const factor = byte ^ ecc[0];
    ecc.shift();
    ecc.push(0);
    for (let i = 0; i < degree; i++) ecc[i] ^= gfMul(gen[i], factor);
  }
  return ecc;
}

function dataCapacity(version: number) {
  return TOTAL_CODEWORDS[version] - EC_PER_BLOCK[version] * EC_BLOCKS[version];
}

function countBits(version: number) {
  return version <= 9 ? 8 : 16;
}

function chooseVersion(payload: Uint8Array) {
  for (let version = 1; version <= 10; version++) {
    const bits = 4 + countBits(version) + payload.length * 8 + 4;
    if (Math.ceil(bits / 8) <= dataCapacity(version)) return version;
  }
  return null;
}

function packedBits(payload: Uint8Array, version: number, dataWords: number) {
  const bits: number[] = [];
  const push = (value: number, length: number) => {
    for (let i = length - 1; i >= 0; i--) bits.push((value >> i) & 1);
  };
  push(0b0100, 4);
  push(payload.length, countBits(version));
  for (const byte of payload) push(byte, 8);
  const maxBits = dataWords * 8;
  const terminator = Math.min(4, maxBits - bits.length);
  push(0, terminator);
  while (bits.length % 8 !== 0) bits.push(0);
  const bytes: number[] = [];
  for (let i = 0; i < bits.length; i += 8) {
    let byte = 0;
    for (let j = 0; j < 8; j++) byte = (byte << 1) | bits[i + j];
    bytes.push(byte);
  }
  const pads = [0xec, 0x11];
  let pad = 0;
  while (bytes.length < dataWords) {
    bytes.push(pads[pad % 2]);
    pad += 1;
  }
  return bytes;
}

function interleave(data: number[], version: number) {
  const blocks = EC_BLOCKS[version];
  const ecLen = EC_PER_BLOCK[version];
  const shortLen = Math.floor(data.length / blocks);
  const longCount = data.length % blocks;
  const groups: { data: number[]; ecc: number[] }[] = [];
  let offset = 0;
  for (let i = 0; i < blocks; i++) {
    const len = i < blocks - longCount ? shortLen : shortLen + 1;
    const block = data.slice(offset, offset + len);
    offset += len;
    groups.push({ data: block, ecc: rsEncode(block, ecLen) });
  }
  const out: number[] = [];
  const maxData = Math.max(...groups.map((g) => g.data.length));
  for (let i = 0; i < maxData; i++) {
    for (const group of groups) {
      if (i < group.data.length) out.push(group.data[i]);
    }
  }
  for (let i = 0; i < ecLen; i++) {
    for (const group of groups) out.push(group.ecc[i]);
  }
  return out;
}

function sizeOf(version: number) {
  return 17 + 4 * version;
}

function maskBit(mask: number, row: number, col: number) {
  switch (mask) {
    case 0:
      return (row + col) % 2 === 0;
    case 1:
      return row % 2 === 0;
    case 2:
      return col % 3 === 0;
    case 3:
      return (row + col) % 3 === 0;
    case 4:
      return (Math.floor(row / 2) + Math.floor(col / 3)) % 2 === 0;
    case 5:
      return ((row * col) % 2) + ((row * col) % 3) === 0;
    case 6:
      return (((row * col) % 2) + ((row * col) % 3)) % 2 === 0;
    default:
      return (((row + col) % 2) + ((row * col) % 3)) % 2 === 0;
  }
}

function setModule(
  matrix: number[][],
  reserved: boolean[][],
  row: number,
  col: number,
  dark: boolean,
) {
  matrix[row][col] = dark ? 1 : 0;
  reserved[row][col] = true;
}

function drawFinder(
  matrix: number[][],
  reserved: boolean[][],
  row: number,
  col: number,
) {
  for (let r = -1; r <= 7; r++) {
    for (let c = -1; c <= 7; c++) {
      const rr = row + r;
      const cc = col + c;
      if (rr < 0 || cc < 0 || rr >= matrix.length || cc >= matrix.length)
        continue;
      const on =
        (r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
        (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
        (r >= 2 && r <= 4 && c >= 2 && c <= 4);
      setModule(matrix, reserved, rr, cc, on);
    }
  }
}

function drawAlignment(
  matrix: number[][],
  reserved: boolean[][],
  row: number,
  col: number,
) {
  for (let r = -2; r <= 2; r++) {
    for (let c = -2; c <= 2; c++) {
      if (reserved[row + r][col + c]) return;
    }
  }
  for (let r = -2; r <= 2; r++) {
    for (let c = -2; c <= 2; c++) {
      const on = Math.max(Math.abs(r), Math.abs(c)) !== 1;
      setModule(matrix, reserved, row + r, col + c, on);
    }
  }
}

function encodeFormatBits(mask: number) {
  const data = mask;
  let rem = data << 10;
  for (let i = 14; i >= 10; i--) {
    if ((rem >>> i) & 1) rem ^= 0x537 << (i - 10);
  }
  return ((data << 10) | rem) ^ 0x5412;
}

function encodeVersionBits(version: number) {
  let rem = version << 12;
  for (let i = 17; i >= 12; i--) {
    if ((rem >>> i) & 1) rem ^= 0x1f25 << (i - 12);
  }
  return (version << 12) | rem;
}

function placeFormat(
  matrix: number[][],
  reserved: boolean[][],
  bits: number,
  writeReserved: boolean,
) {
  const n = matrix.length;
  for (let i = 0; i <= 14; i++) {
    const dark = ((bits >> i) & 1) === 1;
    const positions: [number, number][] = [];
    if (i < 6) positions.push([i, 8]);
    else if (i < 8) positions.push([i + 1, 8]);
    else if (i === 8) positions.push([8, 7]);
    else positions.push([8, 14 - i]);
    if (i < 8) positions.push([8, n - 1 - i]);
    else positions.push([n - 15 + i, 8]);
    for (const [row, col] of positions) {
      if (writeReserved) reserved[row][col] = true;
      else matrix[row][col] = dark ? 1 : 0;
    }
  }
  setModule(matrix, reserved, n - 8, 8, true);
}

function placeVersion(matrix: number[][], bits: number) {
  const n = matrix.length;
  for (let i = 0; i < 18; i++) {
    const dark = ((bits >> i) & 1) === 1;
    const row = Math.floor(i / 3);
    const col = i % 3;
    matrix[row][n - 11 + col] = dark ? 1 : 0;
    matrix[n - 11 + col][row] = dark ? 1 : 0;
  }
}

function reserveVersion(reserved: boolean[][]) {
  const n = reserved.length;
  for (let i = 0; i < 18; i++) {
    const row = Math.floor(i / 3);
    const col = i % 3;
    reserved[row][n - 11 + col] = true;
    reserved[n - 11 + col][row] = true;
  }
}

function penalty(matrix: number[][]) {
  const n = matrix.length;
  let score = 0;
  for (let r = 0; r < n; r++) {
    let run = 1;
    for (let c = 1; c < n; c++) {
      if (matrix[r][c] === matrix[r][c - 1]) run += 1;
      else {
        if (run >= 5) score += run - 2;
        run = 1;
      }
    }
    if (run >= 5) score += run - 2;
  }
  for (let c = 0; c < n; c++) {
    let run = 1;
    for (let r = 1; r < n; r++) {
      if (matrix[r][c] === matrix[r - 1][c]) run += 1;
      else {
        if (run >= 5) score += run - 2;
        run = 1;
      }
    }
    if (run >= 5) score += run - 2;
  }
  for (let r = 0; r < n - 1; r++) {
    for (let c = 0; c < n - 1; c++) {
      const v = matrix[r][c];
      if (
        v === matrix[r][c + 1] &&
        v === matrix[r + 1][c] &&
        v === matrix[r + 1][c + 1]
      )
        score += 3;
    }
  }
  const finder = [1, 0, 1, 1, 1, 0, 1];
  const hasFinder = (line: number[], start: number) =>
    finder.every((bit, i) => line[start + i] === bit);
  const lightRun = (line: number[], start: number, dir: number) => {
    let count = 0;
    for (let i = start; i >= 0 && i < line.length && line[i] === 0; i += dir)
      count += 1;
    return count;
  };
  const scan = (line: number[]) => {
    for (let i = 0; i <= line.length - 7; i++) {
      if (!hasFinder(line, i)) continue;
      if (lightRun(line, i - 1, -1) >= 4 || lightRun(line, i + 7, 1) >= 4)
        score += 40;
    }
  };
  for (let r = 0; r < n; r++) scan(matrix[r]);
  for (let c = 0; c < n; c++) scan(matrix.map((row) => row[c]));
  let dark = 0;
  for (const row of matrix) for (const cell of row) dark += cell;
  const percent = (dark * 100) / (n * n);
  score += Math.floor(Math.abs(percent - 50) / 5) * 10;
  return score;
}

function placeData(
  matrix: number[][],
  reserved: boolean[][],
  codewords: number[],
  mask: number,
) {
  const n = matrix.length;
  const bits: number[] = [];
  for (const word of codewords) {
    for (let i = 7; i >= 0; i--) bits.push((word >> i) & 1);
  }
  let index = 0;
  let upward = true;
  for (let col = n - 1; col > 0; col -= 2) {
    if (col === 6) col -= 1;
    for (let i = 0; i < n; i++) {
      const row = upward ? n - 1 - i : i;
      for (const c of [col, col - 1]) {
        if (reserved[row][c]) continue;
        let bit = index < bits.length ? bits[index] : 0;
        index += 1;
        if (maskBit(mask, row, c)) bit ^= 1;
        matrix[row][c] = bit;
      }
    }
    upward = !upward;
  }
}

function buildReserved(version: number) {
  const n = sizeOf(version);
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  const reserved = Array.from({ length: n }, () => Array(n).fill(false));
  drawFinder(matrix, reserved, 0, 0);
  drawFinder(matrix, reserved, 0, n - 7);
  drawFinder(matrix, reserved, n - 7, 0);
  for (const row of ALIGNMENT[version]) {
    for (const col of ALIGNMENT[version]) {
      drawAlignment(matrix, reserved, row, col);
    }
  }
  for (let i = 8; i < n - 8; i++) {
    setModule(matrix, reserved, 6, i, i % 2 === 0);
    setModule(matrix, reserved, i, 6, i % 2 === 0);
  }
  placeFormat(matrix, reserved, 0, true);
  if (version >= 7) reserveVersion(reserved);
  return { matrix, reserved };
}

export function encodeQrMatrix(text: string): number[][] | null {
  const payload = new TextEncoder().encode(text);
  const version = chooseVersion(payload);
  if (version === null) return null;
  const dataWords = dataCapacity(version);
  const codewords = interleave(packedBits(payload, version, dataWords), version);
  const base = buildReserved(version);
  let bestMatrix = base.matrix;
  let bestScore = Number.POSITIVE_INFINITY;
  for (let mask = 0; mask < 8; mask++) {
    const matrix = base.matrix.map((row) => row.slice());
    placeData(matrix, base.reserved, codewords, mask);
    placeFormat(matrix, base.reserved, encodeFormatBits(mask), false);
    if (version >= 7) placeVersion(matrix, encodeVersionBits(version));
    const score = penalty(matrix);
    if (score < bestScore) {
      bestScore = score;
      bestMatrix = matrix;
    }
  }
  return bestMatrix;
}

export const qrCodeMaxBytes = 187;
