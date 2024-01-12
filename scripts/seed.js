const { connectToDatabase } = require('../lib/mongodb.js'); 
const sampleData = require('./sample_data.json');

async function seedDatabase() {
    try {
        const { client, db } = await connectToDatabase(); 

        await db.collection('places').insertMany(sampleData.places);

        console.log('Data seeded successfully.');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        await client.close();
    }
}

seedDatabase();
