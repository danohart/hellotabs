import Icon from "./Icon";

export default function LocationPrompt({ loading, onEnable }) {
  return (
    <div className='flex items-center justify-between gap-3 bg-purple-50 dark:bg-slate-700 border border-purple-200 dark:border-slate-600 rounded-lg px-4 py-3 my-3 text-sm'>
      <div className='flex items-center gap-2 text-purple-800 dark:text-purple-200'>
        <Icon icon='LocationDotIcon' className='h-4 w-4 text-current shrink-0' />
        <span>Enable location to sort deals by distance.</span>
      </div>
      <button
        onClick={onEnable}
        disabled={loading}
        className='shrink-0 bg-purple-600 hover:bg-purple-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-xs px-3 py-1.5 rounded-full'
      >
        {loading ? "Locating…" : "Enable"}
      </button>
    </div>
  );
}
