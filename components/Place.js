import Icon from "./Icon";
import { dateCleanup } from "../lib/date";
import Link from "next/link";

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
              <Icon icon='TagIcon' />
              {special.drink_specials}
            </div>
            <div className='flex flex-row py-4 items-center'>
              <Icon icon='CurrencyDollarIcon' />
              {special.food_specials}
            </div>
          </div>
        );
    });
  }

  const dayInfo = place.day.filter((specialDay) => specialDay.name == day)[0];

  function getGoogleMapsUrl(placeInfo) {
    const placeAddress = placeInfo.address
      ? placeInfo.address.split("@")[1]
      : null;

    return `https://maps.google.com/?q=${placeInfo.name} ${placeAddress}`;
  }

  function formatTimeDisplay(timeInt) {
    const hour = Math.floor(timeInt / 100);
    const minute = timeInt % 100;

    if (isNaN(hour) || isNaN(minute)) {
      return "?";
    }

    const period = hour < 12 ? 'am' : 'pm';
    const convertedHour = hour % 12 === 0 ? 12 : hour % 12;

    if (minute) {
      return `${convertedHour}:${minute}${period}`;
    } else {
      return `${convertedHour}${period}`;
    }
  }

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Format the current time as "HHMM"
    const currentTime = hours * 100 + minutes;

    return currentTime;
  }

  function isBetweenTwoTimes(startTime, endTime) {
    const currentTime = getCurrentTime();

    return currentTime >= startTime && currentTime <= endTime;
  }

  let startTime;
  let endTime;
  if(dayInfo){
    startTime = formatTimeDisplay(dayInfo.timeOfDay.startTime);
    endTime = formatTimeDisplay(dayInfo.timeOfDay.endTime);
  }

  return (
    <div
      className='p-6 w-full border-2 rounded mb-2 bg-white dark:bg-slate-600 dark:text-slate-300 dark:border-slate-500'
      key={place.name}
    >
      <h2 className='text-4xl font-bold'>
        <Link
          href={{
            pathname: "/place",
            query: { id: place._id },
          }}
        >
          {place.name}
        </Link>
      </h2>
      <div className='text-purple-500 dark:text-purple-400'>
        {place.address ? place.address.split("@")[0] : null} |{" "}
        <a
          className='underline'
          target='_blank'
          rel='noreferrer'
          href={getGoogleMapsUrl(place)}
        >
          {place.address ? place.address.split("@")[1] : null}
        </a>
      </div>
      <div className="mt-2 font-semibold">{startTime} - {endTime}</div>
      <div className=''>
        {place.day ? filterDailySpecials() : null}
      </div>
      {place.lastUpdated ? (
        <div className='font-semibold text-sm text-slate-400'>
          Last Updated: {dateCleanup(place.lastUpdated)}
        </div>
      ) : null}
    </div>
  );
}
