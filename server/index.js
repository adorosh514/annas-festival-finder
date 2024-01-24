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
app.get('/festivals', getFestivals);
app.get('/festivals/:festival_id', getFestival);
app.get('/users/:user_id', getUser);
app.post('/users', addUser);
app.patch('/users/:user_id', updateUser);
app.delete('/users/:user_id', deleteUser);
app.post('/rating', addRating);
app.delete('/rating/:rating_id', deleteRating);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
