import { convertDayName } from "./date";

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
  return place.events.some((event) => isActiveHappyHour(event,day));
}

export function isActiveHappyHour(event, day) {
  if(event.keywords != "happyHour")
    return false;

  const schedules = event.eventSchedule;
  return schedules.some((schedule) => {
    return schedule.byDay.includes(convertDayName(day)) &&
      isCurrentlyBetweenTwoTimes(
        schedule.startTime,
        schedule.endTime
      )
  });
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

