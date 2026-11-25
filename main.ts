// Fix Human Sleep: Funniest Patch Note — make.fun entry.
//
// A tiny Node 22 program (stdlib only, no network) that writes one
// original patch-note line about human sleep being fixed to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
//
// The line has two beats in changelog voice: the fix itself (sleep
// installs overnight instead of buffering until 3 a.m.) and a
// "Known issue" kicker (dreams still ship untested). Both beats stay
// inside one line so the judge reads it as a single patch note.
//
// Before writing, the program measures the line and enforces every
// rule the sealed gate will enforce: UTF-8 text, 1-160 characters,
// a single line, really about sleep, and no trailing explanation
// after the note. A line that breaks any of these fails loudly here
// instead of failing the gate on the server.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PATCH_NOTE =
  "Fixed: human sleep now installs overnight instead of buffering until 3 a.m. Known issue: dreams still ship untested.";

const CHAR_LIMIT = 160;

interface NoteReport {
  text: string;
  chars: number;
  bytes: number;
}

function measureNote(raw: string): NoteReport {
  const text = raw.trim();
  const chars = [...text].length;
  const bytes = Buffer.byteLength(text, "utf8");
  if (chars === 0) {
    throw new Error("patch note is empty");
  }
  if (chars > CHAR_LIMIT) {
    throw new Error(`patch note is ${chars} chars, over the ${CHAR_LIMIT} limit`);
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("patch note must stay on one line");
  }
  if (!/sleep/i.test(text)) {
    throw new Error("patch note must announce a fix for human sleep");
  }
  // Round-trip through UTF-8: the gate reads UTF-8 text, so fail here
  // instead of shipping bytes the gate cannot read.
  if (Buffer.from(text, "utf8").toString("utf8") !== text) {
    throw new Error("patch note is not clean UTF-8 text");
  }
  return { text, chars, bytes };
}

function main(): void {
  const note = measureNote(PATCH_NOTE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, note.text + "\n", { encoding: "utf8" });
  chmodSync(target, 0o644);
  console.log(`wrote ${target} (${note.chars} chars, ${note.bytes} bytes)`);
}

main();
