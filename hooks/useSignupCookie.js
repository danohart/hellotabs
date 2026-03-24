// hooks/useSignupCookie.js
// Shared cookie state for all signup placements.
// Once a user signs up (or dismisses the popup), the cookie is set and
// all forms/popups hide themselves for COOKIE_DAYS days.
import { useState, useCallback, useEffect } from "react";

export const SIGNUP_COOKIE = "hhc_signup_dismissed";
const COOKIE_DAYS = 30;

export function setSignupCookie() {
  if (typeof document === "undefined") return;
  const expires = new Date();
  expires.setDate(expires.getDate() + COOKIE_DAYS);
  document.cookie = `${SIGNUP_COOKIE}=1; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

export function hasSignupCookie() {
  if (typeof document === "undefined") return false;
  return document.cookie.split(";").some((c) => c.trim().startsWith(`${SIGNUP_COOKIE}=`));
}

// Returns { hasSigned, markSigned }
// hasSigned is false on SSR, then resolves on the client after mount.
export function useSignupCookie() {
  const [hasSigned, setHasSigned] = useState(false);

  // Read cookie on mount (client-only)
  useEffect(() => {
    if (hasSignupCookie()) setHasSigned(true);
  }, []);

  const markSigned = useCallback(() => {
    setSignupCookie();
    setHasSigned(true);
  }, []);

  return { hasSigned, markSigned };
}
