const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const { createSecureHeaders } = require("next-secure-headers");

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ["tsx"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: createSecureHeaders({
          referrerPolicy: "strict-origin-when-cross-origin",
        }),
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/redirect",
        destination: "/",
        permanent: true,
      },
    ];
  },
});
