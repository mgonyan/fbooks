import request from 'supertest';
import app from '../src/app';

describe('GET /api', () => {
  it('returns 200 OK', async () => {
    return await request(app)
      .get('/')
      .expect(200);
  });
});
