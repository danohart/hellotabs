// hooks/useSignupCookie.js
// Two separate cookies:
//   hhc_signup_submitted  — set when a user successfully submits the form.
//                           Hides inline + footer forms AND suppresses the popup.
//   hhc_popup_dismissed   — set only when a user closes the popup without signing up.
//                           Suppresses the popup only; inline + footer forms stay visible.
import { useState, useCallback, useEffect } from "react";

const COOKIE_DAYS = 30;

function writeCookie(name) {
  if (typeof document === "undefined") return;
  const expires = new Date();
  expires.setDate(expires.getDate() + COOKIE_DAYS);
  document.cookie = `${name}=1; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

function readCookie(name) {
  if (typeof document === "undefined") return false;
  return document.cookie.split(";").some((c) => c.trim().startsWith(`${name}=`));
}

// Called on successful form submission — hides everything
export function setSubmittedCookie() {
  writeCookie("hhc_signup_submitted");
}

// Called when popup is dismissed without submitting — hides popup only
export function setDismissedCookie() {
  writeCookie("hhc_popup_dismissed");
}

// True if user has actually signed up (hides inline + footer forms)
export function hasSubmittedCookie() {
  return readCookie("hhc_signup_submitted");
}

// True if popup should stay hidden (submitted OR dismissed)
export function hasPopupSuppressedCookie() {
  return readCookie("hhc_signup_submitted") || readCookie("hhc_popup_dismissed");
}

// Hook for inline + footer forms — only hide after a real submission
export function useSignupCookie() {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    if (hasSubmittedCookie()) setHasSubmitted(true);
  }, []);

  const markSubmitted = useCallback(() => {
    setSubmittedCookie();
    setHasSubmitted(true);
  }, []);

  return { hasSigned: hasSubmitted, markSigned: markSubmitted };
}
