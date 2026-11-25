// The 3 AM Commit Message — writes the winning commit message to /output/entry.txt.
// Deterministic: one fixed line, no randomness, no network, Node stdlib only.
// Runs on Node 22+ (type-stripped TypeScript, no enums/namespaces).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MESSAGE =
  "fix: revert the migration my own code review approved at 3 AM; I was the author, the reviewer, and the on-call, and the tests passed because I wrote those too; confidence was 98%";

// Self-enforce the scorer's gate: UTF-8, 1-200 chars, not only whitespace.
if (MESSAGE.length < 1 || MESSAGE.length > 200 || MESSAGE.trim() === "") {
  throw new Error(`entry out of gate: ${MESSAGE.length} chars`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MESSAGE, "utf8");
