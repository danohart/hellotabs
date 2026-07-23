import { useEffect } from "react";
import PlaceDetail from "../../components/PlaceDetail";
import Loader from "../../components/Loader";
import Meta from "../../components/Meta";
import JsonLd from "../../components/JsonLd";
import SimilarPlaces from "../../components/SimilarPlaces";
import { connectToDatabase } from "../../lib/mongodb";
import { ObjectId } from "mongodb";
import { isValidObjectId } from "../../lib/slugify";
import { findSimilarPlaces } from "../api/places/similar";
import { trackEvent } from "../../lib/analytics";
import { formatDaysOfWeek } from "../../lib/date";

export async function getServerSideProps({ params, res }) {
  const { id } = params;
  const { db } = await connectToDatabase();

  let place;

  if (isValidObjectId(id)) {
    place = await db
      .collection("eventPlaces")
      .findOne({ _id: new ObjectId(id) });

    if (place && place.slug) {
      return {
        redirect: {
          destination: `/place/${place.slug}`,
          permanent: true,
        },
      };
    }
  } else {
    place = await db.collection("eventPlaces").findOne({ slug: id });
  }

  if (!place) {
    return { notFound: true };
  }

  // Fetch similar places using scored type matching
  const { similar: similarInNeighborhood, citywide: similarCitywide } =
    await findSimilarPlaces(db, place);

  return {
    props: {
      place: JSON.parse(JSON.stringify(place)),
      similarInNeighborhood: JSON.parse(JSON.stringify(similarInNeighborhood)),
      similarCitywide: JSON.parse(JSON.stringify(similarCitywide)),
    },
  };
}

export default function SinglePlace({
  place,
  similarInNeighborhood,
  similarCitywide,
}) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (place) {
      trackEvent("place_viewed", {
        place_name: place.name,
        neighborhood: place.neighborhood,
        slug: place.slug,
      });
    }
  }, []);

  if (!place) {
    return <Loader />;
  }

  // Build a richer title/description with actual deals and days if available.
  // Days are shown but exact hours deliberately aren't — that's the reason to
  // click through rather than bounce off the snippet.
  const happyHourEvent = place.events?.find((e) => e.keywords === "happyHour");
  const hasMenu = happyHourEvent?.menu && happyHourEvent.menu.length > 0;

  const happyHourDays = (place.events || [])
    .filter((e) => e.keywords === "happyHour")
    .flatMap((e) => e.eventSchedule || [])
    .flatMap((s) => s.byDay || []);
  const daysLabel =
    happyHourDays.length > 0 ? formatDaysOfWeek(happyHourDays) : null;

  const metaTitle = daysLabel
    ? `${place.name} Happy Hour in ${place.neighborhood}, ${daysLabel} | Hello Chicago`
    : `${place.name} Happy Hour in ${place.neighborhood} | Hello Chicago`;

  // At most one bonus attribute, in priority order — only the ones people
  // actually search for. Deals stay the primary draw; this is a small extra
  // at the end, not a replacement. Most places don't have googlePlaces data
  // yet, so this quietly does nothing until the admin backfill reaches them.
  const attrs = place.googlePlaces?.attributes;
  const attributeNote = attrs?.outdoorSeating
    ? "Patio seating."
    : attrs?.goodForWatchingSports
      ? "Great for watching sports."
      : attrs?.liveMusic
        ? "Live music."
        : null;

  let metaDescription;
  if (hasMenu && place.neighborhood) {
    const deals = happyHourEvent.menu
      .slice(0, 2)
      .map((item) =>
        item.price ? `$${item.price} ${item.name.toLowerCase()}` : item.name,
      )
      .join(", ");
    metaDescription = daysLabel
      ? `${place.name} happy hour in ${place.neighborhood}, Chicago — ${daysLabel}. ${deals}, and more.`
      : `${place.name} happy hour in ${place.neighborhood}, Chicago. ${deals} and more daily specials.`;
  } else if (place.neighborhood) {
    metaDescription = `Happy hour specials at ${place.name} in ${place.neighborhood}, Chicago. Daily drink and food deals with times and menu.`;
  } else {
    metaDescription = `Happy hour specials at ${place.name} in Chicago. Daily drink and food deals with times and menu.`;
  }
  if (attributeNote) {
    metaDescription = `${metaDescription} ${attributeNote}`;
  }

  return (
    <>
      <Meta title={metaTitle} description={metaDescription} />
      <JsonLd place={place} />
      <div className='flex flex-col items-center pb-24'>
        <div className='w-full md:w-1/2 px-4'>
          <PlaceDetail place={place} />

          <SimilarPlaces
            title={`Similar in ${place.neighborhood}`}
            places={similarInNeighborhood}
            section='neighborhood'
            fromPlace={place.name}
          />

          <SimilarPlaces
            title='Similar across Chicago'
            places={similarCitywide}
            section='citywide'
            fromPlace={place.name}
          />
        </div>
      </div>
    </>
  );
}
