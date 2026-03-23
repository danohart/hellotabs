import Place from "../../components/Place";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import Meta from "../../components/Meta";
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

  return {
    props: {
      place: JSON.parse(JSON.stringify(place)),
    },
  };
}

export default function SinglePlace({ place }) {
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
      <Header title='Everyday Specials' />
      <div className='flex flex-col items-center'>
        <div className='md:w-1/2'>
          <Place place={place} day='allDays' showDays={true} />
        </div>
      </div>
    </>
  );
}
