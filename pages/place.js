import Place from "../components/Place";
import useSWR from "swr";
import { useRouter } from "next/router";
import Loader from "../components/Loader";
import fetcher from "../lib/fetcher";
import Header from "../components/Header";

export default function SinglePlace() {
  const router = useRouter();
  const placeId = router.query.id;

  const { data, error } = useSWR("/api/place/" + placeId, fetcher);
  console.log(error);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loader />;

  return (
    <>
      <Header />
      <Place place={data.place} day='allDays' />
    </>
  );
}
