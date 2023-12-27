import getUsers from './getUsers';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({})
  })
);

process.env = Object.assign(process.env, {
  APP_HTTP_PROTOCOL: 'http',
  APP_BASE_URL: 'locahost:3000'
});

describe('getUsers', () => {
  test('should be fetch called', async () => {
    const params = {
      filter: {
        name: '',
        birth: ''
      }
    };
    await getUsers(params);
    expect(fetch).toHaveBeenCalledWith(`http://locahost:3000/api/users`, {
      cache: 'force-cache',
      body: JSON.stringify(params),
      method: 'POST'
    });
  });
});
