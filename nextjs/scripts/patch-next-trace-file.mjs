import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, "..");

const filesToPatch = [
  path.join(projectRoot, "node_modules", "next", "dist", "trace", "report", "to-json.js"),
  path.join(projectRoot, "node_modules", "next", "dist", "esm", "trace", "report", "to-json.js"),
];

for (const filePath of filesToPatch) {
  if (!fs.existsSync(filePath)) continue;

  const source = fs.readFileSync(filePath, "utf8");
  let patched = source;

  patched = patched.replace(
    /const file = _path\.default\.join\(distDir,\s*'trace'\);/g,
    "const file = _path.default.join(distDir, 'next-trace');"
  );

  // Permanent fix for Windows EPERM on trace writes:
  // disable local trace file writer in Next reporter.
  patched = patched.replace(
    /const reportToLocalHost = \(event\)\s*=>\s*\{/g,
    "const reportToLocalHost = (_event)=>{\n    return;"
  );

  if (patched !== source) {
    fs.writeFileSync(filePath, patched, "utf8");
  }
}
