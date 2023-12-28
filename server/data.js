const festivals = [
  {
    _id: 1,
    name: 'Coachella',
    location: 'Indio, California',
    ratings: [{ user: 1, rating: 3 }],
    genre: 'Mixed',
  },
  {
    _id: 2,
    name: 'Rolling Loud',
    location: 'Queens, New York',
    ratings: [
      { user: 2, rating: 3 },
      { user: 3, rating: 3 },
    ],
    genre: 'Rap/Hip-Hop',
  },
  {
    _id: 3,
    name: 'Shambhala',
    location: 'Salmo, British Columbia',
    ratings: [
      { user: 0, rating: 0 },
      { user: 0, rating: 0 },
    ],
    genre: 'EDM',
  },
  {
    _id: 4,
    name: 'Electric Daisy Carnival (EDC)',
    location: 'Las Vegas, Nevada',
    ratings: [
      { user: 0, rating: 0 },
      { user: 0, rating: 0 },
    ],
    genre: 'EDM',
  },
  {
    _id: 5,
    name: 'Louder Than Life',
    location: 'Louisville, Kentucky',
    ratings: [
      { user: 0, rating: 0 },
      { user: 0, rating: 0 },
    ],
    genre: 'Metal',
  },
  {
    _id: 6,
    name: 'Rock Fest',
    location: 'Cadott, Wisconsin',
    ratings: [
      { user: 0, rating: 0 },
      { user: 0, rating: 0 },
    ],
    genre: 'Rock',
  },
  {
    _id: 7,
    name: 'Boots and Hearts',
    location: 'Burls Creek, Ontario',
    ratings: [
      { user: 0, rating: 0 },
      { user: 0, rating: 0 },
    ],
    genre: 'Country',
  },
  {
    _id: 8,
    name: 'Bonnaroo',
    location: 'Manchester, Tennessee',
    ratings: [
      { user: 0, rating: 0 },
      { user: 0, rating: 0 },
    ],
    genre: 'Mixed',
  },
  {
    _id: 9,
    name: 'Ottawa Jazz Festival',
    location: 'Otawa, Ontario',
    ratings: [
      { user: 0, rating: 0 },
      { user: 0, rating: 0 },
    ],
    genre: 'Jazz',
  },
  {
    _id: 10,
    name: 'LDB Fest',
    location: 'Louisville, Kentucky',
    ratings: [
      { user: 0, rating: 0 },
      { user: 0, rating: 0 },
    ],
    genre: 'Punk/Hardcore',
  },
];

const users = [
  {
    _id: 1,
    name: 'Anna',
    email: 'anna@gmail.com',
  },

  {
    _id: 2,
    name: 'Sakhia',
    email: 'kwemos@gmail.com',
  },

  {
    _id: 3,
    name: 'Bob',
    email: 'bob@gmail.com',
  },
];

module.exports = { festivals, users };
