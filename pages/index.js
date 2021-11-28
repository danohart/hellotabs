import { useState } from "react";
import useSWR from "swr";
import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import Place from "../components/Place";
import SearchBar from "../components/SearchBar";
import getDay from "../lib/date";

import "tailwindcss/tailwind.css";
import Navigation from "../components/Navigation";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Home() {
  const [amountOfPlaces, setAmountOfPlaces] = useState(10);
  const day = getDay();

  const { data, error } = useSWR("/api/places/" + day, fetcher);

  function showMorePlaces() {
    setAmountOfPlaces((amountOfPlaces += 10));
  }

  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const places = data.places;

  const bars = places.slice(0, amountOfPlaces);

  return (
    <div className='m-2'>
      <Head>
        <title>Little Tabs</title>
        <meta name='description' content='Happy Hour in Chicago' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header title={`${day} Specials`} />
      <SearchBar />
      <Navigation />
      <main>
        <div className='flex flex-wrap justify-items-center mt-6'>
          {/* {daysOfTheWeek.map((theDay) => (
            <button
              className='w-1/5 px-4'
              onClick={() => setNavigationDay(theDay)}
              key={theDay}
            >
              {theDay}
            </button>
          ))} */}
        </div>
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

      <footer className='flex justify-center w-full py-12'>
        <br />
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by
          <span>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
