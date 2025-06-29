const request = require('supertest');
const createApp = require('../src/app');
const { generateManyBook } = require('../src/fakes/book.fake');

// const mockGetAll = jest.fn();

// jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
//   getAll: mockGetAll,
// })));

describe('Test for books', () => {
  let app;
  let server = null;
  let mockGetAll;

  beforeAll(() => {
    mockGetAll = jest.fn();

    jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
      getAll: mockGetAll,
    })));
    app = createApp();
    server = app.listen(3000);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('Test for GET /api/v1/books', () => {
    test('should return a books list', async () => {
      // Arrange
      const mockBooks = generateManyBook(20);
      mockGetAll.mockResolvedValue(mockBooks);
      // Act
      const response = await request(app).get('/api/v1/books');
      console.log(response.body);
      expect(response.body.length).toEqual(mockBooks.length);
    });
  });
});
