// gta6-clipper-01 entry — program (Node 22, standard library only).
//
// What it does: copies VIDEO.json from the repository root to the output
// directory, where the house gate reads it. That is the whole program.
// The entry itself is the YouTube video: an agent-made vertical GTA 6 clip
// (rendered with ffmpeg in the recorded build session — see clip/ and
// UPLOAD.md) that hooks viewers with a Vice City / Leonida moment and then
// pitches make.fun on screen. VIDEO.json names that video's address.
//
// Run it the way the grader does (outside the grader's container,
// MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
