import { useState } from "react";
import useSWR from "swr";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Place from "../components/Place";
import SearchBar from "../components/SearchBar";
import { getDay } from "../lib/date";
import fetcher from "../lib/fetcher";

import Navigation from "../components/Navigation";
import Loader from "../components/Loader";
import { getCurrentTime, hasActiveHappyHour } from "../lib/time";
import {
  sortByDistance,
  calculateDistance,
  getUserLocation,
} from "../lib/location";
import { useEffect } from "react";

function Home() {
  const [amountOfPlaces, setAmountOfPlaces] = useState(10);
  const [userLocation, setUserLocation] = useState(null);
  const day = getDay();

  function showMorePlaces() {
    setAmountOfPlaces(amountOfPlaces + 10);
  }

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const locationResult = await getUserLocation();
        setUserLocation(locationResult);
      } catch (error) {
        console.error("Error fetching user location:", error.message);
      }
    };

    const handlePermissionChange = () => {
      fetchUserLocation();
    };
    // on change event for if user disabled location and then enables it
    navigator.permissions
      .query({ name: "geolocation" })
      .then((permissionStatus) => {
        permissionStatus.onchange = handlePermissionChange;
      });

    // initial fetch
    fetchUserLocation();
  }, []);

  let page = 1;
  let limit = 10;

  const { data, error } = useSWR(
    `/api/places/${day}?page=${page}&limit=${limit}&currentTime=${getCurrentTime()}`,
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (!data) return <Loader />;
  if (!data.success) return <div>Failed to load</div>;
  let places = data.places;

  // sort by distance
  if (userLocation) {
    places = places.map((place) => ({
      ...place,
      distance: calculateDistance(userLocation, place.location.geo),
    }));
    places = sortByDistance(places);
  }

  // sort so active happy hours are first
  let activeSpecialsPlaces = places.filter((place) =>
    hasActiveHappyHour(place, day)
  );
  let otherPlaces = places.filter((place) => !hasActiveHappyHour(place, day));
  places = [...activeSpecialsPlaces, ...otherPlaces];

  function happyHoursRightNow() {
    const todayPlace = places.filter((place) => hasActiveHappyHour(place, day));

    return todayPlace.length;
  }

  function determineCurrentHappyHourVerbiage() {
    if (happyHoursRightNow() > 1)
      return `There are ${happyHoursRightNow()} happy hours happening right now. Get on
    it!`;
    if (happyHoursRightNow() === 1)
      return `There's only ${happyHoursRightNow()} happy hour happening right now. Get on
    it!`;

    return `There are ${happyHoursRightNow()} happy hours happening right now.`;
  }

  const bars = places.slice(0, amountOfPlaces);

  return (
    <div>
      <Meta />
      <Header title={`${day} Specials`} />
      <div className='flex flex-col items-center'>
        <div className='flex flex-col md:w-1/2'>
          <div className='mt-6 mx-10 text-center'>
            {determineCurrentHappyHourVerbiage()}
          </div>
          <SearchBar />
          <Navigation />
          <main>
            <div className='flex flex-wrap w-full'>
              {bars.map((bar) => (
                <Place place={bar} day={day} key={bar._id} />
              ))}
              {places.length <= amountOfPlaces ? null : (
                <div className='flex justify-center w-full'>
                  <button
                    className='w-1/2 bg-purple-500 text-white font-bold py-2 px-4 rounded'
                    onClick={showMorePlaces}
                  >
                    See More
                  </button>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;
