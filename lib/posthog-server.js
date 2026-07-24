// lib/posthog-server.js
// Server-side PostHog client for API routes.
const { PostHog } = require("posthog-node");

const noopClient = {
  capture: () => {},
  identify: () => {},
  shutdown: async () => {},
};

let posthogClient = null;

function getPostHogClient() {
  if (process.env.NODE_ENV === "development") {
    return noopClient;
  }
  if (!posthogClient) {
    posthogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN, {
      host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      flushAt: 1,
      flushInterval: 0,
    });
  }
  return posthogClient;
}

module.exports = { getPostHogClient };
