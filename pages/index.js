import { useState, useEffect } from "react";
import useSWR from "swr";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Place from "../components/Place";
import { getDay } from "../lib/date";
import fetcher from "../lib/fetcher";
import Navigation from "../components/Navigation";
import Loader from "../components/Loader";
import { hasActiveHappyHour } from "../lib/time";
import {
  sortByDistance,
  calculateDistance,
  getUserLocation,
} from "../lib/location";
import { trackEvent } from "../lib/analytics";
import EmailSignupInline from "../components/EmailSignupInline";
import PopularNeighborhoods from "../components/PopularNeighborhoods";

function Home() {
  const [amountOfPlaces, setAmountOfPlaces] = useState(10);
  const [userLocation, setUserLocation] = useState(null);
  const [locationLoading, setLocationLoading] = useState(false);
  const [dealTypeFilter, setDealTypeFilter] = useState("all");
  const day = getDay();

  function showMorePlaces() {
    trackEvent("load_more", { visible_count: amountOfPlaces });
    setAmountOfPlaces(amountOfPlaces + 10);
  }

  function handleDealFilterChange(filter) {
    trackEvent("deal_filter_change", { filter });
    setDealTypeFilter(filter);
  }

  // On load, silently check if permission was already granted and use it —
  // but never prompt the browser dialog automatically.
  useEffect(() => {
    if (!navigator.permissions) return;
    navigator.permissions.query({ name: "geolocation" }).then((status) => {
      if (status.state === "granted") {
        // Permission already exists — fetch silently, no dialog fires.
        getUserLocation().then((loc) => {
          if (loc) {
            setUserLocation(loc);
            trackEvent("location_auto_used");
          }
        });
      }
      // "prompt" or "denied" — do nothing; wait for explicit button click.
    });
  }, []);

  async function handleRequestLocation() {
    setLocationLoading(true);
    trackEvent("location_button_clicked");
    try {
      const loc = await getUserLocation();
      if (loc) {
        setUserLocation(loc);
        trackEvent("location_granted");
      } else {
        trackEvent("location_denied");
      }
    } catch {
      trackEvent("location_denied");
    } finally {
      setLocationLoading(false);
    }
  }

  const { data, error } = useSWR("/api/places/" + day, fetcher);

  useEffect(() => {
    if (data?.success) {
      const activeCount = data.places.filter((p) =>
        hasActiveHappyHour(p, day),
      ).length;
      trackEvent("home_page_load", {
        active_happy_hours: activeCount,
        day_of_week: day,
      });
    }
  }, [data]);

  if (error)
    return (
      <div>
        <Meta />
        Failed to load
      </div>
    );
  if (!data)
    return (
      <>
        <Meta />
        <Loader pageInfo={data} day={day} />
      </>
    );
  if (!data.success) return <div>Failed to load</div>;

  let places = data.places;

  if (userLocation) {
    places = places.map((place) => ({
      ...place,
      distance: calculateDistance(userLocation, place.location.geo),
    }));
    places = sortByDistance(places);
  }

  if (dealTypeFilter !== "all") {
    places = places.filter((place) => {
      return place.events.some((event) => {
        if (event.keywords !== "happyHour") return false;
        return event.menu.some((item) => {
          if (dealTypeFilter === "drinks") return item.category === "Drink";
          if (dealTypeFilter === "food") return item.category === "Food";
          return true;
        });
      });
    });
  }

  // Active deals first, then upcoming, then the rest.
  const activeNow = places.filter((p) => hasActiveHappyHour(p, day));
  const notActive = places.filter((p) => !hasActiveHappyHour(p, day));
  places = [...activeNow, ...notActive];

  const bars = places.slice(0, amountOfPlaces);

  return (
    <div>
      <Meta />
      <Header />
      <div className='flex flex-col items-center'>
        <div className='flex flex-col md:w-1/2 w-full sm:px-1 lg:px-4'>
          {/* ── Hero ── */}
          <div className='mt-8 mb-6 text-center'>
            <h1 className='text-3xl md:text-4xl font-extrabold tracking-tight mb-2'>
              Chicago&rsquo;s Best Happy Hour Deals
            </h1>
            <p className='text-sm font-semibold text-purple-400 uppercase tracking-widest mb-3'>
              Updated daily. Always free.
            </p>
            <p className='text-sm text-gray-800 dark:text-gray-400 max-w-sm mx-auto'>
              Drink specials, food deals, and happy hours across Chicago &mdash;
              all in one place.
            </p>
          </div>

          {/* ── Location CTA ── */}
          {!userLocation && (
            <div className='flex justify-center my-4'>
              <button
                onClick={handleRequestLocation}
                disabled={locationLoading}
                className='flex items-center gap-2 bg-purple-500 hover:bg-purple-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-5 py-3 rounded-full transition-colors text-lg'
              >
                {locationLoading ? (
                  <>
                    <span className='animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full' />
                    Finding your location…
                  </>
                ) : (
                  <>Show deals near me</>
                )}
              </button>
            </div>
          )}
          {userLocation && (
            <p className='text-center text-xs text-green-500 dark:text-green-400 my-2'>
              📍 Sorted by distance from you
            </p>
          )}

          {/* ── Deal type filter ── */}
          <div className='w-full mx-auto py-4'>
            <h3 className='text-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3'>
              What kind of deals?
            </h3>
            <div className='flex justify-center gap-2 text-sm flex-wrap'>
              <button
                onClick={() => handleDealFilterChange("all")}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  dealTypeFilter === "all"
                    ? "bg-purple-500 text-white dark:bg-purple-800"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-slate-700 dark:text-gray-300 dark:hover:bg-slate-600"
                }`}
              >
                All Deals
              </button>
              <button
                onClick={() => handleDealFilterChange("drinks")}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  dealTypeFilter === "drinks"
                    ? "bg-purple-500 text-white dark:bg-purple-800"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-slate-700 dark:text-gray-300 dark:hover:bg-slate-600"
                }`}
              >
                Drink Specials
              </button>
              <button
                onClick={() => handleDealFilterChange("food")}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  dealTypeFilter === "food"
                    ? "bg-purple-500 text-white dark:bg-purple-800"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-slate-700 dark:text-gray-300 dark:hover:bg-slate-600"
                }`}
              >
                Food Specials
              </button>
            </div>
          </div>

          {/* ── Neighborhood nav ── */}
          <Navigation />

          {/* ── Deal list ── */}
          <main>
            {bars.length === 0 ? (
              <p className='text-center text-gray-500 dark:text-gray-400 mt-10 text-sm'>
                Nothing listed yet today — check back after noon, or browse
                deals by neighborhood above.
              </p>
            ) : (
              <div className='flex flex-wrap w-full'>
                {bars.map((bar) => (
                  <PlaceWithBadge place={bar} day={day} key={bar._id} />
                ))}
                {places.length > amountOfPlaces && (
                  <div className='flex justify-center w-full mt-4'>
                    <button
                      className='w-1/2 bg-purple-500 text-white font-bold py-2 px-4 rounded'
                      onClick={showMorePlaces}
                    >
                      See More
                    </button>
                  </div>
                )}
              </div>
            )}
            <PopularNeighborhoods />
          </main>
        </div>
      </div>
    </div>
  );
}

// Simplified wrapper - badge removed as it was redundant with inline "Now" badge
function PlaceWithBadge({ place, day }) {
  return (
    <div className='w-full'>
      <Place place={place} day={day} />
    </div>
  );
}

export default Home;
