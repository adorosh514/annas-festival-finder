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

const addUser = async (req, res) => {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB Atlas');

    // Accessing the database and collection
    const database = client.db('FestivalFinder');
    // const collection = database.collection('festivals');

    const usersArray = database.collection('users').find().toArray();
    if (usersArray.every((e) => e._id != req.body.email));
    {
      const collection1 = database.collection('users').insertOne({
        _id: req.body.email,
        name: req.body.name,
        email: req.body.email,
      });
    }

    res.status(201).json({ status: 201, data: 'User Updated' });

    // Logging the result of the insertion
    console.log(`${result.insertedCount} documents inserted`);
  } catch (err) {
    res.status(404).json({ status: 404, message: err.message });
  } finally {
    // Close the connection
    await client.close();
    console.log('MongoDB connection closed');
  }
};

// Execute the batchImport function
module.exports = { addUser };
