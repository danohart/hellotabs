import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [showNeighborhoods, setShowNeighborhoods] = useState(true);
  const neighborhoods = [
    "Garfield Ridge",
    "Lincoln Park",
    "Ukrainian Village",
    "Irving Park",
    "Lakeview",
    "Near North Side",
    "Printers Row",
    "Streeterville",
    "North Center",
    "Edison Park",
    "West Loop",
    "Wicker Park",
    "Logan Square",
    "Wrigleyville",
    "Lincoln Square",
    "Edgewater",
    "Portage Park",
    "Old Town",
    "West Rogers Park",
    "River North",
    "Avondale",
    "Humboldt Park",
    "South Loop",
    "Bucktown",
    "Rogers Park",
    "Norwood Park",
    "Near West Side",
    "Bridgeport",
    "Loop",
    "Noble Square",
    "Andersonville",
    "Uptown",
    "University Village",
    "Roscoe Village",
  ];

  return (
    <div>
      <div className='flex w-full justify-center'>
        <button
          className='m-1 w-3/4 bg-purple-500 text-white font-bold py-2 px-4 rounded dark:bg-purple-800'
          onClick={() => setShowNeighborhoods(!showNeighborhoods)}
        >
          {showNeighborhoods ? "Show Neighborhoods" : "Hide Neighborhoods"}
        </button>
      </div>
      <div className={showNeighborhoods ? "hidden" : "block"}>
        {neighborhoods.sort().map((neighborhood) => (
          <Link href={`/neighborhood?n=${neighborhood}`} key={neighborhood}>
            <button className='m-1 bg-purple-500 text-white font-bold py-2 px-4 rounded dark:bg-purple-800'>
              {neighborhood}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
