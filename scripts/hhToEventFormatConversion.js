const fs = require('fs');

const rawData = fs.readFileSync('lib/sample-data.json');
const inputPlacesData = JSON.parse(rawData);

// Convert day name to DayOfWeek enum value
function convertDayName(dayName) {
    const mapping = {
        "Monday": "MO",
        "Tuesday": "TU",
        "Wednesday": "WE",
        "Thursday": "TH",
        "Friday": "FR",
        "Saturday": "SA",
        "Sunday": "SU",
    };
    return mapping[dayName] || dayName;
}

// Convert drink specials to MenuItem
function convertSpecials(specials, type) {

    if (specials == "None")
        return [];

    return specials.split(',').map(item => {

        if (item.toLowerCase().includes("off")) {
            // discount rate or $ off. Storing as is for now
            return {
                name: item,
            }
        }
        else if (item.trim().startsWith("$")) {
            const parts = item.trim().split(' ');
            const price = parts.length > 1 ? parseFloat(parts[0].substring(1)) : null;
            const name = parts.slice(1).join(' ');
            return {
                name,
                category: type,
                price,
            };
        }
        else {
            return {
                name: item,
            }
        }
    });
}


// functions for pre-processing old format to group specials

function combineSimilarSpecials(inputData) {
    const combinedData = { places: [] };

    inputData.places.forEach(place => {
        const combinedPlace = { ...place, day: [] };

        // Group events by unique specials
        const groupedEvents = groupEventsBySpecials(place.day);

        // Create combined events
        groupedEvents.forEach(group => {
            const combinedEvent = {
                drink_specials: group.drink_specials,
                food_specials: group.food_specials,
                timeOfDay: group.timeOfDay,
                days: group.days,
            };
            combinedPlace.day.push(combinedEvent);
        });

        combinedData.places.push(combinedPlace);
    });

    return combinedData;
}

function groupEventsBySpecials(events) {
    const groupedEvents = [];

    events.forEach(event => {
        const existingGroup = groupedEvents.find((group) => {
            return areSpecialsEqual(event, group) &&
                areTimeOfDayEqual(group.timeOfDay, event.timeOfDay);
        }
        );

        if (existingGroup) {
            // Add day to existing group
            existingGroup.days.push(event.name);
        } else {
            // Create a new group
            groupedEvents.push({
                drink_specials: event.drink_specials,
                food_specials: event.food_specials,
                timeOfDay: { startTime: event.timeOfDay.startTime, endTime: event.timeOfDay.endTime },
                days: [event.name],
            });
        }
    });

    return groupedEvents;
}

function areSpecialsEqual(day1, day2) {
    return day1.drink_specials === day2.drink_specials &&
        day1.food_specials === day2.food_specials;
}

function areTimeOfDayEqual(timeOfDay1, timeOfDay2) {
    return (
        timeOfDay1.startTime === timeOfDay2.startTime &&
        timeOfDay1.endTime === timeOfDay2.endTime
    );
}



// code execution

const groupedSpecialsData = combineSimilarSpecials(inputPlacesData);

// Convert each place in the original data to the new format
const convertedPlaces = groupedSpecialsData.places.map(place => ({
    _id: place._id,
    alt_id: place.alt_id,
    name: place.name,
    location: {
        streetAddress: place.address,
        city: "Chicago",
        state: 'IL',
        postalCode: null,
        geo: place.geo
    },
    events: place.day.map(day => ({
        keywords: "happyHour",
        eventSchedule: [{
            byDay: day.days.map(day => convertDayName(day)),
            startTime: `${day.timeOfDay.startTime}`,
            endTime: `${day.timeOfDay.endTime}`
        }],
        menu: [
            ...convertSpecials(day.drink_specials, "Drink"),
            ...convertSpecials(day.food_specials, "Food")
        ]
    })),
    neighborhood: place.neighborhood,
    enabled: place.enabled,
    featured: place.featured,
    lastUpdated: new Date(place.lastUpdated),
}));

// Resulting converted data
const convertedData = { places: convertedPlaces };
fs.writeFileSync('lib/sample-data_newFormat.json', JSON.stringify(convertedData, null, 2));
