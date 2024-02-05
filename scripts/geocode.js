const { MongoClient } = require('mongodb');
var request = require('request');

const mongoURI = 'mongodb://localhost:27017/hellotabs';
const dbName = 'hellotabs';
const collectionName = 'places';


async function geocode(address) {
    return new Promise((resolve, reject) => {
        var options = {
            'method': 'GET',
            'url': 'https://geocoding.geo.census.gov/geocoder/locations/onelineaddress',
            'qs': {
                'address': address,
                'benchmark': 4,
                'format': 'json'
            }
        };

        request(options, function (error, response) {
            if (error) {
                reject(error);
                return;
            }

            // Parse the response body as JSON
            var responseBody = JSON.parse(response.body);

            // Check if there are address matches
            if (responseBody.result.addressMatches.length > 0) {
                var longitude = responseBody.result.addressMatches[0].coordinates.x;
                var latitude = responseBody.result.addressMatches[0].coordinates.y;
                resolve({ latitude, longitude });
            } else {
                resolve(null);
            }
        });
    });
}


// Function to find places without "location.geo" data, geocode, and update the database
async function updatePlacesWithoutGeoData() {

    const client = new MongoClient(mongoURI);

    try {
        await client.connect();
        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        const placesWithoutGeo = await collection.find({ 'location.geo': { $exists: false } }).toArray();

        await Promise.all(placesWithoutGeo.map(async (place) => {
            if (place.location && place.location.streetAddress) {
                const fullAddress = `${place.location.streetAddress} ${place.location.city}, ${place.location.state}`;
                const geocodeResult = await geocode(fullAddress);

                // If geocoding is successful, update the record in the database
                if (geocodeResult) {
                    const filter = { _id: place._id };
                    const update = { $set: { 'location.geo': geocodeResult } };

                    await collection.updateOne(filter, update);
                    console.log(`Updated geo location for ${place.name}`);
                }
            }
        }));

    } catch (error) {
        console.error('Error updating places:', error);

    } finally {
        await client.close();
    }
}

// Call the function to update places without "location.geo" data
updatePlacesWithoutGeoData();
