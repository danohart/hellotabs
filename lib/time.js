import { convertDayName } from "./date";

export function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // Format the current time as "HHMM"
  const currentTime = hours * 100 + minutes;
  return currentTime;
}

export function addMinutesToTime(time, minutesToAdd) {
  const hours = Math.floor(time / 100);
  const minutes = time % 100;

  const totalMinutes = hours * 60 + minutes + minutesToAdd;
  const newHours = Math.floor(totalMinutes / 60);
  const newMinutes = totalMinutes % 60;

  // Format back to HHMM
  return newHours * 100 + newMinutes;
}

export function isCurrentlyBetweenTwoTimes(startTime, endTime) {
  const currentTime = getCurrentTime();

  // If either time is null or a non-numeric value, return false
  if (!startTime || !endTime || isNaN(startTime) || isNaN(endTime)) {
    return false;
  }

  return currentTime >= startTime && currentTime <= endTime;
}

export function isHappeningSoon(startTime) {
  const currentTime = getCurrentTime();
  const soonTime = addMinutesToTime(currentTime, 30);

  // If startTime is null or non-numeric, return false
  if (!startTime || isNaN(startTime)) {
    return false;
  }

  return currentTime < startTime && soonTime >= startTime;
}

export function isEndingSoon(endTime) {
  const currentTime = getCurrentTime();
  const soonTime = addMinutesToTime(currentTime, 30);

  // If endTime is null or non-numeric, return false
  if (!endTime || isNaN(endTime)) {
    return false;
  }

  return currentTime < endTime && soonTime >= endTime;
}

export function getEventStatus(eventSchedule) {
  if (!isToday(eventSchedule.byDay)) {
    return "Not today";
  }

  const startTime = eventSchedule.startTime;
  const endTime = eventSchedule.endTime;

  if (isCurrentlyBetweenTwoTimes(startTime, endTime)) {
    return "Now";
  }

  if (isHappeningSoon(startTime)) {
    return "Soon";
  }

  if (isEndingSoon(endTime)) {
    return "Ending soon";
  }

  return "Not happening";
}

export function hasActiveHappyHour(place, day) {
  return place.events.some((event) => isActiveHappyHour(event, day));
}

export function isActiveHappyHour(event, day) {
  if (event.keywords !== "happyHour") return false;

  const schedules = event.eventSchedule;
  return schedules.some((schedule) => {
    return (
      schedule.byDay.includes(convertDayName(day)) &&
      ["Now", "Soon", "Ending soon"].includes(getEventStatus(schedule))
    );
  });
}

export function isToday(byDay) {
  const daysOfWeek = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  const currentDayOfWeek = daysOfWeek[new Date().getDay()];
  return byDay.includes(currentDayOfWeek);
}

export function formatTimeDisplay(schedule) {
  const startTime = formatHourDisplay(schedule.startTime);
  const endTime = formatHourDisplay(schedule.endTime);
  if (schedule.startTime && schedule.endTime) {
    if (startTime === "?" && endTime === "?") {
      return ""; // Return nothing
    }
    return `${startTime} - ${endTime}`;
  } else if (schedule.startTime) return `After ${startTime}`;
  else if (schedule.endTime) return `Before ${endTime}`;
  else return "All day";
}

export function formatHourDisplay(timeInt) {
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
