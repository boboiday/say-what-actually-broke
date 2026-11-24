import { writeFileSync, mkdirSync } from "node:fs";

const LINE = "We lost your draft because the tab crashed taking 47 other tabs with it. Your work is gone, but your tabs are finally closed.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
