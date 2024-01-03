const { MongoClient } = require('mongodb');
require('dotenv').config();
const { festivals, users } = require('./data');

// MongoDB connection URI
const { MONGO_URI } = process.env;
console.log(MONGO_URI);
console.log(process.env);
async function batchImport() {
  const client = new MongoClient(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    // Accessing the database and collection
    const database = client.db('FestivalFinder');
    const collection = database.collection('festivals');
    // const collection1 = database.collection('users');

    // Perform batch insert
    const result = await collection.insertMany(festivals);

    // Logging the result of the insertion
    console.log(`${result.insertedCount} documents inserted`);
  } catch (err) {
    console.error('Error: ', err);
  } finally {
    // Close the connection
    await client.close();
    console.log('MongoDB connection closed');
  }
}

// Execute the batchImport function
batchImport();
