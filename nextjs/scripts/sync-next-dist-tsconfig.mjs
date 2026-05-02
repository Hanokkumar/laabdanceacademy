/**
 * Keeps tsconfig "include" aligned with Next.js generated types under distDir.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, "..");

const distDirAbs = path.join(projectRoot, ".next-dev");

const rel = path.relative(projectRoot, distDirAbs).split(path.sep).join("/");
const relTypes = `${rel}/types/**/*.ts`;

const tsconfigPath = path.join(projectRoot, "tsconfig.json");
const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, "utf8"));

const isOldGenerated = (entry) => {
  if (typeof entry !== "string") return false;
  const n = entry.replace(/\\/g, "/");
  return (
    n.includes("/.next/types/") ||
    n.includes("/.next-dev/types/") ||
    n.includes("/build/types") ||
    n === ".next/types/**/*.ts" ||
    n === ".next-dev/types/**/*.ts" ||
    n === ".next/dev/types/**/*.ts"
  );
};

tsconfig.include = (tsconfig.include ?? []).filter((e) => !isOldGenerated(e));
if (!tsconfig.include.includes(relTypes)) {
  tsconfig.include.push(relTypes);
}

fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2) + "\n");
