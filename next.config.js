module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/neighborhood",
        has: [
          {
            type: "query",
            key: "n",
            // the page value will not be available in the
            // destination since value is provided and doesn't
            // use a named capture group e.g. (?<page>home)
            value: "(?<neighborhood>.*)",
          },
        ],
        permanent: true,
        destination: "/neighborhood/:neighborhood",
      },
    ];
  },
};

// https://www.hellochicago.co/neighborhood?n=Logan%20Square
// https://www.hellochicago.co/neighborhood/Logan%20Square
