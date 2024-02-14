const { MongoClient } = require('mongodb');
require('dotenv').config();

const { MONGO_URI } = process.env;
console.log(MONGO_URI);
console.log(process.env);
const client = new MongoClient(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const getUser = async (req, res) => {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    const database = client.db('FestivalFinder');
    console.log(req.params);
    const user = await database
      .collection('users')
      .findOne({ _id: parseInt(req.params.user_id) });

    return res.status(201).json({ status: 201, data: user });

    console.log(`${user} documents inserted`);
  } catch (err) {
    return res.status(404).json({ status: 404, message: err.message });
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
};

module.exports = { getUser };
