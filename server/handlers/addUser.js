const { MongoClient } = require('mongodb');
require('dotenv').config();

const { MONGO_URI } = process.env;
console.log(MONGO_URI);
console.log(process.env);
const client = new MongoClient(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const addUser = async (req, res) => {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    console.log(req.body);

    const database = client.db('FestivalFinder');

    const usersArray = await database.collection('users').find().toArray();
    if (usersArray.every((e) => e._id != req.body.email));
    {
      const collection1 = await database.collection('users').insertOne({
        _id: req.body.email,
        name: req.body.name,
        email: req.body.email,
      });
    }

    return res.status(201).json({ status: 201, data: 'User Updated' });

    console.log(`${result.insertedCount} documents inserted`);
  } catch (err) {
    console.log(err);
    return res.status(404).json({ status: 404, message: err.message });
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
};

module.exports = { addUser };
