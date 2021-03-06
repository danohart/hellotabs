import Link from "next/link";
import { useState } from "react";
import neighborhoods from "../lib/neighborhoods";

export default function Navigation() {
  const [showNeighborhoods, setShowNeighborhoods] = useState(true);

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
