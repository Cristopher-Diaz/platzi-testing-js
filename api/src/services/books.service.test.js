const BooksService = require('./books.service');

const fakeBooks = [
  { _id: '1', name: 'Book One', author: 'Author A' },
  { _id: '2', name: 'Book Two', author: 'Author B' },
];

const mockGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
})));

describe('Test for booksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('Test for getBooks', () => {
    test('should return an array of books', async () => {
      // Arrange
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // Assert
      expect(Array.isArray(books)).toBe(true);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return a list book', async () => {
      mockGetAll.mockResolvedValue([{
        _id: 1,
        name: 'Harry putter 2',
      }]);
      const books = await service.getBooks({});
      console.log(books);
      expect(books[0].name).toEqual('Harry putter 2');
    });
  });
});
