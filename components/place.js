import { TagIcon } from "@heroicons/react/solid";

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
            <TagIcon className=' h-5 w-5 text-purple-800' />
            {special.drink_specials}
          </div>
        );
    });
  }

  return (
    <div className='p-6 w-full border-2 rounded mb-2 bg-white' key={place.name}>
      <h2 className='text-4xl font-bold'>{place.name}</h2>
      <div className='text-purple-500'>{place.address}</div>
      <div className='font-semibold'>
        {place.day ? filterDailySpecials() : null}
      </div>
    </div>
  );
}
