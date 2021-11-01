import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Place from "../components/place";

import data from "../data/master-specials";
import "tailwindcss/tailwind.css";

export default function Home() {
  const [amountOfPlaces, setAmountOfPlaces] = useState(10);

  const date = new Date();
  const day = date
    .toLocaleDateString("en-US", { weekday: "long" })
    .toLowerCase();

  const [navigationDay, setNavigationDay] = useState(day);
  const bars = data[navigationDay].slice(0, amountOfPlaces);

  function showMorePlaces() {
    return setAmountOfPlaces((amountOfPlaces += 10));
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

  return (
    <div className='m-2'>
      <Head>
        <title>Little Tabs</title>
        <meta name='description' content='Happy Hour in Chicago' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='text-6xl'>Little Tabs</h1>
        <div className='flex flex-wrap justify-items-center'>
          {daysOfTheWeek.map((theDay) => (
            <button
              className='w-1/5 px-4'
              onClick={() => setNavigationDay(theDay)}
            >
              {theDay}
            </button>
          ))}
        </div>
        <div className='flex flex-wrap w-full'>
          {bars.map((bar) => (
            <Place place={bar} />
          ))}
          <button onClick={showMorePlaces}>See More</button>
        </div>
      </main>

      <footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{" "}
          <span>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
