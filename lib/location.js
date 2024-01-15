export function calculateDistance(point1, point2) {
    const earthRadius = 6371; // km

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

    const distanceKm = earthRadius * c;
    const distanceMiles = distanceKm * 0.621371;
    return distanceMiles;
}

export function getUserLocation(updateFunction) {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                console.log("getting geolocation browser data...")
                console.log({ latitude, longitude });
                updateFunction({ latitude, longitude });
            },
            (error) => {
                console.error('Error getting location:', error.message);
            }
        );
    } else {
        console.error('Geolocation is not supported.');
    }
}


export function sortByDistance(userLocation, places) {
    return places.sort((place1, place2) => {
        if (!place1.geo && !place2.geo)
            return 0; // neither spot has geo data
        else if (!userLocation)
            return 0; // no user location
        else if (place1.geo)
            return -1; // only first location has geo data
        else if (place2.geo)
            return 1; // only second location has geo data

        const distance1 = calculateDistance(userLocation, place1.geo);
        const distance2 = calculateDistance(userLocation, place2.geo);
        return distance1 - distance2;
    });
}