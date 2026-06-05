// lib/posthog-server.js
// Server-side PostHog client for API routes.
const { PostHog } = require("posthog-node");

let posthogClient = null;

function getPostHogClient() {
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
