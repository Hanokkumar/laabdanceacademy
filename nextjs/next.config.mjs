import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Avoid picking up a stray package-lock.json in a parent folder (e.g. user profile) as the workspace root.
  outputFileTracingRoot: path.join(__dirname),
  // Use a clean alternate output folder; .next/trace is currently permission-locked on this machine.
  distDir: ".next-dev",
};

export default nextConfig;
