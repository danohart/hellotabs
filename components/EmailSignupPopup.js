// components/EmailSignupPopup.js
// Modal popup with three trigger strategies:
//   1. 20-second timer (all devices)
//   2. 60% scroll depth (all devices)
//   3. Mobile: scroll-only (timer suppressed on small screens to avoid annoyance)
// Once dismissed or submitted a cookie is set so it won't show again for 30 days.
import { useState, useEffect, useCallback } from "react";
import { useEmailSignup } from "../hooks/useEmailSignup";
import { useSignupCookie, setSignupCookie, hasSignupCookie } from "../hooks/useSignupCookie";
import SignupForm from "./SignupForm";
import { trackEvent } from "../lib/analytics";

const TIMER_DELAY_MS = 20000;
const SCROLL_THRESHOLD = 0.6;

export default function EmailSignupPopup() {
  const [open, setOpen] = useState(false);
  const formProps = useEmailSignup();

  const dismiss = useCallback(
    (reason) => {
      setOpen(false);
      setSignupCookie();
      trackEvent("email_popup_dismissed", { reason });
    },
    []
  );

  // Auto-close after successful submit
  useEffect(() => {
    if (formProps.status === "success") {
      const t = setTimeout(() => dismiss("submitted"), 2500);
      return () => clearTimeout(t);
    }
  }, [formProps.status, dismiss]);

  useEffect(() => {
    if (hasSignupCookie()) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    let triggered = false;

    function trigger(source) {
      if (triggered) return;
      triggered = true;
      setOpen(true);
      trackEvent("email_popup_shown", { source });
      cleanup();
    }

    function handleScroll() {
      const scrolled =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled >= SCROLL_THRESHOLD) trigger("scroll");
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    let timerId = null;
    if (!isMobile) {
      timerId = setTimeout(() => trigger("timer"), TIMER_DELAY_MS);
    }

    function cleanup() {
      window.removeEventListener("scroll", handleScroll);
      if (timerId) clearTimeout(timerId);
    }

    return cleanup;
  }, []);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => dismiss("backdrop")}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Email signup"
        className="fixed z-50 inset-x-4 top-1/2 -translate-y-1/2 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-8"
      >
        {/* Close button */}
        <button
          onClick={() => dismiss("close_button")}
          aria-label="Close"
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-2xl leading-none font-light"
        >
          &times;
        </button>

        <div className="mb-2 text-center text-3xl" aria-hidden="true">
          🍺
        </div>

        <SignupForm
          {...formProps}
          headline="4pm hits different when you're prepared"
          subheadline="Join 500+ Chicagoans who never pay full price after 5pm."
          buttonText="I'm In"
          showFirstName={true}
        />
      </div>
    </>
  );
}
