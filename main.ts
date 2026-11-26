import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Funniest Forecast for a City That Isn't — one bulletin line, hand-written.
// The joke: Puddleford's rain falls upward, so the official advice has
// quietly given up on umbrellas — and buckets are apparently standing law.
const city = "Puddleford";
const bulletin = "Heavy rain falling upward all day, 12°C";
const advice = "umbrellas useless, buckets remain mandatory on the High Street";

const line = `${city}: ${bulletin}; ${advice}.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line + "\n", "utf8");
