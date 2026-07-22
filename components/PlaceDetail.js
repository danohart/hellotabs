import { useState } from "react";
import { useRouter } from "next/router";
import Icon from "./Icon";
import ReportIssueModal from "./ReportIssueModal";
import EditPlace from "./EditPlace";
import { useAuth } from "../hooks/useAuth";
import { formatRelativeTime } from "../lib/date";
import {
  getPlaceDealStatus,
  getTodaysHappyHourSummary,
  getFullWeekSchedule,
} from "../lib/time";
import {
  getDrinkSpecials,
  getFoodSpecials,
  getPriceColumnLabel,
} from "../lib/menu";
import { trackEvent } from "../lib/analytics";

function getGoogleMapsUrl(place) {
  const streetAddress = place.location.streetAddress || "";
  return `https://maps.google.com/?q=${place.name} ${streetAddress}`;
}

function getMostRecentUpdate(events) {
  if (!events || events.length === 0) return null;
  return events.reduce(
    (mostRecent, event) =>
      event.lastUpdated > mostRecent ? event.lastUpdated : mostRecent,
    events[0].lastUpdated,
  );
}

function SpecialsSection({ title, icon, items }) {
  if (items.length === 0) return null;

  return (
    <div className='mt-6'>
      <h3 className='flex items-center gap-2 font-bold text-lg text-gray-900 dark:text-gray-100'>
        <Icon
          icon={icon}
          className='h-4 w-4 text-purple-600 dark:text-purple-400'
        />
        {title}
      </h3>
      <div className='mt-2 divide-y divide-gray-100 dark:divide-slate-700'>
        {items.map((item, index) => (
          <div key={index} className='flex items-center justify-between py-2.5'>
            <span className='text-gray-800 dark:text-gray-200'>
              {item.name}
            </span>
            <span className='font-semibold'>{getPriceColumnLabel(item)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PlaceDetail({ place }) {
  const router = useRouter();
  const { isAuthenticated, token } = useAuth();
  const [showReportModal, setShowReportModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const status = getPlaceDealStatus(place);
  const todaysSummary = getTodaysHappyHourSummary(place);
  const drinkSpecials = getDrinkSpecials(place);
  const foodSpecials = getFoodSpecials(place);
  const fullSchedule = getFullWeekSchedule(place.events);
  const lastUpdated = getMostRecentUpdate(place.events);

  return (
    <div className='relative'>
      <div className='flex items-center justify-between gap-3 mb-4'>
        <button
          onClick={() => router.back()}
          aria-label='Back'
          className='shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-600'
        >
          <Icon icon='ChevronLeftIcon' className='h-4 w-4 text-current' />
        </button>

        <div className='flex flex-wrap justify-end items-center gap-2'>
          {place.featured && (
            <div className='flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md bg-purple-600 text-white'>
              <Icon icon='StarIcon' className='h-3 w-3 text-current' />
              FEATURED
            </div>
          )}
          {status && status.type !== "upcoming" && (
            <div
              className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md ${
                status.type === "active"
                  ? "bg-orange-300 text-orange-900"
                  : "bg-gray-200 text-gray-600 dark:bg-slate-500 dark:text-slate-100"
              }`}
            >
              {status.type === "active" && (
                <Icon icon='BoltIcon' className='h-3 w-3 text-current' />
              )}
              {status.type === "active" ? "Happening Now" : "Soon"}
            </div>
          )}
          {isAuthenticated && (
            <button
              onClick={() => setShowEditModal(true)}
              className='text-xs bg-blue-500 hover:bg-blue-600 text-white px-2.5 py-1 rounded-md'
            >
              Edit
            </button>
          )}
        </div>
      </div>

      {isAuthenticated && (
        <div className='mb-2'>
          <span
            className={`text-xs px-2 py-1 rounded ${
              place.enabled
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {place.enabled ? "Enabled" : "Disabled"}
          </span>
        </div>
      )}

      <h1 className='text-3xl font-extrabold text-gray-900 dark:text-gray-100'>
        {place.name}
      </h1>

      {(place.location.streetAddress || place.neighborhood) && (
        <a
          href={getGoogleMapsUrl(place)}
          target='_blank'
          rel='noreferrer'
          onClick={() =>
            trackEvent("maps_click", {
              place_name: place.name,
              neighborhood: place.neighborhood,
            })
          }
          className='inline-block mt-3 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-slate-700 text-purple-700 dark:text-purple-300 text-sm font-medium'
        >
          {[place.location.streetAddress, place.neighborhood]
            .filter(Boolean)
            .join(" · ")}
        </a>
      )}

      {todaysSummary && (
        <div className='mt-5 rounded-xl bg-orange-50 dark:bg-slate-700 px-4 py-3'>
          <p className='font-bold text-orange-900 dark:text-orange-200'>
            Today&rsquo;s happy hour
          </p>
          <p className='text-orange-800 dark:text-orange-300 text-sm mt-0.5'>
            {todaysSummary.timeRangeLabel} · {todaysSummary.phrase}
          </p>
        </div>
      )}

      <SpecialsSection
        title='Drink specials'
        icon='TagIcon'
        items={drinkSpecials}
      />
      <SpecialsSection
        title='Food specials'
        icon='CurrencyDollarIcon'
        items={foodSpecials}
      />

      {fullSchedule.length > 0 && (
        <div className='mt-6'>
          <h3 className='font-bold text-lg text-gray-900 dark:text-gray-100'>
            Happy hour schedule
          </h3>
          <div className='mt-2 divide-y divide-gray-100 dark:divide-slate-700'>
            {fullSchedule.map((row, index) => (
              <div
                key={index}
                className='flex items-center justify-between py-2.5 text-sm'
              >
                <span className='text-gray-700 dark:text-gray-300'>
                  {row.dayLabel}
                </span>
                <span className='font-medium text-gray-900 dark:text-gray-100'>
                  {row.timeLabel}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className='mt-6 border border-dashed border-gray-300 dark:border-slate-600 rounded-lg py-3 text-center text-sm text-gray-500 dark:text-gray-400'>
        Own this place?{" "}
        <a
          href={`mailto:hellochicago@danielhart.co?subject=${encodeURIComponent(`Claim listing: ${place.name}`)}`}
          target='_blank'
          className='text-purple-600 dark:text-purple-400 font-semibold hover:underline'
        >
          Claim this listing
        </a>
      </div>

      <div className='flex items-center justify-between mt-3 text-xs text-gray-400'>
        <span>
          {lastUpdated ? `Updated ${formatRelativeTime(lastUpdated)}` : ""}
        </span>
        <button
          onClick={() => setShowReportModal(true)}
          className='text-purple-600 dark:text-purple-400 font-medium hover:underline'
        >
          Report an issue
        </button>
      </div>

      <div className='fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700'>
        <a
          href={getGoogleMapsUrl(place)}
          target='_blank'
          rel='noreferrer'
          onClick={() =>
            trackEvent("maps_click", {
              place_name: place.name,
              neighborhood: place.neighborhood,
            })
          }
          className='block w-full text-center bg-purple-600 hover:bg-purple-700 !text-white font-bold py-3.5 rounded-xl'
        >
          Get directions
        </a>
      </div>

      <ReportIssueModal
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
        placeId={place._id}
        placeName={place.name}
      />
      <EditPlace
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        place={place}
        token={token}
        onUpdate={() => {
          setShowEditModal(false);
          router.replace(router.asPath);
        }}
      />
    </div>
  );
}
