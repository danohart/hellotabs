import { event } from "react-ga";

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

export function formatDateDisplay(date){
  if(!date)
    return null;
  let newDate = new Date(date);
  const options = { month: 'numeric', day: 'numeric', year: '2-digit' };
  return newDate.toLocaleDateString(undefined, options);
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

export function convertDayCodeToString(dayCode) {
  dayCode = dayCode.toUpperCase();
  const mapping = {
    "SU": "Sunday",
    "MO": "Monday",
    "TU": "Tuesday",
    "WE": "Wednesday",
    "TH": "Thursday",
    "FR": "Friday",
    "SA": "Saturday",
  };
  return mapping[dayCode];
}


export function formatDaysOfWeek(daysOfWeek) {

  // empty & single-day cases
  if (daysOfWeek.length == 0)
    return "?";
  if (daysOfWeek.length == 1)
    return dayCodeToAbbrMapping[daysOfWeek[0]];


  // remove duplicates and sort
  const uniqueDaysSet = new Set(daysOfWeek);
  const uniqueDaysArray = [...uniqueDaysSet];
  const sortedDays = uniqueDaysArray.sort((a, b) => daysOrder.indexOf(a) - daysOrder.indexOf(b));

  // special cases
  if (JSON.stringify(sortedDays) === JSON.stringify(daysOrder))
    return "Everyday";
  else if (JSON.stringify(sortedDays) === JSON.stringify(["SA", "SU"]))
    return "Weekends";
  if (JSON.stringify(sortedDays) === JSON.stringify(["MO", "TU", "WE", "TH", "FR"]))
    return "Weekdays";

  // custom format
  let formattedString = "";
  let currentRange = [sortedDays[0]];
  for (let i = 1; i < sortedDays.length; i++) {
    const currentDay = sortedDays[i];
    const prevDay = sortedDays[i - 1];

    if (daysOrder.indexOf(currentDay) - daysOrder.indexOf(prevDay) === 1) {
      // Days are continuous
      currentRange.push(currentDay);

      if (i === sortedDays.length - 1) {
        // Last iteration
        formattedString += formatRange(currentRange);
      }
    } else if (i == sortedDays.length - 1) {
      // Days are not continuous, last day
      formattedString += formatRange(currentRange);
      formattedString += ", ";
      formattedString += dayCodeToAbbrMapping[sortedDays[i]];
    } else {
      // Days are not continuous
      formattedString += formatRange(currentRange);

      if (i < sortedDays.length - 1) {
        formattedString += ", ";
        currentRange = [currentDay];
      }
    }
  }

  return formattedString;
}

function formatRange(range) {
  return range.length === 1 ? dayCodeToAbbrMapping[range[0]] : `${dayCodeToAbbrMapping[range[0]]}-${dayCodeToAbbrMapping[range[range.length - 1]]}`;
}

const daysOrder = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
const dayCodeToAbbrMapping = {
  "MO": "Mon",
  "TU": "Tue",
  "WE": "Wed",
  "TH": "Thu",
  "FR": "Fri",
  "SA": "Sat",
  "SU": "Sun",
};

export function sortEvents(events){
  return events.sort(eventSortFunction);
}

function eventSortFunction(event1, event2){
  const event1EarliestSchedule = getEarliestSchedule(event1.eventSchedule);
  const event2EarliestSchedule = getEarliestSchedule(event2.eventSchedule);

  return eventScheduleSortFunction(event1EarliestSchedule, event2EarliestSchedule);
}

function getEarliestSchedule(scheduleArray) {
  const sorted = scheduleArray.sort(eventScheduleSortFunction);
  return sorted[0];
}

function eventScheduleSortFunction(sched1, sched2){
  //get earliest day in week for each
  const sched1EarliestDay = getEarliestDay(sched1.byDay);
  const sched2EarliestDay = getEarliestDay(sched2.byDay);

  if(sched1EarliestDay != sched2EarliestDay)
    return daysOrder.indexOf(sched1EarliestDay) - daysOrder.indexOf(sched2EarliestDay);
  else{
    //same day, find earliest time
    return sched1.startTime - sched2.startTime;
  }
}

function getEarliestDay(daysArray){
  const sortedDays = daysArray.sort((a, b) => daysOrder.indexOf(a) - daysOrder.indexOf(b));
  return sortedDays[0];
}