import useSWR from "swr";
import Loader from "../components/Loader";
import fetcher from "../lib/fetcher";
import { useState } from "react";
import Header from "../components/Header";
import Meta from "../components/Meta";

export default function Venues() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const updateVenues = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/updateVenuesWithGeo", {
        method: "POST",
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Venues updated successfully!");
      } else {
        setMessage("Failed to update venues: " + data.message);
      }
    } catch (error) {
      setMessage("An error occurred: " + error.message);
    }
    setLoading(false);
  };

  const { data, error } = useSWR("/api/venues/", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loader />;

  return (
    <>
      <Meta title={`How To Get To Local Chicago Venues`} />
      <Header title='Local Chicago Venues' />
      <div className='flex flex-col items-center'>
        <div className='md:w-1/2'>
          {data.venues.map((venue) => (
            <div key={venue.id}>
              {venue.name} - {venue.location.streetAddress}
            </div>
          ))}
          <button
            onClick={updateVenues}
            className='bg-blue-500 text-white p-2 rounded mt-6'
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Venues"}
          </button>
          {message && <p>{message}</p>}
        </div>
      </div>
    </>
  );
}
