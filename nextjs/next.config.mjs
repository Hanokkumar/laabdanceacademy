import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isNetlify = process.env.NETLIFY === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Avoid picking up a stray package-lock.json in a parent folder (e.g. user profile) as the workspace root.
  outputFileTracingRoot: path.join(__dirname),
  // Keep local workaround, but use default .next on Netlify for adapter compatibility.
  ...(isNetlify ? {} : { distDir: ".next-dev" }),
};

export default nextConfig;
