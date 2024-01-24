import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlassWhiskey,
  faArrowLeft,
  faHome,
  faBowlFood,
} from "@fortawesome/free-solid-svg-icons";

export default function Icon({ icon }) {
  const classStyles = "h-5 w-5 mr-2 text-purple-800 dark:text-purple-400";
  if (icon === "HomeIcon")
    return <FontAwesomeIcon icon={faHome} className={classStyles} />;
  if (icon === "ArrowLeftIcon")
    return <FontAwesomeIcon icon={faArrowLeft} className={classStyles} />;
  if (icon === "TagIcon")
    return <FontAwesomeIcon icon={faGlassWhiskey} className={classStyles} />;
  if (icon === "CurrencyDollarIcon")
    return <FontAwesomeIcon icon={faBowlFood} className={classStyles} />;
  return;
}
