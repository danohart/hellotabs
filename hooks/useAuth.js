import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  // Check if there's a stored token on component mount
  useEffect(() => {
    const storedToken = sessionStorage.getItem("admin_token");
    const storedExpiry = sessionStorage.getItem("admin_token_expiry");

    if (storedToken && storedExpiry) {
      if (Date.now() < parseInt(storedExpiry)) {
        setToken(storedToken);
        setIsAuthenticated(true);
      } else {
        sessionStorage.removeItem("admin_token");
        sessionStorage.removeItem("admin_token_expiry");
      }
    }
  }, []);

  const login = async (password) => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        setToken(data.token);
        setIsAuthenticated(true);

        // Store token and expiry in sessionStorage (cleared when browser closes)
        sessionStorage.setItem("admin_token", data.token);
        sessionStorage.setItem("admin_token_expiry", data.expires.toString());

        setLoading(false);
        return { success: true };
      } else {
        setLoading(false);
        return { success: false, error: data.error };
      }
    } catch (error) {
      setLoading(false);
      return { success: false, error: "Network error" };
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
    sessionStorage.removeItem("admin_token");
    sessionStorage.removeItem("admin_token_expiry");
  };

  return { isAuthenticated, token, login, logout, loading };
};
