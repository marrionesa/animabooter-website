import type { NextConfig } from "next";

// GitHub Pages serves project sites from a subpath (/<repo>/) and only as
// static files, so CI builds with NEXT_OUTPUT=export. Local/dev keeps the
// standalone server output.
const isExport = process.env.NEXT_OUTPUT === "export";
const basePath = isExport ? "/animabooter-website" : "";

const nextConfig: NextConfig = {
  ...(isExport
    ? { output: "export" as const, basePath, assetPrefix: basePath }
    : { output: "standalone" as const }),
  images: isExport ? { unoptimized: true } : undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
