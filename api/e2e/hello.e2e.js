const request = require('supertest');
const createApp = require('../src/app');

describe('Test for hello endpoint', () => {
  let app;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3000);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('Test for GET /', () => {
    test('should return a 200 status code', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
    });

    // test('should return a JSON response', async () => {
    //   const response = await request(app).get('/');
    //   expect(response.headers['content-type']).toMatch(/json/);
    // });

    test('should return a message in the response body', async () => {
      const response = await request(app).get('/');
      expect(response.text).toEqual('Hello World!');
    });
  });
});
