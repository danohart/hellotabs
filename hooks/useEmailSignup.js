// hooks/useEmailSignup.js
// Shared form logic reused by the inline form, footer form, and popup.
import { useState } from "react";
import { setSignupCookie } from "./useSignupCookie";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useEmailSignup() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  function validate() {
    if (!email.trim()) {
      setMessage("Please enter your email address.");
      setStatus("error");
      return false;
    }
    if (!EMAIL_REGEX.test(email.trim())) {
      setMessage("Please enter a valid email address.");
      setStatus("error");
      return false;
    }
    return true;
  }

  async function submit(e) {
    if (e) e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), firstName: firstName.trim() }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("You're in! Check your inbox for deals.");
        setEmail("");
        setFirstName("");
        setSignupCookie(); // hide all forms/popup site-wide
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (_) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  function reset() {
    setStatus("idle");
    setMessage("");
    setEmail("");
    setFirstName("");
  }

  return { email, setEmail, firstName, setFirstName, status, message, submit, reset };
}
