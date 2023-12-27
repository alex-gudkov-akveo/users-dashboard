import getUser from './getUser';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({})
  })
);

process.env = Object.assign(process.env, {
  APP_HTTP_PROTOCOL: 'http',
  APP_BASE_URL: 'locahost:3000'
});

describe('getUser', () => {
  test('should be fetch called', async () => {
    const id = 1;
    await getUser({ id });
    expect(fetch).toHaveBeenCalledWith(`http://locahost:3000/api/users/${id}`, {
      cache: 'force-cache',
      method: 'GET'
    });
  });
});
