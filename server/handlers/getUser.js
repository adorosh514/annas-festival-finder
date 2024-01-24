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

const getUser = async (req, res) => {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    // Accessing the database and collection
    const database = client.db('FestivalFinder');
    console.log(req.params);
    const user = await database
      .collection('users')
      .findOne({ _id: parseInt(req.params.user_id) });

    return res.status(201).json({ status: 201, data: user });

    // Logging the result of the insertion
    console.log(`${user} documents inserted`);
  } catch (err) {
    return res.status(404).json({ status: 404, message: err.message });
  } finally {
    // Close the connection
    await client.close();
    console.log('MongoDB connection closed');
  }
};

// Execute the batchImport function
module.exports = { getUser };
