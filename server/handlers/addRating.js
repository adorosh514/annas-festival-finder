const { MongoClient } = require('mongodb');
require('dotenv').config();

const { MONGO_URI } = process.env;
console.log(MONGO_URI);
console.log(process.env);
const client = new MongoClient(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const addRating = async (req, res) => {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    const database = client.db('FestivalFinder');

    const collection1 = await database
      .collection('festivals')
      .findOne({ name: req.body.name });
    console.log(collection1);
    const newRatingArray = [...collection1.ratings];
    newRatingArray.push({
      user: req.body.user,

      rating: req.body.rating,
    });

    await database
      .collection('festivals')
      .updateOne(
        { name: req.body.name },
        { $set: { ratings: newRatingArray } }
      );

    res.status(201).json({ status: 201, data: 'Rating Updated' });
  } catch (err) {
    res.status(404).json({ status: 404, message: err.message });
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
};

module.exports = { addRating };
