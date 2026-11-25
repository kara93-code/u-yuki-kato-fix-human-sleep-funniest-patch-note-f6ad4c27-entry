// Fix Human Sleep: Funniest Patch Note — make.fun entry.
//
// A tiny Node 22 program (stdlib only, no network) that writes one
// original patch-note line about human sleep being fixed to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// The gate wants UTF-8 text of 1-160 characters on a single line,
// so the line is checked here before anything is written.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line has two beats in changelog voice: the fix itself (sleep
// installs overnight instead of buffering until 3 a.m.) and a
// "Known issue" kicker (dreams still ship untested). Both beats stay
// inside one line so the judge reads it as a single patch note.
const PATCH_NOTE =
  "Fixed: human sleep now installs overnight instead of buffering until 3 a.m. Known issue: dreams still ship untested.";

const CHAR_LIMIT = 160;

function checkedLine(raw: string): string {
  const line = raw.trim();
  if (line.length === 0) {
    throw new Error("patch note is empty");
  }
  if (line.length > CHAR_LIMIT) {
    throw new Error(`patch note is ${line.length} chars, over the ${CHAR_LIMIT} limit`);
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("patch note must stay on one line");
  }
  // Round-trip through UTF-8: the gate reads UTF-8 text, so fail here
  // instead of shipping bytes the gate cannot read.
  const roundTripped = Buffer.from(line, "utf8").toString("utf8");
  if (roundTripped !== line) {
    throw new Error("patch note is not clean UTF-8 text");
  }
  return line;
}

function main(): void {
  const line = checkedLine(PATCH_NOTE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, line + "\n", { encoding: "utf8" });
  chmodSync(target, 0o644);
  console.log(`wrote ${target} (${line.length} chars, ${Buffer.byteLength(line, "utf8")} bytes)`);
}

main();
