import { useState, useEffect } from "react";
import useSWR from "swr";
import dynamic from "next/dynamic";
import Meta from "../components/Meta";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import Loader from "../components/Loader";
import LocationPrompt from "../components/LocationPrompt";
import { getDay } from "../lib/date";
import fetcher from "../lib/fetcher";
import { getUserLocation } from "../lib/location";
import { trackEvent } from "../lib/analytics";
import { getPlacesForDay } from "../lib/places";

// MapLibre touches window/document at import time, so it can only run
// client-side — same reasoning as the rest of the app's browser-only calls
// in pages/index.js.
const PlaceMap = dynamic(() => import("../components/PlaceMap"), {
  ssr: false,
});

export async function getServerSideProps() {
  const day = getDay();
  const places = await getPlacesForDay(day);

  return {
    props: {
      initialPlaces: places,
      day,
    },
  };
}

export default function MapPage({ initialPlaces, day }) {
  const [userLocation, setUserLocation] = useState(null);
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationPermission, setLocationPermission] = useState("unknown");

  const { data } = useSWR("/api/places/" + day, fetcher, {
    fallbackData: { success: true, places: initialPlaces },
  });

  // Silently use location if already granted, same as pages/index.js — never
  // pop the native permission dialog without the user tapping something.
  useEffect(() => {
    if (!navigator.permissions) return;
    let permissionStatus;
    navigator.permissions.query({ name: "geolocation" }).then((status) => {
      permissionStatus = status;
      setLocationPermission(status.state);
      if (status.state === "granted") {
        getUserLocation().then((loc) => {
          if (loc) setUserLocation(loc);
        });
      }
      status.onchange = () => setLocationPermission(status.state);
    });
    return () => {
      if (permissionStatus) permissionStatus.onchange = null;
    };
  }, []);

  useEffect(() => {
    trackEvent("map_page_load");
  }, []);

  async function handleRequestLocation() {
    setLocationLoading(true);
    trackEvent("location_button_clicked", { variant: "map" });
    try {
      const loc = await getUserLocation();
      if (loc) {
        setUserLocation(loc);
        setLocationPermission("granted");
        trackEvent("location_granted", { variant: "map" });
      } else {
        setLocationPermission("denied");
        trackEvent("location_denied", { variant: "map" });
      }
    } catch {
      setLocationPermission("denied");
      trackEvent("location_denied", { variant: "map" });
    } finally {
      setLocationLoading(false);
    }
  }

  const places = data?.success ? data.places : [];
  const showLocationPrompt = !userLocation && locationPermission !== "denied";

  return (
    <div className='flex flex-col h-dvh pb-16'>
      <Meta title='Hello Chicago - Map' />
      <div className='px-2'>
        <Header title='Map' />
        {showLocationPrompt && (
          <LocationPrompt
            loading={locationLoading}
            onEnable={handleRequestLocation}
          />
        )}
      </div>
      {!data ? (
        <Loader pageInfo={data} day={day} />
      ) : (
        <PlaceMap places={places} userLocation={userLocation} />
      )}
      <BottomNav />
    </div>
  );
}
