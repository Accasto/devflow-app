const request = require('supertest');
const app = require('./app');

test('GET / retorna 200', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
});