const fs = require('fs');
const { MongoClient, ObjectId } = require('mongodb');

async function importData() {

    // TODO load dotenv variables instead of hardcoding uri
    const uri = 'mongodb://0.0.0.0:27017/littletabs';
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db('hellotabs');
        const collection = database.collection('places');

        const rawData = fs.readFileSync('lib/sample-data_newFormat.json');
        const data = JSON.parse(rawData);

        const modifiedData = data.places.map(doc => ({
            ...doc,
            _id: new ObjectId(doc._id)
        }));

        const result = await collection.insertMany(modifiedData);

        console.log(`Inserted ${result.insertedCount} documents into the collection`);
    } catch (error) {
        console.error('Error during import:', error);
    } finally {
        // Close the connection
        await client.close();
    }
}

// Run the import function
importData();
