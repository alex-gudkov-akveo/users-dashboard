import { createRequest } from 'node-mocks-http';
import { POST } from './route';
import { users } from '../../../app/constants';
import { NextRequest } from 'next/server';

describe('/api/users', () => {
  let req: NextRequest;

  beforeEach(() => {
    req = createRequest({
      method: 'POST'
    });
  });

  test('returns a list of users', async () => {
    const body = { filter: { name: '', birth: '' } };
    req.json = jest.fn().mockResolvedValue(body);

    const response = await POST(req);
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data).toEqual(users);
  });

  test('returns filtered users by name', async () => {
    const body = { filter: { name: 'Rick', birth: '' } };
    req.json = jest.fn().mockResolvedValue(body);

    const response = await POST(req);
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data).toEqual([users[0]]);
  });

  test('returns filtered users by birth', async () => {
    const body = { filter: { name: '', birth: '01.12.2000' } };
    req.json = jest.fn().mockResolvedValue(body);

    const response = await POST(req);
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data).toEqual([users[2]]);
  });

  test('returns empty list', async () => {
    const body = { filter: { name: '123', birth: '01.12.2233' } };
    req.json = jest.fn().mockResolvedValue(body);

    const response = await POST(req);
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data).toEqual([]);
  });

  test('should be an error', async () => {
    const body = {};
    req.json = jest.fn().mockResolvedValue(body);

    const response = await POST(req);
    expect(response.status).toBe(500);
  });
});
