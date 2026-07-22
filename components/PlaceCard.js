import Link from "next/link";
import Icon from "./Icon";
import { getPlaceDealStatus } from "../lib/time";
import { getTopSpecials } from "../lib/menu";
import { trackEvent } from "../lib/analytics";

function StatusBadge({ status, variant }) {
  if (!status || status.type === "upcoming") return null;

  const isActive = status.type === "active";
  const label = isActive
    ? variant === "featured"
      ? "Happening Now"
      : "Now"
    : "Soon";

  return (
    <div
      className={`shrink-0 flex items-center gap-1 text-xs font-bold tracking-wide px-2.5 py-1 rounded-md ${
        isActive
          ? "bg-orange-300 text-orange-900"
          : variant === "featured"
            ? "bg-white/90 text-slate-600"
            : "bg-gray-200 text-gray-600 dark:bg-slate-500 dark:text-slate-100"
      }`}
    >
      {isActive && <Icon icon='BoltIcon' className='h-3 w-3 text-current' />}
      {label}
    </div>
  );
}

function SpecialPills({ specials, variant }) {
  if (specials.length === 0) return null;

  return (
    <div className='flex flex-wrap gap-2 mt-3'>
      {specials.map((special, index) => (
        <span
          key={index}
          className={`text-xs font-bold px-3 py-1.5 rounded-lg ${
            variant === "featured"
              ? "bg-white/90 text-purple-900"
              : special.category === "Drink"
                ? "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-200"
                : "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-200"
          }`}
        >
          {special.label}
        </span>
      ))}
    </div>
  );
}

export default function PlaceCard({ place, variant = "list" }) {
  const status = getPlaceDealStatus(place);
  const specials = getTopSpecials(place, 2);
  const isFeatured = variant === "featured";

  return (
    <Link
      href={`/place/${place.slug || place._id}`}
      onClick={() =>
        trackEvent("place_detail_view", {
          place_name: place.name,
          neighborhood: place.neighborhood,
          variant,
        })
      }
      className={`block w-full rounded-xl mb-3 transition-colors ${
        isFeatured
          ? "p-6 bg-purple-600 hover:bg-purple-700"
          : "p-4 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 hover:border-purple-300 dark:hover:border-purple-500"
      }`}
    >
      {isFeatured && (
        <div className='flex items-center justify-between gap-3 mb-2'>
          <div className='flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md bg-white/20 text-white'>
            <Icon icon='StarIcon' className='h-3 w-3 text-current' />
            FEATURED
          </div>
          <StatusBadge status={status} variant={variant} />
        </div>
      )}

      <div className={isFeatured ? "" : "flex items-start justify-between gap-3"}>
        <h3
          className={`font-bold ${
            isFeatured
              ? "text-3xl text-white"
              : "text-2xl text-gray-900 dark:text-gray-100"
          }`}
        >
          {place.name}
        </h3>
        {!isFeatured && <StatusBadge status={status} variant={variant} />}
      </div>

      <p
        className={`text-sm mt-1 ${isFeatured ? "text-purple-100" : "text-gray-500 dark:text-gray-400"}`}
      >
        {place.neighborhood}
        {place.distance != null &&
          ` · ${place.distance.toFixed(1)} mi${isFeatured ? " away" : ""}`}
      </p>

      <SpecialPills specials={specials} variant={variant} />
    </Link>
  );
}
