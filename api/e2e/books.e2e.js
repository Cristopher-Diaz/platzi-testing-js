const request = require('supertest');
const { MongoClient } = require('mongodb');

const createApp = require('../src/app');
const { config } = require('../src/config/index');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books', () => {
  let app;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3000);
    // console.log(MONGO_URI);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase();
  });

  describe('Test for GET /api/v1/books', () => {
    test('should return a books list', async () => {
      // Arrange
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book 1',
          author: 'yo',
        },
        {
          name: 'Book 2',
          author: 'yo',
        },
      ]);
      // Act
      const response = await request(app).get('/api/v1/books');
      // console.log(response.body);
      expect(response.statusCode).toEqual(200);
      expect(response.body.length).toEqual(seedData.insertedCount);
    });
  });
});
