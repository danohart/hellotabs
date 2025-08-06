import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("system"); // 'light', 'dark', 'system'
  const [resolvedTheme, setResolvedTheme] = useState("light"); // actual theme being used

  useEffect(() => {
    // Get saved preference or default to system
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);

    // Function to apply the theme
    const applyTheme = (themeValue) => {
      const root = document.documentElement;

      if (themeValue === "system") {
        // Use system preference
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        if (systemPrefersDark) {
          root.classList.add("dark");
          setResolvedTheme("dark");
        } else {
          root.classList.remove("dark");
          setResolvedTheme("light");
        }
      } else if (themeValue === "dark") {
        root.classList.add("dark");
        setResolvedTheme("dark");
      } else {
        root.classList.remove("dark");
        setResolvedTheme("light");
      }
    };

    // Apply the saved theme
    applyTheme(savedTheme);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  const setThemePreference = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Apply the theme immediately
    const root = document.documentElement;
    if (newTheme === "system") {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (systemPrefersDark) {
        root.classList.add("dark");
        setResolvedTheme("dark");
      } else {
        root.classList.remove("dark");
        setResolvedTheme("light");
      }
    } else if (newTheme === "dark") {
      root.classList.add("dark");
      setResolvedTheme("dark");
    } else {
      root.classList.remove("dark");
      setResolvedTheme("light");
    }
  };

  return { theme, resolvedTheme, setTheme: setThemePreference };
}
