// components/Place.js
import Icon from "./Icon";
import { formatDaysOfWeek, formatDateDisplay, sortEvents } from "../lib/date";
import Link from "next/link";
import { formatTimeDisplay, getEventStatus } from "../lib/time";
import { useState } from "react";
import EditPlaceModal from "./EditPlaceModal";
import { useAuth } from "../hooks/useAuth";

export default function Place({ place, day, showDays = false, onUpdate }) {
  const { isAuthenticated, token } = useAuth();
  const [showEditModal, setShowEditModal] = useState(false);

  function getGoogleMapsUrl(placeInfo) {
    const placeAddress = placeInfo.location.streetAddress
      ? placeInfo.location.streetAddress
      : null;

    return `https://maps.google.com/?q=${placeInfo.name} ${placeAddress}`;
  }

  const lastUpdated = findMostRecentUpdate(place.events);
  let events = sortEvents(place.events);

  const handleEditClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowEditModal(true);
  };

  const handleUpdateComplete = () => {
    setShowEditModal(false);
    if (onUpdate) {
      onUpdate(); // Trigger data refresh in parent component
    }
  };

  return (
    <>
      <div
        className='p-6 w-full border-2 rounded mb-2 bg-white dark:bg-slate-600 dark:text-slate-300 dark:border-slate-500 relative'
        key={place.name}
      >
        {/* Edit Button - Only visible when authenticated */}
        {isAuthenticated && (
          <button
            onClick={handleEditClick}
            className='absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 z-10'
          >
            Edit
          </button>
        )}

        <div className='flex justify-between'>
          <div className='flex flex-col justify-start'>
            <h2 className='text-3xl md:text-4xl font-bold'>
              <Link
                href={{
                  pathname: "/place",
                  query: { id: place._id },
                }}
              >
                {place.name}
              </Link>
            </h2>
            <div className='text-purple-500 dark:text-purple-400 flex flex-col md:flex-row'>
              <div>
                <a
                  className='underline'
                  target='_blank'
                  rel='noreferrer'
                  href={getGoogleMapsUrl(place)}
                >
                  {place.location.streetAddress
                    ? place.location.streetAddress
                    : null}
                </a>
              </div>
              <div className='md:ml-2'>
                {place.neighborhood ? place.neighborhood : null}
                {place.distance && ` | ${place.distance.toFixed(1)} miles`}
              </div>
            </div>

            {/* Show enabled/disabled status for admins */}
            {isAuthenticated && (
              <div className='mt-2'>
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
          </div>
        </div>

        <div className='mb-12'>
          {events.map((event, index) => (
            <Event event={event} key={index} showDays={showDays} day={day} />
          ))}
        </div>

        {lastUpdated && (
          <div className='font-semibold text-sm text-slate-400'>
            Last updated {formatDateDisplay(lastUpdated)}
          </div>
        )}
      </div>

      {/* Edit Modal */}
      <EditPlaceModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        place={place}
        token={token}
        onUpdate={handleUpdateComplete}
      />
    </>
  );
}

function Event({ event, showDays, day }) {
  let drinkSpecials = event.menu.filter((item) => item.category === "Drink");
  let foodSpecials = event.menu.filter((item) => item.category === "Food");
  const drinkSpecialsText = drinkSpecials
    .map((item) => menuItemToString(item))
    .join(", ");
  const foodSpecialsText = foodSpecials
    .map((item) => menuItemToString(item))
    .join(", ");

  return (
    <div className='mt-4 mb-12'>
      {event.eventSchedule.map((schedule, index) => {
        const eventStatus = getEventStatus(schedule);

        return (
          <div
            className='flex flex-row justify-start items-baseline mb-2'
            key={index}
          >
            {showDays && (
              <div className='font-bold whitespace-nowrap'>
                {formatDaysOfWeek(schedule.byDay)}
              </div>
            )}
            {showDays && <div className='mx-2 font-extrabold'>&#183;</div>}
            <div className='font-bold'>{formatTimeDisplay(schedule)}</div>
            {eventStatus !== "Not happening" ? (
              <div className='font-bold tracking-wider text-xs bg-orange-300 py-1 px-2 mx-4 rounded-md dark:text-orange-900'>
                {eventStatus}
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}

      {drinkSpecialsText && (
        <div className='flex flex-row pt-2 items-center'>
          <div className='flex'>
            <Icon icon='TagIcon' />
          </div>
          <div className='flex'>{drinkSpecialsText}</div>
        </div>
      )}
      {foodSpecialsText && (
        <div className='flex flex-row py-4 items-center'>
          <div>
            <Icon icon='CurrencyDollarIcon' />
          </div>
          <div>{foodSpecialsText}</div>
        </div>
      )}
    </div>
  );
}

function menuItemToString(item) {
  if (item.price) {
    let dollarValue = formatAsDollarAmount(item.price);
    return `$${dollarValue} ${item.name}`;
  } else if (item.discountPriceBy) {
    let dollarValue = formatAsDollarAmount(item.discountPriceBy);
    return `${dollarValue} off ${item.name}`;
  } else if (item.discountRate) {
    return `${item.discountRate}% off ${item.name}`;
  } else {
    return item.name;
  }
}

function formatAsDollarAmount(number) {
  if (Number.isInteger(number)) {
    return `${number}`;
  } else {
    return `${number.toFixed(2)}`;
  }
}

export function findMostRecentUpdate(events) {
  if (events.length === 0) {
    return null;
  }

  const mostRecentEvent = events.reduce((currentMostRecent, event) => {
    return event.lastUpdated > currentMostRecent.lastUpdated
      ? event
      : currentMostRecent;
  }, events[0]);

  return mostRecentEvent.lastUpdated;
}
