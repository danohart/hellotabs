export function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // Format the current time as "HHMM"
  const currentTime = hours * 100 + minutes;
  return currentTime;
}

export function isCurrentlyBetweenTwoTimes(startTime, endTime) {
  const currentTime = getCurrentTime();
  return currentTime >= startTime && currentTime <= endTime;
}

export function hasActiveHappyHour(place, day) {
  const dayInfo = place.day.filter((specialDay) => specialDay.name == day)[0];
  const isHappeningNow = isCurrentlyBetweenTwoTimes(
    dayInfo.timeOfDay.startTime,
    dayInfo.timeOfDay.endTime
  );
  return isHappeningNow;
}

export function formatTimeDisplay(timeInt) {
  if (timeInt === null) return "?";
  const hour = Math.floor(timeInt / 100);
  const minute = timeInt % 100;

  if (isNaN(hour) || isNaN(minute)) {
    return "?";
  }

  const period = hour < 12 ? "am" : "pm";
  const convertedHour = hour % 12 === 0 ? 12 : hour % 12;

  if (minute) {
    return `${convertedHour}:${minute}${period}`;
  } else {
    return `${convertedHour}${period}`;
  }
}
