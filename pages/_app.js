// pages/_app.js
import React, { useEffect, createContext, useContext } from "react";
import "../styles/styles.css";
import Page from "../components/Page";
import { useAuth } from "../hooks/useAuth";

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
    </AuthProvider>
  );
}

export default App;
