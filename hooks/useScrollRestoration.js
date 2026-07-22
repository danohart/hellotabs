import { useEffect } from "react";
import { useRouter } from "next/router";

// Client-fetched list pages (home, search, neighborhood) render a Loader
// until their data arrives, so the page is too short for scroll restoration
// to land correctly right away when navigating back from a place detail
// page — we wait for `ready` (the real list has rendered) before restoring.
//
// Scroll position is captured on `routeChangeStart` rather than a generic
// `scroll` listener: leaving the page (even the click that starts the
// forward navigation) itself triggers a scroll-to-top as part of Next's own
// transition, and a generic listener ends up saving that transient reset
// over the real position moments before the page unmounts.
export function useScrollRestoration(key, ready) {
  const router = useRouter();

  useEffect(() => {
    function saveScroll() {
      sessionStorage.setItem(key, String(window.scrollY));
    }
    router.events.on("routeChangeStart", saveScroll);
    return () => router.events.off("routeChangeStart", saveScroll);
  }, [key, router.events]);

  useEffect(() => {
    if (!ready) return;
    const saved = sessionStorage.getItem(key);
    if (!saved) return;

    requestAnimationFrame(() => {
      window.scrollTo(0, parseInt(saved, 10));
      sessionStorage.removeItem(key);
    });
  }, [key, ready]);
}
