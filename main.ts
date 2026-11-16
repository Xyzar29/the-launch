// The Eruption — entry for make.fun's "Make the AI judge excited" bounty
// (ai-excited-01).
//
// The whole entry is a single image: a grand piano on a dark stage whose
// open lid lets out an entire glowing ocean — one great wave, full of koi
// and constellations, bursting toward the viewer. This program's only job
// is to deliver that image: it copies entry.png, which sits beside this
// file, into the output directory make.fun points it at.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Create the output directory first so a fresh, not-yet-existing path
// can never make the copy fail.
mkdirSync(outputDir, { recursive: true });

const source = fileURLToPath(new URL("./entry.png", import.meta.url));
copyFileSync(source, join(outputDir, "entry.png"));
