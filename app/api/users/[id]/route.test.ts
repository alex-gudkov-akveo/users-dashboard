import { createRequest } from 'node-mocks-http';
import { GET } from './route';
import { users } from '../../../../app/constants';
import { NextRequest } from 'next/server';

describe('/api/users/[id]', () => {
  let req: NextRequest;

  beforeEach(() => {
    req = createRequest({
      method: 'GET'
    });
  });

  test('returns user by id', async () => {
    const params = { params: { id: '1' } };
    const response = await GET(req, params);
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data).toEqual(users[0]);
  });

  test('returns 404 user not found', async () => {
    const params = { params: { id: '-1' } };
    const response = await GET(req, params);
    expect(response.status).toBe(404);
  });

  test('returns 404 id not passed ', async () => {
    const params = { params: {} };
    const response = await GET(req, params);
    expect(response.status).toBe(404);
  });
});
