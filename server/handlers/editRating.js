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

const editRating = async (req, res) => {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    // Accessing the database and collection
    const database = client.db('FestivalFinder');
    console.log(req.body);
    const updateRating = await database.collection('festivals').updateOne(
      {
        _id: parseInt(req.params.festival_id),
        'ratings.user': req.body.user,
      },
      { $set: { 'ratings.$.rating': req.body.rating } }
    );

    console.log({ updateRating });

    res
      .status(201)
      .json({ status: 201, data: updateRating, message: 'Rating Updated' });

    // Logging the result of the insertion
  } catch (err) {
    res.status(404).json({ status: 404, message: err.message });
  } finally {
    // Close the connection
    await client.close();
    console.log('MongoDB connection closed');
  }
};

// Execute the batchImport function
module.exports = { editRating };
