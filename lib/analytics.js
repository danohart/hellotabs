// lib/analytics.js
// Thin wrapper around gtag so components never call window.gtag directly.
// The typeof window guard prevents errors during SSR.

export function trackEvent(name, params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

export function trackPageView(url) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
}
