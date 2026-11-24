import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One Line, One Chill — a single-sentence horror line, under 200 characters.
// The scare is earned by what the line withholds: someone stood at the foot
// of the bed, close enough to take the photo, and the sleeper never woke.
const repoRoot = dirname(fileURLToPath(import.meta.url));
void repoRoot; // resolved from this file's location, never process.cwd()

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const line =
  "At 3:12 a.m. my phone lit up with a photo of me asleep, taken from the foot of my bed.";

writeFileSync(join(outDir, "entry.txt"), line, "utf8");
