import Icon from "./Icon";
import { dateCleanup } from "../lib/date";
import Link from "next/link";
import { isCurrentlyBetweenTwoTimes, formatTimeDisplay } from "../lib/time";
import { convertDayName } from "../lib/date";

export default function Place({ place, day }) {

  function getGoogleMapsUrl(placeInfo) {
    const placeAddress = placeInfo.location.streetAddress
      ? placeInfo.location.streetAddress
      : null;

    return `https://maps.google.com/?q=${placeInfo.name} ${placeAddress}`;
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
                {place.location.streetAddress ? place.location.streetAddress : null}
              </a>
            </div>
            <div className='md:ml-2'>
              {place.neighborhood ? place.neighborhood : null}
              {place.distance && ` | ${place.distance.toFixed(1)} miles`}
            </div>
          </div>
        </div>
      </div>

      {
        place.events.map((event) => <Event event={event} key={event} />)
      }

      {place.lastUpdated && (
        <div className='font-semibold text-sm text-slate-400'>
          Last Updated: {dateCleanup(place.lastUpdated)}
        </div>
      )}
    </div>
  );
}

function Event({ event }) {

  {/* {dayInfo && (
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
        )} */}

  // let happeningNow = false;
  // if (dayInfo) {
  //   startTime = formatTimeDisplay(dayInfo.timeOfDay.startTime);
  //   endTime = formatTimeDisplay(dayInfo.timeOfDay.endTime);
  //   happeningNow = isCurrentlyBetweenTwoTimes(
  //     dayInfo.timeOfDay.startTime,
  //     dayInfo.timeOfDay.endTime
  //   );
  // }

  let drinkSpecials = event.menu.filter((item) => item.category == "Drink");
  let foodSpecials = event.menu.filter((item) => item.category == "Food");

  const drinkSpecialsText = drinkSpecials.map(item => `$${item.price} ${item.name}`).join(', ');
  const foodSpecialsText = foodSpecials.map(item => `$${item.price} ${item.name}`).join(', ');

  const startTime = formatTimeDisplay(event.eventSchedule[0].startTime);
  const endTime = formatTimeDisplay(event.eventSchedule[0].endTime);

  return (
    <div className="my-4"> 
      <div className="font-bold">{`${startTime}-${endTime}`}</div>
      {drinkSpecialsText &&
        <div className='flex flex-row pt-4 items-center'>
          <div className='flex '>
            <Icon icon='TagIcon' />
          </div>
          <div className='flex '>{drinkSpecialsText}</div>
        </div>
      }
      {foodSpecialsText &&
        <div className='flex flex-row py-4 items-center'>
          <div>
            <Icon icon='CurrencyDollarIcon' />
          </div>
          <div>{foodSpecialsText}</div>
        </div>
      }
    </div>
  );

}