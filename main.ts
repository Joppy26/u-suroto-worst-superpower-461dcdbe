import { mkdirSync, writeFileSync } from "node:fs";

// Worst Superpower: one line, at most 140 characters, inventing the most
// useless superpower imaginable. Deterministic: no randomness, no clock,
// no network, no dependencies. Writes the entry to /output/entry.txt.
const ENTRY =
  "I can teleport any sock in the world exactly three centimetres to the left, but only once a day.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
