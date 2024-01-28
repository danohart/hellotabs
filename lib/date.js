export function getDay() {
  const date = new Date();
  const day = date.toLocaleDateString("en-US", { weekday: "long" });

  return day;
}

export function dateCleanup(date) {
  let newDate = new Date(date);
  newDate = newDate.toISOString().substring(0, 10);

  return newDate;
}

export function convertDayName(dayName) {
  let day = dayName.toLowerCase();
  const mapping = {
    "monday": "MO",
    "tuesday": "TU",
    "wednesday": "WE",
    "thursday": "TH",
    "friday": "FR",
    "saturday": "SA",
    "sunday": "SU",
  };
  return mapping[day];
}