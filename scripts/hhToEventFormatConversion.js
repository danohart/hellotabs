
// can't get import to work

const inputPlacesData = {
    "places": [
        {
            "_id": "619057c476b43483d5156219",
            "name": "Roscoe's Tavern",
            "address": "3356 N Halsted St",
            "geo": {
                "latitude": 41.94303979225621,
                "longitude": -87.64944026798806
            },
            "alt_id": "173",
            "day": [
                {
                    "name": "Sunday",
                    "drink_specials": "$1 Miller Lite Drafts, $5 Skyy Vodka Bombs, $5 Jameson Whiskey Shots, $13 Absolut Long Island Pitchers",
                    "food_specials": "None",
                    "timeOfDay": {
                        "startTime": 1600,
                        "endTime": 1800
                    }
                },
                {
                    "name": "Saturday",
                    "drink_specials": "$1 Miller Lite Drafts, $5 Skyy Vodka Bombs, $5 Jameson Whiskey Shots, $13 Absolut Long Island Pitchers",
                    "food_specials": "None",
                    "timeOfDay": {
                        "startTime": 1600,
                        "endTime": 1800
                    }
                },
            ],
            "enabled": true,
            "featured": true,
            "lastUpdated": "2022-12-30T15:14:28.963Z",
            "neighborhood": "Lakeview"
        }
    ]
};

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

// Convert each place in the original data to the new format
const convertedPlaces = inputPlacesData.places.map(place => ({
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
            byDay: convertDayName(day.name),
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

console.log(JSON.stringify(convertedData, null, 2));
