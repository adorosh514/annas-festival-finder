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

const deleteRating = async (req, res) => {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    // Accessing the database and collection
    const database = client.db('FestivalFinder');

    console.log(req.params.festival_id);

    const removeRating = await database
      .collection('festivals')
      .findOne({ _id: parseInt(req.params.festival_id) });

    console.log({ removeRating });

    let ratingArray = [...removeRating.ratings];
    ratingArray = ratingArray.filter((r) => r.user != req.body.user);

    const updateRating = await database
      .collection('festivals')
      .updateOne(
        { _id: parseInt(req.params.festival_id) },
        { $set: { ratings: ratingArray } }
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
module.exports = { deleteRating };
