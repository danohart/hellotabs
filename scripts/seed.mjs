import { connectToDatabase } from '../lib/mongodb.js'; // Import your database connection function
import sampleData from './sample_data.json';

async function seedDatabase() {
    try {
        const { client, db } = await connectToDatabase(); // Connect to the database

        // Insert places data into the "places" collection
        await db.collection('places').insertMany(sampleData.places);

        console.log('Data seeded successfully.');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        await client.close(); // Close the database connection
    }
}

seedDatabase();
