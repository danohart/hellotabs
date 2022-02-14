import { TagIcon } from "@heroicons/react/solid";
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
        {place.address.split("@")[0]} |{" "}
        <a
          className='underline'
          target={"_blank"}
          href={
            "https://maps.google.com/?q=" +
            place.name +
            " " +
            place.address.split("@")[1]
          }
        >
          {place.address.split("@")[1]}
        </a>
      </div>
      <div className='font-semibold'>
        {place.day ? filterDailySpecials() : null}
      </div>
    </div>
  );
}
