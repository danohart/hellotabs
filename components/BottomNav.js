import Link from "next/link";
import { useRouter } from "next/router";
import Icon from "./Icon";
import { trackEvent } from "../lib/analytics";

const TABS = [
  { href: "/", label: "Home", icon: "HomeIcon" },
  { href: "/search", label: "Search", icon: "SearchIcon" },
];

export default function BottomNav() {
  const router = useRouter();

  return (
    <nav className='fixed bottom-0 left-0 right-0 z-20 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 flex'>
      {TABS.map((tab) => {
        const isActive =
          tab.href === "/" ? router.pathname === "/" : router.pathname.startsWith(tab.href);

        return (
          <Link
            key={tab.href}
            href={tab.href}
            onClick={() => trackEvent("bottom_nav_tap", { tab: tab.label })}
            className={`flex-1 flex flex-col items-center gap-0.5 py-2.5 text-xs font-semibold ${
              isActive
                ? "text-purple-600 dark:text-purple-400"
                : "text-gray-400 dark:text-gray-500"
            }`}
          >
            <Icon icon={tab.icon} className='h-5 w-5 text-current' />
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
