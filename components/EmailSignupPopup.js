// components/EmailSignupPopup.js
// Popup trigger: 60% scroll depth only (no timer).
// Dismissed → sets popup-only cookie (inline + footer forms stay visible).
// Submitted → sets submitted cookie (hides everything site-wide).
import { useState, useEffect, useCallback } from "react";
import { useEmailSignup } from "../hooks/useEmailSignup";
import { useSignupCookie, setDismissedCookie, hasPopupSuppressedCookie } from "../hooks/useSignupCookie";
import SignupForm from "./SignupForm";
import { trackEvent } from "../lib/analytics";

const SCROLL_THRESHOLD = 0.6;

export default function EmailSignupPopup() {
  const [open, setOpen] = useState(false);
  const formProps = useEmailSignup();

  const dismiss = useCallback(
    (reason) => {
      setOpen(false);
      setDismissedCookie();
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
    if (hasPopupSuppressedCookie()) return;

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

    function cleanup() {
      window.removeEventListener("scroll", handleScroll);
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
