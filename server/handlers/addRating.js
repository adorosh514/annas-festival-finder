const { MongoClient } = require('mongodb');
require('dotenv').config();

// MongoDB connection URI
const { MONGO_URI } = process.env;
console.log(MONGO_URI);
console.log(process.env);
const client = new MongoClient(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const addRating = async (req, res) => {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    // Accessing the database and collection
    const database = client.db('FestivalFinder');
    // const collection = database.collection('festivals');
    const collection1 = database
      .collection('festivals')
      .findOne({ name: req.body.name });
    const newRatingArray = [...collection1];
    newRatingArray.push({
      user: req.body.user,
      comment: req.body.comment,
      rating: req.body.rating,
    });

    database
      .collection('festivals')
      .updateOne(
        { name: req.body.name },
        { $set: { ratings: newRatingArray } }
      );

    // Logging the result of the insertion
    console.log(`${result.insertedCount} documents inserted`);
  } catch (err) {
    console.error('Error: ', err);
  } finally {
    // Close the connection
    await client.close();
    console.log('MongoDB connection closed');
  }
};

// Execute the batchImport function
module.exports = { addRating };
