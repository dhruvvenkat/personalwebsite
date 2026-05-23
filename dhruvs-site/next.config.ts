import path from "node:path";
import type { NextConfig } from "next";

const appRoot = path.join(__dirname);

const nextConfig: NextConfig = {
  reactCompiler: true,
  outputFileTracingRoot: appRoot,
  transpilePackages: ["@whatisjery/react-fluid-distortion"],
  turbopack: {
    root: appRoot,
  },
};

export default nextConfig;
