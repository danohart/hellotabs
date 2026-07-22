import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlassWhiskey,
  faArrowLeft,
  faChevronLeft,
  faHouse,
  faBowlFood,
  faBolt,
  faClock,
  faStar,
  faLocationDot,
  faMagnifyingGlass,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";

const ICONS = {
  HomeIcon: faHouse,
  ChartIcon: faChartSimple,
  ArrowLeftIcon: faArrowLeft,
  ChevronLeftIcon: faChevronLeft,
  TagIcon: faGlassWhiskey,
  CurrencyDollarIcon: faBowlFood,
  BoltIcon: faBolt,
  ClockIcon: faClock,
  StarIcon: faStar,
  LocationDotIcon: faLocationDot,
  SearchIcon: faMagnifyingGlass,
};

// Icons inherit color from the surrounding text (currentColor) so they
// always match whatever badge/heading they sit inside, rather than forcing
// their own color regardless of context.
export default function Icon({ icon, className = "h-5 w-5 text-current" }) {
  const definition = ICONS[icon];
  if (!definition) return null;
  return <FontAwesomeIcon icon={definition} className={className} />;
}
