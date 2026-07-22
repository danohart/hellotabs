import Link from "next/link";
import Icon from "./Icon";
import { POPULAR_NEIGHBORHOODS } from "../lib/neighborhoods";
import { trackEvent } from "../lib/analytics";

export default function HomeFilters({ activeNowOnly, onToggleActiveNow }) {
  return (
    <div className='flex gap-2 overflow-x-auto py-1 pb-3 scrollbar-purple'>
      <button
        onClick={() => {
          trackEvent("active_now_filter_toggle", { active: !activeNowOnly });
          onToggleActiveNow(!activeNowOnly);
        }}
        className={`mb-2 shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full border font-semibold text-sm transition-colors ${
          activeNowOnly
            ? "bg-purple-600 border-purple-600 text-white"
            : "bg-white border-purple-300 text-purple-700 dark:bg-slate-700 dark:border-slate-500 dark:text-purple-300"
        }`}
      >
        <Icon icon='BoltIcon' className='h-4 w-4 text-current' />
        Active now
      </button>
      {POPULAR_NEIGHBORHOODS.map((neighborhood) => (
        <Link
          key={neighborhood.slug}
          href={`/neighborhood/${neighborhood.slug}`}
          onClick={() =>
            trackEvent("neighborhood_chip_click", {
              neighborhood: neighborhood.name,
            })
          }
          className='mb-2 shrink-0 px-4 py-2 rounded-full border border-gray-300 dark:border-slate-500 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-purple-400 dark:hover:border-purple-500'
        >
          {neighborhood.name}
        </Link>
      ))}
    </div>
  );
}
