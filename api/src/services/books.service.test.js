const BooksService = require('./books.service');

const fakeBooks = [
  { _id: '1', name: 'Book One', author: 'Author A' },
  { _id: '2', name: 'Book Two', author: 'Author B' },
];
const MongoLibStub = {
  getAll: () => fakeBooks,
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for booksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('Test for getBooks', () => {
    test('should return an array of books', async () => {
      const books = await service.getBooks();
      // console.log('books', books);
      expect(Array.isArray(books)).toBe(true);
    });
  });
});
