const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "production" ? false : true,
});

module.exports = withPWA({
  reactStrictMode: true,
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/neighborhood",
        has: [
          {
            type: "query",
            key: "n",
            value: "(?<neighborhood>.*)",
          },
        ],
        permanent: true,
        destination: "/neighborhood/:neighborhood",
      },
      {
        source: "/place",
        has: [
          {
            type: "query",
            key: "id",
            value: "(?<id>.*)",
          },
        ],
        permanent: true,
        destination: "/place/:id",
      },
    ];
  },
});
