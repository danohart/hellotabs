import { useState, useEffect } from "react";
import useSWR from "swr";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Icon from "../components/Icon";
import PlaceCard from "../components/PlaceCard";
import BottomNav from "../components/BottomNav";
import HomeFilters from "../components/HomeFilters";
import LocationPrompt from "../components/LocationPrompt";
import SearchBar from "../components/SearchBar";
import { getDay } from "../lib/date";
import fetcher from "../lib/fetcher";
import Loader from "../components/Loader";
import { hasActiveHappyHour } from "../lib/time";
import {
  sortByDistance,
  calculateDistance,
  getUserLocation,
} from "../lib/location";
import { trackEvent } from "../lib/analytics";
import PopularNeighborhoods from "../components/PopularNeighborhoods";
import { useScrollRestoration } from "../hooks/useScrollRestoration";

function Home() {
  const [amountOfPlaces, setAmountOfPlaces] = useState(10);
  const [userLocation, setUserLocation] = useState(null);
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationPermission, setLocationPermission] = useState("unknown");
  const [activeNowOnly, setActiveNowOnly] = useState(false);
  const day = getDay();

  function showMorePlaces() {
    trackEvent("load_more", { visible_count: amountOfPlaces });
    setAmountOfPlaces(amountOfPlaces + 10);
  }

  // On load, silently check if permission was already granted and use it —
  // but never prompt the browser dialog automatically. If the user has
  // already denied, we remember that too so the inline prompt doesn't nag.
  useEffect(() => {
    if (!navigator.permissions) return;
    let permissionStatus;
    navigator.permissions.query({ name: "geolocation" }).then((status) => {
      permissionStatus = status;
      setLocationPermission(status.state);
      if (status.state === "granted") {
        getUserLocation().then((loc) => {
          if (loc) {
            setUserLocation(loc);
            trackEvent("location_auto_used");
          }
        });
      }
      status.onchange = () => setLocationPermission(status.state);
    });
    return () => {
      if (permissionStatus) permissionStatus.onchange = null;
    };
  }, []);

  async function handleRequestLocation() {
    setLocationLoading(true);
    trackEvent("location_button_clicked");
    try {
      const loc = await getUserLocation();
      if (loc) {
        setUserLocation(loc);
        setLocationPermission("granted");
        trackEvent("location_granted");
      } else {
        setLocationPermission("denied");
        trackEvent("location_denied");
      }
    } catch {
      setLocationPermission("denied");
      trackEvent("location_denied");
    } finally {
      setLocationLoading(false);
    }
  }

  const { data, error } = useSWR("/api/places/" + day, fetcher);

  useScrollRestoration("scroll:home", Boolean(data?.success));

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
    // Distance data available — nearby places float to the top.
    places = places.map((place) => ({
      ...place,
      distance: calculateDistance(userLocation, place.location.geo),
    }));
    places = sortByDistance(places);
  } else {
    // No distance data yet — rather than an arbitrary alphabetical dump of
    // every place in the city, only show curated featured picks until the
    // user shares location and we can actually sort by nearby.
    places = places.filter((place) => place.featured);
  }

  if (activeNowOnly) {
    places = places.filter((place) => hasActiveHappyHour(place, day));
  }

  const featuredPlace = places.find((place) => place.featured) || null;
  const nearbyPlaces = featuredPlace
    ? places.filter((place) => place !== featuredPlace)
    : places;
  const visiblePlaces = nearbyPlaces.slice(0, amountOfPlaces);

  const showLocationPrompt = !userLocation && locationPermission !== "denied";

  return (
    <div>
      <Meta />
      <div className='flex flex-col items-center pb-24'>
        <div className='flex flex-col md:w-1/2 w-full sm:px-1 lg:px-4'>
          {/* ── Hero ── */}
          <div className='mt-4 mb-6'>
            <div className='flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm mb-2'>
              <Icon icon='LocationDotIcon' className='h-4 w-4 text-current' />
              Hello Chicago
            </div>
            <div className='flex items-start justify-between gap-3'>
              <h1 className='text-3xl md:text-4xl font-extrabold tracking-tight mb-1'>
                Chicago&rsquo;s Best Happy Hour Deals
              </h1>
              <Header minimal />
            </div>
            <p className='text-sm font-semibold text-purple-500 uppercase tracking-widest mb-3'>
              Updated daily
            </p>
            <p className='text-sm text-gray-800 dark:text-gray-400 max-w-sm'>
              Drink specials, food deals, and happy hours across Chicago &mdash;
              all in one place.
            </p>
          </div>

          <SearchBar
            autoFocus={false}
            placeholder='Search bars, deals, neighborhoods'
          />

          <HomeFilters
            activeNowOnly={activeNowOnly}
            onToggleActiveNow={setActiveNowOnly}
          />

          {showLocationPrompt && (
            <LocationPrompt
              loading={locationLoading}
              onEnable={handleRequestLocation}
            />
          )}
          {userLocation && (
            <p className='flex items-center justify-center gap-1.5 text-center text-xs text-green-600 dark:text-green-400 my-2'>
              <Icon icon='LocationDotIcon' className='h-3 w-3 text-current' />
              Sorted by distance from you
            </p>
          )}

          {/* ── Deal list ── */}
          <main className='mt-4'>
            {visiblePlaces.length === 0 && !featuredPlace ? (
              <p className='text-center text-gray-500 dark:text-gray-400 mt-10 text-sm'>
                {!userLocation
                  ? "No featured deals to show yet — enable location above to browse every happy hour near you."
                  : activeNowOnly
                    ? 'Nothing happening right now — try turning off "Active now" to see today’s full lineup.'
                    : "Nothing listed yet today — check back after noon, or browse deals by neighborhood above."}
              </p>
            ) : (
              <>
                {featuredPlace && (
                  <>
                    <h2 className='text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2'>
                      {userLocation ? "Featured near you" : "Featured places"}
                    </h2>
                    <PlaceCard place={featuredPlace} variant='featured' />
                  </>
                )}

                {visiblePlaces.length > 0 && (
                  <h2 className='text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2 mt-3'>
                    {userLocation ? "More nearby" : "More featured places"}
                  </h2>
                )}
                {visiblePlaces.map((place) => (
                  <PlaceCard place={place} key={place._id} />
                ))}

                {nearbyPlaces.length > amountOfPlaces && (
                  <div className='flex justify-center w-full mt-4'>
                    <button
                      className='w-1/2 bg-purple-500 text-white font-bold py-2 px-4 rounded'
                      onClick={showMorePlaces}
                    >
                      See More
                    </button>
                  </div>
                )}
              </>
            )}
            <PopularNeighborhoods />
          </main>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default Home;
