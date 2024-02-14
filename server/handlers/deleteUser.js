const { MongoClient } = require('mongodb');
require('dotenv').config();

const { MONGO_URI } = process.env;
console.log(MONGO_URI);
console.log(process.env);
const client = new MongoClient(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const deleteUser = async (req, res) => {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    const database = client.db('FestivalFinder');

    const deleteUser = await database
      .collection('user')
      .deleteOne({ _id: req.params.user_id });

    res.status(201).json({ status: 201, data: 'User Deleted' });

    console.log(`${result.insertedCount} documents inserted`);
  } catch (err) {
    res.status(404).json({ status: 404, message: err.message });
  } finally {
    await client.close();

    console.log('MongoDB connection closed');
  }
};

module.exports = { deleteUser };
