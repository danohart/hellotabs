import { useState } from "react";

export default function UpdatePlacesButton() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleUpdatePlaces = async () => {
    setLoading(true);
    setSuccess(null);

    try {
      const response = await fetch("/api/updatePlacesWithGeo", {
        method: "POST",
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error("Error updating places:", error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        className='w-1/2 bg-purple-500 text-white font-bold py-2 px-4 rounded'
        onClick={handleUpdatePlaces}
        disabled={loading}
      >
        {loading ? "Updating..." : "Update Places with Geo Data"}
      </button>
      {success !== null && (
        <p>
          {success
            ? "Update successful!"
            : "Update failed. Check the logs for errors."}
        </p>
      )}
    </div>
  );
}
