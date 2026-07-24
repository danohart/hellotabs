// pages/_app.js
import React, { useEffect, createContext, useContext } from "react";
import { useRouter } from "next/router";
import posthog from "posthog-js";
import "../styles/styles.css";
import Page from "../components/Page";
import { useAuth } from "../hooks/useAuth";
import { trackPageView } from "../lib/analytics";
import EmailSignupPopup from "../components/EmailSignupPopup";

// Create auth context
const AuthContext = createContext();

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }
  return context;
};

function AuthProvider({ children }) {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN, {
      api_host: "/ingest",
      ui_host: "https://us.posthog.com",
      defaults: "2026-01-30",
      capture_exceptions: true,
      debug: process.env.NODE_ENV === "development",
      loaded: (posthog) => {
        if (process.env.NODE_ENV === "development") {
          posthog.opt_out_capturing();
        }
      },
    });
  }, []);

  // Track initial page load
  useEffect(() => {
    trackPageView(router.asPath);
  }, []);

  // Fire a page view on every client-side route change
  useEffect(() => {
    const handleRouteChange = (url) => trackPageView(url);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  useEffect(() => {
    const initializeTheme = () => {
      const savedTheme = localStorage.getItem("theme") || "system";
      const root = document.documentElement;

      if (savedTheme === "system") {
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        if (systemPrefersDark) {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      } else if (savedTheme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    initializeTheme();

    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return (
    <AuthProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
      <EmailSignupPopup />
    </AuthProvider>
  );
}

export default App;
