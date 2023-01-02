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
