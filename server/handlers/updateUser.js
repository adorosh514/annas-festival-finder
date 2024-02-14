const { MongoClient } = require('mongodb');
require('dotenv').config();

const { MONGO_URI } = process.env;
console.log(MONGO_URI);
console.log(process.env);
const client = new MongoClient(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const updateUser = async (req, res) => {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    const database = client.db('FestivalFinder');

    const updateUser = await database
      .collection('users')
      .updateOne({ _id: req.params.user_id }, { $set: req.body });

    res.status(201).json({ status: 201, data: updateUser });

    console.log(`${result.insertedCount} documents inserted`);
  } catch (err) {
    res.status(404).json({ status: 404, message: err.message });
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
};

module.exports = { updateUser };
