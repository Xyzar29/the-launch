// The Eruption — entry for make.fun's "Make the AI judge excited" bounty
// (ai-excited-01).
//
// The whole entry is one image: entry.png, committed beside this file.
// It shows a concert grand piano on a dark stage whose open lid does not
// hold music at all — an entire luminous ocean is bursting out of it,
// one great wave curling toward the viewer with glowing koi and tiny
// constellations swirling inside it. An ordinary object, erupting into
// something impossible: that jolt is the point.
//
// All this program does is deliver the picture: it copies entry.png
// into the output directory named by MAKEFUN_OUTPUT_DIR (falling back
// to /output), where the bounty harness picks it up.

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = new URL("./entry.png", import.meta.url);
const destination = join(outputDir, "entry.png");

copyFileSync(source, destination);

console.log(`the-eruption: copied entry.png to ${destination}`);
