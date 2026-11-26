// Dog reviews the mailman: a one-line review written by the dog.
// Writes the entry line to /output/entry.txt via MAKEFUN_OUTPUT_DIR.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "He is the only friend I have who visits every day and never comes inside. I have decided he is shy, and I bark to encourage him.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (!LINE.trim()) {
  throw new Error("entry line must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
