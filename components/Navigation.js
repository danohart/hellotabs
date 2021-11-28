import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [showNeighborhoods, setShowNeighborhoods] = useState(true);
  const neighborhoods = [
    "Avondale",
    "Logan Square",
    "Wrigleyville",
    "Lakeview",
    "Lincoln Square",
    "Bridgeport",
    "Hyde Park",
  ];

  return (
    <div>
      <div className='flex w-full justify-center'>
        <button
          className='m-1 w-3/4 bg-purple-500 text-white font-bold py-2 px-4 rounded'
          onClick={() => setShowNeighborhoods(!showNeighborhoods)}
        >
          {showNeighborhoods ? "Show Neighborhoods" : "Hide Neighborhoods"}
        </button>
      </div>
      <div className={showNeighborhoods ? "hidden" : "block"}>
        {neighborhoods.map((neighborhood) => (
          <Link href={`/neighborhood?n=${neighborhood}`} key={neighborhood}>
            <button className='m-1 bg-purple-500 text-white font-bold py-2 px-4 rounded'>
              {neighborhood}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
