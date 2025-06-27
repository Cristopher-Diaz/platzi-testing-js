const BooksService = require('./books.service');

describe('Test for booksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
  });

  describe('Test for getBooks', () => {
    test('should return an array of books', async () => {
      const books = await service.getBooks();
      expect(Array.isArray(books)).toBe(true);
    });
  });
});
