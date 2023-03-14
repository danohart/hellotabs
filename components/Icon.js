import {
  HomeIcon,
  ArrowLeftIcon,
  TagIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

export default function Icon({ icon }) {
  const classStyles = "h-5 w-5 text-purple-800 dark:text-purple-400";
  if (icon === "HomeIcon") return <HomeIcon className={classStyles} />;
  if (icon === "ArrowLeftIcon")
    return <ArrowLeftIcon className={classStyles} />;
  if (icon === "TagIcon") return <TagIcon className={classStyles} />;
  if (icon === "CurrencyDollarIcon")
    return <CurrencyDollarIcon className={classStyles} />;
  return;
}
