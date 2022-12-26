import { TagIcon } from "@heroicons/react/24/solid";
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
          <div className='flex flex-row py-4 items-center' key={special.name}>
            <TagIcon className=' h-5 w-5 text-purple-800 dark:text-purple-400' />
            {special.drink_specials}
          </div>
        );
    });
  }

  function getGoogleMapsUrl(placeInfo) {
    const placeAddress = placeInfo.address
      ? placeInfo.address.split("@")[1]
      : null;

    return `https://maps.google.com/?q=${placeInfo.name} ${placeAddress}`;
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
      <div className='font-semibold'>
        {place.day ? filterDailySpecials() : null}
      </div>
    </div>
  );
}
