import { useState, useEffect } from "react";
import Link from "next/link";
import Meta from "../../components/Meta";
import Header from "../../components/Header";
import { formatDateDisplay } from "../../lib/date";
import { useAuthContext } from "../_app";
import AuthModal from "../../components/AuthModal";

export default function StalePlaces() {
  const { isAuthenticated, login, token } = useAuthContext();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [places, setPlaces] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isAuthenticated) return;
    fetch("/api/places/stale", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setPlaces(data.places);
        else setError(data.error || "Failed to load");
      })
      .catch(() => setError("Network error"));
  }, [isAuthenticated, token]);

  const handleLogin = async (password) => {
    const result = await login(password);
    if (result.success) {
      setShowAuthModal(false);
    }
    return result;
  };

  if (!isAuthenticated) {
    return (
      <>
        <Meta title="Admin — Stale Places" />
        <Header />
        <div className="flex flex-col items-center mt-20">
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            You must be logged in to view this page.
          </p>
          <button
            onClick={() => setShowAuthModal(true)}
            className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600"
          >
            Log In
          </button>
        </div>
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          onLogin={handleLogin}
        />
      </>
    );
  }

  return (
    <>
      <Meta title="Admin — Stale Places" />
      <Header />
      <div className="flex flex-col items-center px-4 py-8">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold mb-1">Places to Update</h1>

          {error ? (
            <p className="text-red-500 dark:text-red-400 mt-6">{error}</p>
          ) : !places ? (
            <p className="text-gray-400 dark:text-gray-500 mt-6">Loading…</p>
          ) : (
            <>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                {places.length} enabled places, sorted oldest update first.
              </p>

              <ol className="space-y-2">
                {places.map((place, index) => (
                  <li
                    key={place._id}
                    className="flex items-baseline justify-between border border-gray-200 dark:border-slate-600 rounded px-4 py-3 bg-white dark:bg-slate-700"
                  >
                    <div className="flex items-baseline gap-3 min-w-0">
                      <span className="text-xs text-gray-400 w-6 shrink-0">
                        {index + 1}
                      </span>
                      <div className="min-w-0">
                        <Link
                          href={`/place/${place.slug || place._id}`}
                          className="font-semibold text-purple-600 dark:text-purple-400 hover:underline"
                        >
                          {place.name}
                        </Link>
                        <span className="text-sm text-gray-400 dark:text-gray-400 ml-2">
                          {place.neighborhood}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 dark:text-gray-400 shrink-0 ml-4">
                      {place.lastUpdated
                        ? formatDateDisplay(place.lastUpdated)
                        : "never"}
                    </span>
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>
      </div>
    </>
  );
}
