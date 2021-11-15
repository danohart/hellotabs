export default function getDay() {
  const date = new Date();
  const day = date.toLocaleDateString("en-US", { weekday: "long" });

  return day;
}
