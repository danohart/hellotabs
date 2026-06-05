// lib/analytics.js
// Thin wrapper around gtag and PostHog so components never call them directly.
// The typeof window guard prevents errors during SSR.
import posthog from "posthog-js";

export function trackEvent(name, params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
  if (typeof window !== "undefined") {
    posthog.capture(name, params);
  }
}

export function trackPageView(url) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: url,
    });
  }
}
