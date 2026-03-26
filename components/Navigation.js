import Link from "next/link";
import { useState } from "react";
import neighborhoods, { neighborhoodToSlug } from "../lib/neighborhoods";
import { trackEvent } from "../lib/analytics";

export default function Navigation() {
  const [showNeighborhoods, setShowNeighborhoods] = useState(false);

  function handlePanelToggle() {
    if (!showNeighborhoods) trackEvent("neighborhood_panel_open");
    setShowNeighborhoods(!showNeighborhoods);
  }

  return (
    <div>
      <div className="flex w-full justify-center">
        <button
          className="m-1 w-3/4 bg-purple-500 text-white font-bold py-2 px-4 rounded dark:bg-purple-800"
          onClick={handlePanelToggle}
        >
          {showNeighborhoods ? "Hide Neighborhoods" : "Find by Neighborhood"}
        </button>
      </div>

      {showNeighborhoods && (
        <div className="flex w-full justify-center flex-wrap">
          <div className="flex flex-col items-center my-4">
            <h3 className="my-3 mx-12 text-center">
              What neighborhood are you going to?
            </h3>
            <div className="flex flex-wrap justify-center">
              {neighborhoods.sort().map((neighborhood) => (
                <Link
                  href={`/neighborhood/${neighborhoodToSlug[neighborhood]}`}
                  key={neighborhood}
                  onClick={() =>
                    trackEvent("neighborhood_select", { neighborhood })
                  }
                >
                  <button className="m-1 bg-purple-500 text-white font-bold py-2 px-4 rounded dark:bg-purple-800">
                    {neighborhood}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
