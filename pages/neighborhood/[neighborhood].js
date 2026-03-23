import { useState } from "react";
import Link from "next/link";
import Meta from "../../components/Meta";
import Header from "../../components/Header";
import Place from "../../components/Place";
import { NeighborhoodJsonLd } from "../../components/JsonLd";
import { getDay, convertDayName } from "../../lib/date";
import { hasActiveHappyHour } from "../../lib/time";
import { connectToDatabase } from "../../lib/mongodb";
import { slugToNeighborhood, getRelatedNeighborhoods, neighborhoodToSlug } from "../../lib/neighborhoods";

export default function Neighborhood({ title, description, neighborhood, places: initialPlaces, day, relatedNeighborhoods }) {
  let [amountOfPlaces, setAmountOfPlaces] = useState(10);

  function showMorePlaces() {
    setAmountOfPlaces((amountOfPlaces += 10));
  }

  // sort so active happy hours are first
  let activeSpecialsPlaces = initialPlaces.filter((place) => hasActiveHappyHour(place, day));
  let otherPlaces = initialPlaces.filter((place) => !hasActiveHappyHour(place, day));
  let places = [...activeSpecialsPlaces, ...otherPlaces];

  const bars = places.slice(0, amountOfPlaces);

  return (
    <div className='m-2'>
      <Meta title={title} description={description} />
      <NeighborhoodJsonLd neighborhood={neighborhood} places={places} />
      <Header />
      <main>
        <div className="text-center text-2xl italic mb-8 mt-4">{`Today's ${neighborhood} Specials`}</div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:w-1/2">
            {bars.length === 0 ? (
              <div className='w-full text-center py-12 text-4xl'>
                No happy hours found in{" "}
                <span className='font-bold'>{neighborhood}</span> today.
              </div>
            ) : (
              bars.map((bar) => <Place place={bar} day={day} key={bar._id} />)
            )}
            {bars && bars.length >= 10 && bars.length !== places.length ? (
              <div className='flex justify-center w-full'>
                <button
                  className='w-1/2 bg-purple-500 text-white font-bold py-2 px-4 rounded'
                  onClick={showMorePlaces}
                >
                  See More
                </button>
              </div>
            ) : null}

            {relatedNeighborhoods && relatedNeighborhoods.length > 0 && (
              <div className='mt-8 p-4 border-t border-gray-200 dark:border-gray-600'>
                <h2 className='text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300'>
                  Nearby Neighborhoods
                </h2>
                <div className='flex flex-wrap gap-2'>
                  {relatedNeighborhoods.map((related) => (
                    <Link
                      key={related.name}
                      href={`/neighborhood/${related.slug}`}
                      className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors'
                    >
                      {related.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const neighborhoodSlug = params.neighborhood;
  const neighborhood = slugToNeighborhood[neighborhoodSlug] || neighborhoodSlug;
  const displayName = neighborhood.charAt(0).toUpperCase() + neighborhood.slice(1);

  const day = getDay();
  const dayOfWeek = convertDayName(day);

  const { db } = await connectToDatabase();

  const places = await db
    .collection("eventPlaces")
    .aggregate([
      {
        $match: {
          enabled: true,
          neighborhood: neighborhood,
          events: {
            $elemMatch: {
              keywords: "happyHour",
              "eventSchedule.byDay": dayOfWeek,
            },
          },
        },
      },
      {
        $project: {
          _id: 1,
          alt_id: 1,
          name: 1,
          slug: 1,
          location: 1,
          events: {
            $filter: {
              input: "$events",
              as: "event",
              cond: {
                $and: [
                  { $eq: ["$$event.keywords", "happyHour"] },
                  {
                    $gt: [
                      {
                        $size: {
                          $filter: {
                            input: "$$event.eventSchedule",
                            as: "schedule",
                            cond: { $in: [dayOfWeek, "$$schedule.byDay"] },
                          },
                        },
                      },
                      0,
                    ],
                  },
                ],
              },
            },
          },
          enabled: 1,
          featured: 1,
          neighborhood: 1,
          lastUpdated: 1,
        },
      },
      {
        $sort: { featured: -1 },
      },
    ])
    .toArray();

  const related = getRelatedNeighborhoods(neighborhood).map((name) => ({
    name,
    slug: neighborhoodToSlug[name],
  }));

  return {
    props: {
      title: `Best Happy Hours in ${displayName}, Chicago // Hello Chicago`,
      description: `List of bars and restaurants in the ${displayName} neighborhood of Chicago that serve happy hour specials and deals.`,
      neighborhood: neighborhood,
      places: JSON.parse(JSON.stringify(places)),
      day: day,
      relatedNeighborhoods: related,
    },
  };
}