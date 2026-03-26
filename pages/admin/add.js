import { useState, useRef } from "react";
import { useRouter } from "next/router";
import Meta from "../../components/Meta";
import Header from "../../components/Header";
import { useAuthContext } from "../_app";
import AuthModal from "../../components/AuthModal";
import neighborhoods from "../../lib/neighborhoods";
import { generatePlaceSlug } from "../../lib/slugify";

export default function AddPlace() {
  const { isAuthenticated, login } = useAuthContext();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const router = useRouter();

  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState("");

  // Selected place / form state
  const [selected, setSelected] = useState(null);
  const [neighborhood, setNeighborhood] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const searchTimeout = useRef(null);

  const handleLogin = async (password) => {
    const result = await login(password);
    if (result.success) setShowAuthModal(false);
    return result;
  };

  async function handleSearch(e) {
    const value = e.target.value;
    setSearchQuery(value);
    setSelected(null);
    setSearchResults([]);
    setSearchError("");

    if (value.trim().length < 3) return;

    clearTimeout(searchTimeout.current);
    searchTimeout.current = setTimeout(async () => {
      setSearching(true);
      try {
        const res = await fetch(
          `/api/places/search?query=${encodeURIComponent(value)}`
        );
        const data = await res.json();
        if (data.success) {
          setSearchResults(data.results);
        } else {
          setSearchError("Search failed. Try again.");
        }
      } catch {
        setSearchError("Search failed. Try again.");
      } finally {
        setSearching(false);
      }
    }, 400);
  }

  function handleSelect(place) {
    setSelected(place);
    setSearchQuery(place.name);
    setSearchResults([]);
  }

  // Parse street address from Google's full formatted_address
  // e.g. "123 N Main St, Chicago, IL 60601, USA" → "123 N Main St"
  function parseStreetAddress(formattedAddress) {
    return formattedAddress?.split(",")[0]?.trim() || "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!selected || !neighborhood) return;

    setSubmitting(true);
    setSubmitError("");

    const streetAddress = parseStreetAddress(selected.formattedAddress);

    const newPlace = {
      name: selected.name,
      slug: generatePlaceSlug(selected.name, neighborhood),
      location: {
        streetAddress,
        city: "Chicago",
        state: "IL",
        postalCode: null,
        geo: { latitude: selected.latitude ?? null, longitude: selected.longitude ?? null },
      },
      neighborhood,
      googlePlaceId: selected.googlePlaceId,
      events: [],
      enabled: false,
      featured: false,
    };

    try {
      const res = await fetch("/api/places/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPlace),
      });
      const data = await res.json();

      if (data.success) {
        router.push("/admin/stale");
      } else {
        setSubmitError(data.message || "Failed to save place.");
      }
    } catch {
      setSubmitError("Failed to save place.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!isAuthenticated) {
    return (
      <>
        <Meta title="Admin — Add Place" />
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
      <Meta title="Admin — Add Place" />
      <Header />
      <div className="flex flex-col items-center px-4 py-8">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold mb-1">Add a Place</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Search Google for the bar or restaurant, confirm the details, then
            save it as a stub. You can add happy hour details from the stale
            list later.
          </p>

          {/* Step 1 — Search */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-1">
              Search Google Places
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="e.g. The Green Lady"
              className="w-full border border-gray-300 dark:border-slate-600 rounded px-3 py-2 bg-white dark:bg-slate-700 text-sm"
            />
            {searching && (
              <p className="text-xs text-gray-400 mt-1">Searching…</p>
            )}
            {searchError && (
              <p className="text-xs text-red-500 mt-1">{searchError}</p>
            )}

            {/* Results dropdown */}
            {searchResults.length > 0 && (
              <ul className="border border-gray-200 dark:border-slate-600 rounded mt-1 divide-y divide-gray-100 dark:divide-slate-600 bg-white dark:bg-slate-700 shadow">
                {searchResults.map((place) => (
                  <li key={place.googlePlaceId}>
                    <button
                      type="button"
                      onClick={() => handleSelect(place)}
                      className="w-full text-left px-4 py-3 hover:bg-purple-50 dark:hover:bg-slate-600"
                    >
                      <div className="font-semibold text-sm">{place.name}</div>
                      <div className="text-xs text-gray-400">
                        {place.formattedAddress}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Step 2 — Confirm & save */}
          {selected && (
            <form onSubmit={handleSubmit}>
              <div className="border border-gray-200 dark:border-slate-600 rounded px-4 py-4 mb-4 bg-white dark:bg-slate-700 space-y-3">
                <h2 className="font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                  Confirm Details
                </h2>

                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Name
                  </label>
                  <p className="text-sm">{selected.name}</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Address
                  </label>
                  <p className="text-sm">{selected.formattedAddress}</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Google Place ID
                  </label>
                  <p className="text-xs text-gray-400 font-mono">
                    {selected.googlePlaceId}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Neighborhood <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    className="w-full border border-gray-300 dark:border-slate-500 rounded px-3 py-2 bg-white dark:bg-slate-600 text-sm"
                  >
                    <option value="">Select a neighborhood…</option>
                    {neighborhoods.map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {submitError && (
                <p className="text-sm text-red-500 mb-3">{submitError}</p>
              )}

              <button
                type="submit"
                disabled={submitting || !neighborhood}
                className="w-full bg-purple-500 text-white font-semibold py-2 px-4 rounded hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Saving…" : "Save as Stub →"}
              </button>
              <p className="text-xs text-gray-400 text-center mt-2">
                Saves as disabled with no events. Add happy hour details from
                the stale list.
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
