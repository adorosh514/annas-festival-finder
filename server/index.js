const express = require('express');
const app = express();
const port = 4000;
const { getFestival } = require('./handlers/getFestival');
const { getFestivals } = require('./handlers/getFestivals');
const { getUser } = require('./handlers/getUser');
const { addUser } = require('./handlers/addUser');
const { updateUser } = require('./handlers/updateUser');
const { deleteUser } = require('./handlers/deleteUser');
const { addRating } = require('./handlers/addRating');
const { updateRating } = require('./handlers/updateRating');
const { deleteRating } = require('./handlers/deleteRating');

app.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Methods',
    'OPTIONS, HEAD, GET, PUT, POST, DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/bacon', (req, res) => {
  res.send({ data: 'Hello World!' });
});

// REST endpoints?
app.get('/getFestivals', getFestivals);
app.get('/getFestival/:festival', getFestival);
app.get('/getUser', getUser);
app.post('/addUser', addUser);
app.patch('/updateUser', updateUser);
app.delete('/deleteUser', deleteUser);
app.post('/addRating', addRating);
app.delete('/deleteRating/:rating', deleteRating);
app.patch('/updateRating', updateRating);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
