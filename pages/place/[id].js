import Place from "../../components/Place";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import Meta from "../../components/Meta";
import JsonLd from "../../components/JsonLd";
import SimilarPlaces from "../../components/SimilarPlaces";
import { connectToDatabase } from "../../lib/mongodb";
import { ObjectId } from "mongodb";
import { isValidObjectId } from "../../lib/slugify";

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

  // Fetch similar places if this place has Google data
  let similarInNeighborhood = [];
  let similarCitywide = [];

  if (place.googlePlaces?.primaryType) {
    const { primaryType } = place.googlePlaces;

    const baseQuery = {
      _id: { $ne: place._id },
      enabled: true,
      "googlePlaces.primaryType": primaryType,
    };

    similarInNeighborhood = await db
      .collection("eventPlaces")
      .find({ ...baseQuery, neighborhood: place.neighborhood })
      .project({
        _id: 1,
        name: 1,
        slug: 1,
        neighborhood: 1,
        "googlePlaces.primaryType": 1,
        "googlePlaces.priceLevel": 1,
      })
      .limit(6)
      .toArray();

    similarCitywide = await db
      .collection("eventPlaces")
      .find({ ...baseQuery, neighborhood: { $ne: place.neighborhood } })
      .project({
        _id: 1,
        name: 1,
        slug: 1,
        neighborhood: 1,
        "googlePlaces.primaryType": 1,
        "googlePlaces.priceLevel": 1,
      })
      .limit(6)
      .toArray();
  }

  return {
    props: {
      place: JSON.parse(JSON.stringify(place)),
      similarInNeighborhood: JSON.parse(JSON.stringify(similarInNeighborhood)),
      similarCitywide: JSON.parse(JSON.stringify(similarCitywide)),
    },
  };
}

export default function SinglePlace({ place, similarInNeighborhood, similarCitywide }) {
  if (!place) {
    return <Loader />;
  }

  const metaDescription = place.neighborhood
    ? `Happy hour specials at ${place.name} in ${place.neighborhood}, Chicago. View daily drink and food deals.`
    : `Happy hour specials at ${place.name} in Chicago. View daily drink and food deals.`;

  return (
    <>
      <Meta
        title={`${place.name} Happy Hour Specials | ${place.neighborhood || "Chicago"}`}
        description={metaDescription}
      />
      <JsonLd place={place} />
      <Header title='Everyday Specials' />
      <div className='flex flex-col items-center'>
        <div className='md:w-1/2'>
          <Place place={place} day='allDays' showDays={true} />

          <SimilarPlaces
            title={`Similar in ${place.neighborhood}`}
            places={similarInNeighborhood}
          />

          <SimilarPlaces
            title='Similar across Chicago'
            places={similarCitywide}
          />
        </div>
      </div>
    </>
  );
}
