import Icon from "./Icon";
import { dateCleanup } from "../lib/date";
import Link from "next/link";
import { isCurrentlyBetweenTwoTimes, formatTimeDisplay } from "../lib/time";

export default function Place({ place, day }) {
  function filterDailySpecials() {
    if (place.day && day === "allDays") {
      return place.day.map((special) => (
        <div className='border-b-2 py-4' key={special.name}>
          {special.name + ": " + special.drink_specials}
        </div>
      ));
    }
    return place.day.map((special) => {
      if (special.name === day)
        return (
          <div key={special.name}>
            <div className='flex flex-row pt-4 items-center'>
              <div className='flex '>
                <Icon icon='TagIcon' />
              </div>
              <div className='flex '>{special.drink_specials}</div>
            </div>
            <div className='flex flex-row py-4 items-center'>
              <div>
                <Icon icon='CurrencyDollarIcon' />
              </div>
              <div>{special.food_specials}</div>
            </div>
          </div>
        );
    });
  }

  const dayInfo = place.day.filter((specialDay) => specialDay.name == day)[0];

  function getGoogleMapsUrl(placeInfo) {
    const placeAddress = placeInfo.street_address
      ? placeInfo.street_address
      : null;

    return `https://maps.google.com/?q=${placeInfo.name} ${placeAddress}`;
  }

  let startTime;
  let endTime;
  let happeningNow = false;
  if (dayInfo) {
    startTime = formatTimeDisplay(dayInfo.timeOfDay.startTime);
    endTime = formatTimeDisplay(dayInfo.timeOfDay.endTime);
    happeningNow = isCurrentlyBetweenTwoTimes(
      dayInfo.timeOfDay.startTime,
      dayInfo.timeOfDay.endTime
    );
  }

  return (
    <div
      className='p-6 w-full border-2 rounded mb-2 bg-white dark:bg-slate-600 dark:text-slate-300 dark:border-slate-500'
      key={place.name}
    >
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
                {place.street_address ? place.street_address : null}
              </a>
            </div>
            <div className='md:ml-2'>
              {place.neighborhood ? place.neighborhood : null}
              {place.distance && ` | ${place.distance.toFixed(1)} miles`}
            </div>
          </div>
        </div>
        {dayInfo && (
          <div className='flex flex-col justify-start items-center'>
            <div className='text-xl whitespace-nowrap'>
              {startTime} - {endTime}
            </div>
            {happeningNow && (
              <div className='font-bold tracking-wider text-xs mt-2 bg-orange-300 py-1 px-3 rounded-md dark:text-orange-900'>
                Now
              </div>
            )}
          </div>
        )}
      </div>
      <div>{place.day ? filterDailySpecials() : null}</div>
      {place.lastUpdated ? (
        <div className='font-semibold text-sm text-slate-400'>
          Last Updated: {dateCleanup(place.lastUpdated)}
        </div>
      ) : null}
    </div>
  );
}
