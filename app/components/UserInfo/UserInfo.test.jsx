import { render, screen } from '@testing-library/react';
import UserInfo from './UserInfo';
import { users } from '../../constants';
import getUser from '../../requests/getUser';
import { notFound } from 'next/navigation';

jest.mock('next/navigation', () => ({
  notFound: jest.fn().mockImplementation(() => null)
}));

jest.mock('../../requests/getUser', () =>
  jest.fn().mockImplementation(() => users[0])
);

describe('UserInfo', () => {
  test('should be UserInfo rendered', async () => {
    render(await UserInfo({ id: '1' }));
    const container = screen.getByTestId('UserInfo_container');
    expect(container).toBeInTheDocument();
  });

  test('should not be UserInfo rendered', async () => {
    getUser.mockImplementation(() => null);
    render(await UserInfo({}));
    expect(notFound).toBeCalled();
  });
});
