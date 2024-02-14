const { MongoClient } = require('mongodb');
require('dotenv').config();
const { festivals, users } = require('./data');

const { MONGO_URI } = process.env;
console.log(MONGO_URI);
console.log(process.env);
async function batchImport() {
  const client = new MongoClient(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    const database = client.db('FestivalFinder');
    const collection = database.collection('festivals');

    const result = await collection.insertMany(festivals);

    console.log(`${result.insertedCount} documents inserted`);
  } catch (err) {
    console.error('Error: ', err);
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
}

batchImport();
