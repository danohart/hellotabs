import neighborhoods from "../lib/neighborhoods";
import Link from "next/link";

export default function WhatNeighborhood() {
  return (
    <div>
      <h2>What neighborhood are you wanting to go to?</h2>
      {neighborhoods.sort().map((neighborhood) => (
        <Link href={`/neighborhood?n=${neighborhood}`} key={neighborhood}>
          <button className='m-1 bg-purple-500 text-white font-bold py-2 px-4 rounded dark:bg-purple-800'>
            {neighborhood}
          </button>
        </Link>
      ))}
    </div>
  );
}
