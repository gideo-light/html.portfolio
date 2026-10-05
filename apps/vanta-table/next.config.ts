import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: "/html.portfolio",
        assetPrefix: "/html.portfolio/",
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
