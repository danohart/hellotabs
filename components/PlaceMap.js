import { useEffect, useRef } from "react";
import * as maplibregl from "maplibre-gl";
import { useRouter } from "next/router";
import { useTheme } from "../hooks/useTheme";
import { getMapStyle } from "../lib/mapStyle";
import { getPlaceDealStatus } from "../lib/time";
import { trackEvent } from "../lib/analytics";

// Chicago's rough geographic center — used only until we know the user's
// actual location (see pages/map.js).
const DEFAULT_CENTER = { lat: 41.8781, lng: -87.6298 };

function buildPopupNode(place, router) {
  const node = document.createElement("div");
  node.className = "p-1 min-w-[140px] cursor-pointer";

  const title = document.createElement("div");
  title.className = "font-bold text-sm text-gray-900";
  title.textContent = place.name;

  const subtitle = document.createElement("div");
  subtitle.className = "text-xs text-gray-500 mt-0.5";
  subtitle.textContent = place.neighborhood || "";

  node.appendChild(title);
  node.appendChild(subtitle);
  node.addEventListener("click", () => {
    trackEvent("place_detail_view", {
      place_name: place.name,
      neighborhood: place.neighborhood,
      variant: "map",
    });
    router.push(`/place/${place.slug || place._id}`);
  });

  return node;
}

export default function PlaceMap({ places, userLocation }) {
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  // Create the map once on mount.
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const center = userLocation
      ? [userLocation.longitude, userLocation.latitude]
      : [DEFAULT_CENTER.lng, DEFAULT_CENTER.lat];

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: getMapStyle(resolvedTheme),
      center,
      zoom: 12,
    });
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
    // Only ever runs once — resolvedTheme/userLocation changes are handled
    // by the effects below via setStyle/easeTo instead of recreating the map.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Swap the whole style (and re-tint markers) when light/dark mode changes.
  useEffect(() => {
    if (!mapRef.current) return;
    mapRef.current.setStyle(getMapStyle(resolvedTheme));
  }, [resolvedTheme]);

  // Recenter once the user's location becomes available (it isn't known yet
  // on first mount — see pages/map.js's async geolocation prompt).
  useEffect(() => {
    if (!mapRef.current || !userLocation) return;
    mapRef.current.easeTo({
      center: [userLocation.longitude, userLocation.latitude],
      zoom: 13,
    });
  }, [userLocation]);

  // Keep markers in sync with the current place list.
  useEffect(() => {
    if (!mapRef.current) return;

    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    places.forEach((place) => {
      const geo = place.location?.geo;
      if (!geo?.latitude || !geo?.longitude) return;

      const status = getPlaceDealStatus(place);
      const el = document.createElement("div");
      el.className = `w-4 h-4 rounded-full border-2 border-white shadow-md cursor-pointer ${
        status?.type === "active" ? "bg-orange-400" : "bg-purple-600"
      }`;

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat([geo.longitude, geo.latitude])
        .setPopup(
          new maplibregl.Popup({ offset: 12 }).setDOMContent(
            buildPopupNode(place, router)
          )
        )
        .addTo(mapRef.current);

      markersRef.current.push(marker);
    });

    if (userLocation) {
      const youEl = document.createElement("div");
      youEl.className =
        "w-3.5 h-3.5 rounded-full bg-blue-500 border-2 border-white shadow-md";
      markersRef.current.push(
        new maplibregl.Marker({ element: youEl })
          .setLngLat([userLocation.longitude, userLocation.latitude])
          .addTo(mapRef.current)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [places, userLocation]);

  return <div ref={containerRef} className='w-full h-full min-h-[60vh]' />;
}
