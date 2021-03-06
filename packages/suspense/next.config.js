const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ["tsx"],

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
