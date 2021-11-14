import { useState } from "react";
import { useRouter } from "next/router";
import clientPromise from "../lib/mongodb";
import Head from "next/head";
import Image from "next/image";
import Place from "../components/place";

import "tailwindcss/tailwind.css";

export default function Home({ isConnected, places }) {
  const router = useRouter();
  const [amountOfPlaces, setAmountOfPlaces] = useState(10);
  const date = new Date();
  const day = date.toLocaleDateString("en-US", { weekday: "long" });

  const [navigationDay, setNavigationDay] = useState(day);

  const bars = places.slice(0, amountOfPlaces);

  function showMorePlaces() {
    setAmountOfPlaces((amountOfPlaces += 10));
    return router.replace(router.asPath);
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
          <button
            className='w-50 justify-self-center bg-purple-500 text-white font-bold py-2 px-4 rounded'
            onClick={showMorePlaces}
          >
            See More
          </button>
        </div>
      </main>

      <footer>
        {isConnected ? "MongoDB 👍🏼" : "Nah"}
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

export async function getServerSideProps(context) {
  let isConnected;
  let places;

  try {
    const client = await clientPromise;
    isConnected = true;
    const database = client.db(process.env.MONGODB_DB);

    places = await database.collection("places").find({}).limit(20).toArray();
  } catch (e) {
    console.log(e);
    isConnected = false;
  }
  return {
    props: { isConnected, places: JSON.parse(JSON.stringify(places)) },
  };
}
