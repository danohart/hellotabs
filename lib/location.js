export function calculateDistance(point1, point2) {

    if(!point1 || !point2)
        return null;

    const earthRadius = 3958.8; // miles

    const radLat1 = (point1.latitude * Math.PI) / 180;
    const radLon1 = (point1.longitude * Math.PI) / 180;
    const radLat2 = (point2.latitude * Math.PI) / 180;
    const radLon2 = (point2.longitude * Math.PI) / 180;

    const deltaLat = radLat2 - radLat1;
    const deltaLon = radLon2 - radLon1;

    // Haversine formula
    const a =
        Math.sin(deltaLat / 2) ** 2 +
        Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(deltaLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distanceMiles = earthRadius * c;
    return distanceMiles;
}

export async function getUserLocation() {
    return new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    console.log("Getting geolocation browser data...");
                    console.log({ latitude, longitude });
                    resolve({ latitude, longitude });
                },
                (error) => {
                    console.error('Error getting location:', error.message);
                    resolve(null);
                }
            );
        } else {
            console.error('Geolocation is not supported.');
            resolve(null);
        }
    });
}


export function sortByDistance(places) {
    return places.sort((place1, place2) => {
        if (!place1.distance && !place2.distance)
            return 0; // neither spot has distance data
        else if (!place2.distance)
            return -1; // only first location has distance data
        else if (!place1.distance)
            return 1; // only second location has distance data

        return place1.distance - place2.distance;
    });
}