const MongoClient = require("mongodb").MongoClient;

async function aggregateAndImportEvents(
  uri,
  dbName,
  sourceCollectionName,
  targetCollectionName
) {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db(dbName);
    const sourceCollection = database.collection(sourceCollectionName);
    const targetCollection = database.collection(targetCollectionName);

    const cursor = await sourceCollection.find({
      events: { $exists: true, $ne: [] },
    });

    const eventsMap = new Map(); // Map to aggregate events for each name

    await cursor.forEach(async (doc) => {
      if (doc.events.length > 0) {
        if (!eventsMap.has(doc.name)) {
          eventsMap.set(doc.name, {
            placeId: doc._id, // Store the place id
            events: [],
          });
        }
        eventsMap.get(doc.name).events.push(...doc.events);
        delete doc.events;

        console.log(`Events from ${doc.name} aggregated.`);
      }
    });

    // Insert aggregated events into the target collection
    for (const [{ placeId, events }] of eventsMap) {
      await targetCollection.insertOne({
        placeId: placeId,
        events: events,
      });
    }

    if (eventsMap.size === 0) {
      console.log("No events found to import.");
    } else {
      await Promise.all(eventsMap);
      await sourceCollection.updateMany(
        { events: { $exists: true } },
        { $unset: { events: "" } }
      );
      console.log(
        `Events along with names and place IDs imported to ${targetCollectionName} collection.`
      );
    }

    await client.close();
  } catch (error) {
    console.error("Error:", error);
  }
}

// Usage example
const uri = "mongodb://0.0.0.0:27017/";
const dbName = "littletabs";
const sourceCollectionName = "places";
const targetCollectionName = "events";

aggregateAndImportEvents(
  uri,
  dbName,
  sourceCollectionName,
  targetCollectionName
);
